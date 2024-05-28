import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import "./MyPageMyAccount.css";
import axios from "axios"

const MyPageMyAccount = () => {
  const navigate = useNavigate();
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions

  const [user, setUser] = useState({
    userID:"",
    userName:"",
    password:"",
    phoneNum:""
  });

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onMyPageMenuButton3Click = useCallback(() => {
    navigate("/mypageguidelist");
  }, [navigate]);

  const onMyPageMenuButton2Click = useCallback(() => {
    navigate("/mypagestoragebox");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  useEffect(()=>{
    async function getMyPage(){
      try{
        const response = await axios.get('http://localhost:4000/community/myPage',{withCredentials:true});
        console.log(response.data)
        setUser(response.data);
      }catch(error){
        console.error('오류발생',error);
      }
    }
    getMyPage();
  },[]);
  // 비밀번호 전체 가리는 함수
  const maskPassword = (password) => {
    if (password === ""){
      return ""
    }
    return "***********";
  };
// 전화번호를 마스킹하여 반환하는 함수
const maskPhoneNumber = (phoneNumber) => {
  if(phoneNumber === ""){
    return ""
  }
  // 전화번호의 형식이 "000-1234-5678"일 때
  const parts = phoneNumber.split("-");
  console.log(parts)
  // "+82) 000-****-****" 형식으로 반환
  return `+82) ${parts[0]}-****-****`;
};

const onStartButtonClick = () => {
  console.log('Start button clicked');
  try {
    activateChatBot();
  } catch (error) {
    console.error('Error activating ChatBot:', error);
  }
};

  return (
    <div className="mypagemyaccount">
      <footer className="mypagefooter">
        <div className="copyright10">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext10">
          <div className="div119">고객센터</div>
          <div className="div120">저작권 보호정책</div>
          <div className="div121">개인정보처리방침</div>
          <div className="div122">제휴제안</div>
          <div className="div123">오시는길</div>
          <div className="div124">이용약관</div>
        </div>
        <div className="title12">디지털지름길</div>
        <img className="logo-icon10" alt="" src="main/logo@2x.png" />
      </footer>
      <section className="chatbot7">
        <img className="box-icon7" alt="" src="main/box1.svg" />
        <div className="intro8">
          <span className="intro-txt7">
            <p className="p22">어려운 단어가 있으신가요?</p>
            <p className="p22">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start7" onClick={onStartButtonClick}>
          <div className="start-child4" />
          <button className="button22">시작하기</button>
        </div>
        <img className="character-icon7" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
      </section>
      <main className="myaccountmain">
        <div className="myaccountmaincontent">
          <div className="myaccountmaincontenttext2">
            <div className="myaccountmaincontenttext2d">
              <div className="do">{maskPhoneNumber(user.phoneNum)}</div>
            </div>
            <div className="myaccountmaincontenttext2c">
              <div className="do">{maskPassword(user.password)}</div>
            </div>
            <div className="myaccountmaincontenttext2b">
              <div className="do">{user.userID}</div>
            </div>
            <div className="myaccountmaincontenttext2a">
              <div className="do">{user.userName}</div>
            </div>
          </div>
          <div className="myaccountmaincontenttext1">
            <div className="div127">전화번호</div>
            <div className="div128">비밀번호</div>
            <div className="div129">아이디</div>
            <div className="div130">이름</div>
          </div>
          <button className="myaccountmaincontentfixbutton2">
            <div className="div131">수정</div>
          </button>
          <button className="myaccountmaincontentfixbutton1">
            <div className="div131">수정</div>
          </button>
        </div>
        <div className="mypagemenubuttonset">
          <button
            className="mypagemenubutton3"
            onClick={onMyPageMenuButton3Click}
          >
            <div className="div133">진행 중인 가이드</div>
          </button>
          <button
            className="mypagemenubutton2"
            onClick={onMyPageMenuButton2Click}
          >
            <div className="div134">보관함</div>
          </button>
          <button className="mypagemenubutton1">
            <div className="div135">나의 정보</div>
          </button>
        </div>
      </main>
      <header className="mypageheader">
        <button className="headermyinfobutton6">
          <div className="div136">내 정보</div>
        </button>
        <div className="headertitle7" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon9"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div137">디지털지름길</div>
        </div>
        <button
          className="headerbackbutton10"
          onClick={onHeaderBackButtonClick}
        >
          <div className="div138">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default MyPageMyAccount;