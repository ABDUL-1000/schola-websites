FROM oven/bun:latest AS builder
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb* bun.lock* ./
RUN bun install

# Copy source and build
COPY . .
RUN bun run build

# Runner Stage
FROM oven/bun:latest
WORKDIR /app

# Copy built assets
# TanStack Start with Nitro outputs to .output by default
COPY --from=builder /app/.output ./.output

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

# Start the SSR server
CMD ["bun", "run", ".output/server/index.mjs"]
