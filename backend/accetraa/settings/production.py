"""
Production settings.
Usage: DJANGO_SETTINGS_MODULE=accetraa.settings.production
All sensitive values MUST be set via environment variables — never hardcoded here.
"""
from .base import *  # noqa: F401, F403
from decouple import config

# ── Database — AWS RDS MySQL ───────────────────────────────────────────────────
DATABASES = {
    'default': {
        'ENGINE':   'django.db.backends.mysql',
        'NAME':     config('DB_NAME'),
        'USER':     config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST':     config('DB_HOST', default='localhost'),
        'PORT':     config('DB_PORT', default='3306'),
        'OPTIONS': {
            'charset': 'utf8mb4',
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
        'CONN_MAX_AGE': 60,
    }
}

# ── Security ───────────────────────────────────────────────────────────────────
DEBUG = False
ALLOWED_HOSTS = config('ALLOWED_HOSTS', cast=lambda v: [h.strip() for h in v.split(',')])

# Django security hardening
SECURE_HSTS_SECONDS           = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD            = True
SECURE_SSL_REDIRECT            = True
# Cloudflare proxies HTTP to origin; trust its X-Forwarded-Proto header so
# Django recognises the original request as HTTPS and avoids redirect loops.
SECURE_PROXY_SSL_HEADER        = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_SECURE          = True
CSRF_COOKIE_SECURE             = True
SECURE_CONTENT_TYPE_NOSNIFF    = True
X_FRAME_OPTIONS                = 'DENY'

# ── Email — AWS SES ────────────────────────────────────────────────────────────
# Defaults to django_ses.SESBackend. Override via EMAIL_BACKEND env var if needed.
# Requires: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SES_REGION_NAME
# The sender address (EMAIL_FROM) must be verified in the AWS SES console.
EMAIL_BACKEND       = config('EMAIL_BACKEND', default='django_ses.SESBackend')
AWS_SES_REGION_NAME = config('AWS_SES_REGION_NAME', default='ap-south-1')

# ── AWS Credentials ────────────────────────────────────────────────────────────
# Shared by SES (email) and S3 (file storage).
# Optional here with empty defaults so the app starts when only SES is configured.
# django-ses uses these automatically when EMAIL_BACKEND = django_ses.SESBackend.
AWS_ACCESS_KEY_ID     = config('AWS_ACCESS_KEY_ID',     default='')
AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY', default='')

# ── File Storage — AWS S3 (optional) ──────────────────────────────────────────
# S3 is only activated when AWS_S3_BUCKET_NAME is provided.
# If omitted, Django falls back to local disk storage — acceptable when S3 is
# not yet configured (e.g. email-only AWS setup).
_s3_bucket = config('AWS_S3_BUCKET_NAME', default='')
if _s3_bucket:
    DEFAULT_FILE_STORAGE    = 'storages.backends.s3boto3.S3Boto3Storage'
    AWS_STORAGE_BUCKET_NAME = _s3_bucket
    AWS_S3_REGION_NAME      = config('AWS_S3_REGION_NAME', default='ap-south-1')
    AWS_S3_FILE_OVERWRITE   = False
    AWS_DEFAULT_ACL         = None
    AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}

    _cloudfront_domain = config('AWS_CLOUDFRONT_DOMAIN', default='')
    if _cloudfront_domain:
        MEDIA_URL = f'https://{_cloudfront_domain}/'
        AWS_S3_CUSTOM_DOMAIN = _cloudfront_domain

# ── DRF — JSON only in production ─────────────────────────────────────────────
REST_FRAMEWORK['DEFAULT_RENDERER_CLASSES'] = [  # noqa: F405
    'rest_framework.renderers.JSONRenderer',
]

# ── Logging ───────────────────────────────────────────────────────────────────
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'json': {
            'format': '{"time": "%(asctime)s", "level": "%(levelname)s", "name": "%(name)s", "message": "%(message)s"}',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'json',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'WARNING',
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'WARNING',
            'propagate': False,
        },
        'apps': {
            'handlers': ['console'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}
