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
      <div className="div169">말왕족발</div>
      <div className="coupon-child1" />
      <div className="div170">찜하기</div>
      <div className="div171">5.0</div>
      <img className="star-icon17" alt="" src="/star@2x.png" />
      <div className="div172">리뷰 15개</div>
      <img className="coupon-child2" alt="" />
      <div className="div173">
        <p className="p129">최소주문금액 15,000원</p>
        <p className="p129">한집배달 소요시간 31~41분</p>
      </div>
      <div className="div174">인기 메뉴</div>
      <div className="div175">2000원 첫주문 할인 쿠폰 받기</div>
      <div className="rectangle-parent30">
        <div className="instance-child28" />
        <div className="div176">
          <span className="txt21">
            <p className="p129">[무료배달이벤트]</p>
            <p className="p129">1+1 족발세트</p>
            <p className="p129">소 : 34,900</p>
            <p className="p129">중 : 41,900</p>
            <p className="p129">대 : 48,900</p>
          </span>
        </div>
        <img className="instance-child29" alt="" src="/rectangle-15@2x.png" />
        <div className="ant-designheart-filled17" />
      </div>
      <div className="rectangle-parent31">
        <div className="instance-child28" />
        <div className="div176">
          <span className="txt21">
            <p className="p129">마늘보쌈</p>
            <p className="p129">소 : 29,000원</p>
            <p className="p129">중 : 36,000원</p>
            <p className="p129">대 : 43,000원</p>
          </span>
        </div>
        <img className="instance-child29" alt="" src="/rectangle-15@2x.png" />
        <div className="ant-designheart-filled17" />
      </div>
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <img className="favorite-icon1" alt="" src="/favorite@2x.png" />
      <div className="coupon-child3" onClick={onRectangle4Click} />
      <div className="wrapper5">
        <div className="div178">2000원 할인 쿠폰 받기 완료</div>
      </div>
    </div>
  );
};

export default Coupon;
