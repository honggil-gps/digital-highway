import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/request");
  }, [navigate]);

  return (
    <div className="cart">
      <div className="cart-child" />
      <div className="div135" onClick={onTextClick}>
        뒤로가기
      </div>
      <div className="div136">장바구니</div>
      <img className="plus-math-icon" alt="" src="/plus-math@2x.png" />
      <div className="div137">더 담으러 가기</div>
      <div className="cart-item" />
      <div className="div138">배달방식을 선택해주세요</div>
      <div className="parent2" onClick={onFrameContainerClick}>
        <div className="div139">알뜰배달</div>
        <img className="home-page-icon" alt="" src="/won@2x.png" />
        <div className="div140">(30분~45분)</div>
        <div className="div141">배달팁 1,000원</div>
      </div>
      <div className="parent3">
        <div className="div142">한집배달</div>
        <img className="home-page-icon" alt="" src="/home-page@2x.png" />
        <div className="div140">(20분~30분)</div>
        <div className="div141">배달팁 2,000원</div>
      </div>
      <div className="cart-inner" />
      <div className="div145">총 주문금액</div>
      <div className="div146">44,900원</div>
      <div className="component-32">
        <div className="component-32-child" />
        <div className="div147">
          <span className="txt19">
            <p className="p117">말왕족발</p>
            <p className="p117">[무료배달이벤트] 1+1 족발세트</p>
          </span>
        </div>
        <div className="div148">
          <span className="txt19">
            <p className="p117">가격 : 중 (41,900원)</p>
            <p className="p117">맛 선택 : 바베큐맛</p>
          </span>
        </div>
        <div className="div149">43,900원</div>
        <img className="component-32-item" alt="" src="/rectangle-15@2x.png" />
        <div className="component-32-inner" />
        <div className="component-32-child1" />
        <div className="div150">옵션변경</div>
        <img className="plus-math-icon1" alt="" src="/plus-math@2x.png" />
        <img className="subtract-icon" alt="" src="/subtract@2x.png" />
        <div className="div151">1</div>
      </div>
    </div>
  );
};

export default Cart;
