# The Internet Folks SDE Assignment

## Project Description

This project is a community management system built with Node.js, Express, and MongoDB. It allows users to create and manage communities, add members, assign roles, and handle authentication.

## Features

- User authentication (signup and signin)
- Create and manage communities
- Add and remove members from communities
- Assign roles to members
- Middleware for authentication and role-based access control

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/the-internet-folks-sde-assignment.git
    cd the-internet-folks-sde-assignment
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```properties
    PORT=5000
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_secret_key
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Authentication

- `POST /v1/auth/signup` - Register a new user
- `POST /v1/auth/signin` - Login a user

### Communities

- `POST /v1/communities` - Create a new community (requires authentication)
- `GET /v1/communities` - Get all communities
- `GET /v1/communities/me` - Get communities owned by the authenticated user

### Members

- `POST /v1/communities/:communityId/members` - Add a member to a community (requires authentication and admin role)
- `GET /v1/communities/:communityId/members` - Get all members of a community (requires authentication)
- `DELETE /v1/communities/:communityId/members/:userId` - Remove a member from a community (requires authentication and admin role)

## License

This project is licensed under the MIT License.