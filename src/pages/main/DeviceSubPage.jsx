import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useChatBot } from "../../context/ChatBotContext"; // chatbot context import
import ChatBot from "../../components/ChatBot"; //chatbot component import
import MainShortHeader from "../../components/main/MainShortHeader";
import MainFooter from "../../components/main/MainFooter";
// import Appkiosc from "../../Appkiosc"
// import Appkwatch from "../../Appwatch"
import "./DeviceSubPage.css";

const DeviceSubPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory);
  const {isChatBotActive , activateChatBot, chatBotStyle} = useChatBot(); // chatbot functions

  const iframeRef = useRef(null);
  
  //caption 관리변수
  const [preCaption, setPreCaption] = useState({ content: "", animationClass: "" })
  const [caption, setCaption] = useState({ content: "", animationClass: "" })
  const [nextCaption, setNextCaption] = useState({ content: "", animationClass: "" })

  useEffect(() => {
    const handleMessage = (event) => {
      const message = event.data;
      if (message.type === "navigate") {

        setPreCaption({ content: message.preCaption, animationClass: "slideMin" });
        setCaption({ content: message.caption, animationClass: "slideMax" });
        setNextCaption({ content: message.nextCaption, animationClass: "slideIn" });

        setTimeout(() => {
          setPreCaption((prev) => ({ ...prev, animationClass: "" }));
          setCaption((prev) => ({ ...prev, animationClass: "" }));
          setNextCaption((prev) => ({ ...prev, animationClass: "" }));
        }, 500);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  //카테고리 선택
  const categoryClick = useCallback((category)=>{
    setSelectedCategory(category)
  },[setSelectedCategory]);

  //챗봇 시작하기
  const onStartButtonClick = () =>{
    console.log('Start button clicked');
    try {
      activateChatBot();
    } catch (error){
      console.error('Error activating ChatBot:', error);
    }
  };

  //가이드 시작하기
  const onToStartButtonClick = useCallback(()=>{
    switch (selectedCategory){
      case "kiosc":
        iframeRef.current.src = "http://localhost:5173/DeviceGuide/Kiosc";
        break;
      case "smartwatch":
        iframeRef.current.src = "http://localhost:5173/DeviceGuide/smartwatch";
        break;
    }

  },[selectedCategory])

  return (
    <div className="mainpage-devicesubpage">
      <section className="mainpage-chatbot1">
        <div className="mainpage-box-icon1"/>
        <div className="mainpage-intro2">
          <span className="mainpage-intro-txt1">
            <p className="mainpage-p2">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p2">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <button className="mainpage-start1" onClick={onStartButtonClick}>
          <div className="mainpage-start-item">
            <div className="mainpage-div17">시작하기</div>
          </div>
        </button>
        <img className="mainpage-character-icon1" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className = "chatbot-container"><ChatBot /></div>)}
      </section>
      <section className="mainpage-choose">
        <button className="mainpage-smarttv" onClick={()=>{categoryClick("kiosc")}}>
          <div className="mainpage-smarttv-child" />
          <img className="mainpage-smarttv-item" alt="" src="main/kiosk.png" />
          <div className="mainpage-tv">키오스크</div>
        </button>
        <button className="mainpage-earbuds" onClick={()=>{categoryClick("smartwatch")}}>
          <div className="mainpage-smarttv-child" />
          <img className="mainpage-smarttv-item" alt="" src="main/smartwatch.png" />
          <div className="mainpage-tv1">스마트워치</div>
        </button>
        <button className="mainpage-kiosk" onClick={()=>{categoryClick("chrome")}}>
          <div className="mainpage-smarttv-child" />
          <img className="mainpage-smarttv-item" alt="" src="main/chrome.png" />
          <div className="mainpage-tv4">크롬</div>
        </button>
        <button className="mainpage-smartwatch" onClick={()=>{categoryClick("earbuds")}}>
          <div className="mainpage-smarttv-child" />
          <img className="mainpage-smarttv-item" alt="" src="main/earbuds.png" />
          <div className="mainpage-tv1">무선이어폰</div>
        </button>
        <button className="mainpage-chrome" onClick={()=>{categoryClick("smarttv")}}>
          <div className="mainpage-smarttv-child" />
          <img className="mainpage-smarttv-item" alt="" src="main/smartTV.png" />
          <div className="mainpage-tv2">스마트TV</div>
        </button>
        <button className="mainpage-smartphone" onClick={()=>{categoryClick("smartphone")}}>
          <div className="mainpage-smarttv-child" />
          <img className="mainpage-smarttv-item" alt="" src="main/rectangle-63@2x.png" />
          <div className="mainpage-tv2">스마트폰</div>
        </button>
      </section>
      <main className="mainpage-maincontentsbody">
        <div className="mainpage-caption">
          <div className={`caption-post ${nextCaption.animationClass}`}>
            <div className="mainpage-caption-text" dangerouslySetInnerHTML={{ __html: nextCaption.content }} />
          </div>
          <div className={`caption-cur ${caption.animationClass}`}>
            <div className="mainpage-caption-text" dangerouslySetInnerHTML={{ __html: caption.content }} />
          </div>
          <div className={`caption-pre ${preCaption.animationClass}`}>
            <div className="mainpage-caption-text" dangerouslySetInnerHTML={{ __html: preCaption.content }} />
          </div>
        </div>
        <div className="mainpage-phone">
          {selectedCategory == "kiosc" && <iframe ref={iframeRef} title="Kiosc" src="http://localhost:5173/DeviceGuide/Kiosc" width="100%" height="100%" />}
          {selectedCategory == "smartwatch" && <iframe ref={iframeRef} title="smartwatch" src="http://localhost:5173/DeviceGuide/smartwatch" width="100%" height="100%" />}
        </div>
        <button className="mainpage-tostart" onClick={onToStartButtonClick}>
          <div className="mainpage-div27">처음으로</div>
        </button>
      </main>
      <MainShortHeader />
      <MainFooter />
    </div>
  );
};

export default DeviceSubPage;
