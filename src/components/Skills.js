import React from 'react';

function Skills({ data, setData }) {
  const handleChange = (e, index) => {
    const newSkills = [...data.skills];
    newSkills[index] = e.target.value;
    setData({ ...data, skills: newSkills });
  };

  const addSkill = () => {
    setData({ ...data, skills: [...data.skills, ''] });
  };

  const removeSkill = (index) => {
    const newSkills = data.skills.filter((_, i) => i !== index);
    setData({ ...data, skills: newSkills });
  };

  return (
    <div className="section">
      <h3>🛠️ Skills</h3>
      {data.skills.map((skill, index) => (
        <div key={index} className="entry">
          <input
            type="text"
            placeholder="e.g. JavaScript, React, SQL"
            value={skill}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => removeSkill(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills;
