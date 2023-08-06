# Event manager frontend

This repository contains a web application for managing events.

## Prerequisites

- [Docker](https://www.docker.com/)

## Start

Create file to store the environment variables:

```bash
$ echo > .env
```

Fill out the environment variables:

```
NODE_ENV=production
BACKEND_PORT=3000
BACKEND_ORIGIN=http://localhost:4000
BACKEND_URL=http://localhost:3000/api
FRONTEND_PORT=4000
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=event
```

Start application:

```bash
$ docker-compose up --build -d
```

Visit the application at `http://localhost:4000`.

### Stop

```bash
$ docker-compose down
```
