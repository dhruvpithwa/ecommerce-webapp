# Product Listing Page
A fully responsive product listing page built with Next.js, Redux, and Material-UI and deployed on Netlify.

## Table of Contents
- [Architecture](#architecture)
- [Basic Features](#basic-features)
- [Additional Features](#additional-features)
- [Getting Started](#getting-started)

## Architecture

### Links
- https://dpecommerce.netlify.app/product-list/electronics
- https://dpecommerce.netlify.app/product-list/men's%20clothing

### Product Listing Page Architecture

#### 1. Initial Load with Server-Side Rendering (SSR)
- When a user navigates to the product listing page, the request is first handled by the Next.js server deployed on Netlify.
- The server fetches the necessary product data from the REST API (e.g., fakeStoreApi.com).
- The fetched data is then transformed as needed and the page is rendered on the server side.
- The rendered HTML is sent to the client, ensuring fast initial load times and better SEO.

#### 2. Dynamic Interactions with Client-Side Rendering (CSR)
- When users apply sorting or filtering to the product list, the client sends requests to the server to fetch the updated product data.
- This enables real-time updates and dynamic interactions without requiring a full page reload.
- The updated product data is then rendered client-side, providing a smooth and responsive user experience.

#### 3. State Management with Redux
- The initial data fetched during SSR is hydrated into the client-side Redux store.
- Redux is used to manage the product data state, allowing for efficient state updates and re-rendering as users interact with the page.
- This ensures that the client side has the initial data available immediately, reducing additional network requests.

By combining SSR for the initial page load and CSR for dynamic interactions, along with efficient state management using Redux, the product listing page delivers a fast, SEO-friendly, and responsive user experience.

![Flow_Diag](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/11ec0b79-b167-471b-873e-6851d206b290)

### Screenshots
![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/8596fe4c-2b01-41ca-91cb-dc0cbd0ae425)
![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/19b020f3-a359-43e9-88b0-ee8a1f04ab45)

## Basic Features

#### Responsive Design 
- Fully responsive and works across various devices
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/8596fe4c-2b01-41ca-91cb-dc0cbd0ae425)
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/19b020f3-a359-43e9-88b0-ee8a1f04ab45)

#### Sorting & Filtering
- Added a support of filtering products based on sorting and searching
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/eb716320-17ca-4496-bb0e-09e50ef7d287)

#### Autocomplete Product Search
- Developed a full text autocomplete search with suggestions to search all products available in the inventory.
- Added **debouncing** to reduce frequent API calling
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/36405ecf-845e-4efc-92f4-702923373d31)

#### Modular Component Design & Resuable Components
- Followed modular design and developed resusable components to make the application scalable and development efficient

## Additional Features

#### Category based routing
- Supported individual category based routing inorder to improve SEO score
- https://dpecommerce.netlify.app/product-list/electronics
- https://dpecommerce.netlify.app/product-list/men's%20clothing

#### Top Rated Products
- Developed a higher order component over a common product card component to highlight products with red border line (minimal changes) whose rating is more than 4.
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/f134d61b-e5d6-4496-a172-dea93eb6daa9)

#### Intersection Browser
- Developed a feature to track user's interest on a particular products if focussed for more than x seconds using Intersection Browser API.
- This data can be tracked at Google Analytics and thus can be used further for user segmentation
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/06bafc6b-9f60-4341-8c55-495cf0059678)
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/f18c15c9-119f-4af1-a62d-36f0770e0747)

#### Cart Utility
- Developed mini cart utility to support add to cart operation, whenever add to cart button is clicked and this can be extended further to support all cart operations
- ![image](https://github.com/dhruvpithwa/ecommerce-webapp/assets/49706789/7c8fc09b-6a5e-4881-ab69-e20dd0750515)

#### Unit Testing of components
- Added unit test cases using JEST to support test driven development and cover different scenarios

#### Translation Support
- Developed a small custom utility to support translations in the application

## Getting Started
To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js (>= 18.x)
- npm or yarn

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/dhruvpithwa/ecommerce-webapp/
    ```
2. Navigate to the project directory:
    ```sh
    cd ecommerce-webapp
    ```
3. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Development Server
Start the development server:
```sh
npm run dev
# or
yarn dev

