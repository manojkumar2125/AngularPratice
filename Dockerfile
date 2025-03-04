# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build -- --prod

# Use a lightweight web server to serve the Angular application
FROM nginx:alpine

# Copy the built Angular application from the previous stage
COPY --from=0 /usr/src/app/dist/appoinment-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]