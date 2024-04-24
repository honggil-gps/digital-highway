import { useState, useCallback } from "react";
import Frame5 from "../components/Frame5";
import PortalPopup from "../components/PortalPopup";
import Frame14 from "../components/Frame";
import "./Frame4.css";

const Frame4 = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const openPopUp = useCallback(() => {
    setPopUpOpen(true);
  }, []);

  const closePopUp = useCallback(() => {
    setPopUpOpen(false);
  }, []);

  return (
    <>
      <div className="cardinfo">
        <div className="div15">
          <div className="child1" />
          <div className="div16">카드 별명</div>
          <div className="div17">롯데카드</div>
        </div>
        <button className="button2" onClick={openPopUp}>
          <div className="child2" />
          <b className="b10">확인</b>
        </button>
        <Frame14 />
      </div>
      {isPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopUp}
        >
          <Frame5 onClose={closePopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame4;
