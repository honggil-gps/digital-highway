import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import MainHeader from "../../components/main/MainHeader"
import MainFooter from "../../components/main/MainFooter";
import "./Info.css";

const Info = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions

  const onInfoMainContentButton5Click = useCallback(() => {
    navigate("/scrapingpage",{state:{selectedCategory:"career"}});
  }, [navigate]);

  const onInfoMainContentButton4Click = useCallback(() => {
    navigate("/scrapingpage",{state:{selectedCategory:"welfare"}});
  }, [navigate]);

  const onInfoMainContentButton3Click = useCallback(() => {
    navigate("/scrapingpage",{state:{selectedCategory:"finance"}});
  }, [navigate]);

  const onInfoMainContentButton2Click = useCallback(() => {
    navigate("/scrapingpage",{state:{selectedCategory:"health"}});
  }, [navigate]);

  const onInfoMainContentButton1Click = useCallback(() => {
    navigate("/scrapingpage",{state:{selectedCategory:"culture"}});
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/deviceguide");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/appguide");
  }, [navigate]);

  const onStartButtonClick = () => {
    console.log('Start button clicked');
    try {
      activateChatBot();
    } catch (error) {
      console.error('Error activating ChatBot:', error);
    }
  };

  return (
    <div className="mainpage-info">
      <main className="mainpage-infomain">
        <div className="mainpage-infomainbuttonset2">
          <button
            className="mainpage-infomaincontentbutton5"
            onClick={onInfoMainContentButton5Click}
          >
            <img
              className="mainpage-job-icon"
              alt=""
              src="main/job@2x.png"
            />
          </button>
          <button
            className="mainpage-infomaincontentbutton4"
            onClick={onInfoMainContentButton4Click}
          >
            <img
              className="mainpage-job-icon"
              alt=""
              src="main/welfare@2x.png"
            />
          </button>
          <button
            className="mainpage-infomaincontentbutton3"
            onClick={onInfoMainContentButton3Click}
          >
            <img
              className="mainpage-job-icon"
              alt=""
              src="main/finance@2x.png"
            />
          </button>
          <button
            className="mainpage-infomaincontentbutton2"
            onClick={onInfoMainContentButton2Click}
          >
            <img
              className="mainpage-job-icon"
              alt=""
              // src="main/medical@2x.png"
              // src="main/medical.png"
              src="main/hospital.png"
            />
          </button>
          <button
            className="mainpage-infomaincontentbutton1"
            onClick={onInfoMainContentButton1Click}
          >
            <img
              className="mainpage-culture-icon"
              alt=""
              src="main/culture@2x.png"
            />
          </button>
          <div className="mainpage-title7">정보제공</div>
        </div>
        <div className="mainpage-infomaincontentbanner">
          <div className="mainpage-div69">
            <p className="mainpage-p12">
              여기저기 흩어져 있는 유익한 정보들을 모았습니다
            </p>
            <p className="mainpage-p12">
              정보제공 페이지에서 생활 속에 필요한 지식을 얻어보세요!
            </p>
          </div>
        </div>
        <div className="mainpage-infomainbuttonset1">
          <button className="mainpage-button18" onClick={onButtonClick}>
            커뮤니티
          </button>
          <div className="mainpage-infomainbuttonset1line3" />
          <button className="mainpage-button19" onClick={onButton1Click}>
            전자기기 가이드
          </button>
          <div className="mainpage-infomainbuttonset1line4" />
          <button className="mainpage-button20" onClick={onButton2Click}>
            앱 배우기
          </button>
          <div className="mainpage-infomainbuttonset1line5" />
          <button className="mainpage-button21">정보제공</button>
        </div>
        <section className="mainpage-chatbot6" style = {chatBotStyle}>
        <div className="mainpage-box-icon5"/>
        <div className="mainpage-intro6">
          <span className="mainpage-intro-txt5">
            <p className="mainpage-chat-p12">어려운 단어가 있으신가요?</p>
            <p className="mainpage-chat-p12">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start5" onClick = {onStartButtonClick}>
          <div className="mainpage-start-child2">
            <div className="mainpage-div79">시작하기</div>
          </div>
        </div>
        <img className="mainpage-character-icon5" alt="" src="main/no_jaggle.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      </main>
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default Info;
