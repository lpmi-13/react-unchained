# React-Unchained (React + Django)

The genesis of this was wanting to put my
[recalculations](https://github.com/lpmi-13/githubuserstats)
of metrics for github user contributions online somewhere.

In the process, I thought I'd learn a little Django, and here
we are.

Currently live at [https://statsbuffet.party](https://statsbuffet.party)

## installing
`git clone https://github.com/lpmi-13/react-unchained`

`npm install`

(using virtual environment method of choice)
`pip install`

## running the dev server
(from the `mysite` directory...make sure postgres is listening on
port `5432`)
`python3 manage.py runserver --settings=mysite.settings.dev`

## running the django tests
`python3 manage.py test --settings=mysite.settings.dev`

## running the react tests
`npm run test`

## building the frontend assets
`npm run build`

## running in production
`gunicorn --workers 3 --bind unix:mysite.sock mysite.wsgi`

## example location block in Nginx for reverse server-ing
(if cloned to `~/`)
```
location / {
        include proxy_params;
        proxy_pass http://unix:/home/USER/react-unchained/mysite/mysite.sock;
        }
```
