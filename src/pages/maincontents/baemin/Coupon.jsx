import { useCallback } from "react";
import GroupComponent from "../../../components/baemin/GroupComponent1";
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
      <div className="div74">말왕족발</div>
      <div className="coupon-child1" />
      <div className="div75">찜하기</div>
      <div className="div76">5.0</div>
      <img className="star-icon7" alt="" src="/star@2x.png" />
      <div className="div77">리뷰 15개</div>
      <img className="line-icon" alt="" />
      <div className="div78">
        <p className="p42">최소주문금액 15,000원</p>
        <p className="p42">한집배달 소요시간 31~41분</p>
      </div>
      <div className="div79">인기 메뉴</div>
      <div className="div80">2000원 첫주문 할인 쿠폰 받기</div>
      <GroupComponent
        rectangle15="/rectangle-15@2x.png"
        rectangleIcon
        propTop="37.25rem"
        propLeft="0.563rem"
      />
      <div className="rectangle-parent13">
        <div className="instance-child12" />
        <div className="div81">
          <span className="txt9">
            <p className="p42">마늘보쌈</p>
            <p className="p42">소 : 29,000원</p>
            <p className="p42">중 : 36,000원</p>
            <p className="p42">대 : 43,000원</p>
          </span>
        </div>
        <img className="instance-child13" alt="" src="/rectangle-15@2x.png" />
        <div className="ant-designheart-filled8" />
      </div>
      <img className="image-2-icon" alt="" src="/image-2@2x.png" />
      <img className="favorite-icon1" alt="" src="/favorite@2x.png" />
      <div className="coupon-child2" onClick={onRectangle4Click} />
      <div className="wrapper">
        <div className="div82">2000원 할인 쿠폰 받기 완료</div>
      </div>
    </div>
  );
};

export default Coupon;
