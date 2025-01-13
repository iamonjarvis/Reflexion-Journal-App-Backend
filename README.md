# Reflexion - Backend

This is the backend for the **Reflexion** personal journal web app. It handles user authentication and provides APIs to manage journal entries. The server is built with Node.js, Express, and MongoDB.

## Features
- **User Authentication**: Sign up and login functionality using email and password.
- **Journal Entry Management**: Create, view, update, and delete journal entries.
- **JWT Authentication**: Secure API access using JSON Web Tokens (JWT).

## Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Environment Variables**: .env (for storing sensitive data like JWT secrets, MongoDB URI)

## Setup Instructions

1. Clone the repository:

git clone https://github.com/your-username/Reflexion-Journal-Backend.git

2. Install dependencies:

cd backend
npm install

3. Configure Environment Variables:

Create a .env file in the root of the backend directory and add the following configuration:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the application:

npm start

Your backend will be running on http://localhost:5000.
API Endpoints
1. User Authentication
Sign Up

    Endpoint: POST /api/auth/signup
    Request Body:

{
  "username": "testuser",
  "password": "password123"
}

Example cURL Command:

    curl -X POST http://localhost:5000/api/auth/signup \
    -H "Content-Type: application/json" \
    -d '{"username": "testuser", "password": "password123"}'

Login

    Endpoint: POST /api/auth/login
    Request Body:

{
  "username": "testuser",
  "password": "password123"
}

Example cURL Command:

    curl -X POST http://localhost:5000/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"username": "testuser", "password": "password123"}'

2. Journal Entries
Get All Journal Entries

    Endpoint: GET /api/journal
    Headers:

{
  "Authorization": "Bearer <YOUR_TOKEN>"
}

Example cURL Command:

    curl -X GET http://localhost:5000/api/journal \
    -H "Authorization: Bearer <YOUR_TOKEN>"

Get Journal Entry for a Specific Date

    Endpoint: GET /api/journal?date=YYYY-MM-DD
    Headers:

{
  "Authorization": "Bearer <YOUR_TOKEN>"
}

Example cURL Command:

    curl -X GET "http://localhost:5000/api/journal?date=2025-01-01" \
    -H "Authorization: Bearer <YOUR_TOKEN>"

Create a New Journal Entry

    Endpoint: POST /api/journal
    Headers:

{
  "Authorization": "Bearer <YOUR_TOKEN>"
}

Request Body:

{
  "date": "2025-01-01",
  "content": "Today was a great day!"
}

Example cURL Command:

    curl -X POST http://localhost:5000/api/journal \
    -H "Authorization: Bearer <YOUR_TOKEN>" \
    -H "Content-Type: application/json" \
    -d '{"date": "2025-01-01", "content": "Today was a great day!"}'

Update a Journal Entry

    Endpoint: PUT /api/journal/:date
    Headers:

{
  "Authorization": "Bearer <YOUR_TOKEN>"
}

Request Body:

{
  "content": "Updated content for the journal."
}

Example cURL Command:

    curl -X PUT http://localhost:5000/api/journal/2025-01-01 \
    -H "Authorization: Bearer <YOUR_TOKEN>" \
    -H "Content-Type: application/json" \
    -d '{"content": "Updated content for the journal."}'

3. Common Notes

    Replace <YOUR_TOKEN> with the JWT token you receive after logging in.
    The Authorization header is required for all journal-related requests.
    Ensure the date is in the format YYYY-MM-DD.

License

This project is licensed under the MIT License.
Acknowledgments

    Thanks to all the contributors and libraries that made this project possible.


---

This `README.md` contains everything from project setup to API usage instructions. Feel free to adjust it according to your project details.
