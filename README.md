# Full Stack REST API Project

# Features
- User Registration & Login (JWT Authentication)
- Role-Based Access Control (Admin/User)
- CRUD APIs for Tasks
- PostgreSQL Database
- React Frontend UI
- Protected Routes using JWT


# Tech Stack
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Frontend: React.js
- Auth: JWT + bcrypt


# Setup Instructions

### 1. Clone Repo
git clone https://github.com/adiswork066-ux/backend_app.git

### 2. Backend Setup
cd backend_app
npm install

Create `.env` file:
PORT=5000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
JWT_SECRET=yoursecret

Run server:
node src/app.js

---

### 3. Frontend Setup
cd frontend
npm install
npm start

---

# API Endpoints

### Auth
- POST /api/v1/auth/register
- POST /api/v1/auth/login

### Tasks
- GET /api/v1/tasks
- POST /api/v1/tasks
- PUT /api/v1/tasks/:id
- DELETE /api/v1/tasks/:id (Admin only)

---

## Security
- Password hashing using bcrypt
- JWT authentication
- Role-based authorization
- Environment variables (.env)


## Scalability Notes
- Can be extended to microservices architecture
- Redis caching can improve performance
- Load balancing using NGINX
- Docker can be used for deployment


## Author
Aditya Chotalia