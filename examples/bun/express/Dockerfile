FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./

RUN bun install

COPY . .

ENV PORT=8080

CMD [ "bun", "index.ts"]
