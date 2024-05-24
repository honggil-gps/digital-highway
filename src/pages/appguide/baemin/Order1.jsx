import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Order1.css";

const Order1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/order4");
  }, [navigate]);

  return (
    <div className="baeman-order3">
      <div className="baeman-order3-child" />
      <div className="baeman-order3-item" />
      <div className="baeman-div140">결제수단</div>
      <div className="baeman-div141">
        <p className="baeman-p120">배민페이</p>
        <p className="baeman-p120">토스페이</p>
        <p className="baeman-p120">다른 결제수단</p>
      </div>
      <div className="baeman-order3-inner" />
      <input className="baeman-order3-child1" checked={true} type="radio" />
      <div className="baeman-order3-child2" />
      <div className="baeman-div142">신용/체크카드</div>
      <div className="baeman-div143">카드사 선택</div>
      <img
        className="baeman-sort-down-icon"
        alt=""
        src="/appguide/baemin/sort-down@2x.png"
      />
      <div className="baeman-order3-child3" />
      <div className="baeman-order3-child4" />
      <div className="baeman-div144">할인쿠폰</div>
      <div className="baeman-div145">결제금액</div>
      <div className="baeman-div146">총 결제금액</div>
      <div className="baeman-div147">1장보유</div>
      <div className="baeman-order3-child5" />
      <div className="baeman-div148">2,000원 할인됨</div>
      <img
        className="baeman-more-than-icon"
        alt=""
        src="/appguide/baemin/more-than@2x.png"
      />
      <div className="baeman-div149">
        <p className="baeman-p120">주문금액</p>
        <p className="baeman-p120">배달팁</p>
        <p className="baeman-p120">할인쿠폰</p>
      </div>
      <div className="baeman-div150">
        <p className="baeman-p120">43,900원</p>
        <p className="baeman-p120">1,000원</p>
        <p className="baeman-p120">-2,000원</p>
      </div>
      <div className="baeman-div151">42,900원</div>
      <div className="baeman-order3-child6" />
      <div className="baeman-rectangle-parent37" onClick={onGroupContainerClick}>
        <div className="baeman-group-child23" />
        <div className="baeman-div152">44,900원 결제하기</div>
      </div>
      <div className="baeman-div153">위 내용에 모두 동의합니다</div>
      <input className="baeman-rectangle-input1" type="checkbox" />
    </div>
  );
};

export default Order1;
