🚀 Project Management Tool (Agile Workflow)

📌 Overview

This is a full-stack web application built to manage projects for a small team using a simple agile workflow.

The system follows a hierarchical structure:

Project → User Stories → Tasks

Users can create projects, add stories, and manage tasks with statuses like:

- To Do
- In Progress
- Done

---

🛠 Tech Stack

- Frontend: React.js
- Backend: Node.js + Express.js
- Database: SQLite
- API: REST

---

🧠 Architecture

The application follows a client-server architecture:

- React handles UI and user interaction
- Express handles API logic
- SQLite stores structured data

Data Flow

User Action → API Request → Backend → Database → Response → UI Update

---

🗄 Database Schema

Projects

- id
- name
- description

Stories

- id
- title
- projectId (FK)

Tasks

- id
- title
- status
- storyId (FK)

---

📡 API Endpoints

Projects

- GET /api/projects
- POST /api/projects
- DELETE /api/projects/:id

Stories

- GET /api/stories/:projectId
- POST /api/stories

Tasks

- GET /api/tasks/:storyId
- POST /api/tasks
- PUT /api/tasks/:id

---

⚙️ How to Run

Backend

cd backend
npm install
node server.js

Frontend

cd frontend
npm install
npm start

---

⚡ Async Feature

When a task is marked as complete, a background process runs using "setTimeout" which logs a message after 3 seconds.
This demonstrates non-blocking asynchronous execution.

---

⚖️ Design Decisions

- SQLite used for simplicity and quick setup
- REST APIs for clear communication
- Minimal UI to focus on functionality

---

🔐 Security Considerations

- Input validation for basic safety
- Structured API routes
- No sensitive data stored

---

🤖 AI Usage

AI tools were used to:

- Debug errors
- Improve UI design
- Speed up development

All logic was understood and verified manually.

---

🚀 Future Improvements

- Authentication (login/signup)
- Role-based access
- Kanban board UI
- Real-time updates
- Notifications system

---

📌 Conclusion

This project demonstrates full-stack development, API design, database relationships, and async workflow handling in a clean and structured manner.
