# Stage 1: Build dependencies and application
FROM node:25-alpine AS builder

WORKDIR /usr/app

ARG ENVIRONMENT

# Copy package.json and package-lock.json first to leverage Docker's layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build-${ENVIRONMENT}

# Stage 2: Create the final, lightweight production image
FROM nginx:1.28.0-alpine

WORKDIR /usr/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
