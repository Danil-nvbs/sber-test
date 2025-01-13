# # Stage 2: Build the Nginx server
FROM nginx:alpine AS nginx-stage

# # Copy the frontend files to the Nginx html directory
COPY . /usr/share/nginx/html

# # Expose the port Nginx runs on
EXPOSE 80

# # Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]