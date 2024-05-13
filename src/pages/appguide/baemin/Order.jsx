import { useCallback } from "react";
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

  return (
    <div className="order">
      <div className="group-container">
        <div className="rectangle-parent32">
          <div className="group-child13" />
          <div className="group-child14" />
          <div className="div121">
            <span className="txt7">
              <p className="p110">{baseAddress}</p>
              <p className="p110">{detailAddress}</p>
            </span>
          </div>
          <div className="div122">010-1234-5678</div>
          <div className="group-child15" />
          <div className="div123">완료</div>
        </div>
        <div className="rectangle-parent33">
          <div className="group-child16" />
          <input
            className="rectangle-input"
            placeholder="일회용 수저가 필요해요!"
            type="text"
          />
          <input
            className="group-child17"
            placeholder="요청사항을 입력하세요"
            type="text"
          />
          <div className="div124">요청사항</div>
          <div className="div125">가게 사장님께</div>
          <div className="div126">라이더님께</div>
        </div>
        <GroupComponent2 />
        <GroupComponent5 />
        <div className="rectangle-parent34">
          <div className="group-child18" />
          <div className="div127">결제금액</div>
          <div className="div128">
            <p className="p110">주문금액</p>
            <p className="p110">배달팁</p>
          </div>
          <div className="div129">
            <p className="p110">43,900원</p>
            <p className="p110">1,000원</p>
          </div>
        </div>
      </div>
      <div className="div130">로 받을게요</div>
      <div className="div131">30~45분 후 도착</div>
      <div className="div132">알뜰배달</div>
      <img className="won-icon2" alt="" src="/appguide/baemin/won2@2x.png" />
      <div className="order-inner">
        <div className="rectangle-parent35">
          <div className="grouper">
            <div className="group-child19" />
            <div className="group-child20" />
            <div className="div133">44,900원 결제하기</div>
            <div className="div134">위 내용에 모두 동의합니다</div>
            <div className="group-child21" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
