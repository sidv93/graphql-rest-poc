FROM node:erbium

RUN apt-get update && apt-get install -y \
    build-essential \
    libkrb5-dev \
    dumb-init

HEALTHCHECK NONE

RUN mkdir -p /home/guser/app

COPY package.json package-lock.json /home/guser/app/
WORKDIR /home/guser/app
RUN npm install

COPY . /home/guser/app

EXPOSE 80
ENTRYPOINT [ "/usr/bin/dumb-init", "--"]
CMD [ "npm", "start" ]
