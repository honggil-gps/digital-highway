import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupRefundCompleted.css";

const PopupRefundCompleted = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupRefundCompletedButtonClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  return (
    <div className="popuprefundcompleted">
      <button
        className="popuprefundcompletedbutton"
        onClick={onPopupRefundCompletedButtonClick}
      >
        <b className="b199">확인</b>
      </button>
      <div className="popuprefundcompletedcontent">
        <b className="b200">승차권이 정상반환 되었습니다.</b>
        <div className="popuprefundcompletedcontentlin" />
        <b className="b201">반환완료</b>
      </div>
    </div>
  );
});

export default PopupRefundCompleted;
