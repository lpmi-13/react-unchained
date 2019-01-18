# React-Unchained (React + Django)

The genesis of this was wanting to put my
[recalculations](https://github.com/lpmi-13/githubuserstats)
of metrics for github user contributions online somewhere.

In the process, I thought I'd learn a little Django, and here
we are.

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
`connect via nginx to a socket that gunicorn is bound to...`
