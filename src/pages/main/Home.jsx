import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useChatBot } from "../../context/ChatBotContext";
import ChatBot from "../../components/ChatBot";
import axios from "axios"
import MainHeader from "../../components/main/MainHeader"
import MainFooter from "../../components/main/MainFooter";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isChatBotActive, activateChatBot, chatBotStyle } = useChatBot(); // 객체 디스트럭처링으로 수정
  const [user, setUser] = useState(null);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   if (location.state && location.state.username) {
  //     setUsername(location.state.username);
  //   }
  // }, [location.state]);

  useEffect(()=>{
    async function getUsername(){
      try{
        const response = await axios.get('http://localhost:4000/myPage',{withCredentials:true});
        console.log(response.data)
        setUser(response.data);
      }catch(error){
        setUser(null)
      }
    }
    getUsername();
  },[]);

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
  const onLogoutButtonClick = useCallback(async() => {
    try{
      await axios.get("http://localhost:4000/logout",{ withCredentials:true });
      setUser(null)
      window.location.reload()
    }catch(err){
      console.error("로그아웃 요청 중 오류발생", err);
    }
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
      <main className="mainpage-homemain">
        <section className="mainpage-chatbot6" style = {chatBotStyle}>
          <div className="mainpage-box-icon6"/>
          <div className="mainpage-intro7">
            <span className="mainpage-intro-txt6">
              <p className="mainpage-chat-p16">어려운 단어가 있으신가요?</p>
              <p className="mainpage-chat-p16">이제 제가 도와드릴게요</p>
            </span>
          </div>
          <button className="mainpage-start6" onClick={onStartButtonClick}>
            <div className="mainpage-start-child3">
              <div className="mainpage-div107">시작하기</div>
            </div>
          </button>
          <img className="mainpage-character-icon6" alt="" src="main/no_jaggle.png" />
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
        <div className="homemainlrbutton">
          {user ? (
            <>
              <button className="mainpage-registerbutton" onClick={onLogoutButtonClick}>
                <div className="mainpage-div114">로그아웃</div>
              </button>
              <button className="mainpage-loginbutton1" style={{backgroundColor: "#fff", boxShadow: "none", cursor: "default"}} >
                <div className="mainpage-div114" style={{fontSize: "2rem", position: "relative", top: "0.1rem", left: "0.3rem"}}>{user.userName}님, 환영합니다</div>
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
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default Home;