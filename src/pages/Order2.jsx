import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Order2.css";

const Order2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/usecoupon");
  }, [navigate]);

  return (
    <div className="order">
      <div className="group-parent">
        <div className="rectangle-parent21">
          <div className="group-child13" />
          <div className="group-child14" />
          <div className="div102">
            <span className="txt17">
              <p className="p106">부산 남구 용소로 45(대연동)</p>
              <p className="p106">303호</p>
            </span>
          </div>
          <div className="div103">010-1234-5678</div>
          <div className="group-child15" />
          <div className="div104">완료</div>
        </div>
        <div className="rectangle-parent22">
          <div className="group-child16" />
          <input
            className="group-child17"
            placeholder="일회용 수저가 필요해요!"
            type="text"
          />
          <input
            className="group-child18"
            placeholder="요청사항을 입력하세요"
            type="text"
          />
          <div className="div105">요청사항</div>
          <div className="div106">가게 사장님께</div>
          <div className="div107">라이더님께</div>
        </div>
        <div className="rectangle-parent23">
          <div className="group-child19" />
          <div className="div108">결제수단</div>
          <div className="div109">
            <p className="p106">배민페이</p>
            <p className="p106">토스페이</p>
            <p className="p106">다른 결제수단</p>
          </div>
          <div className="group-child20" />
          <div className="group-child21" />
          <div className="group-child22" />
          <div className="group-child23" />
          <div className="div110">신용/체크카드</div>
        </div>
        <div className="rectangle-parent24">
          <div className="group-child24" />
          <div className="div111">할인쿠폰</div>
          <div className="div112">1장보유</div>
          <div className="rectangle-parent25" onClick={onGroupContainerClick}>
            <div className="group-child25" />
            <div className="div113">사용 가능한 쿠폰이 1장 있어요!</div>
            <img className="more-than-icon1" alt="" src="/more-than@2x.png" />
          </div>
        </div>
        <div className="rectangle-parent26">
          <div className="group-child26" />
          <div className="div114">결제금액</div>
          <div className="div115">
            <p className="p106">주문금액</p>
            <p className="p106">배달팁</p>
          </div>
          <div className="div116">
            <p className="p106">43,900원</p>
            <p className="p106">1,000원</p>
          </div>
        </div>
      </div>
      <div className="div117">로 받을게요</div>
      <div className="div118">30~45분 후 도착</div>
      <div className="div119">알뜰배달</div>
      <img className="won-icon" alt="" src="/won@2x.png" />
      <div className="order-inner">
        <div className="rectangle-parent27">
          <div className="group-child27" />
          <div className="group-child28" />
          <div className="div120">44,900원 결제하기</div>
          <div className="div121">위 내용에 모두 동의합니다</div>
          <div className="group-child29" />
        </div>
      </div>
    </div>
  );
};

export default Order2;
