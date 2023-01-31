FROM node:18.12.1-alpine3.15

ARG TZ=Europe/Amsterdam
ENV TZ Europe/Amsterdam

# Use `--no-cache` to get a smaller image, by removing unused files afterwards.
# The packages are sorted, one per line, to have better diffs in Git.
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

ARG NPM_TOKEN
ARG HUSKY_SKIP_INSTALL=true


# Altering the build directories should not trigger `yarn install`,
# that's why these are not in the same `mkdir` command.

RUN mkdir -p \
    /var/www/dist \
    /var/www/src

ADD --chown=node:node ./ /var/www/

# For development, install `devDependencies`.

RUN     echo "@xpay-ams:registry=https://gitlab.com/api/v4/packages/npm/" > .npmrc \
    &&  echo "//gitlab.com/api/v4/packages/npm/:_authToken=${NPM_TOKEN}" >> .npmrc \
    &&  echo "timeout=300000" >> .npmrc \
    &&  npm ci

# Add lowercase proxy settings for compatibility,
# but use uppercase exports for shellcheck compatibility.
# https://unix.stackexchange.com/a/212972
ENV \
    HTTP_PROXY=$HTTP_PROXY \
    HTTPS_PROXY=$HTTPS_PROXY \
    NO_PROXY=$NO_PROXY \
    http_proxy=$HTTP_PROXY \
    https_proxy=$HTTPS_PROXY \
    no_proxy=$NO_PROXY

ENTRYPOINT ["npm", "run"]

CMD ["start"]
