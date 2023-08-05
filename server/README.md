# Event manager backend

This repository contains a web application for managing events.

## Development

### Prerequisites

- [Nvm](https://github.com/nvm-sh/nvm)
- [Docker](https://www.docker.com/)

### Environment

The node version used in this repository can be found in `.nvmrc`. Set up the node version with:

```bash
$ nvm install
$ nvm use
```

### Dependencies

Install dependencies:

```bash
$ yarn
```

## Start

Create file to store the environment variables:

```bash
$ echo > .env
```

Fill out the environment variables:

```
NODE_ENV=development
BACKEND_PORT=3000
BACKEND_ORIGIN=http://localhost:8080
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=event
```

Start application:

```bash
# development
$ yarn run start
```

## Testing

Test the application code:

```bash
# unit tests
$ yarn run test
```
