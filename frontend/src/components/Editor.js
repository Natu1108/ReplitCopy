import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => {
  return(
    <Editor
      height="80vh"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value)}
    />
  );
};

export default CodeEditor;