import { memo, useState, useCallback } from "react";
import Frame3 from "./Frame3";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./ListHeader1.css";

const ListHeader = memo(() => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onText1Click = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <>
      <div className="listheader1">
        <div className="listheader-item" />
        <div className="rectangle-parent62">
          <div className="group-child44" />
          <div className="div222">족발/보쌈</div>
          <div className="div223">돈까스/회/일식</div>
          <div className="div224">고기/</div>
        </div>
        <div className="div225" onClick={openFrame}>
          정렬
        </div>
        <div className="rectangle-parent63">
          <div className="group-child45" />
          <div className="div226">별점순</div>
        </div>
        <div className="rectangle-parent64">
          <div className="group-child45" />
          <div className="div227">배달방식</div>
        </div>
        <div className="rectangle-parent65">
          <div className="group-child45" />
          <div className="div228">쿠폰</div>
        </div>
        <div className="rectangle-parent66">
          <div className="group-child45" />
          <div className="div226">배달팁</div>
        </div>
        <img
          className="shopping-cart-icon3"
          alt=""
          src="/appguide/baemin/shopping-cart@2x.png"
        />
        <div className="component-92">
          <div className="search2" />
          <div className="div230">장바구니</div>
        </div>
        <div className="div231" onClick={onText1Click}>
          뒤로가기
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame3 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
});

export default ListHeader;
