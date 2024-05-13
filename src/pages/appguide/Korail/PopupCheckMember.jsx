import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupCheckMember.css";

const PopupCheckMember = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupCheckMemberButtonClick = useCallback(() => {
    navigate("/signup-07");
  }, [navigate]);

  return (
    <div className="popupcheckmember">
      <button
        className="popupcheckmemberbutton"
        onClick={onPopupCheckMemberButtonClick}
      >
        <b className="b216">확인</b>
      </button>
      <div className="popupcheckmemberinfo">
        <b className="b217">코레일멤버십 가입이 가능합니다</b>
        <div className="popupcheckmemberinfoline" />
        <b className="b218">이용안내</b>
      </div>
    </div>
  );
});

export default PopupCheckMember;
