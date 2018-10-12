from mysite.settings.base import *
import os
import yaml

with open('mysite/settings/db_config.yml', 'r') as inputfile:
    cfg = yaml.load(inputfile)

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '{}'.format(cfg['DB_NAME']),
        'USER': '{}'.format(cfg['DB_USER']),
        'PASSWORD': '{}'.format(cfg['DB_PASSWORD']),
        'HOST': '{}'.format(cfg['HOST']),
        'PORT': '',
    }
}

