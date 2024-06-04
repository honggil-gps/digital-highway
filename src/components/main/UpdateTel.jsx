import PropTypes from "prop-types";
import "./UpdateTel.css";

const UpdateTel = ({ className = "", onClose }) => {
  return (
    <div className={`mainpage-popup-updatetel ${className}`}>
      <div className="mainpage-popup-updatetelcontainer" />
      <div className="mainpage-popup-cancelupdatebar" />
      <div className="mainpage-popup-updateconfirmbox" />
      <b className="mainpage-popup-b">수정</b>
      <div className="mainpage-popup-cancelbox" onClick={onClose} />
      <b className="mainpage-popup-b1" onClick={onClose}>취소</b>
      <div className="mainpage-popup-phonenumberinputcontainer" />
      <input
        className="mainpage-popup-phonenumberinputbox"
        placeholder="010-1234-5678"
        type="text"
      />
      <div className="mainpage-popup-countryselectbox" />
      <div className="mainpage-popup-div">대한민국 +82</div>
      <div className="mainpage-popup-basicphonenumberbox" />
      <div className="mainpage-popup-div1">+82 10-****-****</div>
      <img className="mainpage-popup-phoneiconbutton" alt="" src="/main/phoneiconbutton.svg" />
      <div className="mainpage-popup-updateguidecommentbox" />
      <div className="mainpage-popup-div2">사용할 <b style={{color: "#4d6140"}}>전화번호</b>를 입력하세요.</div>
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
