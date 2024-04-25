import React, { useState } from 'react';

function PhoneDialer() {
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleNumberClick = (number) => {
    setSelectedNumber(selectedNumber + number);
  };

  const handleClearClick = () => {
    setSelectedNumber('');
  };

  return (
    <div>
      <div style={{ }}>
        <h1 style={{textAlign:'center'}}>PhoneDialer2</h1>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => handleClearClick()}>Clear</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p>Selected Number: {selectedNumber}</p>
      </div>
    </div>
  );
}

export default PhoneDialer;