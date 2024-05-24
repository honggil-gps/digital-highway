import { useState, useCallback } from "react";
import Frame4 from "../../../components/appguide/baemin/Frame4";
import PortalPopup from "../../../components/appguide/baemin/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SetPhone.css";

const SetPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');  // 휴대폰 번호 상태
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/maincontents/order");
  }, [navigate]);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value); // 입력값 상태 업데이트
  };

  return (
    <>
      <div className="baeman-setphone">
        <div className="baeman-div115">휴대폰 번호 입력</div>
        <div className="baeman-div116">인증 번호 입력</div>
        <input
          className="baeman-input"
          placeholder="01012345678"
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <input
          className="baeman-setphone-child"
          placeholder="인증 번호 입력"
          type="text"
        />
        <div className="baeman-rectangle-parent30" onClick={openFrame}>
          <button className="baeman-group-child11" onClick={openFrame}></button>
          <div className="baeman-div117" onClick={openFrame}>입력</div>
        </div>
        <div className="baeman-rectangle-parent31" onClick={onGroupContainer1Click}>
          <button className="baeman-group-child11" />
          <div className="baeman-div117">제출</div>
        </div>
        <img
          className="baeman-close-icon1"
          alt=""
          src="/appguide/baemin/close1@2x.png"
        />
        <div className="baeman-frame10">
          <div className="baeman-frame11">
            <div className="baeman-frame-child3" />
            <div className="baeman-div119">위 내용에 모두 동의합니다</div>
          </div>
          <div className="baeman-wrapper2">
            <div className="baeman-div119">44,900원 결제하기</div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeFrame}
        >
          <Frame4 onClose={closeFrame} phoneNumber={phoneNumber} />
        </PortalPopup>
      )}
    </>
  );
};

export default SetPhone;