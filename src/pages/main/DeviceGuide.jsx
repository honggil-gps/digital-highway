import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceGuide.css";

const DeviceGuide = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSmartphoneImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onChromeImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartwatchImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onKioskImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onEarbudsImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartTVImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  return (
    <div className="deviceguide1">
      <div className="deviceguide2">
        <div className="header9">
          <div className="box18" />
          <div className="logo9">
            <div className="div112" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon9" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode9">
            <div className="rectangle-parent6">
              <div className="group-child6" />
              <div className="div113">내 정보</div>
            </div>
          </div>
          <div className="back9" onClick={onBackContainerClick}>
            <div className="group-child6" />
            <div className="div114">뒤로가기</div>
          </div>
        </div>
        <div className="body6">
          <div className="chatbot6">
            <img className="box-icon6" alt="" src="main/box.svg" />
            <div className="intro7">
              <span className="intro-txt6">
                <p className="p18">어려운 단어가 있으신가요?</p>
                <p className="p18">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start6">
              <div className="start-child4" />
              <div className="div115">시작하기</div>
            </div>
            <img className="character-icon6" alt="" src="main/character@2x.png" />
          </div>
            <img
              className="smartphone-icon"
              alt=""
              src="main/smartphone@2x.png"
              onClick={onSmartphoneImageClick}
            />
            <img
              className="chrome-icon"
              alt=""
              src="main/chrome@2x.png"
              onClick={onChromeImageClick}
            />
            <img
              className="smartwatch-icon"
              alt=""
              src="main/smartwatch@2x.png"
              onClick={onSmartwatchImageClick}
            />
            <img
              className="kiosk-icon"
              alt=""
              src="main/kiosk@2x.png"
              onClick={onKioskImageClick}
            />
            <img
              className="earbuds-icon"
              alt=""
              src="main/earbuds@2x.png"
              onClick={onEarbudsImageClick}
            />
            <img
              className="smarttv-icon"
              alt=""
              src="main/smarttv@2x.png"
              onClick={onSmartTVImageClick}
            />
          <div className="title10">
            전자기기 가이드
            <p className="desc">제품을 선택하세요</p>
          </div>
          <div className="info4">
            <div className="info-inner" />
            <div className="div116">
              <p className="info-desc">
                디지털기기 사용이 힘드신 분들을 위해<br />자주 사용하는 기능들만 모아서 알려드립니다<br />원하는 기기를 선택한 뒤 직접 따라해보세요!
              </p>
            </div>
          </div>
          <div className="menu11">
            <div className="menu-child6" />
            <div className="div117">커뮤니티</div>
            <div className="menu-child7" />
            <div className="div118">전자기기 가이드</div>
            <div className="menu-child8" />
            <div className="div119">앱 배우기</div>
            <div className="menu-child9" />
            <div className="div120">정보제공</div>
          </div>
        </div>
        <div className="footer9">
          <div className="box19" />
          <div className="menu12">
            <div className="div121">이용약관</div>
            <div className="div121">오시는길</div>
            <div className="div121">제휴제안</div>
            <div className="div121">개인정보처리방침</div>
            <div className="div121">저작권 보호정책</div>
            <div className="div121">고객센터</div>
          </div>
          <div className="copyright9">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon9" alt="" src="main/logo@2x.png" />
          <div className="title11">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default DeviceGuide;
