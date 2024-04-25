import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './Address2';

function App() {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
  
    const handleAddressChange = (address, setAddress) => {
      return (selectedAddress) => {
        setAddress(selectedAddress);
      };
    };
  
    return (
      <div>
        <form>
        <MyComponent onAddressChange={handleAddressChange(address1, setAddress1)} />
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          placeholder="Địa chỉ đã chọn 1"
        />
        <MyComponent onAddressChange={handleAddressChange(address2, setAddress2)} />
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          placeholder="Địa chỉ đã chọn 2"
        />
        <MyComponent onAddressChange={handleAddressChange(address3, setAddress3)} />
        <input
          type="text"
          value={address3}
          onChange={(e) => setAddress3(e.target.value)}
          placeholder="Địa chỉ đã chọn 3"
        />
        <button type="submit">Gửi</button>
        </form>
      </div>
    );
  }
export default App;
//ReactDOM.render(<App />, document.getElementById('root'));
