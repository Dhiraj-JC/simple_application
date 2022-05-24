# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:alpine as build

# Set the working directory
WORKDIR /user/local/app

# Add the source code to app
COPY ./ /user/local/app

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /user/local/app/dist/frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80
