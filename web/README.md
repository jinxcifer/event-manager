# Event manager frontend

This repository contains a web application for managing events.

## Development

### Prerequisites

- [Nvm](https://github.com/nvm-sh/nvm)

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

### Start

Create file to store the environment variables:

```bash
$ echo > .env
```

Fill out the environment variables:

```
NODE_ENV=development
BACKEND_URL=http://localhost:3000/api
FRONTEND_PORT=4000
```

Start application:

```bash
$ yarn start
```

Visit the application at `http://localhost:4000`.

### Testing

Test the application code:

```bash
$ yarn test
```

### Build

Build the application:

```bash
$ yarn build
```

## Production

### Prerequisites

- [Docker](https://docs.docker.com/engine/install/)

### Start

Create file to store the environment variables:

```bash
$ echo > .env
```

Fill out the environment variables:

```
NODE_ENV=production
BACKEND_URL=http://localhost:3000/api
FRONTEND_PORT=4000
```

Start application:

```bash
$ docker-compose up --build
```

Visit the application at `http://localhost:4000`.
