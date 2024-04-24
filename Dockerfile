FROM python:3.6-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

COPY ./mysite/requirements.txt /tmp/requirements.txt

RUN pip install -r /tmp/requirements.txt

COPY . /code/

EXPOSE 8000
