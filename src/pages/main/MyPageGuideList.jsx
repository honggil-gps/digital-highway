import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import MainFooter from "../../components/main/MainFooter";
import "./MyPageGuideList.css";

const MyPageGuideList = () => {
  const navigate = useNavigate();
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onMyPageMenuButton2ContainerClick = useCallback(() => {
    navigate("/mypagestoragebox");
  }, [navigate]);

  const onMyPageMenuButton1ContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/mypagestoragebox");
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
    <div className="mainpage-mypageguidelist">
      <div className="mainpage-chatbot9">
        <img className="mainpage-box-icon9" alt="" src="main/box1.svg" />
        <div className="mainpage-intro10">
          <span className="mainpage-intro-txt9">
            <p className="mainpage-p26">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p26">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start9" onClick={onStartButtonClick}>
          <div className="mainpage-start-child6" />
          <div className="mainpage-div163">시작하기</div>
        </div>
        <img className="mainpage-character-icon9" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </div>
      <div className="mainpage-guidelist">
        <div className="mainpage-guidelistcontentset">
          <div className="mainpage-guidelistcontent21">
            <div className="mainpage-div164">크롬</div>
            <div className="mainpage-div165">1/10</div>
            <img
              className="mainpage-guidelistcontentchromeimage-icon"
              alt=""
              src="main/guidelistcontentchromeimage@2x.png"
            />
            <button className="mainpage-button23" onClick={onButtonClick}>
              바로가기
            </button>
          </div>
          <div className="mainpage-div166">전자기기</div>
          <div className="mainpage-guidelistcontent12">
            <div className="mainpage-div164">지도</div>
            <div className="mainpage-div165">10/15</div>
            <button className="mainpage-button23" onClick={onButton1Click}>
              바로가기
            </button>
            <img
              className="mainpage-guidelistcontentmapimage-icon"
              alt=""
              src="main/guidelistcontentmapimage@2x.png"
            />
          </div>
          <div className="mainpage-guidelistcontent11">
            <img
              className="mainpage-guidelistcontentbankimage-icon"
              alt=""
              src="main/guidelistcontentbankimage@2x.png"
            />
            <div className="mainpage-div164">은행</div>
            <div className="mainpage-div165">4/12</div>
            <button className="mainpage-button23" onClick={onButton2Click}>
              바로가기
            </button>
          </div>
          <div className="mainpage-div171">앱</div>
        </div>
        <div className="mainpage-scrollbackground1" />
        <div className="mainpage-guidelistmainbuttonset">
          <div className="mainpage-mypagemenubutton32">
            <div className="mainpage-div172">진행 중인 가이드</div>
          </div>
          <div
            className="mainpage-mypagemenubutton22"
            onClick={onMyPageMenuButton2ContainerClick}
          >
            <div className="mainpage-div173">보관함</div>
          </div>
          <div
            className="mainpage-mypagemenubutton12"
            onClick={onMyPageMenuButton1ContainerClick}
          >
            <div className="mainpage-div174">나의 정보</div>
          </div>
        </div>
      </div>
      <div className="mainpage-mypageheader2">
        <button
          className="mainpage-headermyinfobutton8"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="mainpage-div181">내 정보</div>
        </button>
        <div className="mainpage-headertitle9" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon11"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div182">디지털지름길</div>
        </div>
        <button
          className="mainpage-headerbackbutton12"
          onClick={onHeaderBackButtonClick}
        >
          <div className="mainpage-div183">뒤로가기</div>
        </button>
      </div>
      <MainFooter />
    </div>
  );
};

export default MyPageGuideList;
