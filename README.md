# bob-corn-challenge
This project was built as part of a code challenge for a frontend-focused role. The goal was to create a small full-stack application that allows clients to "buy corn" while enforcing a **rate limit of one corn per client per minute**.

Repository: https://github.com/cuajolote/bob-corn-challenge

---

## 📋 Requirements

### ✅ Backend
- ✅ Implement a rate limiter using a SQL database (SQLite)
- ✅ Clients can POST to buy corn
- ✅ Reject purchases if attempted more than once per minute (429 Too Many Requests)

### ✅ Frontend
- ✅ Users can buy corn with React and Backbone.js by clicking a button
- ✅ See a visual count of successful purchases
- ✅ Clear feedback on success/error
- ✅ Clean, responsive UI
- ✅ Bonus: clientId input, route structure, and simple navigation

---

## 🧱 Tech Stack

### 🖥️ Frontend
- [React (CRA)](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/)
- [Backbone.js](https://backbonejs.org/)

### ⚙️ Backend
- [Node.js + Express](https://expressjs.com/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Project Structure

bob-corn-challenge/
├── backend/
│ └── src/
│ └── index.ts # Express server and rate-limiting logic
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/ # Reusable UI components (BuyCornButton, Alert, etc.)
│ ├── hooks/ # useBuyCorn.ts
│ ├── pages/ # LandingPage.tsx, BuyCornPage.tsx
│ ├── routes/ # AppRoutes.tsx
│ ├── services/ # api.ts
│ ├── App.tsx
│ └── main.tsx

---

## 🚀 Getting Started

### 🧱 Backend

- cd backend
- npm install
- npm run dev
- The server will run at: http://localhost:3001

### 🖥️ Frontend

- cd frontend
- npm install
- npm start
- The app will run at: http://localhost:3000

### 📸 Screenshots

- Landing Page
![image](https://github.com/user-attachments/assets/f0a3b836-dbbb-4e2b-b778-c94e4b6a39db)
- Buy Corn Page (React + TS)
![image](https://github.com/user-attachments/assets/db257ab1-944a-429a-a0c5-956fe6f4548d)
- Buy Corn Page (Backbone.js)
<img width="2526" height="969" alt="image" src="https://github.com/user-attachments/assets/c99de9c0-2874-4cdc-a059-817ed99386da" />

