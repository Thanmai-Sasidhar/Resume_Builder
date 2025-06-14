import React, { useState, useRef } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { useReactToPrint } from 'react-to-print';




function App() {
  const [data, setData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: '',
    summary: '', powerStatement: '',
    education: [], experience: [], skills: [],
    certifications: [], projects: []
  });

  const [theme, setTheme] = useState('light');

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.firstName}_${data.lastName}_Resume`
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`container ${theme}`}>
      <div className="form-section">
        <ResumeForm data={data} setData={setData} />
        <button onClick={handlePrint}>📄 Download as PDF</button>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <div className="preview-section" ref={componentRef}>
        <ResumePreview data={data} />
      </div>
    </div>
  );
}

export default App;
