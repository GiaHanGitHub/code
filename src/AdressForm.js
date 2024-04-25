import React, { useState } from 'react';

function AddressForm() {
  const [address, setAddress] = useState({
    name: '',
    phoneNumber: '',
    provinceCity: '',
    district: '',
    ward: '',
    newAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu điền địa chỉ đến API hoặc xử lý theo yêu cầu
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Họ và tên</label>
        <input
          type="text"
          name="name"
          id="name"
          value={address.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Số điện thoại</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={address.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="provinceCity">Tỉnh/ Thành phố</label>
        <select
          name="provinceCity"
          id="provinceCity"
          value={address.provinceCity}
          onChange={handleChange}
        >
          <option value="">Chọn tỉnh/thành phố</option>
          <option value="An Giang">An Giang</option>
          <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
          ... (Danh sách các tỉnh/thành phố còn lại)
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="district">Quận/Huyện</label>
        <select
          name="district"
          id="district"
          value={address.district}
          onChange={handleChange}
        >
          <option value="">Chọn quận/huyện</option>
          ... (Danh sách các quận/huyện thuộc tỉnh/thành phố được chọn)
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ward">Phường/ Xã</label>
        <select
          name="ward"
          id="ward"
          value={address.ward}
          onChange={handleChange}
        >
          <option value="">Chọn phường/xã</option>
          ... (Danh sách các phường/xã thuộc quận/huyện được chọn)
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="newAddress">Địa chỉ mới</label>
        <textarea
          name="newAddress"
          id="newAddress"
          value={address.newAddress}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Lưu thông tin</button>
    </form>
  );
}

export default AddressForm;
