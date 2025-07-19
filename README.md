# 🌐 Streamify — Real-Time Language Learning Social Platform

**🔗 Live Demo:**  
👉 [https://streamify-8sh2.onrender.com](https://streamify-8sh2.onrender.com)

---

## ✨ Overview

**Streamify** is a real-time social web app that helps users connect with language learners across the globe. With live messaging, friend suggestions, and a vibrant UI, it provides a rich learning and social experience — now with typing indicators, emoji reactions, and 32 unique UI themes!

---

## 🚀 Features

- 👤 User Registration, Login, Onboarding
- 🤝 Send & Accept Friend Requests
- 🔔 Notification Center
- 🧠 User Recommendations
- 💬 **Real-Time Chat** with:
  - ✅ Typing Indicators
  - ✅ Emoji Reactions
  - ✅ Threaded Messages
- 🌍 Location Autocomplete (OpenStreetMap)
- 🖼️ RoboHash Random Avatar Generator
- 📱 Fully Responsive UI + Mobile Drawer Sidebar
- 🌈 32 DaisyUI Themes (dark/light + custom)
- 🔐 Secure Cookie-based JWT Auth
- 🧭 Route Management via React Router

---

## 🧩 Tech Stack

### Frontend

| Tech                | Description                                |
|---------------------|--------------------------------------------|
| **React**           | SPA framework                              |
| **React Router DOM**| Routing                                    |
| **Tailwind CSS**    | Utility-first CSS framework                |
| **DaisyUI**         | Tailwind UI components + themes            |
| **Lucide React**    | Clean, modern icon set                     |
| **React Query**     | Server state management (TanStack)         |
| **Stream Chat SDK** | Real-time chat (stream-chat-react)         |
| **react-hot-toast** | Toast notifications                        |

### Backend

| Tech                | Description                                |
|---------------------|--------------------------------------------|
| **Node.js + Express** | RESTful API server                       |
| **MongoDB + Mongoose** | Database for user & friend data        |
| **JWT**             | Auth token generation & validation         |
| **cookie-parser**   | Middleware for reading auth cookie         |
| **dotenv**          | Environment variables                      |
| **CORS**            | Cross-origin requests                      |

---

## 💬 Real-Time Messaging

[Stream Chat](https://getstream.io):

- 🔒 Token-secured channel access
- 📡 Typing indicators & emoji reactions
- 📬 Message threads, user presence, message history
- ⚙️ Permission-based channel roles (`ReadChannel`, `CreateChannel`)

## 🧰 Setup

### 1. Clone & Install
```bash
git clone https://github.com/your-org/streamify.git
cd streamify
npm install

# Mongo
MONGO_URI=mongodb://localhost:27017/streamify

# JWT
JWT_SECRET_KEY=your_jwt_secret

# Stream Chat
STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret

# PORT
PORT=5000
<img width="707" height="418" alt="Screenshot 2025-07-20 013520" src="https://github.com/user-attachments/assets/d9b021da-bbf0-4d79-b461-32b504cd0e6a" />
<img width="1477" height="805" alt="Screenshot 2025-07-20 013440" src="https://github.com/user-attachments/assets/c27fc973-7b38-48c0-bdbb-9b42c2c04517" />
<img width="1866" height="837" alt="Screenshot 2025-07-20 013003" src="https://github.com/user-attachments/assets/619f3dbe-b65a-445b-a897-8faa6c2658c5" />
<img width="1858" height="841" alt="Screenshot 2025-07-20 012937" src="https://github.com/user-attachments/assets/e22a2f1a-697f-4ca0-bfbc-3f6b98a5fd09" />

