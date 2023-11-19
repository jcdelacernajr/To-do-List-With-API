# Use an official Node runtime as a parent image
FROM node:18.18.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app runs
EXPOSE 4200

# Command to run your application
CMD ["ng", "serve", "--host", "0.0.0.0"]
