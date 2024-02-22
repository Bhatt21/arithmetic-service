# Use the official Node.js image as the base image
FROM node:20.11.0-alpine

# Set the working directory in the container

# Copy package.json and package-lock.json to the container
COPY package*.json ./

COPY index.js ./
COPY public ./public
COPY arithmetica.js ./
# Install dependencies
RUN npm install

# Copy the application files to the container

# Expose port 3000 for the Express server
EXPOSE 3000

# Command to run the server
CMD ["node", "index.js"]

