import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UpdateTel.css";

const UpdateTel = ({ className = "", onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState('+82');
  const [phoneNumber, setPhoneNumber] = useState('');

  const countries = [
    { name: '대한민국', code: '+82' },
    { name: '일본', code: '+81' },
    { name: '미국/캐나다', code: '+1' },
    { name: '중국', code: '+86' },
    { name: '미얀마', code: '+95' },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleSubmit = () => {
    console.log(`${selectedCountry} ${phoneNumber}`);
  }

  return (
    <div className={`mainpage-popup-updatetel ${className}`}>
      <div className="mainpage-popup-updatetelcontainer" />
      <div className="mainpage-popup-cancelupdatebar" />
      <div className="mainpage-popup-updateconfirmbox" onClick={handleSubmit} />
      <b className="mainpage-popup-b">수정</b>
      <div className="mainpage-popup-cancelbox" onClick={onClose} />
      <b className="mainpage-popup-b1" onClick={onClose}>취소</b>
      <div className="mainpage-popup-phonenumberinputcontainer" />
      <input
        className="mainpage-popup-phonenumberinputbox"
        placeholder="010-1234-5678"
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <div className="mainpage-popup-countryselectbox" />
      <select 
        id="countryCode"
        className="mainpage-popup-div"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} {country.code}
          </option>
        ))}
      </select>
      <div className="mainpage-popup-basicphonenumberbox" />
      <div className="mainpage-popup-div1">+82 10-****-****</div>
      <img className="mainpage-popup-phoneiconbutton" alt="" src="/main/phoneiconbutton.svg" />
      <div className="mainpage-popup-div2">사용할 <b style={{color: "#63886D"}}>전화번호</b>를 입력하세요.</div>
      <div className="mainpage-popup-updatetelheader" />
      <img
        className="mainpage-popup-updatetelclosebutton-icon"
        alt=""
        src="/main/updatetelclosebutton.svg"
        onClick={onClose}
      />
    </div>
  );
};

UpdateTel.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default UpdateTel;
