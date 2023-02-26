FROM python:3.10-alpine3.17

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN mkdir "api"
WORKDIR /api

COPY requirements.txt .

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY ./App .


