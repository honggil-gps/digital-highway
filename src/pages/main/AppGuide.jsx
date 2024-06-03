import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChatBot } from "../../context/ChatBotContext"; // useChatBot 임포트
import ChatBot from "../../components/ChatBot"; // ChatBot 컴포넌트 임포트
import MainFooter from "../../components/main/MainFooter";
import "./AppGuide.css";

const AppGuide = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isChatBotActive , activateChatBot, chatBotStyle} = useChatBot(); // 챗봇 상태 가져오기

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNeverBandClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onInstagrammerClick = useCallback(() => {
    setSelectedCategory("insta")
    navigate("/maincontents",{state:{selectedCategory:"insta"}});
  }, [navigate]);

  const onKikioTaxiClick = useCallback(() => {
    setSelectedCategory("kikio")
    navigate("/maincontents",{state:{selectedCategory:"kikio"}});
  }, [navigate]);

  const onBaemanClick = useCallback(() => {
    setSelectedCategory("baeman")
    navigate("/maincontents",{state:{selectedCategory:"baeman"}});
  }, [navigate]);

  const onNevermapClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onGov25Click = useCallback(() => {
    setSelectedCategory("gov25")
    navigate("/maincontents",{state:{selectedCategory:"gov25"}});
  }, [navigate]);

  const onCoupongClick = useCallback(() => {
    setSelectedCategory("coupong")
    navigate("/maincontents",{state:{selectedCategory:"coupong"}});
  }, [navigate]);

  const onNeverClick = useCallback(() => {
    setSelectedCategory("never")
    navigate("/maincontents",{state:{selectedCategory:"never"}});
  }, [navigate]);

  const onPknuBankClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onKrailClick = useCallback(() => {
    setSelectedCategory("krail")
    navigate("/maincontents",{state:{selectedCategory:"krail"}});
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/deviceguide");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/info");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
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
    <div className="mainpage-appguide">
      <div className="mainpage-appguidemain">
        <div className="mainpage-appguidemainbuttonset2">
          <img className="mainpage-blank2-icon" alt="" src="main/blank2@2x.png" />
          <img className="mainpage-blank1-icon" alt="" src="main/blank2@2x.png" />
          <button className="mainpage-neverband" onClick={onNeverBandClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-41@2x.png"
            />
            <div className="mainpage-div39">네이버밴드</div>
          </button>
          <button className="mainpage-instagrammer" onClick={onNevermapClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-37@2x.png"
            />
            <div className="mainpage-div41">지도</div>
          </button>
          <button className="mainpage-kikiotaxi1" onClick={onPknuBankClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-33@2x.png"
            />
            <div className="mainpage-div41">금융</div>
          </button>
          <button className="mainpage-baeman" onClick={onKikioTaxiClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-39@2x.png"
            />
            <div className="mainpage-div41">택시</div>
          </button>
          <button className="mainpage-nevermap" onClick={onInstagrammerClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-40@2x.png"
            />
            <div className="mainpage-div39">인스타그램</div>
          </button>
          <button className="mainpage-gov25" onClick={onGov25Click}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-36@2x.png"
            />
            <div className="mainpage-div39">행정서비스</div>
          </button>
          <button className="mainpage-coupong1" onClick={onCoupongClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-35@2x.png"
            />
            <div className="mainpage-div41">쇼핑</div>
          </button>
          <button className="mainpage-never1" onClick={onNeverClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-34@2x.png"
            />
            <div className="mainpage-div46">검색엔진</div>
          </button>
          <button className="mainpage-pknubank" onClick={onBaemanClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-38@2x.png"
            />
            <div className="mainpage-div41">배달</div>
          </button>
          <button className="mainpage-krail" onClick={onKrailClick}>
            <img
              className="mainpage-neverband-child"
              alt=""
              src="main/rectangle-32@2x.png"
            />
            <div className="mainpage-div46">기차예매</div>
          </button>
        </div>
        <div className="mainpage-guidescrollbackground" />
        <div className="mainpage-title4">앱 배우기</div>
        <div className="mainpage-appguidemaincontentbanner">
          <div className="mainpage-div49">
            <p className="mainpage-p6">
              지금까지 핸드폰에 있는 다양한 어플들을 사용하기가 힘드셨다면
            </p>
            <p className="mainpage-p6">이 페이지에서 사용법을 익혀보세요!</p>
          </div>
        </div>
        <div className="mainpage-appguidemainbuttonset1">
          <button className="mainpage-button8" onClick={onButtonClick}>
            커뮤니티
          </button>
          <div className="mainpage-infomainbuttonset1line" />
          <button className="mainpage-button9" onClick={onButton1Click}>
            전자기기 가이드
          </button>
          <div className="mainpage-infomainbuttonset1line1" />
          <button className="mainpage-button10">앱 배우기</button>
          <div className="mainpage-infomainbuttonset1line2" />
          <button className="mainpage-button11" onClick={onButton3Click}>
            정보제공
          </button>
        </div>
      <section className="mainpage-chatbot6" style={chatBotStyle}>
        <img className="mainpage-box-icon3" alt="" src="main/box.svg" />
        <div className="mainpage-intro4">
          <span className="mainpage-intro-txt3">
            <p className="mainpage-chatbot-guidement">어려운 단어가 있으신가요?</p>
            <p className="mainpage-chatbot-guidement">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <button className="mainpage-start3" onClick ={onStartButtonClick}>
          <div className="mainpage-rectangle-div">
            <div className="mainpage-div50">시작하기</div>
          </div>
        </button>
        <img className="mainpage-character-icon3" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      </div>
      <header className="mainpage-appguideheader">
        <button
          className="mainpage-headermyinfobutton1"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="mainpage-div57">내 정보</div>
        </button>
        <div className="mainpage-headertitle2" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon4"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div58">디지털지름길</div>
        </div>
        <button className="mainpage-headerbackbutton5" onClick={onHeaderBackButtonClick}>
          <div className="mainpage-div59">뒤로가기</div>
        </button>
      </header>
      <MainFooter />
    </div>
  );
};

export default AppGuide;
