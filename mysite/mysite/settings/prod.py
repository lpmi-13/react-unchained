from mysite.settings.base import *
import os

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '{}'.format(os.environ.get('DB_NAME')),
        'USER': '{}'.format(os.environ.get('DB_USER')),
        'PASSWORD': '{}'.format(os.environ.get('DB_PASSWORD')),
        'HOST': '{}'.format(os.environ.get('HOST')),
        'PORT': '',
    }
}

