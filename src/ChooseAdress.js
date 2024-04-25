import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState('');

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = () => {
    axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  };

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    setSelectedCity(selectedCityId);
    setSelectedDistrict('');
    setSelectedWard('');

    if (selectedCityId !== '') {
      const selectedCityData = cities.find(city => city.Id === selectedCityId);
      setDistricts(selectedCityData.Districts);
    } else {
      setDistricts([]);
    }
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    setSelectedDistrict(selectedDistrictId);
    setSelectedWard('');

    if (selectedDistrictId !== '') {
      const selectedCityData = cities.find(city => city.Id === selectedCity);
      const selectedDistrictData = selectedCityData.Districts.find(district => district.Id === selectedDistrictId);
      setWards(selectedDistrictData.Wards);
    } else {
      setWards([]);
    }
  };

  const handleWardChange = (e) => {
    const selectedWardId = e.target.value;
    setSelectedWard(selectedWardId);
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