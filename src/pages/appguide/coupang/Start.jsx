import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/beforelogin-2");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("쇼핑앱을 배워봅시다.", "메인화면에서는 \n 원하는 카테고리를 선택해 \n 상품을 살펴볼 수 있습니다.")},[])
  
  return (
    <div className="coupong-start-1">
      <div className="coupong-cou-parent">
        <div className="coupong-cou">cou</div>
        <div className="coupong-p">p</div>
        <div className="coupong-o">o</div>
        <div className="coupong-n">n</div>
        <div className="coupong-g">g</div>
      </div>
      <div className="coupong-rectangle-parent" onClick={onGroupContainerClick}>
        <div className="coupong-group-child" />
        <div className="coupong-div">시작하기</div>
      </div>
    </div>
    
  );
};

export default Start;
