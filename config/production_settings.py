from .settings import *

DEBUG = True

INVITATIONS_INVITATION_ONLY = True

ALLOWED_HOSTS = ['13.59.25.165', '70.32.96.233', 'www.sgcevents.info', 'sgcevents.info', 'ec2-13-59-25-165.us-east-2.compute.amazonaws.com']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '5432',
    }
}

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
        }
}
