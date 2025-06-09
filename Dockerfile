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

# Create necessary directories
RUN mkdir -p /app/standalone/.next

# Copy the entire .next directory
RUN cp -r .next/* /app/standalone/.next/

# Copy standalone server files
RUN cp -r .next/standalone/* /app/standalone/

# Copy public files if they exist
RUN if [ -d "public" ]; then \
    cp -r public /app/standalone/; \
    fi

# Set working directory to standalone
WORKDIR /app/standalone

# Expose the port
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]