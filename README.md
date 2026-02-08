# HRMS Frontend

Frontend for the **HRMS (Human Resource Management System)** built using **React + Vite**. This application provides the user interface for managing employees, attendance, leave, and other HR-related operations.

---

## 🚀 Tech Stack

* **React**
* **Vite**
* **JavaScript / TypeScript** (depending on your setup)
* **HTML5 & CSS3**
* **Axios** (for API calls)
* **Vercel** (Deployment)

---

## 📁 Project Structure

```
hrms-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

> ⚠️ Make sure the variable name starts with `VITE_` or it will not be available in the frontend.

---

## 🛠️ Installation & Setup (Local)

1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/hrms-frontend.git
cd hrms-frontend
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start development server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` folder.

---

## ☁️ Deployment (Vercel)

1. Push code to GitHub
2. Import project in **Vercel**
3. Configure build settings:

* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Framework Preset**: Other (Vite auto-detected)

4. Add environment variable in Vercel:

```
VITE_API_BASE_URL = https://your-backend-url.onrender.com
```

5. Deploy 🎉

---

## 🔗 Backend Integration

This frontend connects to the HRMS backend using REST APIs.

Example (Axios):

```js
axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/employees`)
```

---

## ✅ Features

* User authentication
* Employee management
* Attendance tracking
* Leave management
* Responsive UI

---

## 🧪 Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Run development server   |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

---

## 🧑‍💻 Author

**Nikhil**

---

## 📄 License

This project is licensed under the MIT License.
