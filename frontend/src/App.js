import React, { useState } from 'react';
import CodeEditor from '.components/Editor';

function App() {
  const [code, setCode] = useState('console.log("Hello, World!");');
  const [language, setLanguage] = useState('javascript');

  return (
    <div className="App">
      <h1>Replit Clone</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>
      <CodeEditor code={code} setCode={setCode} language={language} />
      <button onClick={() => executeCode(code, language)}>Run</button>
      <pre id="output"></pre>
    </div>
  );
}

const executeCode = async (code, language) => {
  const outputElement = document.getElementById('output');
  outputElement.textContent = 'Executing...';

  try {
    const repsponse = await fetch('https://replitcopybackend.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language }),
    });
    const result = await response.json();
    outputElement.textContent = result.output || result.error;
  } catch (error) {
    outputElement.textContent = 'Error: Unable to execute code.';
  }
};

export default App;