FROM node:18.12.1-alpine3.15

ARG TZ=Europe/Amsterdam
ENV TZ Europe/Amsterdam

RUN \
    apk add --no-cache \
    bash \
    nano \
    && command -v bash \
    && command -v nano \
    && echo "$TZ" > /etc/timezone

ARG NPM_REGISTRY
ARG NPM_STRICT_SSL

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN    ( test "${NPM_STRICT_SSL}" && npm config set strict-ssl "${NPM_STRICT_SSL}" || true ) \
    && ( test "${NPM_REGISTRY}" && npm config set registry "${NPM_REGISTRY}" || true ) \
    && ( test "${HTTP_PROXY}" && npm config set proxy "${HTTP_PROXY}" || true ) \
    && ( test "${HTTP_PROXY}" && npm config set http-proxy "${HTTP_PROXY}" || true ) \
    && ( test "${HTTPS_PROXY}" && npm config set https-proxy "${HTTPS_PROXY}" || true )

RUN mkdir -p /var/www \
    && chown -R node:node /var/www

USER node

WORKDIR /var/www

ADD --chown=node:node package.json package-lock.json ./

RUN mkdir -pv /var/www/node_modules

ADD --chown=node:node ./package.json ./package.json

ARG HUSKY_SKIP_INSTALL=true

RUN mkdir -p \
    /var/www/dist \
    /var/www/src

ADD --chown=node:node ./ /var/www/

RUN npm ci

ENV \
    HTTP_PROXY=$HTTP_PROXY \
    HTTPS_PROXY=$HTTPS_PROXY \
    NO_PROXY=$NO_PROXY \
    http_proxy=$HTTP_PROXY \
    https_proxy=$HTTPS_PROXY \
    no_proxy=$NO_PROXY

ENTRYPOINT ["npm", "run"]

CMD ["start"]
