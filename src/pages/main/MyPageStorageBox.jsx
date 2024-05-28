import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import "./MyPageStorageBox.css";

const MyPageStorageBox = () => {
  const navigate = useNavigate();
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onMyPageMenuButton3Click = useCallback(() => {
    navigate("/mypageguidelist");
  }, [navigate]);

  const onMyPageMenuButton1Click = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderMyinfoButtonContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
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
    <div className="mypagestoragebox">
      <main className="storageboxmain">
        <div className="storageboxmaincontentset">
          <div className="storageboxmaincontent2">
            <div className="storageboxmaincontent2info2">
              <div className="storageboxmaincontent2box2">
                <div className="storageboxmaincontent2box2b">
                  <b className="b33">키오스크 그거 어떻게 하는건데</b>
                  <div className="div139">
                    자꾸 뒷사람이 눈치주길래 주문 못하고 나왔···
                  </div>
                </div>
                <b className="b34">네이버카페</b>
                <div className="storageboxmaincontent2box2a">
                  <b className="b33">펭현숙귄카</b>
                  <div className="div139">
                    밤새는거 재밌당 근데 언제 다하지?
                  </div>
                </div>
                <b className="b36">밴드</b>
              </div>
              <div className="div141">좋아요</div>
            </div>
            <div className="storageboxmaincontent2info1">
              <div className="storageboxmaincontent2box1">
                <div className="div142">글을 작성해 보세요!</div>
              </div>
              <div className="div143">작성한 글</div>
            </div>
            <div className="storageboxmaincontent2title">
              <div className="div144">네이버카페 / 인스타그램 / 밴드</div>
              <div className="div145">커뮤니티</div>
            </div>
          </div>
          <div className="storageboxmaincontent1">
            <div className="storageboxmaincontent1info">
              <div className="div146">문화누리카드 발급 일시중단 안내</div>
              <b className="b37">문화</b>
              <div className="div147">
                청년월세 한시 특별지원 - 복지서비스 상세(중앙)
              </div>
              <b className="b38">복지</b>
            </div>
            <div className="storageboxmaincontent1title">
              <div className="div148">스크랩한 글 모음입니다</div>
              <div className="div149">정보제공</div>
            </div>
          </div>
        </div>
        <div className="scrollbackground" />
        <div className="storageboxmainbuttonset">
          <button
            className="mypagemenubutton31"
            onClick={onMyPageMenuButton3Click}
          >
            <div className="div150">진행 중인 가이드</div>
          </button>
          <button className="mypagemenubutton21">
            <div className="div151">보관함</div>
          </button>
          <button
            className="mypagemenubutton11"
            onClick={onMyPageMenuButton1Click}
          >
            <div className="div152">나의 정보</div>
          </button>
        </div>
      </main>
      <header className="mypageheader1">
        <div
          className="headermyinfobutton7"
          onClick={onHeaderMyinfoButtonContainerClick}
        >
          <div className="div153">내 정보</div>
        </div>
        <div className="headertitle8" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon10"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div154">디지털지름길</div>
        </div>
        <div
          className="headerbackbutton11"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="div155">뒤로가기</div>
        </div>
      </header>
      <footer className="mypagefooter1">
        <div className="copyright11">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext11">
          <div className="div156">고객센터</div>
          <div className="div157">저작권 보호정책</div>
          <div className="div158">개인정보처리방침</div>
          <div className="div159">제휴제안</div>
          <div className="div160">오시는길</div>
          <div className="div161">이용약관</div>
        </div>
        <div className="title13">디지털지름길</div>
        <img className="logo-icon11" alt="" src="main/logo@2x.png" />
      </footer>
      <section className="chatbot8">
        <img className="box-icon8" alt="" src="main/box1.svg" />
        <div className="intro9">
          <span className="intro-txt8">
            <p className="p24">어려운 단어가 있으신가요?</p>
            <p className="p24">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start8"onClick={onStartButtonClick}>
          <div className="start-child5" />
          <div className="div162">시작하기</div>
        </div>
        <img className="character-icon8" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="chatbot-container"><ChatBot /></div>)}
      </section>
    </div>
  );
};

export default MyPageStorageBox;
