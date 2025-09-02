# 📝 MERN Note App  

A secure **Note Taking Application** built with the **MERN Stack (MongoDB, Express, React, Node.js)**.  
Users can **sign up, log in, and manage personal notes** with authentication and CRUD operations. 🚀  

🔗 **Live Demo:** 👉 [MERN Note App](https://mern-note-app-cyan.vercel.app/)  

---

## ✨ Features  
- 👤 User Authentication (**Signup & Login with JWT**)  
- 🔒 Protected Routes (only for authorized users)  
- 📝 Create, Read, Update, Delete (**CRUD Notes**)  
- 🔐 Secure Passwords with **bcrypt**  
- 🌍 API + Frontend communication with **CORS**  
- 📱 Responsive UI (**Mobile + Desktop Friendly**)  
- 🚀 Deployment ready (**Vercel + Render + MongoDB Atlas**)  

---

## 🛠️ Tech Stack  
- **Frontend:** [React.js](https://react.dev/), [Axios](https://axios-http.com/), [React Router](https://reactrouter.com/)  
- **Backend:** [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)  
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)  
- **Authentication:** [JWT](https://jwt.io/) & [bcrypt](https://www.npmjs.com/package/bcrypt)  
- **Deployment:** [Vercel](https://vercel.com/) (frontend), [Render](https://render.com/) (backend)  

---

## 📂 Project Structure

mern-note-app/ │── client/              # React Frontend │   ├── src/ │   │   ├── components/  # UI Components │   │   ├── pages/       # App Pages (Login, Signup, Notes) │   │   ├── utils/       # API helper functions │   │   └── App.js       # Main App │   └── package.json │ │── server/              # Node.js + Express Backend │   ├── models/          # Mongoose Models │   ├── routes/          # API Routes │   ├── middleware/      # JWT Auth Middleware │   ├── server.js        # Entry Point │   └── package.json │ │── README.md │── .gitignore

---

## ⚡ Installation & Setup  

1️⃣ Clone the repository  
```bash
git clone https://github.com/Harshsfd/mern-note-app.git
cd mern-note-app

2️⃣ Backend Setup

cd server
npm install

Create a .env file inside server/

MONGO_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
PORT=5000

Run the server:

npm start

3️⃣ Frontend Setup

cd client
npm install

Create a .env file inside client/

REACT_APP_API_URL=http://localhost:5000

Run the frontend:

npm start


---

▶️ Usage

1. Open the app in your browser: http://localhost:3000


2. Sign up for a new account


3. Log in and start creating notes 📝


4. Manage (Edit/Delete) notes securely




---

🚀 Future Scope

[ ] Dark Mode Support 🌙

[ ] Search & Filter Notes 🔎

[ ] Share Notes with Others 📤

[ ] Rich Text Editor ✨



---

🤝 Contributing

Contributions are welcome! Please fork this repo and create a pull request.


---

📜 License

This project is licensed under the MIT License.


---

👤 Author

Harsh Bhardwaj

📧 harshbhardwajsfd@gmail.com

🌐 Portfolio

💼 LinkedIn

🐙 GitHub



---

⭐ If you like this project, don’t forget to star the repo!

---



