FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy files to /app
COPY ./ ./

# Run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts" ]
