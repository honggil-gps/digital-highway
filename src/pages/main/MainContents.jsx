import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainContents.css";

const MainContents = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/appguide");
  }, [navigate]);

  return (
    <div className="maincontents">
      <div className="maincontents1">
        <div className="header8">
          <div className="box16" />
          <div className="logo8">
            <div className="div101" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon8" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode8">
            <div className="rectangle-parent5">
              <div className="group-child5" />
              <div className="div102">내 정보</div>
            </div>
          </div>
          <div className="back8">
            <div className="group-child5" />
            <div className="div103" onClick={onBackContainerClick}>뒤로가기</div>
          </div>
        </div>
        <div className="body4">
          <div className="chatbot5">
            <img className="box-icon5" alt="" src="main/box.svg" />
            <div className="intro6">
              <span className="intro-txt5">
                <p className="p16">어려운 단어가 있으신가요?</p>
                <p className="p16">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start5">
              <div className="start-child3" />
              <div className="div104">시작하기</div>
            </div>
            <img className="character-icon5" alt="" src="main/character@2x.png" />
          </div>
          <div className="body5">
            <div className="tostart1">
              <div className="tostart-item" />
              <div className="div105">처음으로</div>
            </div>
            <div className="caption-post" />
            <div className="caption" />
            <div className="caption-pre" />
            <img className="phone-icon1" alt="" src="main/phone.svg" />
          </div>
          <div className="ad">
            <img className="icon" alt="" src="main/baemin_ad.png" />
            <img className="icon" alt="" src="main/bank_ad.png" />
            <img className="icon" alt="" src="main/krail@2x.png" />
            <img className="icon" alt="" src="main/never@2x.png" />
            <img className="icon" alt="" src="main/coupong@2x.png" />
            <img className="icon" alt="" src="main/navermap_ad.png" />
            <img className="icon" alt="" src="main/25@2x.png" />
            <img className="icon" alt="" src="main/@2x.png" />
            <img className="icon" alt="" src="main/instagramer@2x.png" />
            <img className="icon" alt="" src="main/kikiotaxi@2x.png" />
          </div>
        </div>
        <div className="footer8">
          <div className="box17" />
          <div className="menu10">
            <div className="div106">이용약관</div>
            <div className="div106">오시는길</div>
            <div className="div106">제휴제안</div>
            <div className="div106">개인정보처리방침</div>
            <div className="div106">저작권 보호정책</div>
            <div className="div106">고객센터</div>
          </div>
          <div className="copyright8">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon8" alt="" src="main/logo@2x.png" />
          <div className="title9">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default MainContents;
