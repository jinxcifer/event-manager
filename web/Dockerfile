FROM node:18.16.0-alpine3.18 as base

# 1. STEP: INSTALL DEPENDENCIES
FROM base as builder

WORKDIR /app

## Install dependencies
COPY package.json yarn.lock ./
RUN yarn --non-interactive

## Copy all files
COPY . .

# 2. STEP: BUILD PROJECTS

## Build frontend
RUN yarn build

# 3. STEP: COPY BUILDS TO FINAL IMAGE
FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
