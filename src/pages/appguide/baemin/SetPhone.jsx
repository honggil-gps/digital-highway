import { useState, useCallback } from "react";
import Frame4 from "../../../components/appguide/baemin/Frame4";
import PortalPopup from "../../../components/appguide/baemin/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SetPhone.css";

const SetPhone = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/order");
  }, [navigate]);

  return (
    <>
      <div className="setphone">
        <div className="div115">휴대폰 번호 입력</div>
        <div className="div116">인증 번호 입력</div>
        <input className="input" placeholder="01012345678" type="text" />
        <input className="setphone-child" type="text" />
        <div className="rectangle-parent30">
          <button className="group-child11" onClick={openFrame} />
          <div className="div117">입력</div>
        </div>
        <div className="rectangle-parent31" onClick={onGroupContainer1Click}>
          <button className="group-child11" />
          <div className="div117">제출</div>
        </div>
        <img
          className="close-icon1"
          alt=""
          src="/appguide/baemin/close1@2x.png"
        />
        <div className="frame10">
          <div className="frame11">
            <div className="frame-child3" />
            <div className="div119">위 내용에 모두 동의합니다</div>
          </div>
          <div className="wrapper2">
            <div className="div119">44,900원 결제하기</div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame4 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default SetPhone;
