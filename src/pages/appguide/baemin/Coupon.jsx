import { useCallback} from "react";
import { useNavigate } from "react-router-dom";
import "./Coupon.css";

const Coupon = () => {
  const navigate = useNavigate();
  
  const onRectangle4Click = useCallback(() => {
    navigate("/maincontents/11");
  }, [navigate]);
  
  return (
    <div className="baeman-coupon">
      <div className="baeman-coupon-child" />
      <div className="baeman-coupon-item" />
      <div className="baeman-coupon-inner" />
      <div className="baeman-div">말왕족발</div>
      <div className="baeman-rectangle-div" />
      <div className="baeman-div1">찜하기</div>
      <div className="baeman-div2">5.0</div>
      <img className="baeman-star-icon" alt="" src="/appguide/baemin/star@2x.png" />
      <div className="baeman-div3">리뷰 15개</div>
      <img className="baeman-line-icon" alt="" />
      <div className="baeman-div4">
        <p className="baeman-p">최소주문금액 15,000원</p>
        <p className="baeman-p">한집배달 소요시간 31~41분</p>
      </div>
      <div className="baeman-div5">인기 메뉴</div>
      <div className="baeman-div6">2000원 첫주문 할인 쿠폰 받기</div>
      <div className="baeman-rectangle-parent">
        <div className="baeman-instance-child" />
        <div className="baeman-div7">
          <span className="baeman-txt">
            <p className="baeman-p">[무료배달이벤트]</p>
            <p className="baeman-p">1+1 족발세트</p>
            <p className="baeman-p">소 : 34,900</p>
            <p className="baeman-p">중 : 41,900</p>
            <p className="baeman-p">대 : 48,900</p>
          </span>
        </div>
        <img
          className="baeman-instance-item"
          alt=""
          src="/appguide/baemin/rectangle-155@2x.png"
        />
        <div className="baeman-ant-designheart-filled" />
      </div>
      <div className="baeman-rectangle-group">
        <div className="baeman-instance-child" />
        <div className="baeman-div7">
          <span className="baeman-txt">
            <p className="baeman-p">마늘보쌈</p>
            <p className="baeman-p">소 : 29,000원</p>
            <p className="baeman-p">중 : 36,000원</p>
            <p className="baeman-p">대 : 43,000원</p>
          </span>
        </div>
        <img
          className="baeman-instance-item"
          alt=""
          src="/appguide/baemin/rectangle-156@2x.png"
        />
        <div className="baeman-ant-designheart-filled" />
      </div>
      <img
        className="baeman-image-2-icon"
        alt=""
        src="/appguide/baemin/image-2@2x.png"
      />
      <img
        className="baeman-favorite-icon"
        alt=""
        src="/appguide/baemin/favorite@2x.png"
      />
      <div className="baeman-coupon-child1" onClick={onRectangle4Click} />
      <div className="baeman-wrapper">
        <div className="baeman-div9">2000원 할인 쿠폰 받기 완료</div>
      </div>
    </div>
  );
};

export default Coupon;
