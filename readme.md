# 🌟 MERN Note App

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-MERN-3C873A?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Open%20Source-💻-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>  

<p align="center">
  <img src="https://img.shields.io/github/stars/Harshsfd/mern-note-app?style=social" />
  <img src="https://img.shields.io/github/forks/Harshsfd/mern-note-app?style=social" />
</p>  

---

A secure ✨ **Note Taking Application** built with the **MERN Stack (MongoDB, Express, React, Node.js)**.
Users can **sign up, log in, and manage notes** with authentication and CRUD operations. 🚀

🔗 **Live Demo:** 👉 [MERN Note App](https://mern-note-app-cyan.vercel.app/)

---

## ✨ Features

✅ 👤 **User Authentication** (Signup & Login with JWT)
✅ 🔒 **Protected Routes** (only for authorized users)
✅ 📝 **CRUD Notes** (Create, Read, Update, Delete)
✅ 🔐 **Secure Passwords** with bcrypt
✅ 🌍 **CORS-enabled API** + Frontend communication
✅ 📱 **Responsive UI** (Mobile + Desktop Friendly)
✅ 🚀 **Deployment ready** (Vercel + Render + MongoDB Atlas)

---

## 🛠️ Tech Stack

| Layer             | Technologies                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🎨 **Frontend**   | [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)](https://react.dev/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge\&logo=axios\&logoColor=white)](https://axios-http.com/) [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=react-router\&logoColor=white)](https://reactrouter.com/) |
| ⚙️ **Backend**    | [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)                                                                                                                                                                        |
| 🗄️ **Database**  | [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)](https://www.mongodb.com/atlas)                                                                                                                                                                                                                                                                       |
| 🔑 **Auth**       | [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge\&logo=JSON%20web%20tokens)](https://jwt.io/) [![bcrypt](https://img.shields.io/badge/bcrypt-003B57?style=for-the-badge)](https://www.npmjs.com/package/bcrypt)                                                                                                                                                                                 |
| ☁️ **Deployment** | [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)](https://vercel.com/) [![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge\&logo=render\&logoColor=black)](https://render.com/)                                                                                                                                                     |

---

## 📂 Project Structure

```bash
mern-note-app/
│── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # App Pages (Login, Signup, Notes)
│   │   ├── utils/       # API helper functions
│   │   └── App.js       # Main App
│   └── package.json
│
│── server/              # Node.js + Express Backend
│   ├── models/          # Mongoose Models
│   ├── routes/          # API Routes
│   ├── middleware/      # JWT Auth Middleware
│   ├── server.js        # Entry Point
│   └── package.json
│
│── README.md
│── .gitignore
```

---

## ⚡ Installation & Setup

### 🔹 1. Clone the repository

```bash
git clone https://github.com/Harshsfd/mern-note-app.git
cd mern-note-app
```

### 🔹 2. Backend Setup

```bash
cd server
npm install
```

Create a **`.env`** file inside `server/`

```env
MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
PORT=5000
```

Run the server:

```bash
npm start
```

### 🔹 3. Frontend Setup

```bash
cd client
npm install
```

Create a **`.env`** file inside `client/`

```env
REACT_APP_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm start
```

---

## ▶️ Usage

1️⃣ Open → `http://localhost:3000`
2️⃣ Sign up for a new account ✨
3️⃣ Log in and start creating notes 📝
4️⃣ Manage (Edit/Delete) notes securely 🔒

---

## 🚀 Future Scope

* 🌙 Dark Mode Support
* 🔎 Search & Filter Notes
* 📤 Share Notes with Others
* ✨ Rich Text Editor

---

## 🤝 Contributing

🙌 Contributions are welcome!
👉 Fork this repo & create a **pull request**.

---

## 📜 License

📄 Licensed under the **MIT License**.

---

## 👤 Author

**Harsh Bhardwaj**

* 📧 [harshbhardwajsfd@gmail.com](mailto:harshbhardwajsfd@gmail.com)
* 🌐 [Portfolio](https://harshbhardwaj-portfolio.vercel.app)
* 💼 [LinkedIn](https://www.linkedin.com/in/harshsfd)
* 🐙 [GitHub](https://github.com/Harshsfd)

---

⭐ If you like this project, don’t forget to **star the repo**! ⭐

---