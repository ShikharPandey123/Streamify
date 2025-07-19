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

# Mongo<img width="1858" height="841" alt="Screenshot 2025-07-20 012937" src="https://github.com/user-attachments/assets/8<img width="1866" height="837" alt="Screenshot 2025-07-20 013003" src="https://gi<img width="1477" height="805" alt="Screenshot 2025-07-20 013440" src="https://github.com/user-attachments/assets/58863ab7-31f9-43e0-b291-7c3ac76bf515" />
thub.com/user-attachments/assets/d4afcd45-7d6d-4b22-87c6-860ac5a0bbe1" />
c0a7d6d-ada4-4a3c-aeb7-57ae49e28515" />

MONGO_URI=mongodb://localhost:27017/streamify

# JWT<img width="1858" height="841" alt="Screenshot 2025-07-2<img width="707" height="418" alt="Screenshot 2025-07-20 013520" src="https://github.com/user-attachments/assets/f37e894c-8752-41bf-8b93-11b70773b9af" />
0 012937" src="https://github.com/user-attachments/assets/728f0bea-7931-4e03-bb74-3223e31f2489" />

JWT_SECRET_KEY=your_jwt_secret

# Stream Chat
STREAM_API_KEY=your_stream_api_key
STREAM_SECRET=your_stream_secret

# PORT
PORT=5000

