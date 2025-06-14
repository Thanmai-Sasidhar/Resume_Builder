import React from 'react';

function Experience({ data, setData }) {
  const handleChange = (e, index) => {
    const newExperience = [...data.experience];
    newExperience[index] = e.target.value;
    setData({ ...data, experience: newExperience });
  };

  const addExperience = () => {
    setData({ ...data, experience: [...data.experience, ''] });
  };

  const removeExperience = (index) => {
    const newExperience = data.experience.filter((_, i) => i !== index);
    setData({ ...data, experience: newExperience });
  };

  return (
    <div className="section">
      <h3>💼 Experience</h3>
      {data.experience.map((exp, index) => (
        <div key={index} className="entry">
          <input
            type="text"
            placeholder="Job Title, Company, Duration"
            value={exp}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}

export default Experience;
