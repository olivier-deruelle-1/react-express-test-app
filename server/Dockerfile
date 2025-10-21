# Stage 1: Build dependencies and application
FROM node:25-alpine AS builder

WORKDIR /usr/app

# Copy package.json and package-lock.json first to leverage Docker's layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# copy source and build
COPY . .
RUN npm run build

# Stage 2: Create the final, lightweight production image
FROM node:25-alpine

WORKDIR /usr/app

ARG ENVIRONMENT
# Export ARG into ENV so the process can read it at runtime
ENV ENVIRONMENT=${ENVIRONMENT}

# copy compiled output and any runtime config the app needs
COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/node_modules ./dist/node_modules
COPY --from=builder /usr/app/src/config ./dist/config

# Expose the port your Express app listens on
EXPOSE 3000

# Define the command to run your Express application
CMD ["node", "dist/server.js"]