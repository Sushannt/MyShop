## E-Commerce Web Application Documentation 📚

### Overview 🌐
This documentation provides an overview of the structure and functionality of an E-Commerce web application built using React and Redux Toolkit. The application includes features such as user authentication, product listing, and a shopping cart.

### Project Structure 🏗️

The project is organized into several files and directories:

- `src/`
 - `components/`: React components used throughout the application. 🧩
 - `pages/`: React components representing different pages of the application. 📄
 - `slices/`: Redux slices for managing state using Redux Toolkit. 🍰
 - `store/`: Configuration of the Redux store and API slices. 🔌
 - `utils/`: Utility functions and constants. ⚙️
 - `App.jsx`: Main application component. 🎯
 - `index.js`: Entry point for rendering the React app. 🚀
 - `constants.js`: Constants like the `BASE_URL` for API requests. 🔑

### Key Components 🧱

#### `App.jsx`
The main application component that renders the navigation bar, main content, and footer. It utilizes React Router for navigation and wraps the entire application with Redux `Provider` to provide the Redux store to all components. 🌈

#### `Navbar.jsx` and `Footer.jsx`
Reusable components representing the navigation bar and footer. 📣

#### `ProductCard.jsx`
A component displaying details of a product, including an image, title, rating, pricing, and an "Add to Cart" button. Uses React Router for product navigation. 🛒

#### `ProductPage.jsx`
The main product listing page where users can view and filter products. It includes a search bar, price range filter, and displays a list of product cards. 🔍

#### `Sidebar.jsx`
A sidebar component containing additional filters and options for product filtering. 🔍

#### `PriceRange.jsx`
A component allowing users to filter products by price range. 💸

#### `Login.jsx`
A component handling user authentication, allowing users to log in and access protected pages. 🔐

### Redux State Management 🧠

#### `authSlice` and `cartSlice`
Redux slices managing user authentication and the shopping cart. They handle actions like logging in, logging out, adding items to the cart, and clearing the cart. 🔐🛒

#### `productsApiSlice`
Redux API slice using `createApi` from Redux Toolkit to handle asynchronous API calls related to product data. 📡

#### `filterSlice`
Redux slice managing product filtering based on search terms and price range. 🔍

### Store Configuration 🛠️

The Redux store is configured in `store/store.jsx` using `configureStore` from Redux Toolkit. It combines multiple reducers, including slices and API slices, to manage the global state. 🔗

### API Integration 🌐

The application integrates with a server API for user authentication and fetching product data. API-related functionality is organized in the `slices` directory, with each API slice using `createApi` for defining asynchronous actions. 🌐

### User Authentication 🔐

The application handles user authentication using a login form. The `useLoginMutation` hook from the `loginApiSlice` is used for making API calls related to user authentication. 🔐

### Error Handling 🛡️

The application includes error handling, such as redirecting to the login page when encountering a 401 error during API calls. 🛡️

### Dependencies 📦

The project utilizes various dependencies, including:
- `react` and `react-dom` for building the UI. 🖥️
- `react-router-dom` for handling navigation. 🚦
- `redux` and `@reduxjs/toolkit` for state management. 🧮
- `react-query` for handling API queries. 🕵️‍♀️

### Running the Application 🚀

1. Clone the repository. 📥
2. Install dependencies using `npm install`. 📦
3. Run the application using `npm start`. 🏃‍♂️

### Conclusion 🎉

This E-Commerce web application showcases best practices in React and Redux state management. It provides users with an intuitive interface for browsing and purchasing products. Developers can extend and customize the application to meet specific requirements. 
