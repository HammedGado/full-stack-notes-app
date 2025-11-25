📘 Notes App (React + Express + Postgres)

This is a full-stack CRUD Notes Application built with:

React (Vite) – Frontend

Express.js – Backend API

PostgreSQL – Database

Node.js – Server environment

The app allows users to:

✔ Create notes
✔ View notes
✔ Edit notes
✔ Delete notes
✔ Search notes (Extra Credit)

This project demonstrates full end-to-end communication between a frontend client and an Express REST API connected to a Postgres database.


🚀 Features
✔ Full CRUD

Create a new note

Read all notes

Update existing notes

Delete a note

✔ Search (Extra Credit)

Search filters notes in real-time by title or content.

✔ PostgreSQL Integration

All notes are stored in a Postgres database.

✔ Environment Variables

Sensitive data is hidden using .env and .gitignore.

✔ Deployed Full-Stack Application

Backend & frontend deployed on cloud hosting.



🗂 Project Structure
full-stack-app/
│
├── server/        # Express + Postgres backend
│   ├── index.js
│   ├── db.js
│   ├── .env
│   └── package.json
│
└── client/        # React (Vite) frontend
    ├── src/
    ├── .env
    └── package.json


⚙️ Backend Setup (Express + Postgres)
1. Install dependencies
cd server
npm install

2. Create .env file
PGHOST=localhost
PGPORT=5432
PGDATABASE=your_database
PGUSER=your_user
PGPASSWORD=your_password
PORT=5050

3. Start backend
npm start



🎨 Frontend Setup (React + Vite)
1. Install dependencies
cd client
npm install

2. Create .env file
VITE_API_BASE_URL="http://localhost:5050"

3. Start frontend
npm run dev


🧪 Testing the App
Visit:
➡ Frontend: http://localhost:5173
➡ Backend test route: http://localhost:5050/api/health
➡ Get all notes: http://localhost:5050/api/notes


☁️ Deployment
Backend can be deployed on:

Render

Railway

Heroku

Fly.io

Frontend can be deployed on:

Vercel

Netlify

Deployment requires:

Setting environment variables on the platform

Updating VITE_API_BASE_URL in the frontend .env to your deployed backend URL



🙌 Extra Credit Completed

Search bar filtering notes in real time.

📌 Final Notes

This project fulfills all the requirements of the full-stack assignment:

React frontend

Express backend

Postgres database

CRUD routes

Environment variables

Deployment ready

Extra credit included
