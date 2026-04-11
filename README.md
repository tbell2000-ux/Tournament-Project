# Tournament Project API

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

### 4. Run the server
npm start

The server will run on:
http://localhost:3000

---

## API Endpoints (CRUD Documentation) https://documenter.getpostman.com/view/52400511/2sBXitCTC5

### Tournaments Resource

---

### Create Tournament
- Method: POST
- URL: /api/tournaments
- Required Parameters (Body):
{
  "name": "Spring Cup"
}'
- Response:
{
  "status": "upcoming",
  "id": 1,
  "name": "Spring Cup",
  "updatedAt": "2026-04-09T20:28:07.036Z",
  "createdAt": "2026-04-09T20:28:07.036Z"
}

---

### Get All Tournaments
- Method: GET
- URL: /api/tournaments

- Response:
[]
---

### Get Tournament by ID
- Method: GET
- URL: /api/tournaments/:id

- Response:
{
  "id": 2,
  "name": "Spring Cup",
  "status": "upcoming",
  "createdAt": "2026-04-09T20:56:04.032Z",
  "updatedAt": "2026-04-09T20:56:04.032Z"
}

---

### Update Tournament
- Method: PUT
- URL: /api/tournaments/:id
- Required Parameters (Body):
{
  "name": "Summer Cup",
  "status": "ongoing"
}'
- Response:
{
  "id": 1,
  "name": "Summer Cup",
  "status": "ongoing",
  "createdAt": "2026-04-09T20:28:07.036Z",
  "updatedAt": "2026-04-09T20:46:50.327Z"
}
---

### Delete Tournament
- Method: DELETE
- URL: /api/tournaments/:id

- Response:
{
  "message": "Tournament deleted"
}
---

