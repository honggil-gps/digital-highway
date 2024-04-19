import { useState, useCallback } from "react";
import AfterLike from "../components/AfterLike";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./MenuList.css";

const MenuList = () => {
  const [isAfterLikeOpen, setAfterLikeOpen] = useState(false);
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/coupon");
  }, [navigate]);

  const openAfterLike = useCallback(() => {
    setAfterLikeOpen(true);
  }, []);

  const closeAfterLike = useCallback(() => {
    setAfterLikeOpen(false);
  }, []);

  return (
    <>
      <div className="menulist">
        <img className="image-1-icon1" alt="" src="/image-4@2x.png" />
        <div className="frame13">
          <div className="div179">인기 메뉴</div>
        </div>
        <div className="frame14">
          <div className="rectangle-parent32">
            <div className="beforelike-inner" />
            <div className="div180">
              <span className="txt23">
                <p className="p140">마늘보쌈</p>
                <p className="p140">소 : 29,000원</p>
                <p className="p140">중 : 36,000원</p>
                <p className="p140">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="instance-child33"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled19" />
          </div>
        </div>
        <div className="frame15">
          <div className="rectangle-parent32">
            <div className="beforelike-inner" />
            <div className="div180">
              <span className="txt23">
                <p className="p140">[무료배달이벤트]</p>
                <p className="p140">1+1 족발세트</p>
                <p className="p140">소 : 34,900</p>
                <p className="p140">중 : 41,900</p>
                <p className="p140">대 : 48,900</p>
              </span>
            </div>
            <img
              className="instance-child33"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled19" />
          </div>
        </div>
        <div className="frame16">
          <div className="frame-child9" />
          <div className="frame-child10" />
          <div className="div182">말왕족발</div>
          <div className="div183">5.0</div>
          <img className="star-icon18" alt="" src="/star@2x.png" />
          <div className="div184" onClick={onText2Click}>
            리뷰 15개
          </div>
          <img className="frame-child11" alt="" />
          <div className="div185">
            <p className="p140">최소주문금액 15,000원</p>
            <p className="p140">한집배달 소요시간 31~41분</p>
          </div>
          <div className="wrapper6" onClick={onFrameContainerClick}>
            <div className="div179">2000원 첫주문 할인 쿠폰 받기</div>
          </div>
          <button className="beforelike2" onClick={openAfterLike}>
            <div className="beforelike-inner" />
            <div className="div187">찜하기</div>
            <img
              className="ant-designheart-outlined-icon2"
              alt=""
              src="/antdesignheartoutlined.svg"
            />
          </button>
        </div>
      </div>
      {isAfterLikeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAfterLike}
        >
          <AfterLike onClose={closeAfterLike} />
        </PortalPopup>
      )}
    </>
  );
};

export default MenuList;
