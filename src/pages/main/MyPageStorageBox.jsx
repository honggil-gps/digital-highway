import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import MainFooter from "../../components/main/MainFooter";
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
    <div className="mainpage-mypagestoragebox">
      <main className="mainpage-storageboxmain">
        <div className="mainpage-storageboxmaincontentset">
          <div className="mainpage-storageboxmaincontent2">
            <div className="mainpage-storageboxmaincontent2info2">
              <div className="mainpage-storageboxmaincontent2box2">
                <div className="mainpage-storageboxmaincontent2box2b">
                  <b className="mainpage-b33">키오스크 그거 어떻게 하는건데</b>
                  <div className="mainpage-div139">
                    자꾸 뒷사람이 눈치주길래 주문 못하고 나왔···
                  </div>
                </div>
                <b className="mainpage-b34">네이버카페</b>
                <div className="mainpage-storageboxmaincontent2box2a">
                  <b className="mainpage-b33">펭현숙귄카</b>
                  <div className="mainpage-div139">
                    밤새는거 재밌당 근데 언제 다하지?
                  </div>
                </div>
                <b className="mainpage-b36">밴드</b>
              </div>
              <div className="mainpage-div141">좋아요</div>
            </div>
            <div className="mainpage-storageboxmaincontent2info1">
              <div className="mainpage-storageboxmaincontent2box1">
                <div className="mainpage-div142">글을 작성해 보세요!</div>
              </div>
              <div className="mainpage-div143">작성한 글</div>
            </div>
            <div className="mainpage-storageboxmaincontent2title">
              <div className="mainpage-div144">네이버카페 / 인스타그램 / 밴드</div>
              <div className="mainpage-div145">커뮤니티</div>
            </div>
          </div>
          <div className="mainpage-storageboxmaincontent1">
            <div className="mainpage-storageboxmaincontent1info">
              <div className="mainpage-div146">문화누리카드 발급 일시중단 안내</div>
              <b className="mainpage-b37">문화</b>
              <div className="mainpage-div147">
                청년월세 한시 특별지원 - 복지서비스 상세(중앙)
              </div>
              <b className="mainpage-b38">복지</b>
            </div>
            <div className="mainpage-storageboxmaincontent1title">
              <div className="mainpage-div148">스크랩한 글 모음입니다</div>
              <div className="mainpage-div149">정보제공</div>
            </div>
          </div>
        </div>
        <div className="mainpage-scrollbackground" />
        <div className="mainpage-storageboxmainbuttonset">
          <button
            className="mainpage-mypagemenubutton31"
            onClick={onMyPageMenuButton3Click}
          >
            <div className="mainpage-div150">진행 중인 가이드</div>
          </button>
          <button className="mainpage-mypagemenubutton21">
            <div className="mainpage-div151">보관함</div>
          </button>
          <button
            className="mainpage-mypagemenubutton11"
            onClick={onMyPageMenuButton1Click}
          >
            <div className="mainpage-div152">나의 정보</div>
          </button>
        </div>
      </main>
      <header className="mainpage-mypageheader1">
        <div
          className="mainpage-headermyinfobutton7"
          onClick={onHeaderMyinfoButtonContainerClick}
        >
          <div className="mainpage-div153">내 정보</div>
        </div>
        <div className="mainpage-headertitle8" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon10"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div154">디지털지름길</div>
        </div>
        <div
          className="mainpage-headerbackbutton11"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="mainpage-div155">뒤로가기</div>
        </div>
      </header>
      <section className="mainpage-chatbot8">
        <img className="mainpage-box-icon8" alt="" src="main/box1.svg" />
        <div className="mainpage-intro9">
          <span className="mainpage-intro-txt8">
            <p className="mainpage-p24">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p24">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start8"onClick={onStartButtonClick}>
          <div className="mainpage-start-child5">
            <div className="mainpage-div162">시작하기</div>
          </div>
        </div>
        <img className="mainpage-character-icon8" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      <MainFooter />
    </div>
  );
};

export default MyPageStorageBox;
