import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Kraillogin.css";

const Kraillogin = () => {
  const navigate = useNavigate();

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/agreement");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/agreement");
  }, [navigate]);

  const onLoginMainButtonClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  return (
    <div className="kraillogin-03">
      <footer className="krailloginfooter">
        <div className="footerbutton4">
          <b className="b14">승차권확인</b>
          <button
            className="footerbutton4image"
            onClick={onFooterButton4ImageClick}
          />
        </div>
        <div className="footerbutton3">
          <b className="b14">관광상품</b>
          <img
            className="footerbutton3image-icon"
            alt=""
            src="/Appguide/Korail/footerbutton3image@2x.png"
          />
        </div>
        <div className="footerbutton2">
          <img
            className="footerbutton2image-icon"
            alt=""
            src="/Appguide/Korail/footerbutton2image@2x.png"
          />
          <b className="b14">할인ㆍ정기권</b>
        </div>
        <button className="footerbutton1" onClick={onFooterButton1Click}>
          <b className="b17">승차권예매</b>
          <img
            className="footerbutton1image-icon"
            alt=""
            src="/Appguide/Korail/footerbutton1image@2x.png"
          />
        </button>
      </footer>
      <main className="loginmain">
        <div className="loginmainsearch">
          <button className="searchbutton1">
            <b className="b18">회원번호 찾기</b>
          </button>
          <div className="loginmainsearchline1" />
          <button className="searchbutton1">
            <b className="b18">비밀번호 찾기</b>
          </button>
          <div className="loginmainsearchline1" />
          <button className="signupbutton" onClick={onSignupButtonClick}>
            <button className="button1" onClick={onButtonClick}>
              회원가입
            </button>
          </button>
        </div>
        <img
          className="socialloginbutton-icon"
          alt=""
          src="/Appguide/Korail/socialloginbutton@2x.png"
        />
        <button
          className="loginmainbutton"
          autoFocus={true}
          onClick={onLoginMainButtonClick}
        >
          <button className="button2">로그인</button>
        </button>
        <div className="loginmaininput">
          <div className="logininputcheck">
            <div className="check2">
              <b className="b20">자동로그인</b>
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="check1">
              <b className="b21">회원번호저장</b>
              <input className="checkbox" type="checkbox" />
            </div>
          </div>
          <div className="logininputarea">
            <div className="inputareapassword">
              <b className="b22">비밀번호</b>
              <input className="textinputbox" type="password" />
            </div>
            <div className="inputareamembership">
              <b className="b23">회원번호</b>
              <input className="textinputbox" type="number" />
            </div>
          </div>
        </div>
      </main>
      <header className="krailloginheader">
        <div className="krailloginheaderbutton">
          <div className="krailloginheaderbutton3">
            <button className="button3">이메일주소</button>
          </div>
          <div className="krailloginheaderbutton2">
            <button className="button3">휴대폰번호</button>
          </div>
          <div className="krailloginheaderbutton1">
            <div className="krailloginheaderbuttonline" />
            <button className="button5">회원번호</button>
          </div>
        </div>
        <div className="krailloginheaderttile">
          <b className="b24">로그인</b>
          <img
            className="vector-icon"
            alt=""
            src="/Appguide/Korail/vector.svg"
            onClick={onVectorIconClick}
          />
        </div>
      </header>
    </div>
  );
};

export default Kraillogin;
