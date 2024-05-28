import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Order2.css";

const Order2 = () => {
  const navigate = useNavigate();

  const onOrder4ContainerClick = useCallback(() => {
    navigate("/maincontents/end");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("주문 내역이 모두 맞다면 \n 위 내용에 동의 후 \n 결제하기 버튼을 눌러주세요.", "주문이 완료되었습니다.", "수고하셨습니다 \n 배달앱 가이드가 끝났습니다.")},[])

  return (
    <div className="baeman-order4" onClick={onOrder4ContainerClick}>
      <div className="baeman-div154">주문 진행 중이에요</div>
      <div className="baeman-order4-child" />
      <div className="baeman-div155">남은시간</div>
      <div className="baeman-div156">
        <p className="baeman-p129">맛있게 조리하여 배달해드릴게요</p>
        <p className="baeman-p129">잠시만 기다려주세요</p>
      </div>
      <div className="baeman-order4-item" />
      <div className="baeman-order4-inner" />
      <div className="baeman-div157">45분</div>
      <div className="baeman-order4-child1" />
      <div className="baeman-order4-child2" />
      <div className="baeman-div158">주문접수</div>
      <div className="baeman-div159">배달완료</div>
      <div className="baeman-div160">
        <p className="baeman-p129">오후 10:10</p>
        <p className="baeman-p129">{`도착예정 `}</p>
      </div>
      <img
        className="baeman-kakaotalk-20240410-182746195-1-icon"
        alt=""
        src="/appguide/baemin/kakaotalk-20240410-182746195-1@2x.png"
      />
      <div className="baeman-order4-child3" />
      <div className="baeman-div161">주문 내역</div>
      <div className="baeman-div162">말왕족발</div>
      <div className="baeman-div163">[무료배달이벤트] 1+1 족발세트</div>
      <div className="baeman-t1r60000hj72-container">
        <p className="baeman-p129">주문일시 : 2024년 03월 25일 오후 09:25</p>
        <p className="baeman-p129">주문번호 : T1R60000HJ72</p>
        <p className="baeman-p129">배달방식 : 알뜰배달</p>
      </div>
      <div className="baeman-order4-child4" />
      <div className="baeman-order4-child5" />
      <div className="baeman-div164">문의하기</div>
      <div className="baeman-div165">가게보기</div>
      <img className="baeman-about-icon" alt="" src="/appguide/baemin/about@2x.png" />
      <img
        className="baeman-online-shop-icon"
        alt=""
        src="/appguide/baemin/online-shop@2x.png"
      />
    </div>
  );
};

export default Order2;
