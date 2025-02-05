# 📦 Project: Session Middleware

## 🚀 Overview
This project implements a **custom middleware** for managing session data in an Express.js server. The session data is **persistent**, meaning it remains intact even after the server restarts.

## ✨ Features
- **Session Persistence:** Keeps session data stored in `logs/sessions.json`.
- **Automatic Session Handling:** Automatically assigns a session ID if not provided.
- **Custom Headers:** Uses `X-Session-Id` to track sessions securely.

## ⚙️ Setup Instructions
1. **Clone the repository:**  
   ```bash
   git remote add origin https://github.com/dalya03/demo25.git
   cd demo25
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Run the server:**  
   ```bash
   node server.mjs
   ```

4. **Test the session middleware:**  
   Open `http://localhost:8000/` in your browser or use Postman to make requests.

## 🔍 How It Works
- The middleware checks for an `X-Session-Id` header.
- If missing, it generates a new session ID.
- Session data is saved in `logs/sessions.json`.
- On server restart, sessions are loaded from this file.

## 🧪 Example
**Request:**
```bash
curl -i http://localhost:8000/
```
**Response:**
```json
Hello World. Session Created At: 2025-02-05T12:34:56.789Z
```

## 💡 Notes
- Ensure the `logs` directory exists for session storage.
- Sessions are saved after every request for data consistency.

🗂️ Folder Structure
```
demo25/
├── modules/
│   └── sessionMiddleware.mjs
├── utils/
├── server.mjs
├── package.json
└── logs/
    └── sessions.json
```

