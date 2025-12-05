# ---- Stage 1 ---- Build Stage
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

# ---- Stage 2 ---- Runtime Stage
FROM oven/bun:latest

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 8080
ENV PORT=8080

CMD [ "bun", "index.ts"]
