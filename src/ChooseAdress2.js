import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [url]);

  return data;
}

function MyComponent() {
  const cities = useFetchData('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  // ES2020 JS moi dung duoc
  // ES6 khong dung duoc
  const districts = selectedCity ? cities.find(city => city.Id === selectedCity)?.Districts || [] : [];
  const wards = selectedDistrict ? districts.find(district => district.Id === selectedDistrict)?.Wards || [] : [];

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedDistrict('');
    setSelectedWard('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedWard('');
  };

  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
  };

  return (
    <div>
      <select className="form-select form-select-sm mb-3" value={selectedCity} onChange={handleCityChange}>
        <option value="" selected>Chọn tỉnh thành</option>
        {cities.map(city => (
          <option key={city.Id} value={city.Id}>{city.Name}</option>
        ))}
      </select>

      <select className="form-select form-select-sm mb-3" value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="" selected>Chọn quận huyện</option>
        {districts.map(district => (
          <option key={district.Id} value={district.Id}>{district.Name}</option>
        ))}
      </select>

      <select className="form-select form-select-sm" value={selectedWard} onChange={handleWardChange}>
        <option value="" selected>Chọn phường xã</option>
        {wards.map(ward => (
          <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
        ))}
      </select>
    </div>
  );
}

export default MyComponent;