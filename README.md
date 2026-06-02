# Grove Mentorship — Student Mentorship Platform

> A full-stack web application connecting university students with experienced mentors.  
> Built with Node.js, React.js, and MongoDB |

---

## Important Links

| Resource | URL |
|---|---|
| **GitHub Repository** | https://github.com/rushanagune/grove-mentorship |
| **JIRA Board** | https://grovementorship.atlassian.net/jira/software/projects/SCRUM/summary?atlOrigin=eyJpIjoiZGQxMWMzZDVhMmQ2NGNhMWJmOWIzZGQ4MmMzMGZhNWUiLCJwIjoiaiJ9 |
| **Figma Prototype** | [https://www.figma.com/proto/UznWwTd0c4ZAzNKUEhht9c/Grove-Mentorship?node-id=5-4&t=y0WFInvVGmqJZwPM-1] |


---

## Project Overview

Grove Mentorship is a Student Mentorship Platform developed as part of IFQ636 at Queensland University of Technology. The platform facilitates structured mentorship relationships between university students and experienced mentors including academic staff, industry professionals, and senior peers.

**Core Features:**
- Student and mentor registration with role-based dashboards
- Searchable mentor directory with filters by expertise, industry, and availability
- Mentorship request submission, acceptance, and decline workflow
- Session scheduling, management, and cancellation
- Integrated messaging inbox between mentor-student pairs
- Post-session reviews and star ratings
- Admin panel: user management, profile moderation, announcements, analytics

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, React Router v6, Axios, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Authentication | JSON Web Tokens (JWT), bcryptjs |
| Deployment | AWS EC2 (Ubuntu 22.04), PM2, Nginx |
| CI/CD | GitHub Actions |
| Version Control | Git, GitHub (feature branching) |

---

## Local Setup Instructions

### Prerequisites

Make sure you have installed:
- Node.js v18+
- npm v9+
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/rushanagune/grove-mentorship
cd grove-mentorship
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb+srv://rushana:rushana@cluster0.yzxwx9f.mongodb.net/grovementorship?appName=Cluster0
JWT_SECRET=2J8zqkP7VN6bxzg+Wy7DQZCA3Yx8mF3Bl0kch6HYtFs=
PORT=5001
```

Start the backend:

```bash
npm run dev
```

Backend will run at: `http://localhost:3000`

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

### 4. Access the Application

Open your browser and go to `http://localhost:5173`

Register a new account or use the test credentials above.

---

## Project Structure
grove-mentorship/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── MentorProfile.js
│   │   ├── MentorshipRequest.js
│   │   ├── Session.js
│   │   ├── Review.js
│   │   ├── Message.js
│   │   └── Announcement.js
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   └── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
