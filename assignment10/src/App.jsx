import React, { useState } from 'react';
import Styler from './Styler';
import './App.css'; 

const App = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div>
      <h1>Styler</h1>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle
      </button>
      <Styler isHighlighted={isHighlighted} />
    </div>
  );
};

export default App;
