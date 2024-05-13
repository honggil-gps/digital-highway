import { useState, useCallback } from "react";
import Frame5 from "../../../components/appguide/kakaotaxi/PopUp_06";
import PortalPopup from "../../../components/appguide/kakaotaxi/PortalPopup";
import "./CardInfo_05.css";

const Frame4 = () => {
  const [isPopUp06Open, setPopUp06Open] = useState(false);

  const openPopUp06 = useCallback(() => {
    setPopUp06Open(true);
  }, []);

  const closePopUp06 = useCallback(() => {
    setPopUp06Open(false);
  }, []);

  return (
    <>
      <div className="cardinfo-05">
        <div className="cardnickname">
          <div className="cardnickname-child" />
          <div className="div17">카드 별명</div>
          <div className="div18">롯데카드</div>
        </div>
        <div className="cardinfoinput">
          <div className="cardinfoinput-child" />
          <div className="div19">카드 비밀번호</div>
          <div className="cvc">CVC</div>
          <div className="div20">유효기간</div>
          <div className="div21">카드번호</div>
          <input className="cardinfoinput-item" type="text" />
          <input className="cardinfoinput-inner" type="text" />
          <input className="rectangle-input" type="text" />
          <input className="cardinfoinput-child1" type="text" />
        </div>
        <button className="checkbutton" onClick={openPopUp06}>
          <div className="checkbutton-child" />
          <b className="b11">확인</b>
        </button>
      </div>
      {isPopUp06Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUp06}
        >
          <Frame5 onClose={closePopUp06} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame4;
