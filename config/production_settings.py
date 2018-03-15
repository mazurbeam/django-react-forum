from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['18.217.120.15', 'ec2-18-217-120-15.us-east-2.compute.amazonaws.com']

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "assets"),
]

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.prod.json'),
        }
}
