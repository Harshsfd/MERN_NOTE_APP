# 📝 MERN Note App

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb" alt="MERN"/>
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Backend-Express-lightgrey?style=for-the-badge&logo=node.js" alt="Express"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge&logo=mongodb" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge&logo=jsonwebtokens" alt="JWT"/>
</p>

**A secure, responsive note-taking web application built with the MERN stack.**  
Users can register/login and perform full CRUD operations on personal notes. Focus on simplicity, security (JWT), and deployability.

---

## 🔗 Quick links
- Repository: https://github.com/Harshsfd/mern-note-app  
- Live Demo: https://mern-note-app-cyan.vercel.app/ (replace / update if needed)

---

## 📋 Table of Contents
1. [Features](#-features)  
2. [Tech Stack](#-tech-stack)  
3. [Project Structure](#-project-structure)  
4. [Prerequisites](#-prerequisites)  
5. [Installation — Quick Start](#-installation--quick-start)  
6. [Backend — Setup & Run](#-backend--setup--run)  
7. [Frontend — Setup & Run](#-frontend--setup--run)  
8. [API Endpoints](#-api-endpoints)  
9. [Deployment (Production)](#-deployment-production)  
10. [Environment & Security Notes](#-environment--security-notes)  
11. [Screenshots](#-screenshots)  
12. [Contributing](#-contributing)  
13. [Roadmap / Future Improvements](#-roadmap--future-improvements)  
14. [License & Author](#-license--author)

---

## ✨ Features
- ✅ User registration & login (JWT authentication)  
- ✅ Create, Read, Update, Delete notes (only by owner)  
- ✅ Password hashing with **bcrypt**  
- ✅ Protected API routes using JWT  
- ✅ Clean & responsive React front-end  
- ✅ CORS-enabled backend for SPA usage  
- ✅ Easy deployment to Vercel / Render / MongoDB Atlas

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios, React Router  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Atlas recommended)  
- **Auth:** JSON Web Tokens (JWT), bcrypt  
- **Dev Tools:** nodemon (development), dotenv  
- **Hosting:** Vercel (frontend), Render / Heroku (backend), MongoDB Atlas (DB)

---

## 📂 Project Structure

mern-note-app/ ├─ client/                # React app (frontend) │  ├─ public/ │  └─ src/ ├─ server/                # Express app (backend) │  ├─ controllers/ │  ├─ middleware/ │  ├─ models/ │  ├─ routes/ │  └─ server.js (or app.js) ├─ .gitignore ├─ README.md └─ LICENSE

---

## ⚙️ Prerequisites
- Node.js (v16+ recommended) & npm  
- MongoDB Atlas account (or local MongoDB)  
- Git

---

## 🚀 Installation — Quick Start

Clone repository and follow backend + frontend steps:

```bash
git clone https://github.com/Harshsfd/mern-note-app.git
cd mern-note-app


---

🧩 Backend — Setup & Run

1. Go to server folder and install dependencies:



cd server
npm install

2. Create .env file in server/:



MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=some_strong_random_secret
PORT=5000

3. Run server (development):



# from server/ folder
npm run dev   # assumes script uses nodemon; otherwise `node server.js`

Typical package.json scripts (server):

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


---

🖥 Frontend — Setup & Run

1. Install dependencies:



cd ../client
npm install

2. Create .env in client/:



REACT_APP_API_URL=http://localhost:5000   # Update if backend port differs

3. Run frontend:



npm start

Now open http://localhost:3000 to view the app.


---

🔌 API Endpoints (example)

> Base: http://localhost:5000/api



Auth

POST /api/auth/register
Request body:

{ "name": "Harsh", "email": "harsh@example.com", "password": "password123" }

Response: user object or error.

POST /api/auth/login
Request body:

{ "email": "harsh@example.com", "password": "password123" }

Response:

{ "token": "JWT_TOKEN_HERE", "user": { "id": "...", "email": "..." } }


Notes (protected — require Authorization header)

GET /api/notes — get all notes for logged-in user

POST /api/notes — create a note
Body:

{ "title": "Note title", "content": "Note content" }

GET /api/notes/:id — get single note by id (owner only)

PUT /api/notes/:id — update note (owner only)

DELETE /api/notes/:id — delete note (owner only)


Authorization header (example):

Authorization: Bearer <JWT_TOKEN_HERE>

Sample curl (login + get notes):

# login
curl -X POST http://localhost:5000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"harsh@example.com","password":"password123"}'

# get notes (replace token)
curl http://localhost:5000/api/notes \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5..."


---

🛡 Environment & Security Notes

Never commit .env or .venv to Git. Use .gitignore.

Use strong JWT_SECRET and secure your DB credentials (MongoDB Atlas offers IP whitelisting & SRV).

Consider HTTPS in production and refresh-token flows for long-term sessions.


Recommended .gitignore:

# node / npm
node_modules/
npm-debug.log

# env
.env

# OS
.DS_Store

# editor
.vscode/
.idea/

# frontend
client/node_modules/


---

📦 Deployment (short guide)

Frontend (Vercel)

1. Push client to GitHub (or entire repo).


2. Create a Vercel project and connect to repo.


3. Set environment variable REACT_APP_API_URL to your backend URL (production).


4. Deploy.



Backend (Render / Heroku)

1. Create new web service in Render or Heroku.


2. Connect GitHub repo and choose server/ as root (or configure start command).


3. Set environment variables: MONGO_URI, JWT_SECRET, PORT.


4. Deploy.



MongoDB Atlas

Create cluster, get connection string, add DB user & whitelist host/IP (or use 0.0.0.0/0 for testing but not recommended for production).



---

📸 Screenshots / Demo

> Replace these placeholders with real screenshots or an animated GIF of the app in action.



<p align="center">
  <img src="https://via.placeholder.com/900x450?text=Login+Page" alt="Login Page" />
</p><p align="center">
  <img src="https://via.placeholder.com/900x450?text=Notes+Dashboard" alt="Notes Dashboard" />
</p>
---

🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repo


2. Create a branch: git checkout -b feature-name


3. Commit your changes: git commit -m "feat: add X"


4. Push to the branch: git push origin feature-name


5. Open a Pull Request



Please follow conventional commits / simple descriptive messages.


---

🧭 Roadmap / Future Improvements

Add tags & search for notes

Rich-text editor for notes

Sharing notes between users (permissions)

Offline mode / PWA support

Integrate unit & integration tests (Jest, Supertest)



---

📜 License

This project is released under the MIT License — see the LICENSE file for details.

Short license header:

MIT License

Copyright (c) 2024 Harsh Bhardwaj
...
(put full MIT text in LICENSE file)


---

👨‍💻 Author & Contact

Harsh Bhardwaj

Email: harshbhardwajsfd@gmail.com

Portfolio: https://harshbhardwaj-portfolio.vercel.app

LinkedIn: https://www.linkedin.com/in/harshsfd

GitHub: https://github.com/Harshsfd



---

> If you want, I can:

generate a ready-to-use .gitignore file and push it for you,

create a LICENSE file with the full MIT text,

add sample Postman collection or sample seed data,

insert real screenshots/GIFs into README (you can upload images to repo or use Imgur).
Tell me which of the above you want next and I’ll provide the exact files/commands.




---



