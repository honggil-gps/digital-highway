import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onButtonFrameClick = useCallback(() => {
    navigate("/maincontents/setaddress");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("배달어플 사용가이드입니다. \n 말왕족발을 함께 주문해보도록 \n 하겠습니다.", "배달받고 싶은 주소로 \n [부경대학교 창의관]을 \n 입력해주세요")},[])
  
  return (
    <div className="baeman-start">
      <div className="baeman-start-inner">
        <div className="baeman-frame-child" />
      </div>
      <div className="baeman-button">
        <div className="baeman-buttonframe" onClick={onButtonFrameClick} />
        <div className="baeman-buttontext" onClick={onButtonFrameClick}>시작하기</div>
      </div>
    </div>
  );
};

export default Start;
