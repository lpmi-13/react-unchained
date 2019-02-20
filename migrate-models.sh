#!/usr/bin/env bash

python ./mysite/manage.py migrate --settings=mysite.settings.docker
