import React, { useState } from 'react';

const MonthYearPicker = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected range:', startDate, '-', endDate);
    // Thực hiện xử lý khác tùy thuộc vào nhu cầu của bạn
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Từ tháng/năm:
        <input type="text" value={startDate} onChange={handleStartDateChange} placeholder="../...." />
      </label>
      <label>
        Đến tháng/năm:
        <input type="text" value={endDate} onChange={handleEndDateChange} placeholder="../...." />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MonthYearPicker;
