import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./End.css";

const End = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/maincontents/baeman");
    }, 3000); // 3초 후에 다음 화면으로 이동

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 해제합니다.
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption}, "*");
  }
  useEffect(()=>{sendCaption("주문이 완료되었습니다.", "수고하셨습니다 \n 배달앱 가이드가 끝났습니다.")},[])

  return (
    <div className="baeman-end">
      <img className="baeman-close-icon3" alt="" src="/appguide/baemin/close@2x.png" />
      <div className="baeman-end-inner">
        <div className="baeman-frame-child4" />
      </div>
    </div>
  );
};

export default End;
