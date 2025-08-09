# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application's source code from the host to the image's filesystem
COPY . .

# Inform Docker that the container is listening on port 3000
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "run", "dev"]
