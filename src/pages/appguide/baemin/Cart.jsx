import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/maincontents/14");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/request");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("장바구니 보기 버튼을 눌러 \n 선택한 주문내역을 확인해보세요", "알뜰배달은 저렴한 대신 느리고, \n 한집배달은 바로 배달오는 대신 \n 배달팁이 더 추가됩니다. \n 알뜰 배달을 선택해보세요.", "주문 전 휴대폰번호 \n 인증이 필요합니다. \n [인증]을 눌러주세요.")},[])

  return (
    <div className="baeman-cart">
      <div className="baeman-cart-child" />
      <div className="baeman-div87" onClick={onTextClick}>
        뒤로가기
      </div>
      <div className="baeman-div88">장바구니</div>
      <img
        className="baeman-plus-math-icon"
        alt=""
        src="/appguide/baemin/plus-math@2x.png"
      />
      <div className="baeman-div89">더 담으러 가기</div>
      <div className="baeman-cart-item" />
      <div className="baeman-div90">배달방식을 선택해주세요</div>
      <div className="baeman-parent2" onClick={onFrameContainerClick}>
        <div className="baeman-div91">알뜰배달</div>
        <img className="baeman-won-icon" alt="" src="/appguide/baemin/won@2x.png" />
        <div className="baeman-div92">(30분~45분)</div>
        <div className="baeman-div93">배달팁 1,000원</div>
      </div>
      <div className="baeman-parent3">
        <div className="baeman-div94">한집배달</div>
        <img
          className="baeman-won-icon"
          alt=""
          src="/appguide/baemin/home-page@2x.png"
        />
        <div className="baeman-div92">(20분~30분)</div>
        <div className="baeman-div93">배달팁 2,000원</div>
      </div>
      <div className="baeman-rectangle-parent28">
        <div className="baeman-group-child10" />
        <div className="baeman-div97">총 주문금액</div>
        <div className="baeman-div98">44,900원</div>
      </div>
      <div className="baeman-component-32">
        <div className="baeman-component-32-child" />
        <div className="baeman-div99">
          <span className="baeman-txt4">
            <p className="baeman-p104">말왕족발</p>
            <p className="baeman-p104">[무료배달이벤트] 1+1 족발세트</p>
          </span>
        </div>
        <div className="baeman-div100">
          <span className="baeman-txt4">
            <p className="baeman-p104">가격 : 중 (41,900원)</p>
            <p className="baeman-p104">맛 선택 : 바베큐맛</p>
          </span>
        </div>
        <div className="baeman-div101">43,900원</div>
        <img
          className="baeman-component-32-item"
          alt=""
          src="/appguide/baemin/menuPupular1.png"
        />
        <div className="baeman-component-32-inner" />
        <div className="baeman-component-32-child1" />
        <div className="baeman-div102">옵션변경</div>
        <img
          className="baeman-plus-math-icon1"
          alt=""
          src="/appguide/baemin/plus-math1@2x.png"
        />
        <img
          className="baeman-subtract-icon"
          alt=""
          src="/appguide/baemin/subtract@2x.png"
        />
        <div className="baeman-div103">1</div>
      </div>
    </div>
  );
};

export default Cart;
