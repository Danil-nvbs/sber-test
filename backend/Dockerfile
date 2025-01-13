# Stage 1: Build the Express.js application
FROM node:14-alpine AS build-stage


# Set the working directory
WORKDIR /node/app

# Copy the package.json and package-lock.json files
COPY ./package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ .

# Expose the port the app runs on
EXPOSE 3001

# Command to run the Express.js server
CMD ["node", "index.js"]