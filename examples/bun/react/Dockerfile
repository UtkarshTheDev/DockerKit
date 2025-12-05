# ---- Stage 1 ---- Builder Stage
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package*.json ./

RUN bun install

COPY . .

# ---- Stage 2 ---- Runtime Stage
FROM oven/bun:latest

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 5173

CMD [ "bun", "run", "dev" ]
