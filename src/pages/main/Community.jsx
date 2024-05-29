import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; //useChatBot context
import ChatBot from "../../components/ChatBot" //ChatBot Component
import "./Community.css";

const Community = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); //ChatBot Statement

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onBandButtonClick = useCallback(() => {
    navigate("/sns");
  }, [navigate]);

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
    <div className="community">
      <main className="communitymain">
        <div className="communitybuttonset">
          <button className="bandbutton" onClick={onBandButtonClick}>
            <div className="div195">네이버밴드</div>
            <img
              className="bandbuttonimage-icon"
              alt=""
              src="main/bandbuttonimage@2x.png"
            />
          </button>
          <button className="instagrambutton" onClick={onInstagramButtonClick}>
            <b className="div195">인스타그램</b>
            <img
              className="instagrambuttonimage-icon"
              alt=""
              src="main/instagrambuttonimage@2x.png"
            />
          </button>
          <button className="cafebutton" onClick={onCafeButtonClick}>
            <div className="div196">네이버카페</div>
            <img
              className="cafebuttonimage-icon"
              alt=""
              src="main/cafebuttonimage@2x.png"
            />
          </button>
          <div className="title18">커뮤니티 형식 정하기</div>
        </div>
        <div className="appguidemaincontentbanner2">
          <div className="sns-container">
            <span className="sns-container1">
              <p className="sns1">SNS 가이드를 사용해보고 난 후,</p>
              <p className="sns1">
                혹은 디지털 기기를 사용해본 후기 등을 나누는 공간입니다
              </p>
            </span>
          </div>
        </div>
        <div className="appguidemainbuttonset12">
          <button className="button30">커뮤니티</button>
          <div className="infomainbuttonset1line9" />
          <button className="button31" onClick={onButton1Click}>
            전자기기 가이드
          </button>
          <div className="infomainbuttonset1line10" />
          <button className="button32" onClick={onButton2Click}>
            앱 배우기
          </button>
          <div className="infomainbuttonset1line11" />
          <button className="button33" onClick={onButton3Click}>
            정보제공
          </button>
        </div>
      <section className="chatbot6" style={chatBotStyle}>
        <img className="box-icon11" alt="" src="main/box.svg" />
        <div className="intro12">
          <span className="sns-container1">
            <p className="sns1">어려운 단어가 있으신가요?</p>
            <p className="sns1">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start11" onClick={onStartButtonClick}>
          <div className="start-child8" />
          <div className="button34">시작하기</div>
        </div>
        <img className="character-icon11" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
      </section>
      </main>
      <footer className="communityfooter1">
        <div className="copyright14">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext14">
          <div className="div197">고객센터</div>
          <div className="div198">저작권 보호정책</div>
          <div className="div199">개인정보처리방침</div>
          <div className="div200">제휴제안</div>
          <div className="div201">오시는길</div>
          <div className="div202">이용약관</div>
        </div>
        <div className="title19">디지털지름길</div>
        <img className="logo-icon14" alt="" src="main/logo@2x.png" />
      </footer>
      <header className="communityheader1">
        <button
          className="headermyinfobutton10"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="div203">내 정보</div>
        </button>
        <div className="headertitle11" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon13"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div204">디지털지름길</div>
        </div>
        <button
          className="headerbackbutton14"
          onClick={onHeaderBackButtonClick}
        >
          <div className="div205">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default Community;
