import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; //useChatBot context
import ChatBot from "../../components/ChatBot" //ChatBot Component
import MainFooter from "../../components/main/MainFooter";
import "./Community.css";

const Community = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); //ChatBot Statement

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onBandButtonClick = useCallback(() => {
    setSelectedCategory("bando")
    navigate("/sns",{state:{selectedCategory:"bando"}});
  }, [navigate,setSelectedCategory]);

  const onInstagramButtonClick = useCallback(() => {
    setSelectedCategory("instagram")
    navigate("/sns",{state:{selectedCategory:"instagram"}});
  }, [navigate,setSelectedCategory]);

  const onCafeButtonClick = useCallback(() => {
    setSelectedCategory("naverCafe")
    navigate("/sns",{state:{selectedCategory:"navercafe"}});
  }, [navigate,setSelectedCategory]);

  const onButton1Click = useCallback(() => {
    navigate("/deviceguide");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/appguide");
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
    try{
      activateChatBot();
    } catch (error) {
      console.error('Error activating ChatBot: ', error);
    }
  };

  return (
    <div className="mainpage-community">
      <main className="mainpage-communitymain">
        <div className="mainpage-communitybuttonset">
          <button className="mainpage-bandbutton" onClick={onBandButtonClick}>
            <div className="mainpage-div195">네이버밴드</div>
            <img
              className="mainpage-bandbuttonimage-icon"
              alt=""
              src="main/bandbuttonimage@2x.png"
            />
          </button>
          <button className="mainpage-instagrambutton" onClick={onInstagramButtonClick}>
            <b className="mainpage-div195">인스타그램</b>
            <img
              className="mainpage-instagrambuttonimage-icon"
              alt=""
              src="main/instagrambuttonimage@2x.png"
            />
          </button>
          <button className="mainpage-cafebutton" onClick={onCafeButtonClick}>
            <div className="mainpage-div196">네이버카페</div>
            <img
              className="mainpage-cafebuttonimage-icon"
              alt=""
              src="main/cafebuttonimage@2x.png"
            />
          </button>
          <div className="mainpage-title18">커뮤니티 형식 정하기</div>
        </div>
        <div className="mainpage-appguidemaincontentbanner2">
          <div className="mainpage-sns-container">
            <span className="mainpage-sns-container1">
              <p className="mainpage-sns1">SNS 가이드를 사용해보고 난 후,</p>
              <p className="mainpage-sns1">
                혹은 디지털 기기를 사용해본 후기 등을 나누는 공간입니다
              </p>
            </span>
          </div>
        </div>
        <div className="mainpage-appguidemainbuttonset12">
          <button className="mainpage-button30">커뮤니티</button>
          <div className="mainpage-infomainbuttonset1line9" />
          <button className="mainpage-button31" onClick={onButton1Click}>
            전자기기 가이드
          </button>
          <div className="mainpage-infomainbuttonset1line10" />
          <button className="mainpage-button32" onClick={onButton2Click}>
            앱 배우기
          </button>
          <div className="mainpage-infomainbuttonset1line11" />
          <button className="mainpage-button33" onClick={onButton3Click}>
            정보제공
          </button>
        </div>
      <section className="mainpage-chatbot6" style={chatBotStyle}>
        <img className="mainpage-box-icon11" alt="" src="main/box.svg" />
        <div className="mainpage-intro12">
          <span className="mainpage-sns-container1">
            <p className="mainpage-sns1">어려운 단어가 있으신가요?</p>
            <p className="mainpage-sns1">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start11" onClick={onStartButtonClick}>
          <div className="mainpage-start-child8">
            <div className="mainpage-button34">시작하기</div>
          </div>
        </div>
        <img className="mainpage-character-icon11" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      </main>
      <header className="mainpage-communityheader1">
        <button
          className="mainpage-headermyinfobutton10"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="mainpage-div203">내 정보</div>
        </button>
        <div className="mainpage-headertitle11" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon13"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div204">디지털지름길</div>
        </div>
        <button
          className="mainpage-headerbackbutton14"
          onClick={onHeaderBackButtonClick}
        >
          <div className="mainpage-div205">뒤로가기</div>
        </button>
      </header>
      <MainFooter />
    </div>
  );
};

export default Community;
