# Use the official Node.js image as the parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json file to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Build app
RUN npm run build

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port that the Adonis app is running on
EXPOSE 3333

# Start the app with the PostgreSQL database
CMD [ "npm", "run", "dev" ]
