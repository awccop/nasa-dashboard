# NASA Dashboard 🚀

An interactive, real-time dashboard displaying data from NASA's open APIs, including the Astronomy Picture of the Day (APOD).

Built by **Ghost 404**.

---

## 🛠 Tech Stack
- **Frontend**: React.js (Vite setup optional)
- **Backend**: Flask (Python)
- **Deployment**: Vercel (frontend), Render (backend) 
- **API**: NASA Open APIs

---

## 📦 Project Structure

```
frontend/
├── public/
├── src/
│   ├── api.js
│   ├── App.js
│   ├── App.css
│   ├── Dashboard.js
│   ├── Dashboard.css
│   ├── ErrorBoundary.js
backend/
├── app.py
├── nasa_service.py
├── routes/
│   ├── nasa_routes.py
├── wsgi.py
├── .env
├── requirements.txt
```

---

## 🚀 Getting Started

### Backend Setup
1. `cd backend`
2. Create a virtual environment:  
   `python -m venv venv`
3. Activate the environment:  
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install dependencies:  
   `pip install -r requirements.txt`
5. Create a `.env` file and add:
   ```
   NASA_API_KEY=your_actual_nasa_api_key_here
   ```
6. Run backend server:  
   `python app.py`

Backend will run locally at `http://localhost:5000`

### Frontend Setup
1. `cd frontend`
2. Install frontend dependencies:  
   `npm install`
3. Create a `.env` file in frontend root and add:
   ```
   REACT_APP_API_BASE_URL=http://localhost:5000
   ```
4. Start frontend server:  
   `npm start`

Frontend will run locally at `http://localhost:3000`

---

## 📡 Available API Endpoints
- `GET /apod` → Fetches Astronomy Picture of the Day data

---

## 🌌 Live Demo
*(Link available after deployment)*

---

## ✨ Features
- Dynamic fetching of NASA's daily space photo
- Clean error handling and loading states
- Responsive design, mobile-ready
- Professional-grade project structure

---

## 👤 Author
**Ghost 404**

- Fiverr | Upwork Profiles (TBD)
- Group Leveling Project
- Built under Codex Chronos expansion

---

> "Touch the stars, but build like a Ghost."

---

## 📜 License
Open use for portfolio or educational purposes.
Commercial usage restricted unless authorized.
