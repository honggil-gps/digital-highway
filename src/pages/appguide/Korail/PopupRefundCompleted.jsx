import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupRefundCompleted.css";

const PopupRefundCompleted = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupRefundCompletedButtonClick = useCallback(() => {
    navigate("/maincontents/loading-01");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption}, "*");
  }
  useEffect(()=>{sendCaption("반환 수수료를 확인 후 \n [반환요청]을 눌러주세요.", "[확인]버튼을 눌러주세요. \n 환불이 완료되었습니다!")},[])

  return (
    <div className="krail-popuprefundcompleted">
      <button
        className="krail-popuprefundcompletedbutton"
        onClick={onPopupRefundCompletedButtonClick}
      >
        <b className="krail-b199">확인</b>
      </button>
      <div className="krail-popuprefundcompletedcontent">
        <b className="krail-b200">승차권이 정상반환 되었습니다.</b>
        <div className="krail-popuprefundcompletedcontentlin" />
        <b className="krail-b201">반환완료</b>
      </div>
    </div>
  );
});

export default PopupRefundCompleted;
