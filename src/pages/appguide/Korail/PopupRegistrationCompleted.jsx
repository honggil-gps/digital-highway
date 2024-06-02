import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupRegistrationCompleted.css";

const PopupRegistrationCompleted = memo(({ onClose }) => {
  const navigate = useNavigate();

  const onPopupRegistrationCompletedButtClick = useCallback(() => {
    navigate("/maincontents/mainpage-02", {state:{back:1}});
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("사용하실 비밀번호를 \n 모든항목에 입력해주세요. \n (111111)", "적혀있는 회원번호 \n (1234567890)을 기억한 후 \n 확인을 눌러주세요.", "예매를 위해 로그인이 필요합니다. \n 다시  ☰ 버튼을 눌러주세요.")},[])

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
