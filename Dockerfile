FROM python:3.6-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY ./mysite/requirements.txt /code/
RUN pip install -r ./mysite/requirements.txt
COPY . /code/
RUN python ./mysite/manage.py seed stats --settings=mysite.settings.dev -- number=10
