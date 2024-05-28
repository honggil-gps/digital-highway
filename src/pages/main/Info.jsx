import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import "./Info.css";

const Info = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onInfoMainContentButton5Click = useCallback(() => {
    navigate("/scrapingpage",{state:{selectedCategory:"carrer"}});
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

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onEasymodeContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
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
    <div className="info">
      <main className="infomain">
        <div className="infomainbuttonset2">
          <button
            className="infomaincontentbutton5"
            onClick={onInfoMainContentButton5Click}
          >
            <img
              className="job-icon"
              alt=""
              src="main/job@2x.png"
            />
          </button>
          <button
            className="infomaincontentbutton4"
            onClick={onInfoMainContentButton4Click}
          >
            <img
              className="job-icon"
              alt=""
              src="main/welfare@2x.png"
            />
          </button>
          <button
            className="infomaincontentbutton3"
            onClick={onInfoMainContentButton3Click}
          >
            <img
              className="job-icon"
              alt=""
              src="main/finance@2x.png"
            />
          </button>
          <button
            className="infomaincontentbutton2"
            onClick={onInfoMainContentButton2Click}
          >
            <img
              className="job-icon"
              alt=""
              src="main/medical@2x.png"
            />
          </button>
          <button
            className="infomaincontentbutton1"
            onClick={onInfoMainContentButton1Click}
          >
            <img
              className="culture-icon"
              alt=""
              src="main/culture@2x.png"
            />
          </button>
          <div className="title7">정보제공</div>
        </div>
        <div className="infomaincontentbanner">
          <div className="div69">
            <p className="p12">
              여기저기 흩어져 있는 유익한 정보들을 모았습니다
            </p>
            <p className="p12">
              정보제공 페이지에서 생활 속에 필요한 지식을 얻어보세요!
            </p>
          </div>
        </div>
        <div className="infomainbuttonset1">
          <button className="button18" onClick={onButtonClick}>
            커뮤니티
          </button>
          <div className="infomainbuttonset1line3" />
          <button className="button19" onClick={onButton1Click}>
            전자기기 가이드
          </button>
          <div className="infomainbuttonset1line4" />
          <button className="button20" onClick={onButton2Click}>
            앱 배우기
          </button>
          <div className="infomainbuttonset1line5" />
          <button className="button21">정보제공</button>
        </div>
        <section className="chatbot6" style = {chatBotStyle}>
        <img className="box-icon5" alt="" src="main/box.svg" />
        <div className="intro6">
          <span className="intro-txt5">
            <p className="p12">어려운 단어가 있으신가요?</p>
            <p className="p12">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start5" onClick = {onStartButtonClick}>
          <div className="start-child2" />
          <div className="div79">시작하기</div>
        </div>
        <img className="character-icon5" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
      </section>
      </main>
      <footer className="infofooter">
        <div className="copyright6">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext6">
          <div className="div70">고객센터</div>
          <div className="div71">저작권 보호정책</div>
          <div className="div72">개인정보처리방침</div>
          <div className="div73">제휴제안</div>
          <div className="div74">오시는길</div>
          <div className="div75">이용약관</div>
        </div>
        <div className="title8">디지털지름길</div>
        <img className="logo-icon6" alt="" src="main/logo@2x.png" />
      </footer>
      <header className="infoheader">
        <div className="back" onClick={onBackContainerClick}>
          <div className="back-child" />
          <div className="div76">뒤로가기</div>
        </div>
        <div className="logo" onClick={onLogoContainerClick}>
          <div className="div77">디지털지름길</div>
          <img className="image-1-icon" alt="" src="main/image-1@2x.png" />
        </div>
        <div className="easymode" onClick={onEasymodeContainerClick}>
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="div78">내 정보</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Info;
