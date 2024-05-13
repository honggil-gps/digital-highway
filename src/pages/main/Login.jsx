import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate])

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="login1">
      <div className="footer4">
        <div className="box8" />
        <div className="menu4">
          <div className="div48">이용약관</div>
          <div className="div48">오시는길</div>
          <div className="div48">제휴제안</div>
          <div className="div48">개인정보처리방침</div>
          <div className="div48">저작권 보호정책</div>
          <div className="div48">고객센터</div>
        </div>
        <div className="copyright4">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <img className="logo-icon4" alt="" src="main/logo@2x.png" />
        <div className="title4">디지털지름길</div>
      </div>
      <div className="frame1" />
      <div className="login-button" onClick={onLoginButtonContainerClick}>
        <div className="login-button-child" />
        <div className="div54">로그인</div>
      </div>
      <div className="find">아이디·비밀번호 찾기</div>
      <input className="pw-box1" placeholder="비밀번호" type="password" />
      <input className="id-box1" placeholder="아이디" type="text" />
      <div className="login-title">로그인</div>
      <div className="header4">
        <div className="box9" />
        <div className="logo4">
          <div className="div55" onClick={onLogoContainerClick}>디지털지름길</div>
          <img className="image-1-icon4" alt="" src="main/image-1@2x.png" />
        </div>
        <div className="back4" onClick={onBackContainerClick}>
          <div className="group-child1" />
          <div className="div57">뒤로가기</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
