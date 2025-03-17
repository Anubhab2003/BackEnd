# Stage 1: Builder
FROM node:22 AS builder

WORKDIR /build

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY src/ ./src/

# Fix: Copy index.js to root
COPY src/index.js ./index.js

# Run the app (useful for testing or transpiling)
RUN npm run start

# Stage 2: Runner
FROM node:22 AS runner

WORKDIR /app

# Copy files from the builder stage
COPY --from=builder /build/package*.json ./
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/src ./src
COPY --from=builder /build/index.js ./index.js

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
