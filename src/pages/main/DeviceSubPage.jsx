import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useChatBot } from "../../context/ChatBotContext"; // chatbot context import
import ChatBot from "../../components/ChatBot"; //chatbot component import
import Appkiosc from "../../Appkiosc"
import Appkwatch from "../../Appwatch"
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
    // Add event listener for receiving messages from the iframe
    const handleMessage = (event) => {
      const message = event.data;
      if (message.type === "navigate") {
        // Apply animation classes
        setPreCaption({ content: message.preCaption, animationClass: "slideMin" });
        setCaption({ content: message.caption, animationClass: "slideMax" });
        setNextCaption({ content: message.nextCaption, animationClass: "slideIn" });

        // Remove animation classes after animation duration
        setTimeout(() => {
          setPreCaption((prev) => ({ ...prev, animationClass: "" }));
          setCaption((prev) => ({ ...prev, animationClass: "" }));
          setNextCaption((prev) => ({ ...prev, animationClass: "" }));
        }, 500); // Duration of the animation
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);


  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onHeaderBackButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderBackButtonContainer1Click = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const categoryClick = useCallback((category)=>{
    setSelectedCategory(category)
  },[setSelectedCategory]);

  const onStartButtonClick = () =>{
    console.log('Start button clicked');
    try {
      activateChatBot();
    } catch (error){
      console.error('Error activating ChatBot:', error);
    }
  };

  const onToStartButtonClick = useCallback(()=>{
    if (selectedCategory == "kiosc"){
      iframeRef.current.src = "http://localhost:5173/DeviceGuide/Kiosc"
    }
  },[])
  return (
    <div className="devicesubpage">
      <section className="chatbot1">
        <div className="box-icon1"/>
        <div className="intro2">
          <span className="intro-txt1">
            <p className="p2">어려운 단어가 있으신가요?</p>
            <p className="p2">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <button className="start1" onClick={onStartButtonClick}>
          <div className="start-item" />
          <div className="div17">시작하기</div>
        </button>
        <img className="character-icon1" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className = "chatbot-container"><ChatBot /></div>)}
      </section>
      <section className="choose">
        <button className="smarttv" onClick={()=>{categoryClick("kiosc")}}>
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/kiosk.png" />
          <div className="tv">키오스크</div>
        </button>
        <button className="earbuds" onClick={()=>{categoryClick("smartwatch")}}>
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/smartwatch.png" />
          <div className="tv1">스마트워치</div>
        </button>
        <button className="kiosk" onClick={()=>{categoryClick("chrome")}}>
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/chrome.png" />
          <div className="tv4">크롬</div>
        </button>
        <button className="smartwatch" onClick={()=>{categoryClick("earbuds")}}>
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/earbuds.png" />
          <div className="tv1">무선이어폰</div>
        </button>
        <button className="chrome" onClick={()=>{categoryClick("smarttv")}}>
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/smartTV.png" />
          <div className="tv2">스마트TV</div>
        </button>
        <button className="smartphone" onClick={()=>{categoryClick("smartphone")}}>
          <div className="smarttv-child" />
          <img className="smarttv-item" alt="" src="main/rectangle-63@2x.png" />
          <div className="tv2">스마트폰</div>
        </button>
      </section>
      <header className="maincontentsheader">
        <img
          className="headertitleimage-icon2"
          alt=""
          src="main/headertitleimage@2x.png"
          onClick={onLogoContainerClick}
        />
        <div className="div18" onClick={onLogoContainerClick}>디지털지름길</div>
        <div
          className="headerbackbutton1"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="div19">뒤로가기</div>
        </div>
        <div
          className="headerbackbutton2"
          onClick={onHeaderBackButtonContainer1Click}
        >
          <div className="div19">내 정보</div>
        </div>
      </header>
      <footer className="appguidefooter">
        <div className="copyright2">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext2">
          <div className="div21">고객센터</div>
          <div className="div22">저작권 보호정책</div>
          <div className="div23">개인정보처리방침</div>
          <div className="div24">제휴제안</div>
          <div className="div25">오시는길</div>
          <div className="div26">이용약관</div>
        </div>
        <div className="title2">디지털지름길</div>
        <img className="logo-icon2" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="maincontentsbody">
      <div className={`caption-post ${nextCaption.animationClass}`}>
          <div className="caption-text" dangerouslySetInnerHTML={{ __html: nextCaption.content }} />
        </div>
        <div className={`caption ${caption.animationClass}`}>
          <div className="caption-text" dangerouslySetInnerHTML={{ __html: caption.content }} />
        </div>
        <div className={`caption-pre ${preCaption.animationClass}`}>
          <div className="caption-text" dangerouslySetInnerHTML={{ __html: preCaption.content }} />
        </div>
        <div className="phone">
          {selectedCategory == "kiosc" && <iframe title="Kiosc" src="http://localhost:5173/DeviceGuide/Kiosc" width="100%" height="100%" />}
          {selectedCategory == "smartwatch" && <iframe title="smartwatch" src="http://localhost:5173/DeviceGuide/smartwatch" width="100%" height="100%" />}
        </div>
        <button className="tostart" onClick={onToStartButtonClick}>
          <div className="div27">처음으로</div>
        </button>
      </main>
    </div>
  );
};

export default DeviceSubPage;
