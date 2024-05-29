import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import "./Request1.css";

const Request1 = () => {
  const navigate = useNavigate();
  const {baseAddress, detailAddress} = useAddress();

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/setphone");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("알뜰배달은 저렴한 대신 느리고, \n 한집배달은 바로 배달오는 대신 \n 배달팁이 더 추가됩니다. \n 알뜰 배달을 선택해보세요.", "주문 전 휴대폰번호 \n 인증이 필요합니다. \n [인증]을 눌러주세요.", " [010-1234-5678]을 입력한 후 \n 메시지로 전송된 인증번호를 \n 입력해주세요.")},[])

  return (
    <div className="baeman-request">
      <div className="baeman-frame">
        <div className="baeman-frame1">
          <div className="baeman-frame-child1" />
          <div className="baeman-div104">
            <span className="baeman-txt6">
              <p className="baeman-p108">{baseAddress}</p>
              <p className="baeman-p108">{detailAddress}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="baeman-frame2">
        <div className="baeman-frame3" onClick={onFrameContainerClick}>
          <div className="baeman-div105">휴대폰번호 인증이 필요합니다</div>
          <div className="baeman-rectangle-parent29">
            <button className="baeman-rectangle-button">
              <div className="baeman-div106">인증</div>
            </button>
          </div>
        </div>
      </div>
      <div className="baeman-div107">요청사항</div>
      <div className="baeman-frame4">
        <div className="baeman-div105">가게 사장님께</div>
      </div>
      <input
        className="baeman-request-child"
        placeholder="ex)일회용 젓가락이 필요해요"
        type="text"
      />
      <div className="baeman-frame5">
        <div className="baeman-div105">라이더님께</div>
      </div>
      <div className="baeman-frame6">
        <div className="baeman-frame7">
          <div className="baeman-frame-child2" />
          <div className="baeman-check-agree">위 내용에 모두 동의합니다</div>
        </div>
        <div className="baeman-wrapper1">
          <div className="baeman-div105">44,900원 결제하기</div>
        </div>
      </div>
      <input
        className="baeman-request-item"
        placeholder="ex) 안전하게 와주세요"
        type="text"
      />
      <div className="baeman-frame8">
        <div className="baeman-frame9">
          <div className="baeman-div105">알뜰배달</div>
          <img
            className="baeman-won-icon1"
            alt=""
            src="/appguide/baemin/won1@2x.png"
          />
          <div className="baeman-div113">로 받을게요</div>
        </div>
        <div className="baeman-div114">🕒 30~45분 후 도착</div>
      </div>
    </div>
  );
};

export default Request1;
