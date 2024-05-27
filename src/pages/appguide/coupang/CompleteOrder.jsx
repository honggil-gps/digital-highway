import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CompleteOrder.css";

const CompleteOrder = () => {
  const navigate = useNavigate();

  const onCompleteOrder18ContainerClick = useCallback(() => {
    navigate("/maincontents/end-19");
  }, [navigate]);

  return (
    <div className="coupong-completeorder-18" onClick={onCompleteOrder18ContainerClick}>
      <div className="coupong-div281">주문/결제</div>
      <div className="coupong-div282">주문이 완료되었습니다!</div>
      <div className="coupong-rectangle-parent79">
        <div className="coupong-frame-child60" />
        <div className="coupong-div283">주문상세</div>
        <div className="coupong-div284">2024.06.20 주문</div>
        <div className="coupong-div285">주문번호 2983789327891</div>
        <div className="coupong-frame-child61" />
        <div className="coupong-frame-child62" />
        <div className="coupong-div286">결제 정보</div>
        <div className="coupong-div287">상품 가격</div>
        <div className="coupong-div288">48,900원</div>
        <div className="coupong-div289">0원</div>
        <div className="coupong-div290">48,900원</div>
        <div className="coupong-div291">48,900원</div>
        <div className="coupong-div292">배송비</div>
        <div className="coupong-div293">부경카드 / 일시불</div>
        <div className="coupong-div294">총 결제금액</div>
        <div className="coupong-frame-child63" />
        <div className="coupong-frame-child64" />
        <div className="coupong-frame-child65" />
        <div className="coupong-div295">카드영수증 보기</div>
        <div className="coupong-pc">{`거래명세표는 PC 마이쿠퐁 > 주문상세에서 확인할 수 있습니다.`}</div>
        <div className="coupong-div296">침착맨</div>
        <div className="coupong-div297">부산광역시 남구 용소로 45(대연동) 303호</div>
        <div className="coupong-div298">010-1234-5678</div>
        <div className="coupong-div299">
          배송요청사항 · 새벽 : 문 앞 (자유 출입가능)
        </div>
      </div>
    </div>
  );
};

export default CompleteOrder;
