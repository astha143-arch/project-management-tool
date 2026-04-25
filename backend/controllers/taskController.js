const { db } = require("../db/init");

exports.getTasks = (req, res) => {
  db.all(
    "SELECT * FROM tasks WHERE storyId=?",
    [req.params.storyId],
    (err, rows) => {
      res.json(rows);
    }
  );
};

exports.createTask = (req, res) => {
  const { title, storyId, status } = req.body;
  db.run(
    "INSERT INTO tasks (title, storyId, status) VALUES (?, ?, ?)",
    [title, storyId, status],
    function () {
      res.json({ id: this.lastID });
    }
  );
};

exports.updateTask = (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  db.run(
    "UPDATE tasks SET status=? WHERE id=?",
    [status, id],
    function (err) {
      if (err) return res.status(500).json(err);

      // ✅ ASYNC BACKGROUND TASK
      if (status === "Done") {
        setTimeout(() => {
          console.log(`✅ Task ${id} completed (async log after 3 sec)`);
        }, 3000);
      }

      res.json({ message: "Task updated" });
    }
  );
};