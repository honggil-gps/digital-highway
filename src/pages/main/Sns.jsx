import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; // useChatBot context import
import ChatBot from "../../components/ChatBot"; //ChatBot component import
import AppCommunityInsta from "../../AppCommunityInsta";
import "./Sns.css";

const Sns = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory);
  const { isChatBotActive , activateChatBot, chatBotStyle} = useChatBot(); // chatbot functions
  

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
    <div className="sns">
      <main className="communitybody">
        <div className="snsbodylayout" >
        {selectedCategory == "instagram" && <iframe title="instagram" src="http://localhost:5173/community/instagramWeb" width="100%" height="100%" />}
        </div>
        <div className="snsbuttonset">
          <button className="button">네이버밴드</button>
          <div className="snsbuttonsetline" />
          <button className="button1" onClick={()=>{categoryClick("instagram")}}>인스타그램</button>
          <div className="snsbuttonsetline1" />
          <button className="button2">네이버카페</button>
        </div>
      </main>
      <header className="communityheader">
        <button
          className="headermyinfobutton"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="div7">내 정보</div>
        </button>
        <div className="headertitle1" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon1"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div8">디지털지름길</div>
        </div>
        <button className="headerbackbutton" onClick={onHeaderBackButtonClick}>
          <div className="div9">뒤로가기</div>
        </button>
      </header>
      <footer className="communityfooter">
        <div className="copyright1">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext1">
          <div className="div10">고객센터</div>
          <div className="div11">저작권 보호정책</div>
          <div className="div12">개인정보처리방침</div>
          <div className="div13">제휴제안</div>
          <div className="div14">오시는길</div>
          <div className="div15">이용약관</div>
        </div>
        <div className="title1">디지털지름길</div>
        <img className="logo-icon1" alt="" src="main/logo@2x.png" />
      </footer>
      <div className="chatbot">
        <img className="box-icon" alt="" src="main/box.svg" />
        <div className="intro1">
          <span className="intro-txt">
            <p className="p">어려운 단어가 있으신가요?</p>
            <p className="p">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start" onClick={onStartButtonClick}>
          <div className="start-child" />
          <div className="div16">시작하기</div>
        </div>
        <img className="character-icon" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
      </div>
    </div>
  );
};

export default Sns;
