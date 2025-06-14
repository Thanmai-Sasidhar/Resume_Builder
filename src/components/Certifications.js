import React from 'react';

function Certifications({ data, setData }) {
  const handleChange = (e, index) => {
    const newCerts = [...data.certifications];
    newCerts[index] = e.target.value;
    setData({ ...data, certifications: newCerts });
  };

  const addCertification = () => {
    setData({ ...data, certifications: [...data.certifications, ''] });
  };

  const removeCertification = (index) => {
    const newCerts = data.certifications.filter((_, i) => i !== index);
    setData({ ...data, certifications: newCerts });
  };

  return (
    <div className="section">
      <h3>📜 Certifications</h3>
      {data.certifications.map((cert, index) => (
        <div key={index} className="entry">
          <input
            type="text"
            placeholder="e.g. AWS Certified Developer, Coursera"
            value={cert}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => removeCertification(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addCertification}>Add Certification</button>
    </div>
  );
}

export default Certifications;
