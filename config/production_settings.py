from .settings import *

DEBUG = True

INVITATIONS_INVITATION_ONLY = True

ALLOWED_HOSTS = ['13.59.25.165', 'sgcevents.info', 'ec2-13-59-25-165.us-east-2.compute.amazonaws.com']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../db.sqlite3'),
    }
}

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
        }
}
