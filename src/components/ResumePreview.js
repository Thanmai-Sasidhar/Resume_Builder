import React from 'react';

function ResumePreview({ data }) {
  return (
    <div className="resume-preview">
      
      <h2>{data.firstName} {data.lastName}</h2>
      <p>{data.email}  {data.phone}</p>
      <p>{data.address} {data.city} {data.country}</p>

      {data.summary && (
        <>
          <h3>Summary</h3>
          <p>{data.summary}</p>
        </>
      )}

      {data.powerStatement && (
        <>
          <h4><em>{data.powerStatement}</em></h4>
        </>
      )}

      {data.education.length > 0 && (
        <>
          <h3>Education</h3>
          <ul>
            {data.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </>
      )}

      {data.experience.length > 0 && (
        <>
          <h3>Experience</h3>
          <ul>
            {data.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </>
      )}

      {data.skills.length > 0 && (
        <>
          <h3>Skills</h3>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {data.certifications.length > 0 && (
        <>
          <h3>Certifications</h3>
          <ul>
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </>
      )}

      {data.projects.length > 0 && (
        <>
          <h3>Projects</h3>
          <ul>
            {data.projects.map((proj, index) => (
              <li key={index}>{proj}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ResumePreview;
