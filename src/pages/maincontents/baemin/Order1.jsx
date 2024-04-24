import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Order1.css";

const Order1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/order4");
  }, [navigate]);

  return (
    <div className="order3">
      <div className="order3-child" />
      <div className="order3-item" />
      <div className="div149">결제수단</div>
      <div className="div150">
        <p className="p72">배민페이</p>
        <p className="p72">토스페이</p>
        <p className="p72">다른 결제수단</p>
      </div>
      <div className="order3-inner" />
      <input className="order3-child1" checked={true} type="radio" />
      <div className="order3-child2" />
      <div className="div151">신용/체크카드</div>
      <div className="div152">카드사 선택</div>
      <img className="sort-down-icon" alt="" src="/sort-down@2x.png" />
      <div className="order3-child3" />
      <div className="order3-child4" />
      <div className="div153">할인쿠폰</div>
      <div className="div154">결제금액</div>
      <div className="div155">총 결제금액</div>
      <div className="div156">1장보유</div>
      <div className="order3-child5" />
      <div className="div157">2,000원 할인됨</div>
      <img className="more-than-icon" alt="" src="/more-than@2x.png" />
      <div className="div158">
        <p className="p72">주문금액</p>
        <p className="p72">배달팁</p>
        <p className="p72">할인쿠폰</p>
      </div>
      <div className="div159">
        <p className="p72">43,900원</p>
        <p className="p72">1,000원</p>
        <p className="p72">-2,000원</p>
      </div>
      <div className="div160">42,900원</div>
      <div className="order3-child6" />
      <div className="rectangle-parent21" onClick={onGroupContainerClick}>
        <div className="group-child18" />
        <div className="div161">44,900원 결제하기</div>
      </div>
      <div className="div162">위 내용에 모두 동의합니다</div>
      <input className="rectangle-input1" type="checkbox" />
    </div>
  );
};

export default Order1;
