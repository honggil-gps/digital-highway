import { useCallback, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; // ChatBot context import
import ChatBot from "../../components/ChatBot"; //ChatBot component import
import MainShortHeader from "../../components/main/MainShortHeader"
import MainFooter from "../../components/main/MainFooter";
import "./MainContents.css";

const MainContents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory);
  console.log(selectedCategory)
  const {isChatBotActive , activateChatBot, } = useChatBot(); // chatbot functions
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

  //가이드 시작하기
  const onToStartButtonClick = useCallback(()=>{
    switch (selectedCategory){
      case "krail":
        iframeRef.current.src = "http://localhost:5173/maincontents/loading-01";
        break;
      case "baeman":
        iframeRef.current.src = "http://localhost:5173/maincontents/baeman";
        break;
      case "insta":
        iframeRef.current.src = "http://localhost:5173/maincontents/insta";
        break;
      case "kikio":
        iframeRef.current.src = "http://localhost:5173/maincontents/kikio";
        break;
      case "coupong":
        iframeRef.current.src = "http://localhost:5173/maincontents/coupong";
        break;
      case "never":
        iframeRef.current.src = "http://localhost:5173/maincontents/never";
        break;
      case "gov25":
        iframeRef.current.src = "http://localhost:5173/maincontents/gov25";
        break;
    }
  },[selectedCategory])

  return (
    <div className="mainpage-maincontents">
      <section className="mainpage-chatbot2">
        <div className="mainpage-box-icon2"/>
        <div className="mainpage-intro3">
          <span className="mainpage-intro-txt2">
            <p className="mainpage-p4">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p4">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start2" onClick={onStartButtonClick}>
          <div className="mainpage-start-inner">
            <div className="mainpage-div28">시작하기</div>
          </div>
        </div>
        <img className="mainpage-character-icon2" alt="" src="main/no_jaggle.png" />
        {isChatBotActive && (<div className = "chatbot-container"><ChatBot /></div>)}
      </section>
      <main className="mainpage-maincontentsbody1">
      <div className="mainpage-caption">
          <div className={`caption-post1 ${nextCaption.animationClass}`}>
            <div className="mainpage-caption-text1" dangerouslySetInnerHTML={{ __html: nextCaption.content }} />
          </div>
          <div className={`caption-cur1 ${caption.animationClass}`}>
            <div className="mainpage-caption-text1" dangerouslySetInnerHTML={{ __html: caption.content }} />
          </div>
          <div className={`caption-pre1 ${preCaption.animationClass}`}>
            <div className="mainpage-caption-text1" dangerouslySetInnerHTML={{ __html: preCaption.content }} />
          </div>  
        </div>
        <div className="mainpage-phone1">
          {selectedCategory == "krail" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/loading-01" width="100%" height="100%"/>}
          {selectedCategory == "baeman" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/baeman" width="100%" height="100%"/>}
          {selectedCategory == "insta" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/insta" width="100%" height="100%"/>}
          {selectedCategory == "kikio" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/kikio" width="100%" height="100%"/>}
          {selectedCategory == "coupong" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/coupong" width="100%" height="100%"/>}
          {selectedCategory == "never" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/never" width="100%" height="100%"/>}
          {selectedCategory == "gov25" && <iframe ref={iframeRef} src="http://localhost:5173/maincontents/gov25" width="100%" height="100%"/>}
        </div>
        <button className="mainpage-tostart1" onClick={onToStartButtonClick}>
          <div className="mainpage-div29">처음으로</div>
        </button>
      </main>
      <section className="mainpage-maincontentsad">
        <img className="icon mainpage-button3" onClick={()=>{categoryClick("krail")}} alt="" src="main/krail@3x.png" />
        <img className="icon mainpage-button4" onClick={()=>{categoryClick("baeman")}} alt="" src="main/2@3x.png" />
        <img className="icon mainpage-k-rail" onClick={()=>{categoryClick("never")}} alt="" src="main/never.png" />
        <img className="icon mainpage-never" onClick={()=>{categoryClick("coupong")}} alt="" src="main/coupong@3x.png" />
        <img className="icon mainpage-coupong" onClick={()=>{categoryClick("gov25")}} alt="" src="main/25@3x.png" />
        <img className="icon mainpage-button5" onClick={()=>{categoryClick("insta")}} alt="" src="main/instagramer@3x.png" />
        <img className="icon mainpage-button6" onClick={()=>{categoryClick("kikio")}} alt="" src="main/kikiotaxi@3x.png" />
        <img className="icon mainpage-button7" alt="" src="main/pknu_bank.png" />
        <img className="icon mainpage-instagramer" alt="" src="main/@3x.png" />
        <img className="icon mainpage-kikiotaxi" alt="" src="main/bando.png" />
      </section>
      <MainShortHeader />
      <MainFooter />
    </div>
  );
};

export default MainContents;
