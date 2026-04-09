# Tournament-Project

## Project Overview
This project is a Tournament Bracket REST API that allows users to create and manage tournaments. Users can register teams, record match results, and automatically advance winners through rounds until a champion is determined. The API follows CRUD operations and is built using Node.js, Express, and a database.

---

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/tbell2000-ux/Tournament-Project.git

### 2. Navigate into the project in your terminal
cd Tournament-Project

### 3. Install dependencies
npm install

### 4. Create a .env file in the root folder
Add the following:

PORT=3000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_secret_key

### 5. Run the server
npm start

The server will run on:
http://localhost:3000

---

## API Endpoints (CRUD Documentation)

### Tournaments Resource

---

### Create Tournament
- Method: POST
- URL: /api/tournaments
- Required Parameters (Body):
{
  "name": "Tournament Name",
  "teams": ["Team A", "Team B"]
}

- Response:
{
  "message": "Tournament created successfully",
  "data": {
    "id": 1,
    "name": "Tournament Name",
    "teams": ["Team A", "Team B"]
  }
}

---

### Get All Tournaments
- Method: GET
- URL: /api/tournaments

- Response:
{
  "data": [
    {
      "id": 1,
      "name": "Tournament Name"
    }
  ]
}

---

### Get Tournament by ID
- Method: GET
- URL: /api/tournaments/:id

- Response:
{
  "data": {
    "id": 1,
    "name": "Tournament Name"
  }
}

---

### Update Tournament
- Method: PUT
- URL: /api/tournaments/:id
- Required Parameters (Body):
{
  "name": "Updated Tournament Name"
}

- Response:
{
  "message": "Tournament updated successfully"
}

---

### Delete Tournament
- Method: DELETE
- URL: /api/tournaments/:id

- Response:
{
  "message": "Tournament deleted successfully"
}

---

