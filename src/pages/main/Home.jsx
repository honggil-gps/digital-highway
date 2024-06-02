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
    <div className="mainpage-home">
      <footer className="mainpage-homefooter">
        <div className="mainpage-copyright9">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="mainpage-footermenutext9">
          <div className="mainpage-div101">고객센터</div>
          <div className="mainpage-div102">저작권 보호정책</div>
          <div className="mainpage-div103">개인정보처리방침</div>
          <div className="mainpage-div104">제휴제안</div>
          <div className="mainpage-div105">오시는길</div>
          <div className="mainpage-div106">이용약관</div>
        </div>
        <div className="mainpage-title11">디지털지름길</div>
        <img className="mainpage-logo-icon9" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="mainpage-homemain">
        <section className="mainpage-chatbot6" style = {chatBotStyle}>
          <img className="mainpage-box-icon6" alt="" src="main/box.svg" />
          <div className="mainpage-intro7">
            <span className="mainpage-intro-txt6">
              <p className="mainpage-p16">어려운 단어가 있으신가요?</p>
              <p className="mainpage-p16">이제 제가 도와드릴게요</p>
            </span>
          </div>
          <button className="mainpage-start6" onClick={onStartButtonClick}>
            <div className="mainpage-start-child3" />
            <div className="mainpage-div107">시작하기</div>
          </button>
          <img className="mainpage-character-icon6" alt="" src="main/character@2x.png" />
          {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
        </section>
        <div className="mainpage-homemainbuttonset">
          <button
            className="mainpage-homemaincommunitybutton"
            onClick={onHomeMainCommunityButtonClick}
          >
            <img
              className="mainpage-homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemaincommunitybuttonimage@2x.png"
            />
            <div className="mainpage-div108">커뮤니티</div>
          </button>
          <button
            className="mainpage-homemainguidebutton"
            onClick={onHomeMainGuideButtonClick}
          >
            <img
              className="mainpage-homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemainguidebuttonimage@2x.png"
            />
            <div className="mainpage-div109">
              <p className="mainpage-dgtitle">전자기기</p>
              <p className="mainpage-dgtitle">가이드</p>
            </div>
          </button>
          <button
            className="mainpage-homemainlearningbutton"
            onClick={onHomeMainLearningButtonClick}
          >
            <img
              className="mainpage-homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemainlearningbuttonimage@2x.png"
            />
            <div className="mainpage-div110">앱 배우기</div>
          </button>
          <button
            className="mainpage-homemaininformationbutton"
            onClick={onHomeMainInformationButtonClick}
          >
            <img
              className="mainpage-homemaincommunitybuttonimage-icon"
              alt=""
              src="main/homemaininformationbuttonimage@2x.png"
            />
            <div className="mainpage-div108">정보제공</div>
          </button>
        </div>
        <div className="mainpage-homemainbannerset">
          <button className="mainpage-homemainbanner2">
            <img
              className="mainpage-homemainbanner2image-icon"
              alt=""
              src="main/homemainbanner2image@2x.png"
            />
            <div className="mainpage-homemainbanner2text">
              <b className="mainpage-b31">부경대학교</b>
              <div className="mainpage-div112">미래를 우리 손으로</div>
            </div>
          </button>
          <button className="mainpage-homemainbanner1">
            <img
              className="mainpage-homemainbanner1image-icon"
              alt=""
              src="main/homemainbanner1image@2x.png"
            />
            <div className="mainpage-homemainbanner2text">
              <b className="mainpage-b32">디지털지름길</b>
              <div className="mainpage-div113">
                <p className="mainpage-p16">디지털 기기 친숙하게</p>
                <p className="mainpage-p16">다가가봐요</p>
              </div>
            </div>
          </button>
        </div>
        <div className="mainpage-homemainlrbutton">
          {username ? (
            <>
              <button className="mainpage-registerbutton" onClick={onLogoutButtonClick}>
                <div className="mainpage-div114">로그아웃</div>
              </button>
              <button className="mainpage-loginbutton1" style={{backgroundColor: "#fff", boxShadow: "none", cursor: "default"}} >
                <div className="mainpage-div114" style={{fontSize: "2rem", position: "relative", top: "0.1rem", left: "0.3rem"}}>{`${username}님, 환영합니다`}</div>
              </button>
            </>
          ) : (
            <>
              <button className="mainpage-registerbutton" onClick={onRegisterButtonClick}>
                <div className="mainpage-div114">회원가입</div>
              </button>
              <button className="mainpage-loginbutton1" onClick={onLoginButtonClick}>
                <div className="mainpage-div114">로그인</div>
              </button>
            </>
          )}
        </div>
      </main>
      <header className="mainpage-homeheader">
        <button
          className="mainpage-headermyinfobutton5"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="mainpage-div116">내 정보</div>
        </button>
        <div className="mainpage-headertitle6">
          <img
            className="mainpage-headertitleimage-icon8"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div117">디지털지름길</div>
        </div>
        <button className="mainpage-headerbackbutton9" onClick={onHeaderBackButtonClick}>
          <div className="mainpage-div118">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default Home;