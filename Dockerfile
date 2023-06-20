FROM node:14.17.1-alpine

ARG REACT_APP_ENV
ARG REACT_APP_DEV_URI
ARG REACT_APP_PROD_URI

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/

RUN apk update && apk add bash
RUN npm install
COPY . /app/
RUN echo "REACT_APP_ENV=$REACT_APP_ENV" > /app/.env	&& \
	echo "REACT_APP_DEV_URI=$REACT_APP_DEV_URI" >> /app/.env && \
	echo "REACT_APP_PROD_URI=$REACT_APP_PROD_URI" >> /app/.env
RUN npm run build
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
