exports.getProjects = (req, res) => {
  res.json(global.projects || []);
};

exports.createProject = (req, res) => {
  const { name, description } = req.body;

  const newProject = {
    id: Date.now(),
    name,
    description,
  };

  global.projects = global.projects || [];
  global.projects.push(newProject);

  res.json(newProject);
};

// ✅ THIS MUST EXIST
exports.deleteProject = (req, res) => {
  const id = parseInt(req.params.id);

  global.projects = (global.projects || []).filter(
    (p) => p.id !== id
  );

  res.json({ message: "Project deleted" });
};