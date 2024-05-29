import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./First.css";

const First = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("네이버 앱을 배워봅시다.", "검색창에서는 원하는 정보를 \n 검색할 수 있습니다.")},[])

  return (
    <div className="never-first-01">
      <div className="never-naverlogo">
        <img
          className="never-naver-logosvg-icon"
          alt=""
          src="/appguide/never/naver-logosvg.svg"
        />
      </div>
      <div className="never-startbutton">
        <button className="never-rectangle-parent">
          <div className="never-group-child" onClick={onRectangleClick} />
          <div className="never-div">시작하기</div>
        </button>
      </div>
    </div>
  );
};

export default First;
