"""
Staging settings — Render free tier + Render PostgreSQL.

Usage:
    DJANGO_SETTINGS_MODULE=accetraa.settings.staging

Purpose:
    Internal employee testing only.
    No user data collected. No email sent. No AWS dependencies.
    All changes in this file are additive overrides of base.py — nothing is deleted.
"""
from .base import *   # noqa: F401, F403
from decouple import config

# ── Security ───────────────────────────────────────────────────────────────────
DEBUG = False
ALLOWED_HOSTS = config(
    'ALLOWED_HOSTS',
    default='localhost,127.0.0.1',
    cast=lambda v: [h.strip() for h in v.split(',')],
)

# Render handles TLS termination — do not redirect HTTP→HTTPS inside Django.
SECURE_SSL_REDIRECT            = False
SESSION_COOKIE_SECURE          = True
CSRF_COOKIE_SECURE             = True
SECURE_CONTENT_TYPE_NOSNIFF    = True
X_FRAME_OPTIONS                = 'DENY'

# ── Staging flag ───────────────────────────────────────────────────────────────
# Gates submission endpoints (contact / consultation / demo-requests) in urls.py.
# Set to False in production to re-enable all endpoints.
STAGING_MODE = config('STAGING_MODE', default=True, cast=bool)

# ── Database — Render PostgreSQL free tier (1 GB, persists across deploys) ────
# DATABASE_URL is injected automatically when the Render PG service is linked
# to this web service in the Render dashboard.
import dj_database_url  # noqa: E402
DATABASES = {
    'default': dj_database_url.config(
        env='DATABASE_URL',
        conn_max_age=600,
        ssl_require=True,
    )
}

# ── Email — discard silently, no outbound mail on staging ─────────────────────
# Signal handlers in contact/consultation/demo_requests still fire but all mail
# is silently dropped. No code changes to signals or views are required.
EMAIL_BACKEND = 'django.core.mail.backends.dummy.EmailBackend'

# ── Static files — WhiteNoise serves from /staticfiles/ ──────────────────────
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')  # noqa: F405
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# ── Media files — local ephemeral disk (acceptable for internal testing) ──────
# Uploaded images (portfolio, products) will be lost on each Render redeploy.
# Production switches this to DEFAULT_FILE_STORAGE = S3Boto3Storage.
DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
MEDIA_URL  = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'   # noqa: F405

# ── CORS — allow the Vercel frontend ──────────────────────────────────────────
# Set CORS_ALLOWED_ORIGINS in the Render environment after first Vercel deploy.
CORS_ALLOWED_ORIGINS = config(
    'CORS_ALLOWED_ORIGINS',
    default='http://localhost:5173',
    cast=lambda v: [h.strip() for h in v.split(',')],
)
CORS_ALLOW_CREDENTIALS = False

# ── DRF — JSON-only on staging (no browsable API) ─────────────────────────────
REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [   # noqa: F405
    'rest_framework.renderers.JSONRenderer',
]

# ── Logging ────────────────────────────────────────────────────────────────────
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'simple': {
            'format': '[{levelname}] {name}: {message}',
            'style': '{',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
    },
    'root':   {'handlers': ['console'], 'level': 'INFO'},
    'loggers': {
        'django': {'handlers': ['console'], 'level': 'WARNING', 'propagate': False},
        'apps':   {'handlers': ['console'], 'level': 'INFO',    'propagate': False},
    },
}
