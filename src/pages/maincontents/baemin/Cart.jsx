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
      <div className="div100" onClick={onTextClick}>
        뒤로가기
      </div>
      <div className="div101">장바구니</div>
      <img className="plus-math-icon" alt="" src="/plus-math@2x.png" />
      <div className="div102">더 담으러 가기</div>
      <div className="cart-item" />
      <div className="div103">배달방식을 선택해주세요</div>
      <div className="parent2" onClick={onFrameContainerClick}>
        <div className="div104">알뜰배달</div>
        <img className="won-icon" alt="" src="/won@2x.png" />
        <div className="div105">(30분~45분)</div>
        <div className="div106">배달팁 1,000원</div>
      </div>
      <div className="parent3">
        <div className="div107">한집배달</div>
        <img className="won-icon" alt="" src="/home-page@2x.png" />
        <div className="div105">(20분~30분)</div>
        <div className="div106">배달팁 2,000원</div>
      </div>
      <div className="cart-inner" />
      <div className="div110">총 주문금액</div>
      <div className="div111">44,900원</div>
      <div className="component-32">
        <div className="component-32-child" />
        <div className="div112">
          <span className="txt10">
            <p className="p56">말왕족발</p>
            <p className="p56">[무료배달이벤트] 1+1 족발세트</p>
          </span>
        </div>
        <div className="div113">
          <span className="txt10">
            <p className="p56">가격 : 중 (41,900원)</p>
            <p className="p56">맛 선택 : 바베큐맛</p>
          </span>
        </div>
        <div className="div114">43,900원</div>
        <img className="component-32-item" alt="" src="/rectangle-15@2x.png" />
        <div className="component-32-inner" />
        <div className="component-32-child1" />
        <div className="div115">옵션변경</div>
        <img className="plus-math-icon1" alt="" src="/plus-math@2x.png" />
        <img className="subtract-icon" alt="" src="/subtract@2x.png" />
        <div className="div116">1</div>
      </div>
    </div>
  );
};

export default Cart;
