# 1. Use the Node.js base image
FROM node:18

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all project files
COPY . .

# 6. Expose the Next.js default port
EXPOSE 3000

# 7. Run Next.js in development mode
CMD ["npm", "run", "dev"]
