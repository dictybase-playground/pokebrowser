# Use the official Node.js image as the base image
FROM node:20-alpine

# Install git
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /app

# Copy the contents of this project into the container's /app directory
COPY . .

# Install dependencies
RUN yarn install

# Expose the port that the application runs on
EXPOSE 3000

# Command to run the application
CMD ["yarn", "dev", "--host"]

