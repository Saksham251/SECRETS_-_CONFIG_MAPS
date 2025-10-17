From oven/bun:1
WORKDIR /APP
COPY ./ ./
RUN bun install
EXPOSE 3000
CMD [ "bun","run","index.ts"]