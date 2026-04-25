const { db } = require("../db/init");

exports.getStories = (req, res) => {
  db.all(
    "SELECT * FROM stories WHERE projectId=?",
    [req.params.projectId],
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    }
  );
};

exports.createStory = (req, res) => {
  const { title, projectId } = req.body;

  db.run(
    "INSERT INTO stories (title, projectId) VALUES (?, ?)",
    [title, projectId],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
};