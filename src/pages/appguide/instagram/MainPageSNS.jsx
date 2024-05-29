import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPageSNS.css";

const MainPageSNS = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/maincontents/login");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/maincontents/joininstagram01");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("SNS인스타그램 \n 간편사용가이드입니다.", "우선, 인스타그램에 \n 가입부터 해보겠습니다.")},[])

  return (
    <div className="insta-mainpageinstagram">
      <div className="insta-frame">
        <div className="insta-instagramer">Instagramer</div>
        <div className="insta-instagramer1"></div>
      </div>
      <div className="insta-frame1">
        <img
          className="insta-frame-icon"
          alt=""
          src="/appguide/instagram/frame.svg"
        />
        <button className="insta-frame2">
          <div className="insta-frame3">
            <button className="insta-wrapper" onClick={onFrameButtonClick}>
              <div className="insta-div">시작하기</div>
            </button>
          </div>
          <div className="insta-frame3">
            <button className="insta-container" onClick={onFrameButton1Click}>
              <div className="insta-div">새 계정 만들기</div>
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainPageSNS;
