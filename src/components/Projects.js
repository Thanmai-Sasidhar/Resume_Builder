import React from 'react';

function Projects({ data, setData }) {
  const handleChange = (e, index) => {
    const newProjects = [...data.projects];
    newProjects[index] = e.target.value;
    setData({ ...data, projects: newProjects });
  };

  const addProject = () => {
    setData({ ...data, projects: [...data.projects, ''] });
  };

  const removeProject = (index) => {
    const newProjects = data.projects.filter((_, i) => i !== index);
    setData({ ...data, projects: newProjects });
  };

  return (
    <div className="section">
      <h3>📁 Projects</h3>
      {data.projects.map((project, index) => (
        <div key={index} className="entry">
          <input
            type="text"
            placeholder="Project Title, Description, Technologies Used"
            value={project}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => removeProject(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addProject}>Add Project</button>
    </div>
  );
}

export default Projects;
