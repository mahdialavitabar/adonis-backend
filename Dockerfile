FROM node:16.17.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy app source code
COPY . .

# Build app
RUN npm run build

COPY ./.env ./build

# Expose port
EXPOSE 3333

# Start app
CMD ["node", "./build/server.js"]
