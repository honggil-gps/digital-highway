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
    navigate("/maincontents/main");
  }, [navigate]);

  return (
    <>
      <div className="baeman-listheader1">
        <div className="baeman-listheader-item" />
        <div className="baeman-rectangle-parent62">
          <div className="baeman-group-child44" />
          <div className="baeman-div222">족발/보쌈</div>
          <div className="baeman-div223">돈까스/회/일식</div>
          <div className="baeman-div224">고기/</div>
        </div>
        <div className="baeman-div225" onClick={openFrame}>
          정렬
        </div>
        <div className="baeman-rectangle-parent63">
          <div className="baeman-group-child45" />
          <div className="baeman-div226">별점순</div>
        </div>
        <div className="baeman-rectangle-parent64">
          <div className="baeman-group-child45" />
          <div className="baeman-div227">배달방식</div>
        </div>
        <div className="baeman-rectangle-parent65">
          <div className="baeman-group-child45" />
          <div className="baeman-div228">쿠폰</div>
        </div>
        <div className="baeman-rectangle-parent66">
          <div className="baeman-group-child45" />
          <div className="baeman-div226">배달팁</div>
        </div>
        <img
          className="baeman-shopping-cart-icon3"
          alt=""
          src="/appguide/baemin/shopping-cart@2x.png"
        />
        <div className="baeman-component-92">
          <div className="baeman-search2" />
          <div className="baeman-div230">장바구니</div>
        </div>
        <div className="baeman-div231" onClick={onText1Click}>
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
