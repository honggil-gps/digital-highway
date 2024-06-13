import React, { useState } from 'react';
import axios from 'axios'; 
import MainFooter from "../../components/main/MainFooter";
import MainHeader from "../../components/main/MainHeader";
import PropTypes from "prop-types";
import "./FindIdPage.css";

const FindIdPage = () => {
  const [userName, setUserName] = useState('');  
  const [phoneNum, setPhoneNum] = useState('+82) ');  
  const [userID, setUserID] = useState('');  
  const [showPopup, setShowPopup] = useState(false);  
  const [error, setError] = useState(false); 

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Username:', userName);  // 디버그 로그
      console.log('Phone Number:', phoneNum);  
      // 백엔드의 /myPage/find-id 엔드포인트로 POST 요청
      const response = await axios.post('http://localhost:4000/myPage/find-id', { userName, phoneNum });
      setUserID(response.data.userID);  // 성공 시 사용자 ID 설정
      setError(false);  // 오류 상태 초기화
      setShowPopup(true);  // 팝업 표시
    } catch (error) {
      console.error(error);
      setUserID('');  // 사용자 ID 초기화
      setError(true);  // 오류 상태 설정
      setShowPopup(true);  // 팝업 표시
    }
  };

  // 휴대폰 번호 입력 핸들러
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // "+82) "를 항상 포함하도록 처리
    if (input.startsWith('+82) ')) {
      setPhoneNum(input);
    } else {
      setPhoneNum('+82) ');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fi-findidpage">
      <div className="fi-findid">
        <div className="fi-findidcontainer" />
        <div className="fi-findidheader" />
        <b className="fi-findid-title">아이디 찾기</b>
        <div className="fi-findidguidelinebox" />
        <div className="fi-div">
          <p className="fi-p">
            회원정보에 등록한 휴대폰 번호와 입력한 휴대폰 번호가
          </p>
          <p className="fi-p">동일해야 아이디를 찾으실 수 있습니다</p>
        </div>
        <form onSubmit={handleSubmit}>  {/* 폼 제출 시 handleSubmit 호출 */}
          <div className="fi-findinputboxes" />
          <input
            className="fi-findidname"
            placeholder="이름을 입력하세요"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}  /* 이름 입력 핸들러 */
          />
          <input
            className="fi-findidphone"
            placeholder="휴대폰 번호를 입력하세요"  
            type="text"
            value={phoneNum}
            onChange={handlePhoneChange}  /* 휴대폰 번호 입력 핸들러 */
          />
          <button type="submit" className="fi-findidbutton">  {/* 버튼 클릭 시 폼 제출 */}
            <div className="fi-updatecancelbutton" />
            <b className="fi-b">아이디 찾기</b>
          </button>
        </form>
        {showPopup && (
          <div className="fi-popup">
            <div className="fi-popup-content">
              <span className="fi-close" onClick={closePopup}>&times;</span>
              {error ? (
                <p>등록된 정보를 찾을 수 없습니다.</p>
              ) : (
                <p>{userName}님의 아이디는 {userID} 입니다.</p>
              )}
            </div>
          </div>
        )}
      </div>
      <MainFooter />
      <MainHeader />
    </div>
  );
};

FindIdPage.propTypes = {
  onClose: PropTypes.func,
};

export default FindIdPage;
