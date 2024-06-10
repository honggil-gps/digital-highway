import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ChromeInstallGuide.css";

const ChromeInstallGuide = () => {
  const navigate = useNavigate();

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("바탕화면에 보이는 \n 엣지 브라우저를 \n 클릭하여 여세요.",  "엣지 브라우저 검색 창에 \n '크롬 설치'라고 입력하세요.")},[])

  return (
    <div className="chrome-chromeinstallguide-">
      <div className="chrome-button">
        <img
          className="chrome-rectangle3-icon"
          alt=""
          src="/DeviceGuide/Chrome/rectangle3.svg"
        />
        <b className="chrome-b">이전</b>
        <img
          className="chrome-rectangle2-icon"
          alt=""
          src="/DeviceGuide/Chrome/rectangle3.svg"
        />
        <b className="chrome-b1">홈</b>
        <img
          className="chrome-rectangle1-icon"
          alt=""
          src="/DeviceGuide/Chrome/rectangle3.svg"
        />
        <b className="chrome-b2">다음</b>
      </div>
      <div className="chrome-image-21-wrapper">
        <img
          className="chrome-image-21-icon"
          alt=""
          src="/DeviceGuide/Chrome/image-21@2x.png"
        />
      </div>
      <div className="chrome-image-2-parent">
        <img
          className="chrome-image-2-icon"
          alt=""
          src="/DeviceGuide/Chrome/image-2@2x.png"
        />
        <div className="chrome-rectangle-parent">
        </div>
      </div>
    </div>
  );
};

export default ChromeInstallGuide;
