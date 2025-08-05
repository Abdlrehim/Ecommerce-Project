# EcommerceTest Project

This repository contains a set of end‑to‑end (E2E) tests built with **Cypress** and **TypeScript** for the [GreenKart](https://rahulshettyacademy.com/seleniumPractise/#/) e‑commerce demo site. The tests leverage a Page Object Model (POM) structure to promote maintainability and readability.

## Prerequisites

To develop or run this project locally you will need:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher) or **Yarn**
- (Optional) **Docker** and **Docker Compose** if you want to run the tests in a containerised environment

## Setup

1. **Clone the repository**:

       git clone https://github.com/Abdlrehim/Ecommerce-Project.git
       cd Ecommerce-Project

2. **Install dependencies**:

       npm install

## Running the Cypress Tests

### Local execution

To open the interactive Cypress UI where you can see tests running in the browser:

       npx cypress open

To run the tests in headless mode (useful for CI/CD pipelines):

       npx cypress run

### Docker Compose

If you prefer to run your tests in a Docker container, ensure you have Docker and Docker Compose installed. A typical workflow involves a `docker-compose.yml` file that installs Node dependencies and executes the Cypress tests. Once such a compose file is in place, you can build and start the container with:

       docker-compose up --build

This command builds the Docker image (if it hasn’t been built already) and then runs the services defined in your compose file. You can modify the compose configuration to mount your source code, set environment variables (such as `CYPRESS_BASE_URL`), or customise the Node image as needed.

## Project structure

       .
       ├── cypress
       │   ├── e2eTests        # Cypress spec files
       │   ├── pageObjects     # Page Object classes used by the tests
       │   ├── fixtures        # Test data and fixtures
       │   └── support         # Cypress support utilities and commands
       ├── package.json        # NPM package manifest
       └── README.md           # Project documentation (this file)

The **page object model** encapsulates page interactions into classes under `cypress/pageObjects/`, making test scripts in `cypress/e2eTests/` concise and expressive. Feel free to explore these files for examples of how selectors and actions are abstracted.

## Test cases

The test suite covers a variety of user flows on the GreenKart demo site. Each scenario is implemented as a separate `it()` block in the Cypress spec files under `cypress/e2eTests/`.

### Home page tests (`homePage.cy.ts`)

- **Search and add to cart:** searches for products starting with **ca**, verifies that four matching items are displayed, and adds the item *Cashews – 1 Kg* to the cart.
- **Search filter:** enters a more specific term (*tom*) to filter the catalogue down to a single product (*Tomato – 1 Kg*) and asserts that only one product card remains visible.
- **Quantity increment:** verifies that clicking the + button on the first product card increases its quantity from 1 to 2.

### Cart & checkout tests (`greenKart.cy.ts`)

- **Empty cart checkout:** opens the cart when no items are added and asserts that the **PROCEED TO CHECKOUT** button is disabled so you cannot continue without items.
- **Promo code application:** adds two items to the cart, proceeds to checkout, enters a valid promo code (`rahulshettyacademy`) and confirms that the **Code applied** message appears and that the discount percentage is greater than 0 %.
- **Country and terms validation:** adds an item and goes through the checkout flow to the final page. It then demonstrates that clicking **Proceed** without selecting a country or agreeing to the terms displays a warning message. Selecting a country alone still prompts the warning. Once the terms checkbox is ticked, the **Proceed** button becomes enabled and the checkout can complete.
