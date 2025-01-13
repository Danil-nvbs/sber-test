# Использование официального образа Nginx с Docker Hub
# FROM nginx:alpine

# COPY ./frontend /usr/share/nginx/html

# EXPOSE 80

# Stage 1: Build the Express.js application
FROM node:14-alpine AS build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./backend .

# Expose the port the app runs on
EXPOSE 3001

# Command to run the Express.js server
CMD ["node", "index.js"]

# Stage 2: Build the Nginx server
FROM nginx:alpine AS nginx-stage

# Copy the frontend files to the Nginx html directory
COPY ./frontend /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]