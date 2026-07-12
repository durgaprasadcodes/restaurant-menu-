# 🍽️ Chef Menu

<div align="center">

### A Modern Restaurant Menu Application Built with React ⚛️

**Discover dishes, explore recipes, and enjoy a seamless dining experience.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios)
![JSON Server](https://img.shields.io/badge/JSON_Server-Backend-black?style=for-the-badge)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Frontend-000000?style=for-the-badge&logo=vercel)

</div>

---

# 📖 Overview

Chef Menu is a fully responsive restaurant menu application that simulates a real-world food ordering platform.

Users can browse dishes, search meals instantly, filter by category, and open dedicated recipe pages containing preparation instructions and pricing.

The application follows a clean frontend-backend architecture where the React application communicates with a REST API powered by JSON Server.

---

# ✨ Features

## 🎯 Frontend

- Beautiful premium UI
- Fully responsive layout
- Dynamic menu rendering
- Instant search
- Category filtering
- Loading animations
- Recipe detail pages
- React Router navigation
- Error handling
- Clean component architecture

---

## ⚙ Backend

- REST API using JSON Server
- Hosted on Render
- Food dataset served through API
- Individual food endpoints
- Simple and scalable API structure

Example Endpoints

```http
GET /foods
```

```http
GET /foods/:id
```

---

# 🏗 Project Architecture

```
Chef Menu
│
├── Frontend (React + Vite)
│      │
│      ├── Home Page
│      ├── Search
│      ├── Category Filter
│      ├── Item Details
│      └── Axios
│
│
└── Backend (JSON Server)
       │
       ├── db.json
       ├── REST API
       └── Render Deployment
```

---

# 🚀 Tech Stack

## Frontend

- React
- Vite
- React Router DOM
- Axios
- CSS3

## Backend

- JSON Server
- Node.js

## Deployment

- Vercel
- Render

---

# 📂 Folder Structure

```
src
│
├── components
│
├── pages
│   ├── Home.jsx
│   └── Item.jsx
│
├── api.js
│
├── App.jsx
│
└── main.jsx
```

---

# 🔄 Application Flow

```
User

   │

   ▼

React UI

   │

Axios Requests

   │

Render API

   │

JSON Server

   │

Food Database

   │

Response

   │

React Components

   │

Displayed to User
```

---

# 📸 Screens

- 🏠 Home Page
- 🔍 Live Search
- 🍕 Category Filtering
- 📖 Recipe Details
- 📱 Responsive Design

---

# ⚡ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/chef-menu.git
```

Move into project

```bash
cd chef-menu
```

Install dependencies

```bash
npm install
```

Create a `.env`

```env
VITE_API_URL=http://localhost:3000
```

Run development server

```bash
npm run dev
```

---

# 🌍 Production

Frontend

```
Vercel
```

Backend

```
Render
```

---

# 📡 API Reference

## Get All Foods

```http
GET /foods
```

Response

```json
[
  {
    "id": 1,
    "name": "Pizza",
    "price": 299,
    "category": "Italian"
  }
]
```

---

## Get Single Food

```http
GET /foods/:id
```

---

# 💡 Highlights

- Component-based architecture
- RESTful API integration
- Dynamic rendering
- Responsive UI
- Modern React Hooks
- Environment variable support
- Clean code organization
- Production deployment
- Error & loading states

---

# 📈 Future Improvements

- Authentication
- Admin Dashboard
- Shopping Cart
- Online Ordering
- Payment Gateway
- Favorites
- Dark Mode
- Ratings & Reviews
- Pagination
- Database Integration
- Backend Migration to FastAPI/Django

---

# 👨‍💻 Author

**Durga Prasad**

Python Full Stack Developer

- React
- FastAPI
- Django
- Machine Learning
- REST APIs

---

<div align="center">

### ⭐ If you like this project, consider giving it a Star!

Made with ❤️ using React + JSON Server

</div>
