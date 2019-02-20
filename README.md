# React-Unchained (React + Django)

The genesis of this was wanting to put my
[recalculations](https://github.com/lpmi-13/githubuserstats)
of metrics for github user contributions online somewhere.

In the process, I thought I'd learn a little Django, and here
we are.

Currently live at [https://statsbuffet.party](https://statsbuffet.party)

## installing (non-docker version)
`git clone https://github.com/lpmi-13/react-unchained`

`npm install`

(using python3 + virtual environment method of choice)
`pip install`

## running the dev server (non-docker version)
From the `mysite` directory...make sure postgres is listening on
port `5432`. After that, migrate the models with:

`python3 manage.py migrate --settings=mysite.settings.dev`

Then, either grab some actual data as described [here](https://github.com/lpmi-13/githubuserstats), or seed the database with the following:

`python3 manage.py seed stats --number=100 --settings=mysite.settings.dev`

Once there's data in postgres, go ahead and run the server

`python3 manage.py runserver --settings=mysite.settings.dev`

## running the dev server (docker version)

_EXPERIMENTAL_

`npm install && npm run build` will put all the necessary js
assets in the right place for django to find them. I wanted to
hook up the webpack dev server hot reloading so you don't need
to do this in dev mode, but just haven't had the time to
mess around with it.

`docker-compose up --build`
the server should now be ready at `localhost:8000`

You can also run `npm run dev-docker` to put the above in one step.

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
