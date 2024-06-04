import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import MainHeader from "../../components/main/MainHeader";
import MainFooter from "../../components/main/MainFooter";
import UpdateTel from "../../components/main/UpdateTel";
import UpdatePassword from "../../components/main/UpdatePassword";
import "./MyPageMyAccount.css";
import axios from "axios"

const MyPageMyAccount = () => {
  const navigate = useNavigate();
  const { isChatBotActive, activateChatBot, chatBotStyle } = useChatBot(); // Chatbot functions

  const [user, setUser] = useState({
    userID:"",
    userName:"",
    password:"",
    phoneNum:""
  });

  const [isUpdatePasswordOpen, setIsUpdatePasswordOpen] = useState(false);
  const [isUpdateTelOpen, setIsUpdateTelOpen] = useState(false);

  const onMyPageMenuButton3Click = useCallback(() => {
    navigate("/mypageguidelist");
  }, [navigate]);

  const onMyPageMenuButton2Click = useCallback(() => {
    navigate("/mypagestoragebox");
  }, [navigate]);

  useEffect(()=>{
    async function getMyPage(){
      try{
        const response = await axios.get('http://localhost:4000/myPage',{withCredentials:true});
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

// 비밀번호, 전화번호 수정 팝업 창

const openUpdatePasswordPopup = () => {
  setIsUpdatePasswordOpen(true);
};

const closeUpdatePasswordPopup = () => {
  setIsUpdatePasswordOpen(false);
};

const openUpdateTelPopup = () => {
  setIsUpdateTelOpen(true);
};

const closeUpdateTelPopup = () => {
  setIsUpdateTelOpen(false);
};

  return (
    <div className="mainpage-mypagemyaccount">
      <section className="mainpage-chatbot7">
        <img className="mainpage-box-icon7" alt="" src="main/box1.svg" />
        <div className="mainpage-intro8">
          <span className="mainpage-intro-txt7">
            <p className="mainpage-p22">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p22">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start7" onClick={onStartButtonClick}>
          <div className="mainpage-start-child4">
            <button className="mainpage-button22">시작하기</button>
          </div>
        </div>
        <img className="mainpage-character-icon7" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      <main className="mainpage-myaccountmain">
        <div className="mainpage-myaccountmaincontent">
          <div className="mainpage-myaccountmaincontenttext2">
            <div className="mainpage-myaccountmaincontenttext2d">
              <div className="mainpage-do">{maskPhoneNumber(user.phoneNum)}</div>
            </div>
            <div className="mainpage-myaccountmaincontenttext2c">
              <div className="mainpage-do">{maskPassword(user.password)}</div>
            </div>
            <div className="mainpage-myaccountmaincontenttext2b">
              <div className="mainpage-do">{user.userID}</div>
            </div>
            <div className="mainpage-myaccountmaincontenttext2a">
              <div className="mainpage-do">{user.userName}</div>
            </div>
          </div>
          <div className="mainpage-myaccountmaincontenttext1">
            <div className="mainpage-div127">전화번호</div>
            <div className="mainpage-div128">비밀번호</div>
            <div className="mainpage-div129">아이디</div>
            <div className="mainpage-div130">이름</div>
          </div>
          <button className="mainpage-myaccountmaincontentfixbutton2" onClick={openUpdateTelPopup}>
            <div className="mainpage-div131">수정</div>
          </button>
          <button className="mainpage-myaccountmaincontentfixbutton1" onClick={openUpdatePasswordPopup}>
            <div className="mainpage-div131">수정</div>
          </button>
        </div>
        <div className="mainpage-mypagemenubuttonset">
          <button
            className="mainpage-mypagemenubutton3"
            onClick={onMyPageMenuButton3Click}
          >
            <div className="mainpage-div133">진행 중인 가이드</div>
          </button>
          <button
            className="mainpage-mypagemenubutton2"
            onClick={onMyPageMenuButton2Click}
          >
            <div className="mainpage-div134">보관함</div>
          </button>
          <button className="mainpage-mypagemenubutton1">
            <div className="mainpage-div135">나의 정보</div>
          </button>
        </div>
      </main>
      <MainHeader />
      <MainFooter />
      {isUpdatePasswordOpen && <UpdatePassword className="mainpage-mypasswordfixpopup" onClose={closeUpdatePasswordPopup} />}
      {isUpdateTelOpen && <UpdateTel className="mainpage-mytelfixpopup" onClose={closeUpdateTelPopup} />}
    </div>
  );
};

export default MyPageMyAccount;