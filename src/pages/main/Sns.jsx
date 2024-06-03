import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; // useChatBot context import
import ChatBot from "../../components/ChatBot"; //ChatBot component import
import MainHeader from "../../components/main/MainHeader";
import MainFooter from "../../components/main/MainFooter";
import "./Sns.css";

const Sns = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory);
  const { isChatBotActive , activateChatBot,} = useChatBot(); // chatbot functions

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
      <div className="mainpage-chatbot">
        <img className="mainpage-box-icon" alt="" src="main/box.svg" />
        <div className="mainpage-intro1">
          <span className="mainpage-intro-txt">
            <p className="mainpage-p">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start" onClick={onStartButtonClick}>
          <div className="mainpage-start-child">
            <div className="mainpage-div16">시작하기</div>
          </div>
        </div>
        <img className="mainpage-character-icon" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </div>
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default Sns;
