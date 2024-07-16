import React, { useEffect, useState } from 'react';
// import './Styler.css'; // Import the CSS file

const Styler = ({ isHighlighted }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (isHighlighted) {
      setStyle({ backgroundColor: 'red', padding: '10px', border: '1px solid black' });
    } else {
      setStyle({ backgroundColor: 'black', padding: '10px', border: '1px solid black' });
    }
  }, [isHighlighted]);

  return (
    <div style={style}>
      <p>Styled component.</p>
    </div>
  );
};

export default Styler;
