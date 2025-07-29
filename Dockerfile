# Use the official Cypress image that includes everything needed
FROM cypress/included:14.5.2

# Set working directory inside the container
WORKDIR /app

# Copy only package files to install dependencies first (faster builds)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Run Cypress tests
CMD ["npx", "cypress", "run"]
