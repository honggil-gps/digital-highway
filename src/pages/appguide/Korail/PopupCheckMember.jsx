import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupCheckMember.css";

const PopupCheckMember = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupCheckMemberButtonClick = useCallback(() => {
    navigate("/maincontents/signup-07");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("이름 / 생년월일 / 전화번호를 \n 입력 후 확인 버튼을 눌러주세요.", "확인을 눌러주세요.", "사용하실 비밀번호를 \n 모든항목에 입력해주세요. \n (111111)")},[])

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
