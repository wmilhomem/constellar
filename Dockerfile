# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and lock files
COPY package.json ./
# Check if lock files exist before copying
COPY package-lock.json* ./
COPY bun.lockb* ./
COPY yarn.lock* ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
# Note: This will run 'tsc -b && vite build' as per package.json
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine

# Copy custom nginx configuration for SPA support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the build stage
# Assuming vite.config.ts will be updated to output to /app/dist
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
