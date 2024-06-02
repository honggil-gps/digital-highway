import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; // useChatBot context import
import ChatBot from "../../components/ChatBot"; //ChatBot component import
import MainFooter from "../../components/main/MainFooter";
import "./Sns.css";

const Sns = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory);
  const { isChatBotActive , activateChatBot,} = useChatBot(); // chatbot functions
  

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const categoryClick = useCallback((category)=>{
    setSelectedCategory(category)
  },[setSelectedCategory]);

  const onStartButtonClick = () => {
    console.log('Start button clicked');
    try {
      activateChatBot();
    } catch (error) {
      console.error('Error activating ChatBot:', error);
    }
  };


  return (
    <div className="mainpage-sns">
      <main className="mainpage-communitybody">
        <div className="mainpage-snsbodylayout" > 
        {/* 1184x811 size */}
        {selectedCategory == "instagram" && <iframe title="instagram" src="http://localhost:5173/community/instagramWeb" width="100%" height="100%" />}
        {selectedCategory == "bando" && <iframe title="bando" src="http://localhost:5173/community/bandoWeb" width="100%" height="100%" />}
        </div>
        <div className="mainpage-snsbuttonset">
          <button className="mainpage-button" onClick={()=>{categoryClick("bando")}}>네이버밴드</button>
          <div className="mainpage-snsbuttonsetline" />
          <button className="mainpage-button1" onClick={()=>{categoryClick("instagram")}}>인스타그램</button>
          <div className="mainpage-snsbuttonsetline1" />
          <button className="mainpage-button2">네이버카페</button>
        </div>
      </main>
      <header className="mainpage-communityheader">
        <button
          className="mainpage-headermyinfobutton"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="mainpage-div7">내 정보</div>
        </button>
        <div className="mainpage-headertitle1" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon1"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div8">디지털지름길</div>
        </div>
        <button className="mainpage-headerbackbutton" onClick={onHeaderBackButtonClick}>
          <div className="mainpage-div9">뒤로가기</div>
        </button>
      </header>
      <div className="mainpage-chatbot">
        <img className="mainpage-box-icon" alt="" src="main/box.svg" />
        <div className="mainpage-intro1">
          <span className="mainpage-intro-txt">
            <p className="mainpage-p">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start" onClick={onStartButtonClick}>
          <div className="mainpage-start-child" />
          <div className="mainpage-div16">시작하기</div>
        </div>
        <img className="mainpage-character-icon" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </div>
      <MainFooter />
    </div>
  );
};

export default Sns;
