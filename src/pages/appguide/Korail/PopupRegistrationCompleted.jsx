import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupRegistrationCompleted.css";

const PopupRegistrationCompleted = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupRegistrationCompletedButtClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  return (
    <div className="krail-popupregistrationcompleted">
      <button
        className="krail-popupregistrationcompletedbutt"
        onClick={onPopupRegistrationCompletedButtClick}
      >
        <b className="krail-b219">확인</b>
      </button>
      <div className="krail-popupregistrationcompletedinfo">
        <b className="krail-b220">
          <span className="krail-txt22">
            <p className="krail-p97">정상적으로 회원가입 되었습니다.</p>
            <p className="krail-p97">고객님의 회원번호는</p>
            <p className="krail-p97">1234567890 입니다.</p>
          </span>
        </b>
        <div className="krail-popupregistrationcompletedinfo1" />
        <b className="krail-b221">이용안내</b>
      </div>
    </div>
  );
});

export default PopupRegistrationCompleted;
