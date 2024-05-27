import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryAddress.css";

const DeliveryAddress = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/order-14");
  }, [navigate]);

  return (
    <div className="coupong-deliveryaddress-17">
      <div className="coupong-div261">주문/결제</div>
      <div className="coupong-div262">배송지 선택</div>
      <div className="coupong-rectangle-parent77">
        <div className="coupong-frame-child48" />
        <div className="coupong-frame-child49" />
        <div className="coupong-frame-child50" />
        <div className="coupong-div263">침착맨</div>
        <div className="coupong-div264">유후</div>
        <div className="coupong-frame-child51" />
        <div className="coupong-frame-child52" />
        <div className="coupong-frame-child53" />
        <div className="coupong-frame-child54" />
        <div className="coupong-frame-child55" />
        <div className="coupong-div265">기본배송지</div>
        <div className="coupong-div266">라켓프레시 가능</div>
        <div className="coupong-div267">라켓프레시 가능</div>
        <div className="coupong-div268">라켓와우 가능</div>
        <div className="coupong-div269">라켓와우 가능</div>
        <div className="coupong-div270">부산광역시 남구 용소로 45(대연동) 303호</div>
        <div className="coupong-div271">부산광역시 동래구 사직로 45 사직동 930</div>
        <div className="coupong-div272">010-1234-5678</div>
        <div className="coupong-div273">051-505-7422</div>
        <div className="coupong-div274">
          일반 : 문 앞 / 새벽 : 문 앞 (자유 출입가능)
        </div>
        <div className="coupong-div275">
          일반 : 문 앞 / 새벽 : 문 앞 (자유 출입가능)
        </div>
        <div className="coupong-frame-child56" />
        <div className="coupong-frame-child57" />
        <div className="coupong-frame-child58" />
        <div className="coupong-div276">수정</div>
        <div className="coupong-div277">수정</div>
        <div className="coupong-rectangle-parent78" onClick={onGroupContainerClick}>
          <div className="coupong-group-child98" />
          <div className="coupong-div278">선택</div>
        </div>
        <div className="coupong-div279">선택</div>
        <div className="coupong-frame-child59" />
        <div className="coupong-div280">+ 배송지 추가</div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
