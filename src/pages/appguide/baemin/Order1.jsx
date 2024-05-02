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
      <div className="div140">결제수단</div>
      <div className="div141">
        <p className="p120">배민페이</p>
        <p className="p120">토스페이</p>
        <p className="p120">다른 결제수단</p>
      </div>
      <div className="order3-inner" />
      <input className="order3-child1" checked={true} type="radio" />
      <div className="order3-child2" />
      <div className="div142">신용/체크카드</div>
      <div className="div143">카드사 선택</div>
      <img
        className="sort-down-icon"
        alt=""
        src="/appguide/baemin/sort-down@2x.png"
      />
      <div className="order3-child3" />
      <div className="order3-child4" />
      <div className="div144">할인쿠폰</div>
      <div className="div145">결제금액</div>
      <div className="div146">총 결제금액</div>
      <div className="div147">1장보유</div>
      <div className="order3-child5" />
      <div className="div148">2,000원 할인됨</div>
      <img
        className="more-than-icon"
        alt=""
        src="/appguide/baemin/more-than@2x.png"
      />
      <div className="div149">
        <p className="p120">주문금액</p>
        <p className="p120">배달팁</p>
        <p className="p120">할인쿠폰</p>
      </div>
      <div className="div150">
        <p className="p120">43,900원</p>
        <p className="p120">1,000원</p>
        <p className="p120">-2,000원</p>
      </div>
      <div className="div151">42,900원</div>
      <div className="order3-child6" />
      <div className="rectangle-parent37" onClick={onGroupContainerClick}>
        <div className="group-child23" />
        <div className="div152">44,900원 결제하기</div>
      </div>
      <div className="div153">위 내용에 모두 동의합니다</div>
      <input className="rectangle-input1" type="checkbox" />
    </div>
  );
};

export default Order1;
