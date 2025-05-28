# Use the official Node.js LTS version
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose the port your application uses (adjust if different)
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]
