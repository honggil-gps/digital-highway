import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChatBot } from "../../context/ChatBotContext"; // useChatBot 임포트
import ChatBot from "../../components/ChatBot"; // ChatBot 컴포넌트 임포트
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
    navigate("/maincontents");
  }, [navigate]);

  const onKikioTaxiClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onBaemanClick = useCallback(() => {
    setSelectedCategory("baeman")
    navigate("/maincontents",{state:{selectedCategory:"baeman"}});
  }, [navigate]);

  const onNevermapClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onGov25Click = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onCoupongClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onNeverClick = useCallback(() => {
    navigate("/maincontents");
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
    <div className="appguide">
      <main className="appguidemain">
        <div className="appguidemainbuttonset2">
          <img className="blank2-icon" alt="" src="main/blank2@2x.png" />
          <img className="blank1-icon" alt="" src="main/blank2@2x.png" />
          <button className="neverband" onClick={onNeverBandClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-41@2x.png"
            />
            <div className="div39">네이버밴드</div>
          </button>
          <button className="instagrammer" onClick={onInstagrammerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-40@2x.png"
            />
            <div className="div39">인스타그램</div>
          </button>
          <button className="kikiotaxi1" onClick={onKikioTaxiClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-39@2x.png"
            />
            <div className="div41">택시</div>
          </button>
          <button className="baeman" onClick={onBaemanClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-38@2x.png"
            />
            <div className="div41">배달</div>
          </button>
          <button className="nevermap" onClick={onNevermapClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-37@2x.png"
            />
            <div className="div41">지도</div>
          </button>
          <button className="gov25" onClick={onGov25Click}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-36@2x.png"
            />
            <div className="div39">행정서비스</div>
          </button>
          <button className="coupong1" onClick={onCoupongClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-35@2x.png"
            />
            <div className="div41">쇼핑</div>
          </button>
          <button className="never1" onClick={onNeverClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-34@2x.png"
            />
            <div className="div46">검색엔진</div>
          </button>
          <button className="pknubank" onClick={onPknuBankClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-33@2x.png"
            />
            <div className="div41">금융</div>
          </button>
          <button className="krail" onClick={onKrailClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-32@2x.png"
            />
            <div className="div46">기차예매</div>
          </button>
        </div>
        <div className="guidescrollbackground" />
        <div className="title4">앱 배우기</div>
        <div className="appguidemaincontentbanner">
          <div className="div49">
            <p className="p6">
              지금까지 핸드폰에 있는 다양한 어플들을 사용하기가 힘드셨다면
            </p>
            <p className="p6">이 페이지에서 사용법을 익혀보세요!</p>
          </div>
        </div>
        <div className="appguidemainbuttonset1">
          <button className="button8" onClick={onButtonClick}>
            커뮤니티
          </button>
          <div className="infomainbuttonset1line" />
          <button className="button9" onClick={onButton1Click}>
            전자기기 가이드
          </button>
          <div className="infomainbuttonset1line1" />
          <button className="button10">앱 배우기</button>
          <div className="infomainbuttonset1line2" />
          <button className="button11" onClick={onButton3Click}>
            정보제공
          </button>
        </div>
      </main>
      <section className="chatbot3" style={chatBotStyle}>
        <img className="box-icon3" alt="" src="main/box.svg" />
        <div className="intro4">
          <span className="intro-txt3">
            <p className="chatbot-guidement">어려운 단어가 있으신가요?</p>
            <p className="chatbot-guidement">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <button className="start3" onClick ={onStartButtonClick}>
          <div className="rectangle-div" />
          <div className="div50">시작하기</div>
        </button>
        <img className="character-icon3" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
      </section>
      <footer className="appguidefooter1">
        <div className="copyright4">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext4">
          <div className="div51">고객센터</div>
          <div className="div52">저작권 보호정책</div>
          <div className="div53">개인정보처리방침</div>
          <div className="div54">제휴제안</div>
          <div className="div55">오시는길</div>
          <div className="div56">이용약관</div>
        </div>
        <div className="title5">디지털지름길</div>
        <img className="logo-icon4" alt="" src="main/logo@2x.png" />
      </footer>
      <header className="appguideheader">
        <button
          className="headermyinfobutton1"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="div57">내 정보</div>
        </button>
        <div className="headertitle2" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon4"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div58">디지털지름길</div>
        </div>
        <button className="headerbackbutton5" onClick={onHeaderBackButtonClick}>
          <div className="div59">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default AppGuide;
