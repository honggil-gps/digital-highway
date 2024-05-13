import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Coupon.css";

const Coupon = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="coupon">
      <div className="coupon-child" />
      <div className="coupon-item" />
      <div className="coupon-inner" />
      <div className="div">말왕족발</div>
      <div className="rectangle-div" />
      <div className="div1">찜하기</div>
      <div className="div2">5.0</div>
      <img className="star-icon" alt="" src="/appguide/baemin/star@2x.png" />
      <div className="div3">리뷰 15개</div>
      <img className="line-icon" alt="" />
      <div className="div4">
        <p className="p">최소주문금액 15,000원</p>
        <p className="p">한집배달 소요시간 31~41분</p>
      </div>
      <div className="div5">인기 메뉴</div>
      <div className="div6">2000원 첫주문 할인 쿠폰 받기</div>
      <div className="rectangle-parent">
        <div className="instance-child" />
        <div className="div7">
          <span className="txt">
            <p className="p">[무료배달이벤트]</p>
            <p className="p">1+1 족발세트</p>
            <p className="p">소 : 34,900</p>
            <p className="p">중 : 41,900</p>
            <p className="p">대 : 48,900</p>
          </span>
        </div>
        <img
          className="instance-item"
          alt=""
          src="/appguide/baemin/rectangle-155@2x.png"
        />
        <div className="ant-designheart-filled" />
      </div>
      <div className="rectangle-group">
        <div className="instance-child" />
        <div className="div7">
          <span className="txt">
            <p className="p">마늘보쌈</p>
            <p className="p">소 : 29,000원</p>
            <p className="p">중 : 36,000원</p>
            <p className="p">대 : 43,000원</p>
          </span>
        </div>
        <img
          className="instance-item"
          alt=""
          src="/appguide/baemin/rectangle-156@2x.png"
        />
        <div className="ant-designheart-filled" />
      </div>
      <img
        className="image-2-icon"
        alt=""
        src="/appguide/baemin/image-2@2x.png"
      />
      <img
        className="favorite-icon"
        alt=""
        src="/appguide/baemin/favorite@2x.png"
      />
      <div className="coupon-child1" onClick={onRectangle4Click} />
      <div className="wrapper">
        <div className="div9">2000원 할인 쿠폰 받기 완료</div>
      </div>
    </div>
  );
};

export default Coupon;
