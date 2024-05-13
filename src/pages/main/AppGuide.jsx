import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AppGuide.css";

const AppGuide = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onNeverBandContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onInstagrammerContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onKikioTaxiContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onBaemanContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onNevermapContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onGov25ContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onCoupongContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onNeverContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onPknuBankContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onKrailContainerClick = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="appguide1">
      <div className="body9">
        <div className="applist">
          <img className="blank2-icon" alt="" src="main/blank2@2x.png" />
          <img className="blank1-icon" alt="" src="main/blank2@2x.png" />
          <div className="neverband" onClick={onNeverBandContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-41@2x.png"
            />
            <div className="div196">네이버밴드</div>
          </div>
          <div className="instagrammer" onClick={onInstagrammerContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-40@2x.png"
            />
            <div className="div196">인스타그램</div>
          </div>
          <div className="kikiotaxi" onClick={onKikioTaxiContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-39@2x.png"
            />
            <div className="div198">택시</div>
          </div>
          <div className="baeman" onClick={onBaemanContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-38@2x.png"
            />
            <div className="div198">배달</div>
          </div>
          <div className="nevermap" onClick={onNevermapContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-37@2x.png"
            />
            <div className="div198">지도</div>
          </div>
          <div className="gov25" onClick={onGov25ContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-36@2x.png"
            />
            <div className="div196">행정서비스</div>
          </div>
          <div className="coupong" onClick={onCoupongContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-35@2x.png"
            />
            <div className="div198">쇼핑</div>
          </div>
          <div className="never" onClick={onNeverContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-34@2x.png"
            />
            <div className="div203">검색엔진</div>
          </div>
          <div className="pknubank" onClick={onPknuBankContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-33@2x.png"
            />
            <div className="div198">금융</div>
          </div>
          <div className="krail" onClick={onKrailContainerClick}>
            <img
              className="neverband-child"
              alt=""
              src="main/rectangle-32@2x.png"
            />
            <div className="div203">기차예매</div>
          </div>
        </div>
        <div className="background" />
        <div className="title15">
          앱 배우기
          <p className="desc">어플을 선택하세요</p>
        </div>
        <div className="info6">
          <div className="info-child2" />
          <div className="div206">
            <p className="p28">
              지금까지 핸드폰에 있는 다양한 어플들을 사용하기가 힘드셨다면
            </p>
            <p className="p28">이 페이지에서 사용법을 익혀보세요!</p>
          </div>
        </div>
        <div className="menu26">
          <div className="menu-child26" />
          <div className="div207">커뮤니티</div>
          <div className="menu-child27" />
          <div className="div208">전자기기 가이드</div>
          <div className="menu-child28" />
          <div className="div209">앱 배우기</div>
          <div className="menu-child29" />
          <div className="div210">정보제공</div>
        </div>
      </div>
      <div className="chatbot9">
        <img className="box-icon9" alt="" src="main/box.svg" />
        <div className="intro10">
          <span className="intro-txt9">
            <p className="chat">어려운 단어가 있으신가요?<br />이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start9">
          <div className="start-child7" />
          <div className="div211">시작하기</div>
        </div>
        <img className="character-icon9" alt="" src="main/character@2x.png" />
      </div>
      <div className="footer12">
        <div className="box24" />
        <div className="menu27">
          <div className="div212">이용약관</div>
          <div className="div212">오시는길</div>
          <div className="div212">제휴제안</div>
          <div className="div212">개인정보처리방침</div>
          <div className="div212">저작권 보호정책</div>
          <div className="div212">고객센터</div>
        </div>
        <div className="copyright12">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <img className="logo-icon12" alt="" src="main/logo@2x.png" />
        <div className="title16">디지털지름길</div>
      </div>
      <div className="header12">
        <div className="box25" />
        <div className="logo12">
          <div className="div218" onClick={onLogoContainerClick}>디지털지름길</div>
          <img className="image-1-icon12" alt="" src="main/image-1@2x.png" />
        </div>
        <div className="easymode12">
          <div className="rectangle-parent9">
            <div className="group-child9" />
            <div className="div219">내 정보</div>
          </div>
        </div>
        <div className="back12" onClick={onBackContainerClick}>
          <div className="group-child9" />
          <div className="div220">뒤로가기</div>
        </div>
      </div>
    </div>
  );
};

export default AppGuide;
