import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate])

  const onEasymodeContainerClick = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCommunityContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onDeviceguideContainerClick = useCallback(() => {
    navigate("/deviceguide");
  }, [navigate]);

  const onAppguideContainerClick = useCallback(() => {
    navigate("/appguide");
  }, [navigate]);

  const onInfoContainerClick = useCallback(() => {
    navigate("/info");
  }, [navigate]);

  const onJoinContainerClick = useCallback(() => {
    navigate("/join");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="home">
      <div className="home1">
        {/* 헤더 */}
        <div className="header">
          <div className="box" />
          <div className="logo">
            <div className="div" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode" onClick={onEasymodeContainerClick}>
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="div1">내 정보</div>
            </div>
          </div>
          <div className="back" onClick={onBackContainerClick}>
            <div className="group-child" />
            <div className="div2">뒤로가기</div>
          </div>
        </div>
        {/* 바디 */}
        <div className="body">
          {/* 챗봇 */}
          <div className="chatbot">
            <img className="box-icon" alt="" src="main/box.svg" />
            <div className="intro">
              <span className="intro-txt">
                <p className="p">어려운 단어가 있으신가요?</p>
                <p className="p">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start">
              <div className="start-child" />
              <div className="div3">시작하기</div>
            </div>
            <img className="character-icon" alt="" src="main/character@2x.png" />
          </div>
          {/* 카테고리 */}
          <div className="community" onClick={onCommunityContainerClick}>
            <div className="community-child" />
            <div className="div4">커뮤니티</div>
          </div>
          <div className="deviceguide" onClick={onDeviceguideContainerClick}>
            <div className="deviceguide-child" />
            <div className="div5">
              <p className="p">전자기기<br />가이드</p>
            </div>
          </div>
          <div className="appguide" onClick={onAppguideContainerClick}>
            <div className="appguide-child" />
            <div className="div6">앱 배우기</div>
          </div>
          <div className="info" onClick={onInfoContainerClick}>
            <div className="info-child" />
            <div className="div7">정보제공</div>
          </div>
          <div className="pknu">
            <div className="parent">
              <b className="b">부경대학교</b>
              <div className="div8">미래를 우리 손으로</div>
            </div>
            <img className="png-1-icon" alt="" src="main/-png-1@2x.png" />
          </div>
          <div className="digital">
            <div className="parent">
              <b className="b1">디지털지름길</b>
              <div className="div9">
                <p className="p">디지털 기기 친숙하게</p>
                <p className="p">다가가봐요</p>
              </div>
            </div>
            <img className="image-5-icon" alt="" src="main/image-5@2x.png" />
          </div>
          <div className="join" onClick={onJoinContainerClick}>
            <div className="join-child" />
            <div className="div10">회원가입</div>
          </div>
          <div className="login" onClick={onLoginContainerClick}>
            <div className="join-child" />
            <div className="div11">로그인</div>
          </div>
        </div>
        <div className="footer">
          <div className="box1" />
          <div className="menu">
            <div className="div12">이용약관</div>
            <div className="div12">오시는길</div>
            <div className="div12">제휴제안</div>
            <div className="div12">개인정보처리방침</div>
            <div className="div12">저작권 보호정책</div>
            <div className="div12">고객센터</div>
          </div>
          <div className="copyright">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon" alt="" src="main/logo@2x.png" />
          <div className="title">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
