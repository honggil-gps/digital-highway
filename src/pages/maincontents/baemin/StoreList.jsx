import { useState, useCallback } from "react";
import Frame3 from "../../../components/baemin/Frame3.jsx";
import PortalPopup from "../../../components/baemin/PortalPopup";
import "./StoreList.css";

const StoreList = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className="storelist">
        <div className="component-9">
          <div className="search" />
          <div className="div37">장바구니</div>
        </div>
        <img
          className="shopping-cart-icon1"
          alt=""
          src="baemin/shopping-cart@2x.png"
        />
        <div className="div38">뒤로가기</div>
        <div className="storelist-child" />
        <div className="storelist-item" />
        <div className="div39">족발/보쌈</div>
        <div className="div40">돈까스/회/일식</div>
        <div className="div41">고기</div>
        <div className="div42" onClick={openFrame}>
          정렬
        </div>
        <div className="rectangle-parent3">
          <div className="group-child" />
          <div className="div43">별점순</div>
        </div>
        <div className="rectangle-parent4">
          <div className="group-child" />
          <div className="div44">배달방식</div>
        </div>
        <div className="rectangle-parent5">
          <div className="group-child" />
          <div className="div45">쿠폰</div>
        </div>
        <div className="rectangle-parent6">
          <div className="group-child" />
          <div className="div43">배달팁</div>
        </div>
        <div className="storelist-inner" />
        <div className="component-10">
          <div className="component-10-child" />
          <div className="div47">미미족발 부경점</div>
          <img className="star-icon" alt="" src="baemin/star@2x.png" />
          <div className="div48">4.7</div>
          <img
            className="component-10-item"
            alt=""
            src="baemin/rectangle-13@2x.png"
          />
          <img
            className="component-10-inner"
            alt=""
            src="baemin/rectangle-14@2x.png"
          />
          <img
            className="component-10-child1"
            alt=""
            src="baemin/rectangle-15@2x.png"
          />
        </div>
        <div className="component-11">
          <div className="component-10-child" />
          <div className="div47">뿌공족발 부경점</div>
          <img className="star-icon" alt="" src="baemin/star@2x.png" />
          <div className="div48">4.7</div>
          <img
            className="component-10-item"
            alt=""
            src="baemin/rectangle-13@2x.png"
          />
          <img
            className="component-10-inner"
            alt=""
            src="baemin/rectangle-14@2x.png"
          />
          <img
            className="component-10-child1"
            alt=""
            src="baemin/rectangle-15@2x.png"
          />
        </div>
        <div className="component-12">
          <div className="component-10-child" />
          <div className="div47">백경족발 부경점</div>
          <img className="star-icon" alt="" src="baemin/star@2x.png" />
          <div className="div48">4.5</div>
          <img
            className="component-10-item"
            alt=""
            src="baemin/rectangle-13@2x.png"
          />
          <img
            className="component-10-inner"
            alt=""
            src="baemin/rectangle-14@2x.png"
          />
          <img
            className="component-10-child1"
            alt=""
            src="baemin/rectangle-15@2x.png"
          />
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
};

export default StoreList;
