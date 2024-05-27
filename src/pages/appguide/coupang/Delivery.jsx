import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Delivery.css";

const Delivery = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/addaddress-16");
  }, [navigate]);

  return (
    <div className="coupong-delivery-15">
      <div className="coupong-div245">주문/결제</div>
      <div className="coupong-div246">배송지 선택</div>
      <div className="coupong-rectangle-parent73">
        <div className="coupong-frame-child31" />
        <div className="coupong-frame-child32" />
        <div className="coupong-div247">침착맨</div>
        <div className="coupong-frame-child33" />
        <div className="coupong-frame-child34" />
        <div className="coupong-frame-child35" />
        <div className="coupong-div248">기본배송지</div>
        <div className="coupong-div249">라켓프레시 가능</div>
        <div className="coupong-div250">라켓와우 가능</div>
        <div className="coupong-div251">부산광역시 남구 용소로 45(대연동) 303호</div>
        <div className="coupong-div252">010-1234-5678</div>
        <div className="coupong-div253">
          일반 : 문 앞 / 새벽 : 문 앞 (자유 출입가능)
        </div>
        <div className="coupong-frame-child36" />
        <div className="coupong-frame-child37" />
        <div className="coupong-div254">수정</div>
        <div className="coupong-div255">선택</div>
        <div className="coupong-rectangle-parent74" onClick={onGroupContainerClick}>
          <div className="coupong-group-child96" />
          <div className="coupong-div256">+ 배송지 추가</div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
