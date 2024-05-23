import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainContents.css";

const MainContents = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderBackButton1Click = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  return (
    <div className="maincontents">
      <section className="chatbot2">
        <img className="box-icon2" alt="" src="main/box.svg" />
        <div className="intro3">
          <span className="intro-txt2">
            <p className="p4">어려운 단어가 있으신가요?</p>
            <p className="p4">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start2">
          <div className="start-inner" />
          <div className="div28">시작하기</div>
        </div>
        <img className="character-icon2" alt="" src="main/character@2x.png" />
      </section>
      <main className="maincontentsbody1">
        <div className="caption-post1" />
        <div className="caption1" />
        <div className="caption-pre1" />
        <div className="phone1">
          <iframe src="http://localhost:5173/maincontents/loading-01" width="100%" height="100%"/>
        </div>
        <button className="tostart1">
          <div className="div29">처음으로</div>
        </button>
      </main>
      <section className="maincontentsad">
        <img className="icon button3" alt="" src="main/2@3x.png" />
        <img className="icon button4" alt="" src="main/1@3x.png" />
        <img className="icon k-rail" alt="" src="main/krail@3x.png" />
        <img className="icon never" alt="" src="main/never@3x.png" />
        <img className="icon coupong" alt="" src="main/coupong@3x.png" />
        <img className="icon button5" alt="" src="main/@3x.png" />
        <img className="icon button6" alt="" src="main/25@3x.png" />
        <img className="icon button7" alt="" src="main/3@3x.png" />
        <img className="icon instagramer" alt="" src="main/instagramer@3x.png" />
        <img className="icon kikiotaxi" alt="" src="main/kikiotaxi@3x.png" />
      </section>
      <footer className="maincontentsfooter">
        <div className="copyright3">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext3">
          <div className="div30">고객센터</div>
          <div className="div31">저작권 보호정책</div>
          <div className="div32">개인정보처리방침</div>
          <div className="div33">제휴제안</div>
          <div className="div34">오시는길</div>
          <div className="div35">이용약관</div>
        </div>
        <div className="title3">디지털지름길</div>
        <img className="logo-icon3" alt="" src="main/logo@2x.png" />
      </footer>
      <header className="maincontentsheader1">
        <img
          className="headertitleimage-icon3"
          alt=""
          src="main/headertitleimage@2x.png"
          onClick={onLogoContainerClick}
        />
        <div className="div36" onClick={onLogoContainerClick}>디지털지름길</div>
        <button className="headerbackbutton3" onClick={onHeaderBackButtonClick}>
          <div className="div37">뒤로가기</div>
        </button>
        <button
          className="headerbackbutton4"
          onClick={onHeaderBackButton1Click}
        >
          <div className="div37">내 정보</div>
        </button>
      </header>
    </div>
  );
};

export default MainContents;
