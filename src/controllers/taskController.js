const pool = require("../config/db");
const { taskSchema } = require("../validation/taskValidation");

// CREATE TASK
exports.createTask = async (req, res, next) => {
  try {
    const { error } = taskSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { title } = req.body;

    await pool.query(
      "INSERT INTO tasks (title, user_id) VALUES ($1, $2)",
      [title, req.user.id]
    );

    res.json({ message: "Task created" });
  } catch (err) {
    next(err);
  }
};

// GET TASKS
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await pool.query(
      "SELECT * FROM tasks WHERE user_id = $1",
      [req.user.id]
    );

    res.json(tasks.rows);
  } catch (err) {
    next(err);
  }
};

// UPDATE TASK
exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    // ensure task belongs to user
    const task = await pool.query(
      "SELECT * FROM tasks WHERE id = $1 AND user_id = $2",
      [id, req.user.id]
    );

    if (task.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    await pool.query(
      "UPDATE tasks SET title = $1 WHERE id = $2",
      [title, id]
    );

    res.json({ message: "Task updated" });
  } catch (err) {
    next(err);
  }
};

// DELETE TASK
exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ensure ownership
    const task = await pool.query(
      "SELECT * FROM tasks WHERE id = $1 AND user_id = $2",
      [id, req.user.id]
    );

    if (task.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    await pool.query(
      "DELETE FROM tasks WHERE id = $1",
      [id]
    );

    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};