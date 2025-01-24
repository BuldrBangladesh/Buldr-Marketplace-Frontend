# Buldr-Marketplace-Frontend

This project is the frontend for the Buldr Marketplace, built with React and various supporting libraries.

## Features

- **Product Listing**:
  - Displays a list of products available for purchase.
  - Uses Material-UI components for a responsive and modern UI.
  - Fetches product data from a REST API using Axios.

- **Product Details**:
  - Provides detailed information about each product.
  - Includes images, descriptions, and pricing information.
  - Allows users to add products to their cart.

- **Shopping Cart**:
  - Manages the user's selected products.
  - Allows users to update quantities and remove items.
  - Displays the total price and checkout options.

- **User Authentication**:
  - Uses Firebase Authentication for user sign-up, login, and account management.
  - Implements secure authentication flows with JWT tokens.
  - Stores authentication tokens in local storage for session management.

- **Order Management**:
  - Allows users to view and manage their orders.
  - Integrates with a payment gateway for processing transactions.
  - Provides order tracking and status updates.

- **Responsive Design**:
  - Uses Material-UI and custom CSS for styling.
  - Ensures the application is mobile-friendly and responsive.
  - Implements a grid system and media queries for layout adjustments.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for building responsive and modern web applications.
- **Firebase**: A platform for building web and mobile applications, used here for authentication.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/buldr-marketplace-frontend.git
   ```

2. Navigate to the project directory:

   ```sh
   cd buldr-marketplace-frontend
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   REACT_APP_API_URL=your_api_url
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

1. Build the application for production:

   ```sh
   npm run build
   ```

2. The build artifacts will be stored in the `build/` directory.
