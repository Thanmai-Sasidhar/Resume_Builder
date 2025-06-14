import React from 'react';
import PersonalDetails from './PersonalDetails';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Certifications from './Certifications';
import Projects from './Projects';

function ResumeForm({ data, setData }) {
  return (
    <div className="resume-form">
      <h1>📝 Build Your Resume</h1>
      <PersonalDetails data={data} setData={setData} />
      <Summary data={data} setData={setData} />
      <Education data={data} setData={setData} />
      <Experience data={data} setData={setData} />
      <Skills data={data} setData={setData} />
      <Certifications data={data} setData={setData} />
      <Projects data={data} setData={setData} />
    </div>
  );
}

export default ResumeForm;
