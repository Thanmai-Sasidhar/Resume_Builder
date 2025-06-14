import React from 'react';

function Summary({ data, setData }) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="section">
      <h3>🗒️ Summary</h3>
      <textarea
        name="summary"
        placeholder="Write a brief summary about yourself..."
        rows="4"
        value={data.summary}
        onChange={handleChange}
      />
      <textarea
        name="powerStatement"
        placeholder="Optional: Add a powerful statement or goal"
        rows="2"
        value={data.powerStatement}
        onChange={handleChange}
      />
    </div>
  );
}

export default Summary;
