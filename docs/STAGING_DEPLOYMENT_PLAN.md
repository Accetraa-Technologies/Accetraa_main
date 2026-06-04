# Staging Deployment Plan — Accetraa Technologies
**Version:** 1.0  
**Date:** 2026-06-04  
**Status:** Awaiting approval before code changes begin  
**Scope:** Internal employee testing only — not a public launch

---

## 1. Overview

This plan describes all changes required to deploy the Accetraa MVP to a free staging environment for internal review. No user data will be collected, no emails will be sent, and no payment is required for the infrastructure used.

| Layer     | Service         | Plan   | Cost  |
|-----------|-----------------|--------|-------|
| Frontend  | Vercel          | Free   | $0    |
| Backend   | Render Web Service | Free | $0    |
| Database  | Render PostgreSQL | Free (1 GB) | $0 |
| Media files | Render disk (ephemeral) | Free | $0 |

> **Why PostgreSQL instead of SQLite?**  
> Render's free tier uses an **ephemeral filesystem** — SQLite data is permanently destroyed on every deploy and every restart (which happens after 15 minutes of inactivity). For a CMS staging environment where staff need to enter portfolio/product/service content and have it persist, SQLite is not viable.  
> Render's free PostgreSQL (1 GB) persists data across restarts and deploys.  
> All existing Django migrations work on PostgreSQL without any changes.  
> If SQLite is strictly required, see Section 9 (limitations).

---

## 2. Required Backend Changes

### 2.1 New settings file — `backend/accetraa/settings/staging.py`

Create a new settings module that inherits from `base.py` but overrides every AWS, MySQL, and email dependency.

```python
# backend/accetraa/settings/staging.py
"""
Staging settings — Render free tier.
Used by: DJANGO_SETTINGS_MODULE=accetraa.settings.staging
"""
from .base import *  # noqa
from decouple import config

# ── Security ──────────────────────────────────────────────────────────────────
DEBUG = False
ALLOWED_HOSTS = config(
    'ALLOWED_HOSTS',
    default='localhost',
    cast=lambda v: [h.strip() for h in v.split(',')],
)

# Staging: no HTTPS enforcement (Render handles TLS termination)
SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# ── Database — Render PostgreSQL free tier ────────────────────────────────────
import dj_database_url
DATABASES = {
    'default': dj_database_url.config(
        env='DATABASE_URL',
        conn_max_age=600,
        ssl_require=True,
    )
}

# ── Email — DISCARD silently, no outbound email on staging ───────────────────
# Signals in contact/consultation/demo_requests still fire but all mail is
# silently dropped. API endpoints remain functional; submissions are stored.
EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

# ── Static files — WhiteNoise serves from /staticfiles/ ─────────────────────
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# ── Media files — local disk (ephemeral on Render free) ─────────────────────
# Images uploaded via admin will be lost on each redeploy.
# For persistent media: upgrade to Render paid disk or switch to S3.
DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
MEDIA_URL  = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# ── CORS — allow Vercel frontend ─────────────────────────────────────────────
CORS_ALLOWED_ORIGINS = config(
    'CORS_ALLOWED_ORIGINS',
    default='http://localhost:5173',
    cast=lambda v: [h.strip() for h in v.split(',')],
)
CORS_ALLOW_CREDENTIALS = False

# ── Logging — structured console output ──────────────────────────────────────
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {'console': {'class': 'logging.StreamHandler'}},
    'root': {'handlers': ['console'], 'level': 'INFO'},
}
```

### 2.2 New requirements file — `backend/requirements-staging.txt`

Remove all AWS and MySQL dependencies. Add deployment-specific packages.

```txt
# ── Core ──────────────────────────────────────────────────────────────────────
Django==5.0.6
djangorestframework==3.15.2

# ── CORS ──────────────────────────────────────────────────────────────────────
django-cors-headers==4.3.1

# ── Database — PostgreSQL (Render free tier) ──────────────────────────────────
psycopg2-binary==2.9.9
dj-database-url==2.1.0

# ── Environment ───────────────────────────────────────────────────────────────
python-decouple==3.8

# ── Image handling ────────────────────────────────────────────────────────────
Pillow==11.3.0

# ── Static files ──────────────────────────────────────────────────────────────
whitenoise==6.7.0

# ── WSGI server ───────────────────────────────────────────────────────────────
gunicorn==22.0.0

# ── REMOVED for staging (re-add for production) ───────────────────────────────
# PyMySQL==1.2.0          ← MySQL driver (use psycopg2 for staging PostgreSQL)
# django-ses==3.5.2       ← AWS SES email backend
# django-storages==1.14.3 ← S3/CloudFront media storage
# boto3==1.34.131         ← AWS SDK
```

### 2.3 Procfile — `backend/Procfile`

Render uses this to determine how to start the application.

```
web: gunicorn accetraa.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --timeout 120
release: python manage.py migrate --run-syncdb
```

> The `release` command runs migrations automatically on every Render deploy.

### 2.4 `build.sh` — Render build script — `backend/build.sh`

```bash
#!/usr/bin/env bash
set -o errexit

pip install -r requirements-staging.txt
python manage.py collectstatic --no-input
python manage.py migrate
```

> Make executable: `chmod +x build.sh`

### 2.5 Disable submission API endpoints in `urls.py` (staging only)

The three submission endpoints (`/api/v1/contact/`, `/api/v1/consultation/`, `/api/v1/demo-requests/`) should be **commented out** in staging. The `EMAIL_BACKEND = dummy` already silences emails, but since the frontend forms are also being replaced with static messages, the endpoints themselves can be gated.

**Approach:** Use a `STAGING_MODE` settings flag.  
In `settings/staging.py`, add:
```python
STAGING_MODE = True
```

In `accetraa/urls.py`, wrap the three submission modules:
```python
import os
from django.conf import settings

# Module 4: Contact (disabled on staging — no submissions collected)
if not getattr(settings, 'STAGING_MODE', False):
    path('api/v1/', include('apps.contact.urls')),

# Module 5: Consultation (disabled on staging)
if not getattr(settings, 'STAGING_MODE', False):
    path('api/v1/', include('apps.consultation.urls')),

# Module 6: Demo Requests (disabled on staging)
if not getattr(settings, 'STAGING_MODE', False):
    path('api/v1/', include('apps.demo_requests.urls')),
```

The apps themselves remain installed — no model or migration changes required.

### 2.6 Signal handlers — no code changes required

Signals in `contact/signals.py`, `consultation/signals.py`, and `demo_requests/signals.py` call Django's mail functions. With `EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'`, all mail is silently discarded. No signal code needs to be modified.

---

## 3. Required Frontend Changes

### 3.1 Staging mode environment variable

Add `VITE_STAGING_MODE=true` to the Vercel environment variables.

In `frontend/src/config/env.js`, add:
```js
export const config = {
  apiBaseUrl:   import.meta.env.VITE_API_BASE_URL  || '',
  appName:      import.meta.env.VITE_APP_NAME      || 'Accetraa',
  stagingMode:  import.meta.env.VITE_STAGING_MODE  === 'true',
};
```

### 3.2 Replace Contact page forms with static message

In `frontend/src/pages/Contact/sections/ContactMain.jsx`, `ConsultationForm.jsx`, and `DemoRequestForm.jsx`:

Replace the live form render with a static notice when `config.stagingMode` is true:

```jsx
import { config } from '@/config/env';

// At the top of each form section component:
if (config.stagingMode) {
  return (
    <section ...>
      <div className={styles.stagingNotice}>
        <h2>Get in touch directly</h2>
        <p>
          Our online forms are temporarily unavailable during internal testing.
          Please email us at{' '}
          <a href="mailto:contact@accetraa.com">contact@accetraa.com</a>
          {' '}and we will respond within one business day.
        </p>
      </div>
    </section>
  );
}
```

Existing form code below the early return is **untouched** — no deletion, no restructuring.

### 3.3 `vercel.json` — SPA routing

Create `frontend/vercel.json` to ensure all client-side routes (React Router) return `index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Without this, direct navigation to `/about`, `/services`, etc. returns a 404 on Vercel.

### 3.4 Build output directory

Vercel auto-detects Vite projects. Confirm:
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Root directory:** `frontend`

---

## 4. Environment Variables

### 4.1 Backend — Render Web Service

Set these in the Render dashboard under **Environment → Environment Variables**:

| Variable | Value | Notes |
|---|---|---|
| `DJANGO_SETTINGS_MODULE` | `accetraa.settings.staging` | Must match new settings file |
| `DJANGO_SECRET_KEY` | `<generate 50-char random key>` | Run: `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"` |
| `DEBUG` | `False` | Never true in staging |
| `ALLOWED_HOSTS` | `<render-service-name>.onrender.com` | Add Render service hostname |
| `DATABASE_URL` | `<from Render PostgreSQL dashboard>` | Auto-populated if services are linked |
| `CORS_ALLOWED_ORIGINS` | `https://<vercel-project>.vercel.app` | Add after first Vercel deploy |
| `STAGING_MODE` | `True` | Disables submission endpoints |
| `EMAIL_BACKEND` | `django.core.mail.backends.dummy.EmailBackend` | Belt-and-suspenders: also set in settings |

**Do NOT set any of these on staging:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_S3_BUCKET_NAME`
- `AWS_SES_REGION_NAME`

### 4.2 Frontend — Vercel

Set these in the Vercel dashboard under **Settings → Environment Variables**:

| Variable | Value | Notes |
|---|---|---|
| `VITE_API_BASE_URL` | `https://<render-service-name>.onrender.com` | Set after first Render deploy |
| `VITE_APP_NAME` | `Accetraa` | |
| `VITE_STAGING_MODE` | `true` | Activates static contact message |

---

## 5. Backend Deployment — Render

### Prerequisites
- GitHub account (Render deploys from GitHub)
- Push the repository (or the `backend/` folder) to GitHub if not already done
- The `main` branch should be the deployment branch

### Step-by-step

**5.1 Create PostgreSQL database**
1. Log in to [render.com](https://render.com) → New → PostgreSQL
2. Name: `accetraa-staging-db`
3. Plan: **Free**
4. Region: `Singapore` (closest to India / lowest latency)
5. Click **Create Database**
6. Copy the **Internal Database URL** — you'll use this in step 5.3

**5.2 Create Web Service**
1. New → Web Service
2. Connect GitHub → select the repository
3. Name: `accetraa-staging-api`
4. Root directory: `backend` (if monorepo)
5. Runtime: **Python 3**
6. Build command: `./build.sh`
7. Start command: `gunicorn accetraa.wsgi:application --bind 0.0.0.0:$PORT --workers 2 --timeout 120`
8. Plan: **Free**
9. Region: Same as database (Singapore)

**5.3 Set environment variables**
Under **Environment → Environment Variables**, add all variables from Section 4.1.
For `DATABASE_URL`, click **Add from Database** and select `accetraa-staging-db` — Render auto-populates the URL.

**5.4 Create superuser**
After the first successful deploy, open the Render Shell (or run via one-off job):
```bash
python manage.py createsuperuser
```

**5.5 Load initial fixture data**
```bash
python manage.py loaddata apps/services/fixtures/initial_services.json
# (Add similar commands for products/portfolio if fixtures exist)
```

**5.6 Verify**
- `https://<service>.onrender.com/api/v1/health/` → `{"status": "ok"}`
- `https://<service>.onrender.com/admin/` → Django Admin login page
- `https://<service>.onrender.com/api/v1/services/` → JSON service list

> **Render free tier cold start:** After 15 minutes of inactivity, the service spins down. The first request after a cold start takes 30–50 seconds. This is expected behaviour on the free tier.

---

## 6. Frontend Deployment — Vercel

### Prerequisites
- Vercel account (free) linked to GitHub
- Repository pushed to GitHub

### Step-by-step

**6.1 Import project**
1. Log in to [vercel.com](https://vercel.com) → New Project
2. Import the repository
3. **Root directory:** `frontend`
4. Framework preset: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`

**6.2 Set environment variables**
Under **Settings → Environment Variables**, add all variables from Section 4.2.  
Set scope to **Production**, **Preview**, and **Development**.

**6.3 Deploy**
Click **Deploy**. Vercel builds and deploys automatically.

**6.4 Update backend CORS**
After the Vercel deployment completes:
1. Copy the Vercel URL (e.g., `https://accetraa.vercel.app`)
2. In Render → `accetraa-staging-api` → Environment → update `CORS_ALLOWED_ORIGINS` to include the Vercel URL
3. Render will auto-redeploy

**6.5 Verify**
- `https://accetraa.vercel.app/` → Home page loads
- `https://accetraa.vercel.app/about` → Direct route works (not 404)
- `https://accetraa.vercel.app/services` → Services load from Render API
- `https://accetraa.vercel.app/portfolio` → Portfolio loads
- `https://accetraa.vercel.app/contact` → Static contact notice shown (forms hidden)

---

## 7. Staging Verification Checklist

Run this checklist after both deployments are live.

### Backend
- [ ] `GET /api/v1/health/` returns `{"status": "ok", ...}`
- [ ] `GET /api/v1/services/` returns JSON (empty list if no fixtures loaded)
- [ ] `GET /api/v1/products/` returns JSON
- [ ] `GET /api/v1/portfolio/` returns JSON
- [ ] `POST /api/v1/contact/` returns `404` or `405` (endpoint disabled via STAGING_MODE)
- [ ] `POST /api/v1/consultation/` returns `404` or `405`
- [ ] `POST /api/v1/demo-requests/` returns `404` or `405`
- [ ] `/admin/` loads Django Admin login page
- [ ] Admin login works with superuser credentials
- [ ] Services CRUD works in Admin (create, update, publish)
- [ ] Portfolio CRUD works in Admin
- [ ] Products CRUD works in Admin

### Frontend
- [ ] Home page loads, services/portfolio sections show data or empty states
- [ ] About page renders correctly
- [ ] Services page loads, API grid shows data or loading/empty state
- [ ] Portfolio page loads, category filter works
- [ ] Contact page shows static contact message (no live forms)
- [ ] Careers page renders correctly
- [ ] All page routes navigate without 404
- [ ] Mobile responsive at 375px, 768px, 1280px

---

## 8. Rollback Plan

### Frontend rollback
Vercel maintains full deployment history. To revert:
1. Vercel dashboard → Deployments → select previous deployment → **Promote to Production**
2. Zero downtime, instant.

### Backend rollback
1. Render → `accetraa-staging-api` → Deploys → select previous deployment → **Redeploy**
2. If a migration caused the issue, `python manage.py migrate <app> <previous_migration>` in the Render Shell

### Full teardown (if staging is no longer needed)
1. Render → delete `accetraa-staging-api` Web Service
2. Render → delete `accetraa-staging-db` PostgreSQL (frees the free-tier slot)
3. Vercel → delete the project
4. No data loss risk — SQLite or Render PG data is on managed infrastructure, not local

---

## 9. Production Migration Path — Back to AWS/MySQL

When ready for production (AWS EC2 + RDS MySQL + S3 + SES + CloudFront):

### 9.1 Backend
| Step | Action |
|---|---|
| 1 | Re-add `PyMySQL==1.2.0` to `requirements.txt` |
| 2 | Re-add `django-ses`, `django-storages`, `boto3` to `requirements.txt` |
| 3 | Switch `DJANGO_SETTINGS_MODULE` to `accetraa.settings.production` |
| 4 | Set all AWS env vars on EC2 (IAM role preferred over access keys) |
| 5 | Run `python manage.py migrate` against RDS MySQL |
| 6 | Run `python manage.py collectstatic` → pushes to S3 |
| 7 | Configure NGINX + Gunicorn on EC2 |
| 8 | Point Route 53 / DNS to EC2 Elastic IP |
| 9 | Configure CloudFront distribution for S3 media and frontend |
| 10 | Remove `STAGING_MODE` from environment (re-enables submission endpoints) |
| 11 | Set `EMAIL_BACKEND = 'django_ses.SESBackend'` (enables real email) |

### 9.2 Frontend
| Step | Action |
|---|---|
| 1 | Set `VITE_STAGING_MODE=false` (or remove) in Vercel production environment |
| 2 | Update `VITE_API_BASE_URL` to production API domain |
| 3 | Redeploy from Vercel dashboard |

### 9.3 Data migration from staging to production
```bash
# On staging (Render), export fixtures:
python manage.py dumpdata apps.services apps.products apps.portfolio \
  --natural-foreign --natural-primary --indent 2 > staging_data.json

# On production (EC2), import:
python manage.py loaddata staging_data.json
```

### 9.4 Things that do NOT change in production
- All Django models, migrations, serializers, views — untouched
- All frontend components and pages — untouched
- All API contracts (`/api/v1/...`) — unchanged
- Django Admin — same interface, same credentials pattern

---

## 10. Files to Create (Summary)

All changes are additive — no existing files are deleted or overwritten.

| File | Action | Purpose |
|---|---|---|
| `backend/accetraa/settings/staging.py` | **Create** | Staging-specific settings (SQLite → PG, no AWS, dummy email) |
| `backend/requirements-staging.txt` | **Create** | Stripped requirements for staging |
| `backend/Procfile` | **Create** | Gunicorn start command for Render |
| `backend/build.sh` | **Create** | Build + collectstatic + migrate script |
| `frontend/vercel.json` | **Create** | SPA rewrite rules for React Router |
| `frontend/src/config/env.js` | **Edit** | Add `stagingMode` export |
| `frontend/src/pages/Contact/sections/ContactMain.jsx` | **Edit** | Early return with static message when `stagingMode=true` |
| `frontend/src/pages/Contact/sections/ConsultationForm.jsx` | **Edit** | Same |
| `frontend/src/pages/Contact/sections/DemoRequestForm.jsx` | **Edit** | Same |
| `backend/accetraa/urls.py` | **Edit** | Gate submission endpoints behind `STAGING_MODE` flag |

---

## 11. Known Limitations of This Staging Setup

| Limitation | Impact | Mitigation |
|---|---|---|
| Render free tier spins down after 15 min idle | First request after idle takes 30–50 seconds | Acceptable for internal testing; use a free uptime monitor (UptimeRobot) to keep warm |
| Render free PostgreSQL expires after 90 days | DB deleted if not upgraded | Export fixtures before expiry; upgrade to paid ($7/mo) when needed |
| Media files (images) are stored on ephemeral disk | Admin-uploaded images lost on redeploy | Acceptable for internal testing; production uses S3 |
| No custom domain on free tier | URL is `*.onrender.com` / `*.vercel.app` | Acceptable for internal testing |
| No CDN for static assets on Render free | Slower static file delivery | WhiteNoise compresses + caches; acceptable for testing |

---

*This document is a plan only. No code changes have been made. Proceed with implementation after approval.*
