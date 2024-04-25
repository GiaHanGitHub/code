import React, { useState, useEffect } from 'react';

function PhoneDialer() {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [lastSelectedNumber, setLastSelectedNumber] = useState('');


  const handleNumberChange = (event) => {
    const selectedNumber = event.target.value;
    setSelectedNumber((prevNumbers) => prevNumbers + selectedNumber);
  };

  useEffect(() => {
    if (selectedNumber === '1' && lastSelectedNumber === '1') {
      setSelectedNumber('');
      setLastSelectedNumber('');
    } else {
      setLastSelectedNumber(selectedNumber);
    }
  }, [selectedNumber]);

  useEffect(() => {
    // Cập nhật kết quả hiển thị khi selectedNumber thay đổi
    document.getElementById('result').textContent = selectedNumber;
  }, [selectedNumber]);

  return (
    <div style={{textAlign:'center'}}>
        <div>
       <h1>PhoneDialer</h1> 
       </div>
      <input
        type="radio"
        name="number"
        value="1"
        onChange={handleNumberChange}
      />
      <label htmlFor="number1">1</label>
      <input
        type="radio"
        name="number"
        value="2"
        onChange={handleNumberChange}
      />
      <label htmlFor="number2">2</label>
      <div id="result"></div>
    </div>
  );
}

export default PhoneDialer;