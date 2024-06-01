import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Kraillogin.css";

const Kraillogin = () => {
  const navigate = useNavigate();

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onSignupButtonClick = useCallback(() => {
    navigate("/maincontents/agreement");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/maincontents/agreement");
  }, [navigate]);

  const onLoginMainButtonClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  return (
    <div className="krail-kraillogin-03">
      <footer className="krail-krailloginfooter">
        <div className="krail-footerbutton4">
          <b className="krail-b14">승차권확인</b>
          <button
            className="krail-footerbutton4image"
            onClick={onFooterButton4ImageClick}
          />
        </div>
        <div className="krail-footerbutton3">
          <b className="krail-b14">관광상품</b>
          <img
            className="krail-footerbutton3image-icon"
            alt=""
            src="/appguide/Korail/footerbutton3image@2x.png"
          />
        </div>
        <div className="krail-footerbutton2">
          <img
            className="krail-footerbutton2image-icon"
            alt=""
            src="/appguide/Korail/footerbutton2image@2x.png"
          />
          <b className="krail-b14">할인ㆍ정기권</b>
        </div>
        <button className="krail-footerbutton1" onClick={onFooterButton1Click}>
          <b className="krail-b17">승차권예매</b>
          <img
            className="krail-footerbutton1image-icon"
            alt=""
            src="/appguide/Korail/footerbutton1image@2x.png"
          />
        </button>
      </footer>
      <main className="krail-loginmain">
        <div className="krail-loginmainsearch">
          <button className="krail-searchbutton1">
            <b className="krail-b18">회원번호 찾기</b>
          </button>
          <div className="krail-loginmainsearchline1" />
          <button className="krail-searchbutton1">
            <b className="krail-b18">비밀번호 찾기</b>
          </button>
          <div className="krail-loginmainsearchline1" />
          <div className="krail-signupbutton" onClick={onSignupButtonClick}>
            <button className="krail-button1" onClick={onButtonClick}>
              회원가입
            </button>
          </div>
        </div>
        <img
          className="krail-socialloginbutton-icon"
          alt=""
          src="/appguide/Korail/sociallogin.png"
        />
        <div
          className="krail-loginmainbutton"
          autoFocus={true}
          onClick={onLoginMainButtonClick}
        >
          <button className="krail-button2">로그인</button>
        </div>
        <div className="krail-loginmaininput">
          <div className="krail-logininputcheck">
            <div className="krail-check2">
              <b className="krail-b20">자동로그인</b>
              <input className="krail-checkbox" type="checkbox" />
            </div>
            <div className="krail-check1">
              <b className="krail-b21">회원번호저장</b>
              <input className="krail-checkbox" type="checkbox" />
            </div>
          </div>
          <div className="krail-logininputarea">
            <div className="krail-inputareapassword">
              <b className="krail-b22">비밀번호</b>
              <input className="krail-textinputbox" type="password" />
            </div>
            <div className="krail-inputareamembership">
              <b className="krail-b23">회원번호</b>
              <input className="krail-textinputbox" type="text" />
            </div>
          </div>
        </div>
      </main>
      <header className="krail-krailloginheader">
        <div className="krail-krailloginheaderbutton">
          <div className="krail-krailloginheaderbutton3">
            <button className="krail-button3">이메일주소</button>
          </div>
          <div className="krail-krailloginheaderbutton2">
            <button className="krail-button3">휴대폰번호</button>
          </div>
          <div className="krail-krailloginheaderbutton1">
            <div className="krail-krailloginheaderbuttonline" />
            <button className="krail-button5">회원번호</button>
          </div>
        </div>
        <div className="krail-krailloginheaderttile">
          <b className="krail-b24">로그인</b>
          <img
            className="krail-vector-icon"
            alt=""
            src="/appguide/Korail/vector.svg"
            onClick={onVectorIconClick}
          />
        </div>
      </header>
    </div>
  );
};

export default Kraillogin;
