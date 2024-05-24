import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupRefundCompleted.css";

const PopupRefundCompleted = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupRefundCompletedButtonClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

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
