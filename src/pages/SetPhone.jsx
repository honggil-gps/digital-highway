import { useState, useCallback } from "react";
import Frame1 from "../components/Frame1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SetPhone.css";

const SetPhone = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onSetPhoneContainerClick = useCallback(() => {
    navigate("/order");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="setphone" onClick={onSetPhoneContainerClick}>
        <div className="div122">휴대폰 번호 입력</div>
        <input className="input" placeholder="01012345678" type="text" />
        <input className="setphone-child" type="text" />
        <button className="setphone-item" onClick={openFrame} />
        <div className="div123">입력</div>
        <img className="close-icon3" alt="" src="/close@2x.png" />
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame1 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default SetPhone;
