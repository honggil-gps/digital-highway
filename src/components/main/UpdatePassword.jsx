import PropTypes from "prop-types";
import "./UpdatePassword.css";

const UpdatePassword = ({ className = "", onClose }) => {
  return (
    <div className={`mainpage-popup-updatepassword ${className}`}>
      <div className="mainpage-popup-updatepasswordcontainer" />
      <div className="mainpage-popup-updatecancelbar" />
      <div className="mainpage-popup-updateconfirmbutton" />
      <b className="mainpage-popup-b2">수정</b>
      <div className="mainpage-popup-updatecancelbutton" onClick={onClose} />
      <b className="mainpage-popup-b3" onClick={onClose}>취소</b>
      <div className="mainpage-popup-passwordinputboxes" />
      <input
        className="mainpage-popup-updatepasswordconfirmbox"
        placeholder="새 비밀번호 확인"
        type="password"
      />
      <input
        className="mainpage-popup-updatepasswordinputbox"
        placeholder="새 비밀번호"
        type="password"
      />
      <input
        className="mainpage-popup-currentpassword"
        placeholder="현재 비밀번호"
        type="password"
      />
      <div className="mainpage-popup-updatepasswordguidelinebox" />
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
};

export default UpdatePassword;
