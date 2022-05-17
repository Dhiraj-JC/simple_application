FROM node:alpine as build

WORKDIR /user/local/app

COPY ./ /user/local/app

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /user/local/app/dist/frontend /usr/share/nginx/html

EXPOSE 80
