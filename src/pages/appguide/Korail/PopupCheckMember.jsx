import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupCheckMember.css";

const PopupCheckMember = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupCheckMemberButtonClick = useCallback(() => {
    navigate("/maincontents/signup-07");
  }, [navigate]);

  return (
    <div className="krail-popupcheckmember">
      <button
        className="krail-popupcheckmemberbutton"
        onClick={onPopupCheckMemberButtonClick}
      >
        <b className="krail-b216">확인</b>
      </button>
      <div className="krail-popupcheckmemberinfo">
        <b className="krail-b217">코레일멤버십 가입이 가능합니다</b>
        <div className="krail-popupcheckmemberinfoline" />
        <b className="krail-b218">이용안내</b>
      </div>
    </div>
  );
});

export default PopupCheckMember;
