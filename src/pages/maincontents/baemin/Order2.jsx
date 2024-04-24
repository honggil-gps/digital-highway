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
      <div className="div163">주문 진행 중이에요</div>
      <div className="order4-child" />
      <div className="div164">남은시간</div>
      <div className="div165">
        <p className="p81">맛있게 조리하여 배달해드릴게요</p>
        <p className="p81">잠시만 기다려주세요</p>
      </div>
      <div className="order4-item" />
      <div className="order4-inner" />
      <div className="div166">45분</div>
      <div className="order4-child1" />
      <div className="order4-child2" />
      <div className="div167">주문접수</div>
      <div className="div168">배달완료</div>
      <div className="div169">
        <p className="p81">오후 10:10</p>
        <p className="p81">{`도착예정 `}</p>
      </div>
      <img
        className="kakaotalk-20240410-182746195-1-icon"
        alt=""
        src="/kakaotalk-20240410-182746195-1@2x.png"
      />
      <div className="order4-child3" />
      <div className="div170">주문 내역</div>
      <div className="div171">말왕족발</div>
      <div className="div172">[무료배달이벤트] 1+1 족발세트</div>
      <div className="t1r60000hj72-container">
        <p className="p81">주문일시 : 2024년 03월 25일 오후 09:25</p>
        <p className="p81">주문번호 : T1R60000HJ72</p>
        <p className="p81">배달방식 : 알뜰배달</p>
      </div>
      <div className="order4-child4" />
      <div className="order4-child5" />
      <div className="div173">문의하기</div>
      <div className="div174">가게보기</div>
      <img className="about-icon" alt="" src="/about@2x.png" />
      <img className="online-shop-icon" alt="" src="/online-shop@2x.png" />
    </div>
  );
};

export default Order2;
