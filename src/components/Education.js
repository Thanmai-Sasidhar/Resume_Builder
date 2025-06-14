import React from 'react';

function Education({ data, setData }) {
  const handleChange = (e, index) => {
    const newEducation = [...data.education];
    newEducation[index] = e.target.value;
    setData({ ...data, education: newEducation });
  };

  const addEducation = () => {
    setData({ ...data, education: [...data.education, ''] });
  };

  const removeEducation = (index) => {
    const newEducation = data.education.filter((_, i) => i !== index);
    setData({ ...data, education: newEducation });
  };

  return (
    <div className="section">
      <h3>🎓 Education</h3>
      {data.education.map((edu, index) => (
        <div key={index} className="entry">
          <input
            type="text"
            placeholder="Degree, Institution, Year"
            value={edu}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}

export default Education;
