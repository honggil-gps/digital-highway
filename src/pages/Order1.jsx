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
      <div className="div83">결제수단</div>
      <div className="div84">
        <p className="p93">배민페이</p>
        <p className="p93">토스페이</p>
        <p className="p93">다른 결제수단</p>
      </div>
      <div className="order3-inner" />
      <input className="ellipse-input" checked={true} type="radio" />
      <div className="order3-child1" />
      <div className="div85">신용/체크카드</div>
      <div className="div86">카드사 선택</div>
      <img className="sort-down-icon" alt="" src="/sort-down@2x.png" />
      <div className="order3-child2" />
      <div className="order3-child3" />
      <div className="div87">할인쿠폰</div>
      <div className="div88">결제금액</div>
      <div className="div89">총 결제금액</div>
      <div className="div90">1장보유</div>
      <div className="order3-child4" />
      <div className="div91">2,000원 할인됨</div>
      <img className="more-than-icon" alt="" src="/more-than@2x.png" />
      <div className="div92">
        <p className="p93">주문금액</p>
        <p className="p93">배달팁</p>
        <p className="p93">할인쿠폰</p>
      </div>
      <div className="div93">
        <p className="p93">43,900원</p>
        <p className="p93">1,000원</p>
        <p className="p93">-2,000원</p>
      </div>
      <div className="div94">42,900원</div>
      <div className="order3-child5" />
      <div className="rectangle-parent19" onClick={onGroupContainerClick}>
        <div className="group-child11" />
        <div className="div95">44,900원 결제하기</div>
      </div>
      <div className="div96">위 내용에 모두 동의합니다</div>
      <input className="rectangle-input" type="checkbox" />
    </div>
  );
};

export default Order1;
