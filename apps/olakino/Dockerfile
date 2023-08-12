# base node image
FROM node:20-alpine as base
# Install openssl for Prisma
# RUN apt-get update && apt-get install -y openssl
RUN npm i -g pnpm@latest

FROM base as pruner
WORKDIR /app
COPY . .
RUN pnpm dlx turbo prune --scope=olakino --docker

FROM base as installer
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
# COPY --from=pruner /app/out/json/.npmrc .npmrc
# Install only the deps needed to build the target
RUN pnpm install

FROM base as builder
WORKDIR /app
# COPY --from=pruner /app/.git ./.git
COPY --from=pruner /app/out/full .
COPY --from=installer /app/ .
RUN pnpm dlx turbo run build --filter=olakino...

FROM builder as runner
CMD ["pnpm", "--dir", "apps/olakino", "run", "start"]
