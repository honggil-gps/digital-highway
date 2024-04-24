import GroupComponent2 from "../../../components/baemin/GroupComponent2";
import GroupComponent1 from "../../../components/baemin/GroupComponent1";
import "./Order.css";

const Order = () => {
  return (
    <div className="order">
      <div className="group-container">
        <div className="rectangle-parent16">
          <div className="group-child8" />
          <div className="group-child9" />
          <div className="div130">
            <span className="txt13">
              <p className="p62">부산 남구 용소로 45(대연동)</p>
              <p className="p62">303호</p>
            </span>
          </div>
          <div className="div131">010-1234-5678</div>
          <div className="group-child10" />
          <div className="div132">완료</div>
        </div>
        <div className="rectangle-parent17">
          <div className="group-child11" />
          <input
            className="rectangle-input"
            placeholder="일회용 수저가 필요해요!"
            type="text"
          />
          <input
            className="group-child12"
            placeholder="요청사항을 입력하세요"
            type="text"
          />
          <div className="div133">요청사항</div>
          <div className="div134">가게 사장님께</div>
          <div className="div135">라이더님께</div>
        </div>
        <GroupComponent2 />
        <GroupComponent1 />
        <div className="rectangle-parent18">
          <div className="group-child13" />
          <div className="div136">결제금액</div>
          <div className="div137">
            <p className="p62">주문금액</p>
            <p className="p62">배달팁</p>
          </div>
          <div className="div138">
            <p className="p62">43,900원</p>
            <p className="p62">1,000원</p>
          </div>
        </div>
      </div>
      <div className="div139">로 받을게요</div>
      <div className="div140">30~45분 후 도착</div>
      <div className="div141">알뜰배달</div>
      <img className="won-icon2" alt="" src="/won@2x.png" />
      <div className="order-inner">
        <div className="rectangle-parent19">
          <div className="group-child14" />
          <div className="group-child15" />
          <div className="div142">44,900원 결제하기</div>
          <div className="div143">위 내용에 모두 동의합니다</div>
          <div className="group-child16" />
        </div>
      </div>
    </div>
  );
};

export default Order;
