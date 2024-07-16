import React, { useState } from 'react';
import LoggerComponent from './LoggerComponent';

const App = () => {
  const [message, setMessage] = useState('Hello');

  return (
    <div>
      <LoggerComponent  logMessage={message} />
      <button onClick={() => setMessage('world')}>Change Message</button>
    </div>
  );
};

export default App;
