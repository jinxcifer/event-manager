FROM node:18.16.0-alpine3.18 as base

ENV NODE_ENV=$NODE_ENV
ENV BACKEND_PORT=$BACKEND_PORT
ENV DATABASE_USERNAME=$DATABASE_USERNAME
ENV DATABASE_PASSWORD=$DATABASE_PASSWORD
ENV DATABASE_HOST=$DATABASE_HOST
ENV DATABASE_PORT=$DATABASE_PORT
ENV DATABASE_NAME=$DATABASE_NAME

# 1. STEP: INSTALL DEPENDENCIES
FROM base as builder

WORKDIR /app

## Install dependencies
COPY package.json yarn.lock ./
RUN yarn --non-interactive

## Copy all files
COPY . .

# 2. STEP: BUILD PROJECTS

## Build backend
RUN yarn build

# 3. STEP: COPY BUILDS TO FINAL IMAGE
FROM base

WORKDIR /app

COPY --from=builder app/dist dist
COPY --from=builder app/node_modules node_modules

CMD ["node", "dist/main"]