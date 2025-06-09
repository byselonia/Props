FROM node:18-slim

# Install OpenSSL
RUN apt-get update -y && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Create a new directory for the standalone server
RUN mkdir -p /app/standalone

# Copy necessary files for standalone server
RUN cp -r .next/standalone/* /app/standalone/ && \
    cp -r .next/static /app/standalone/.next/static && \
    cp -r public /app/standalone/

# Set working directory to standalone
WORKDIR /app/standalone

# Expose the port
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]