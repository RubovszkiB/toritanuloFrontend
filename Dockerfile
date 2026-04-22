FROM oven/bun:1.1.41 AS builder
WORKDIR /app

ENV VITE_API_BASE_URL=https://toritanulobackend-1.onrender.com
ENV VITE_BASE_PATH=/

COPY bun.lock package.json ./
RUN bun install

COPY . .
RUN bun add serve
RUN bun run build

CMD ["sh", "-c", "bun x serve -s dist -l tcp://0.0.0.0:${PORT:-3000}"]
