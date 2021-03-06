### STAGE 1: Build ###
FROM node:14.9.0-alpine3.12 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run buildprod --prod
### STAGE 2: Run ###
FROM nginx:1.19.2-alpine
COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/TronicWebsite /usr/share/nginx/html
