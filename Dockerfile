# Use an official Nginx image as the base
FROM nginx:latest

# Remove the default Nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents of the current directory into the containers
COPY . /usr/share/nginx/html

# Expose the default Nginx ports
EXPOSE 80
