FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package.json .

# ENV PATH /usr/src/app/node-modules/.bin:$PATH

# Install dependencies
RUN yarn

# # Copy source code to image
COPY . .

# # Expose port for service
EXPOSE 3000

# Run app
CMD ["yarn", "start"]