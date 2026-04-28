# 🔗 URL Shortener API
<img width="1600" height="779" alt="image" src="https://github.com/user-attachments/assets/242190c9-8120-4d8f-a3fc-3d8ed15c6b00" />
<img width="717" height="555" alt="image" src="https://github.com/user-attachments/assets/1c5e010c-aa73-45f6-ae41-e2cb2566b7cc" />


A full-stack URL Shortener application built using Node.js, Express.js, MongoDB Atlas, and vanilla HTML/CSS/JavaScript.

Users can:
- Shorten long URLs
- Create custom meaningful short links
- Redirect using short URLs
- Track click counts

---

# 🚀 Live Demo

URL :https://url-shortener-kqmq.onrender.com/

---
# Features
```bash
✅ Shorten long URLs
✅ Custom short URLs
✅ Redirect to original URL
✅ Click tracking
✅ REST API support
✅ MongoDB Atlas integration
✅ Frontend using HTML/CSS/JS
✅ Fully deployable on Render
```
--- 
# Tech Stack
```bash
Backend
|__Node.js
|__Express.js
|__MongoDB Atlas
|__Mongoose


Frontend
|__HTML
|__CSS
|__JavaScript


Deployment
|__Render
```
---
# Project Structure
```bash
url-shortener/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── urlController.js
│
├── models/
│   └── Url.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── urlRoutes.js
│
├── utils/
│   └── generateCode.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

# Future Improvements
QR Code Generation
URL Expiry
Authentication
Dashboard Analytics
User Accounts
Copy-to-Clipboard Button
Dark/Light Theme

👨‍💻 Author

Kavya Agarwal

⭐ Support

If you like this project, give it a ⭐ on GitHub.

---
# Installation
```bash
```
1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/url-shortener.git
```
2️⃣ Move Into Project
```bash
cd url-shortener
```
3️⃣ Install Dependencies
```bash
npm install express mongoose dotenv shortid valid-url cors
npm install --save-dev nodemon
```
🔐 Environment Variables

Create a .env file in the root directory.
```bash
PORT=5000

MONGO_URI=your_mongodb_connection_string
```
▶️ Run Project
Development Mode
```bash
npm run dev
```
Production Mode
```bash
npm start
```
