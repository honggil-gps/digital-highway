import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DeviceGuide.css";

const DeviceGuide = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onDeviceGuideButton6Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartphoneImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton5Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onChromeImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton4Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartwatchImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton3Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onKioskImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton2Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onEarbudsImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onDeviceGuideButton1Click = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onSmartTVImageClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/appguide");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/info");
  }, [navigate]);

  const onHeaderMyinfoButtonContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="deviceguide">
      <main className="appguidemain1">
        <div className="title15">전자기기 가이드</div>
        <div className="deviceguidebuttonset">
          <button
            className="deviceguidebutton6"
            onClick={onDeviceGuideButton6Click}
          >
            <img
              className="smartphone-icon"
              alt=""
              src="main/smartphone@2x.png"
              onClick={onSmartphoneImageClick}
            />
          </button>
          <button
            className="deviceguidebutton5"
            onClick={onDeviceGuideButton5Click}
          >
            <img
              className="smartphone-icon"
              alt=""
              src="main/chrome@2x.png"
              onClick={onChromeImageClick}
            />
          </button>
          <button
            className="deviceguidebutton4"
            onClick={onDeviceGuideButton4Click}
          >
            <img
              className="smartphone-icon"
              alt=""
              src="main/smartwatch@2x.png"
              onClick={onSmartwatchImageClick}
            />
          </button>
          <button
            className="deviceguidebutton3"
            onClick={onDeviceGuideButton3Click}
          >
            <img
              className="smartphone-icon"
              alt=""
              src="main/kiosk@2x.png"
              onClick={onKioskImageClick}
            />
          </button>
          <button
            className="deviceguidebutton2"
            onClick={onDeviceGuideButton2Click}
          >
            <img
              className="smartphone-icon"
              alt=""
              src="main/earbuds@2x.png"
              onClick={onEarbudsImageClick}
            />
          </button>
          <button
            className="deviceguidebutton1"
            onClick={onDeviceGuideButton1Click}
          >
            <img
              className="smartphone-icon"
              alt=""
              src="main/smarttv@2x.png"
              onClick={onSmartTVImageClick}
            />
          </button>
        </div>
        <div className="guidescrollbackground1" />
        <div className="appguidemaincontentbanner1">
          <div className="div184">
            <span className="txt">
              <p className="deviceguide-ment">
                키오스크와 같은 다양한 디지털 기기가 많아서 힘드신 분들을 위해
              </p>
              <p className="deviceguide-ment">자주 사용하는 기능들만 모아서 알려드립니다</p>
              <p className="deviceguide-ment">원하는 기기를 선택한 뒤 직접 따라해보세요!</p>
            </span>
          </div>
        </div>
        <div className="appguidemainbuttonset11">
          <button className="button26" onClick={onButtonClick}>
            커뮤니티
          </button>
          <div className="infomainbuttonset1line6" />
          <button className="button27">전자기기 가이드</button>
          <div className="infomainbuttonset1line7" />
          <button className="button28" onClick={onButton2Click}>
            앱 배우기
          </button>
          <div className="infomainbuttonset1line8" />
          <button className="button29" onClick={onButton3Click}>
            정보제공
          </button>
        </div>
        <div className="title15">전자기기 가이드</div>
      </main>
      <section className="chatbot10">
        <img className="box-icon10" alt="" src="main/box.svg" />
        <div className="intro11">
          <span className="txt">
            <p className="p28">어려운 단어가 있으신가요?</p>
            <p className="p28">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start10">
          <div className="start-child7" />
          <div className="div185">시작하기</div>
        </div>
        <img className="character-icon10" alt="" src="main/character@2x.png" />
      </section>
      <footer className="appguidefooter2">
        <div className="copyright13">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext13">
          <div className="div186">고객센터</div>
          <div className="div187">저작권 보호정책</div>
          <div className="div188">개인정보처리방침</div>
          <div className="div189">제휴제안</div>
          <div className="div190">오시는길</div>
          <div className="div191">이용약관</div>
        </div>
        <div className="title17">디지털지름길</div>
        <img className="logo-icon13" alt="" src="main/logo@2x.png" />
      </footer>
      <header className="appguideheader1">
        <div
          className="headermyinfobutton9"
          onClick={onHeaderMyinfoButtonContainerClick}
        >
          <div className="div192">내 정보</div>
        </div>
        <div className="headertitle10" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon12"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div193">디지털지름길</div>
        </div>
        <div
          className="headerbackbutton13"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="div194">뒤로가기</div>
        </div>
      </header>
    </div>
  );
};

export default DeviceGuide;
