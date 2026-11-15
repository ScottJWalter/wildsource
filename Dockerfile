FROM node:22-alpine AS build

WORKDIR /app

RUN npm install --global pnpm@10.12.1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG PUBLIC_REPO_URL=https://github.com/ScottJWalter/wildsource
ARG PUBLIC_SITE_URL=https://wildsource.jnagra.com
ENV PUBLIC_REPO_URL=${PUBLIC_REPO_URL} \
	PUBLIC_SITE_URL=${PUBLIC_SITE_URL}

RUN pnpm build

FROM node:22-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production \
	HOST=0.0.0.0 \
	PORT=3000

COPY --from=build --chown=node:node /app/build ./build
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/package.json ./package.json

EXPOSE 3000

USER node

CMD ["node", "build"]
