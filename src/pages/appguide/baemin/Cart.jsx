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
      <div className="div87" onClick={onTextClick}>
        뒤로가기
      </div>
      <div className="div88">장바구니</div>
      <img
        className="plus-math-icon"
        alt=""
        src="/appguide/baemin/plus-math@2x.png"
      />
      <div className="div89">더 담으러 가기</div>
      <div className="cart-item" />
      <div className="div90">배달방식을 선택해주세요</div>
      <div className="parent2" onClick={onFrameContainerClick}>
        <div className="div91">알뜰배달</div>
        <img className="won-icon" alt="" src="/appguide/baemin/won@2x.png" />
        <div className="div92">(30분~45분)</div>
        <div className="div93">배달팁 1,000원</div>
      </div>
      <div className="parent3">
        <div className="div94">한집배달</div>
        <img
          className="won-icon"
          alt=""
          src="/appguide/baemin/home-page@2x.png"
        />
        <div className="div92">(20분~30분)</div>
        <div className="div93">배달팁 2,000원</div>
      </div>
      <div className="rectangle-parent28">
        <div className="group-child10" />
        <div className="div97">총 주문금액</div>
        <div className="div98">44,900원</div>
      </div>
      <div className="component-32">
        <div className="component-32-child" />
        <div className="div99">
          <span className="txt4">
            <p className="p104">말왕족발</p>
            <p className="p104">[무료배달이벤트] 1+1 족발세트</p>
          </span>
        </div>
        <div className="div100">
          <span className="txt4">
            <p className="p104">가격 : 중 (41,900원)</p>
            <p className="p104">맛 선택 : 바베큐맛</p>
          </span>
        </div>
        <div className="div101">43,900원</div>
        <img
          className="component-32-item"
          alt=""
          src="/appguide/baemin/menuPupular1.png"
        />
        <div className="component-32-inner" />
        <div className="component-32-child1" />
        <div className="div102">옵션변경</div>
        <img
          className="plus-math-icon1"
          alt=""
          src="/appguide/baemin/plus-math1@2x.png"
        />
        <img
          className="subtract-icon"
          alt=""
          src="/appguide/baemin/subtract@2x.png"
        />
        <div className="div103">1</div>
      </div>
    </div>
  );
};

export default Cart;
