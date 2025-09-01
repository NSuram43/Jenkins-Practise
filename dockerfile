# Use a stable base image with Node 20, Chrome, Firefox, and Edge for amd64
FROM cypress/browsers:latest

# Install DBUS dependencies
RUN apt-get update && apt-get install -y dbus && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files first for caching dependencies
COPY package*.json ./

# Install dependencies (use ci for CI reproducibility)
RUN npm ci

# Install Cypress binaries
RUN npx cypress install

# Copy the rest of the project files (including cypress/ folder)
COPY . .

# Verify Cypress installation
RUN npx cypress verify

# Fix permissions for /app to allow writing screenshots and videos
RUN chown -R node:node /app

# Run as non-root user for security
USER node

# Default command to run tests (headless by default in CI)
CMD ["npx", "cypress", "run"]