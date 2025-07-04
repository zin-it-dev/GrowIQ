from .base import *


DATABAS_NAME = os.getenv("DATABAS_NAME")

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(os.path.join(BASE_DIR, 'database'), DATABAS_NAME)
    }
}

CORS_ALLOW_ALL_ORIGINS = True

INTERNAL_IPS = [
    "127.0.0.1"
]

ALLOWED_HOSTS = ['localhost', '127.0.0.1', '0.0.0.0', 'host.docker.internal']

INSTALLED_APPS += [
    "debug_toolbar"
]


MIDDLEWARE += [
    "debug_toolbar.middleware.DebugToolbarMiddleware"
]

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
