import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UpdateTel.css";
import axios from 'axios'

const UpdateTel = ({ className = "", onClose, userId }) => {
  const [selectedCountry, setSelectedCountry] = useState('+82');
  const [phoneNumber, setPhoneNumber] = useState('');

  const countries = [
    { name: '대한민국', code: '+82' },
    { name: '일본', code: '+81' },
    { name: '미국/캐나다', code: '+1' },
    { name: '중국', code: '+86' },
    { name: '미얀마', code: '+95' },
  ];

  // 휴대폰 번호 입력 시 포맷을 변경하는 함수
  const formatPhoneNumber = (value) => {
    // 입력값에서 숫자만 남기기
    const onlyNumbers = value.replace(/\D/g, '');
    // 000-0000-0000 형식으로 변환
    const formattedNumber = onlyNumbers.replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    return formattedNumber;
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  }

  const handleSubmit = async () => {
    // 전화번호가 비어 있는지 확인
    if (!phoneNumber.trim()) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.put("http://localhost:4000/myPage/updateTel", {
        userId,
        selectedCountry,
        phoneNumber,
      });

      if (response.data.message === "Phone number updated successfully") {
        alert("전화번호가 변경되었습니다.")
        onClose(); // 팝업 닫기
        window.location.reload();
      }
    } catch (error) {
      alert("전화번호를 업데이트하는 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

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
      <div className="mainpage-popup-div1">+82 010****5678</div>
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
