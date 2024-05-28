import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UseCoupon.css";

const UseCoupon = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/order3");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("요청사항이 있다면 입력하거나, \n 결제수단을 선택할 수 있습니다.\n 토스페이를 누르고 \n 쿠폰을 눌러 할인도 받아보세요.","아까 받았던 쿠폰을 \n 사용해보세요.", "주문 내역이 모두 맞다면 \n 위 내용에 동의 후 \n 결제하기 버튼을 눌러주세요.")},[])

  return (
    <div className="baeman-usecoupon">
      <div className="baeman-div135">할인쿠폰</div>
      <img
        className="baeman-close-icon2"
        alt=""
        src="/appguide/baemin/close1@2x.png"
      />
      <div className="baeman-usecoupon-child" />
      <div className="baeman-rectangle-parent36" onClick={onGroupContainerClick}>
        <div className="baeman-group-child22" />
        <div className="baeman-div136">사용하기</div>
      </div>
      <div className="baeman-usecoupon-item" />
      <div className="baeman-usecoupon-inner" />
      <div className="baeman-div137">등록</div>
      <div className="baeman-div138">
        <p className="baeman-p116">2,000원</p>
        <p className="baeman-p116">말왕족발 깜짝 할인</p>
      </div>
      <div className="baeman-div139">
        <p className="baeman-p116">7일 후 만료</p>
        <p className="baeman-p116">최소주문금액 : 30,000원</p>
      </div>
      <input className="baeman-usecoupon-child1" type="radio" />
    </div>
  );
};

export default UseCoupon;
