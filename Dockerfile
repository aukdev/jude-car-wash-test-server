# Use an official Node.js image as a base image
FROM node:lts-alpine3.20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (only production)
RUN npm install

# Copy the rest of your app code
COPY . .

# Expose the app port
EXPOSE 4000

# Start the app
CMD ["npm", "start"]