import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useChatBot } from "../../context/ChatBotContext";
import ChatBot from "../../components/ChatBot";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isChatBotActive, activateChatBot, chatBotStyle } = useChatBot(); // 객체 디스트럭처링으로 수정
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (location.state && location.state.username) {
      setUsername(location.state.username);
    }
  }, [location.state]);

  const onHomeMainCommunityButtonClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onHomeMainGuideButtonClick = useCallback(() => {
    navigate("/deviceguide");
  }, [navigate]);

  const onHomeMainLearningButtonClick = useCallback(() => {
    navigate("/appguide");
  }, [navigate]);

  const onHomeMainInformationButtonClick = useCallback(() => {
    navigate("/info");
  }, [navigate]);

  const onRegisterButtonClick = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  // 로그아웃
  const onLogoutButtonClick = useCallback(() => {
    setUsername("");
    navigate("/home");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onStartButtonClick = () => {
    console.log('Start button clicked');
    try {
      activateChatBot({
        position: 'absolute',
        top: 'calc(50% - 400px)',
        right: '0',
        width: '34.375rem',
        height: '50rem',
        textAlign: 'center',
        fontSize: 'var(--font-size-19xl)',
        color: 'var(--color-black)',
        fontFamily: 'var(--font-noto-sans-kr)'
      });
    } catch (error) {
      console.error('Error activating ChatBot:', error);
    }
  };

  return (
    <div className="home">
      <footer className="homefooter">
        <div className="copyright9">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext9">
          <div className="div101">고객센터</div>
          <div className="div102">저작권 보호정책</div>
          <div className="div103">개인정보처리방침</div>
          <div className="div104">제휴제안</div>
          <div className="div105">오시는길</div>
          <div className="div106">이용약관</div>
        </div>
        <div className="title11">디지털지름길</div>
        <img className="logo-icon9" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="homemain">
        <section className="chatbot6" style = {chatBotStyle}>
          <img className="box-icon6" alt="" src="main/box.svg" />
          <div className="intro7">
            <span className="intro-txt6">
              <p className="p16">어려운 단어가 있으신가요?</p>
              <p className="p16">이제 제가 도와드릴게요</p>
            </span>
          </div>
          <button className="start6" onClick={onStartButtonClick}>
            <div className="start-child3" />
            <div className="div107">시작하기</div>
          </button>
          <img className="character-icon6" alt="" src="main/character@2x.png" />
          {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
        </section>
        <div className="homemainbuttonset">
          <button
            className="homemaincommunitybutton"
            onClick={onHomeMainCommunityButtonClick}
          >
            <img
              className="homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemaincommunitybuttonimage@2x.png"
            />
            <div className="div108">커뮤니티</div>
          </button>
          <button
            className="homemainguidebutton"
            onClick={onHomeMainGuideButtonClick}
          >
            <img
              className="homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemainguidebuttonimage@2x.png"
            />
            <div className="div109">
              <p className="dgtitle">전자기기</p>
              <p className="dgtitle">가이드</p>
            </div>
          </button>
          <button
            className="homemainlearningbutton"
            onClick={onHomeMainLearningButtonClick}
          >
            <img
              className="homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemainlearningbuttonimage@2x.png"
            />
            <div className="div110">앱 배우기</div>
          </button>
          <button
            className="homemaininformationbutton"
            onClick={onHomeMainInformationButtonClick}
          >
            <img
              className="homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemaininformationbuttonimage@2x.png"
            />
            <div className="div108">정보제공</div>
          </button>
        </div>
        <div className="homemainbannerset">
          <button className="homemainbanner2">
            <img
              className="homemainbanner2image-icon"
              alt=""
              src="main/homemainbanner2image@2x.png"
            />
            <div className="homemainbanner2text">
              <b className="b31">부경대학교</b>
              <div className="div112">미래를 우리 손으로</div>
            </div>
          </button>
          <button className="homemainbanner1">
            <img
              className="homemainbanner1image-icon"
              alt=""
              src="main/homemainbanner1image@2x.png"
            />
            <div className="homemainbanner2text">
              <b className="b32">디지털지름길</b>
              <div className="div113">
                <p className="p16">디지털 기기 친숙하게</p>
                <p className="p16">다가가봐요</p>
              </div>
            </div>
          </button>
        </div>
        <div className="homemainlrbutton">
          {username ? (
            <>
              <button className="registerbutton" onClick={onLogoutButtonClick}>
                <div className="div114">로그아웃</div>
              </button>
              <button className="loginbutton1" style={{backgroundColor: "#fff", boxShadow: "none", cursor: "default"}} >
                <div className="div114" style={{fontSize: "2rem", position: "relative", top: "0.1rem", left: "0.3rem"}}>{`${username}님, 환영합니다`}</div>
              </button>
            </>
          ) : (
            <>
              <button className="registerbutton" onClick={onRegisterButtonClick}>
                <div className="div114">회원가입</div>
              </button>
              <button className="loginbutton1" onClick={onLoginButtonClick}>
                <div className="div114">로그인</div>
              </button>
            </>
          )}
        </div>
      </main>
      <header className="homeheader">
        <button
          className="headermyinfobutton5"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="div116">내 정보</div>
        </button>
        <div className="headertitle6">
          <img
            className="headertitleimage-icon8"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div117">디지털지름길</div>
        </div>
        <button className="headerbackbutton9" onClick={onHeaderBackButtonClick}>
          <div className="div118">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default Home;