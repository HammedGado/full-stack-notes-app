# 📝 Notes App (React + Express + PostgreSQL)

A full-stack CRUD Notes Application built using:

- **React (Vite)** — Frontend  
- **Express.js** — Backend API  
- **PostgreSQL** — Database  
- **Node.js** — Server environment  

This app allows users to create, read, update, delete, and search notes.  
It demonstrates full end-to-end communication between a React client and an Express REST API connected to a PostgreSQL database.

---

## 🚀 Features

### ✔ Full CRUD Functionality
- Create a new note  
- View all notes  
- Edit existing notes  
- Delete a note  

### ✔ Search (Extra Credit)
- Real-time filtering of notes  
- Searches through both **title** and **content**

### ✔ PostgreSQL Integration
- All notes are saved to a PostgreSQL database  
- API routes perform async SQL queries using `pg`  

### ✔ Environment Variables
Sensitive data is secured using:
- `.env`  
- `.gitignore`  

### ✔ Deployment Ready
Backend + frontend structured for easy deployment on modern cloud platforms.

---

## 🗂 Project Structure
full-stack-app/
│
├── server/ # Express + PostgreSQL backend
│ ├── index.js
│ ├── db.js
│ ├── .env
│ └── package.json
│
└── client/ # React (Vite) frontend
├── src/
├── .env
└── package.json



---

## ⚙️ Backend Setup (Express + Postgres)

### 1️⃣ Install dependencies
```bash
cd server
npm install

2️⃣ Create .env
PGHOST=localhost
PGPORT=5432
PGDATABASE=your_database
PGUSER=your_user
PGPASSWORD=your_password
PORT=5050

3️⃣ Start backend
npm start


🎨 Frontend Setup (React + Vite)
1️⃣ Install dependencies
cd client
npm install

2️⃣ Create .env
VITE_API_BASE_URL="http://localhost:5050"

3️⃣ Start frontend
npm run dev


## 🧪 Testing the Application

### 🔗 Local URLs

**Frontend:**  
👉 http://localhost:5173

**Backend Health Check:**  
👉 http://localhost:5050/api/health

**Get All Notes:**  
👉 http://localhost:5050/api/notes

---

# ✅ Next Step  
 After README you want to:

### 👉 **Commit to GitHub**  
Then  
### 👉 **Deploy the project**



☁️ Deployment Guide
Backend Can Be Deployed To:

Render

Railway

Heroku

Fly.io

Frontend Can Be Deployed To:

Vercel

Netlify

Deployment Requirements:

Set environment variables on the hosting platform

Update frontend .env:
VITE_API_BASE_URL="https://your-deployed-backend.com"


🙌 Extra Credit Completed

✔ Real-time search filtering


📌 Final Notes

This project fulfills all the requirements of the full-stack assignment:

React frontend

Express backend

PostgreSQL database

CRUD operations

Environment variable protection

Proper project structure

Deployment ready

Extra credit included

