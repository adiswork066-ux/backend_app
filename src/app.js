require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());  

app.use(express.json());

app.use((req, res, next) => {
  console.log("GLOBAL:", req.method, req.url);
  next();
});

//routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

//test route
app.get("/", (req, res) => {
  console.log("Root hit");
  res.send("API working");
});

//error handler
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(5000, () => console.log("Server started on port 5000"));

const pool = require("./config/db");

pool.query("SELECT 1")
  .then(() => console.log("DB CONNECTED"))
  .catch(err => console.error("DB ERROR", err));

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
