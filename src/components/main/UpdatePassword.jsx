import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './UpdatePassword.css';

const UpdatePassword = ({ className = '', onClose, userId }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdatePassword = async () => {
    if (newPassword == currentPassword){
      alert('현재 비밀번호와 동일한 비밀번호입니다. \n 새로 입력해주세요.')
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.put('http://localhost:4000/myPage/updatePw', {
        userId,
        currentPassword,
        newPassword,
      });

      if (response.data.message === 'Password updated successfully') {
        alert('비밀번호가 성공적으로 변경되었습니다.');
        onClose(); // 팝업 닫기
      }
    } catch (error) {
      alert('현재 비밀번호가 일치하지 않습니다.')
      console.error(error);
    }
  };

  return (
    <div className={`mainpage-popup-updatepassword ${className}`}>
      <div className="mainpage-popup-updatepasswordcontainer" />
      <div className="mainpage-popup-updatecancelbar" />
      <div className="mainpage-popup-updateconfirmbutton" onClick={handleUpdatePassword} />
      <b className="mainpage-popup-b2">수정</b>
      <div className="mainpage-popup-updatecancelbutton" onClick={onClose} />
      <b className="mainpage-popup-b3" onClick={onClose}>취소</b>
      <div className="mainpage-popup-passwordinputboxes" />
      <input
        className="mainpage-popup-updatepasswordconfirmbox"
        placeholder="새 비밀번호 확인"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        className="mainpage-popup-updatepasswordinputbox"
        placeholder="새 비밀번호"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        className="mainpage-popup-currentpassword"
        placeholder="현재 비밀번호"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <div className="mainpage-popup-div3">이전에 사용한 적 없는 비밀번호가 안전합니다.</div>
      <div className="mainpage-popup-div4"><b>다른 아이디/사이트에서 사용한 적 없는 비밀번호</b></div>
      <div className="mainpage-popup-updatepasswordheader" />
      <img
        className="mainpage-popup-updatepasswordclosebutton-icon"
        alt=""
        src="/main/updatetelclosebutton.svg"
        onClick={onClose}
      />
    </div>
  );
};

UpdatePassword.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  userId: PropTypes.string.isRequired,
};

export default UpdatePassword;
