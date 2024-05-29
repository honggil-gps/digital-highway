import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import GroupComponent2 from "../../../components/appguide/baemin/GroupComponent2";
import GroupComponent5 from "../../../components/appguide/baemin/GroupComponent11";
import "./Order.css";

const Order = () => {
  
  const navigate = useNavigate();
  const {baseAddress, detailAddress} = useAddress();
  console.log('Base Address', baseAddress);
  console.log('Deatil Address', detailAddress);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("[010-1234-5678]을 입력한 후 \n 메시지로 전송된 인증번호를 \n 입력해주세요.", "요청사항이 있다면 입력하거나, \n 결제수단을 선택할 수 있습니다.\n 토스페이를 누르고 \n 쿠폰을 눌러 할인도 받아보세요.","아까 받았던 쿠폰을 \n 사용해보세요.")},[])

  return (
    <div className="baeman-order">
      <div className="baeman-group-container">
        <div className="baeman-rectangle-parent32">
          <div className="baeman-group-child13" />
          <div className="baeman-group-child14" />
          <div className="baeman-div121">
            <span className="baeman-txt7">
              <p className="baeman-p110">{baseAddress}</p>
              <p className="baeman-p110">{detailAddress}</p>
            </span>
          </div>
          <div className="baeman-div122">010-1234-5678</div>
          <div className="baeman-group-child15" />
          <div className="baeman-div123">완료</div>
        </div>
        <div className="baeman-rectangle-parent33">
          <div className="baeman-group-child16" />
          <input
            className="baeman-rectangle-input"
            placeholder="일회용 수저가 필요해요!"
            type="text"
          />
          <input
            className="baeman-group-child17"
            placeholder="요청사항을 입력하세요"
            type="text"
          />
          <div className="baeman-div124">요청사항</div>
          <div className="baeman-div125">가게 사장님께</div>
          <div className="baeman-div126">라이더님께</div>
        </div>
        <GroupComponent2 />
        <GroupComponent5 />
        <div className="baeman-rectangle-parent34">
          <div className="baeman-group-child18" />
          <div className="baeman-div127">결제금액</div>
          <div className="baeman-div128">
            <p className="baeman-p110">주문금액</p>
            <p className="baeman-p110">배달팁</p>
          </div>
          <div className="baeman-div129">
            <p className="baeman-p110">43,900원</p>
            <p className="baeman-p110">1,000원</p>
          </div>
        </div>
      </div>
      <div className="baeman-div130">로 받을게요</div>
      <div className="baeman-div131">🕒 30~45분 후 도착</div>
      <div className="baeman-div132">알뜰배달</div>
      <img className="baeman-won-icon2" alt="" src="/appguide/baemin/won2@2x.png" />
      <div className="baeman-order-inner">
        <div className="baeman-rectangle-parent35">
          <div className="baeman-grouper">
            <div className="baeman-group-child19" />
            <div className="baeman-group-child20" />
            <div className="baeman-div133">44,900원 결제하기</div>
            <div className="baeman-div134">위 내용에 모두 동의합니다</div>
            <div className="baeman-group-child21" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
