import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Order2.css";

const Order2 = () => {
  const navigate = useNavigate();

  const onOrder4ContainerClick = useCallback(() => {
    navigate("/end");
  }, [navigate]);

  return (
    <div className="order4" onClick={onOrder4ContainerClick}>
      <div className="div154">주문 진행 중이에요</div>
      <div className="order4-child" />
      <div className="div155">남은시간</div>
      <div className="div156">
        <p className="p129">맛있게 조리하여 배달해드릴게요</p>
        <p className="p129">잠시만 기다려주세요</p>
      </div>
      <div className="order4-item" />
      <div className="order4-inner" />
      <div className="div157">45분</div>
      <div className="order4-child1" />
      <div className="order4-child2" />
      <div className="div158">주문접수</div>
      <div className="div159">배달완료</div>
      <div className="div160">
        <p className="p129">오후 10:10</p>
        <p className="p129">{`도착예정 `}</p>
      </div>
      <img
        className="kakaotalk-20240410-182746195-1-icon"
        alt=""
        src="/appguide/baemin/kakaotalk-20240410-182746195-1@2x.png"
      />
      <div className="order4-child3" />
      <div className="div161">주문 내역</div>
      <div className="div162">말왕족발</div>
      <div className="div163">[무료배달이벤트] 1+1 족발세트</div>
      <div className="t1r60000hj72-container">
        <p className="p129">주문일시 : 2024년 03월 25일 오후 09:25</p>
        <p className="p129">주문번호 : T1R60000HJ72</p>
        <p className="p129">배달방식 : 알뜰배달</p>
      </div>
      <div className="order4-child4" />
      <div className="order4-child5" />
      <div className="div164">문의하기</div>
      <div className="div165">가게보기</div>
      <img className="about-icon" alt="" src="/appguide/baemin/about@2x.png" />
      <img
        className="online-shop-icon"
        alt=""
        src="/appguide/baemin/online-shop@2x.png"
      />
    </div>
  );
};

export default Order2;
