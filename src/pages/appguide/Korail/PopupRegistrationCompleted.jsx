import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupRegistrationCompleted.css";

const PopupRegistrationCompleted = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupRegistrationCompletedButtClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  return (
    <div className="popupregistrationcompleted">
      <button
        className="popupregistrationcompletedbutt"
        onClick={onPopupRegistrationCompletedButtClick}
      >
        <b className="b219">확인</b>
      </button>
      <div className="popupregistrationcompletedinfo">
        <b className="b220">
          <span className="txt22">
            <p className="p97">정상적으로 회원가입 되었습니다.</p>
            <p className="p97">고객님의 회원번호는</p>
            <p className="p97">1234567890 입니다.</p>
          </span>
        </b>
        <div className="popupregistrationcompletedinfo1" />
        <b className="b221">이용안내</b>
      </div>
    </div>
  );
});

export default PopupRegistrationCompleted;
