import { useState, useCallback } from "react";
import Frame2 from "../components/Frame2";
import PortalPopup from "../components/PortalPopup";
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
        <div className="component-91">
          <div className="search1" />
          <div className="div206">장바구니</div>
        </div>
        <img
          className="shopping-cart-icon1"
          alt=""
          src="/shopping-cart@2x.png"
        />
        <div className="div207">뒤로가기</div>
        <div className="storelist-child" />
        <div className="storelist-item" />
        <div className="div208">족발/보쌈</div>
        <div className="div209">돈까스/회/일식</div>
        <div className="div210">고기/</div>
        <div className="div211" onClick={openFrame}>
          정렬
        </div>
        <div className="rectangle-parent38">
          <div className="group-child38" />
          <div className="div212">별점순</div>
        </div>
        <div className="rectangle-parent39">
          <div className="group-child38" />
          <div className="div213">배달방식</div>
        </div>
        <div className="rectangle-parent40">
          <div className="group-child38" />
          <div className="div214">쿠폰</div>
        </div>
        <div className="rectangle-parent41">
          <div className="group-child38" />
          <div className="div212">배달팁</div>
        </div>
        <div className="storelist-inner" />
        <div className="component-102">
          <div className="component-10-child6" />
          <div className="div216">미미족발 부경점</div>
          <img className="star-icon23" alt="" src="/star@2x.png" />
          <div className="div217">4.7</div>
          <img
            className="component-10-child7"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <img
            className="component-10-child8"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <img
            className="component-10-child9"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
        <div className="component-111">
          <div className="component-10-child6" />
          <div className="div216">뿌공족발 부경점</div>
          <img className="star-icon23" alt="" src="/star@2x.png" />
          <div className="div217">4.7</div>
          <img
            className="component-10-child7"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <img
            className="component-10-child8"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <img
            className="component-10-child9"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
        <div className="component-121">
          <div className="component-10-child6" />
          <div className="div216">백경족발 부경점</div>
          <img className="star-icon23" alt="" src="/star@2x.png" />
          <div className="div217">4.5</div>
          <img
            className="component-10-child7"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <img
            className="component-10-child8"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <img
            className="component-10-child9"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame2 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default StoreList;
