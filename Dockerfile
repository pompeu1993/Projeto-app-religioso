# Use Node.js 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies using npm
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Copy start script
COPY start.sh ./
RUN chmod +x start.sh

# Expose port
EXPOSE $PORT

# Start the application
CMD ["./start.sh"] 