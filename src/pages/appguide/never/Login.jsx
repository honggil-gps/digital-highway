import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/maincontents/termsofuse-10");
  }, [navigate]);

  return (
    <div className="never-login-09">
      <img
        className="never-naver-logosvg-icon1"
        alt=""
        src="/appguide/never/naver-logosvg1.svg"
      />
      <div className="never-loginpagecontainer">
        <div className="never-loginbox">
          <div className="never-idandpw">
            <div className="never-idandpw-child" />
            <div className="never-idandpw-item" />
            <div className="never-div47">아이디</div>
            <div className="never-div48">비밀번호</div>
          </div>
          <div className="never-loginbutton1">
            <div className="never-wrapper">
              <div className="never-div49">로그인</div>
            </div>
          </div>
        </div>
        <div className="never-idfindandjoin">
          <div className="never-div49">비밀번호 찾기</div>
          <div className="never-idfindandjoin-child" />
          <div className="never-div49">아이디 찾기</div>
          <div className="never-idfindandjoin-child" />
          <div className="never-div52" onClick={onText2Click}>
            회원가입
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
