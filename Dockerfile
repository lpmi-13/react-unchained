FROM python:3.6-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code

COPY . /code/

RUN pip install -r ./mysite/requirements.txt

EXPOSE 8000
