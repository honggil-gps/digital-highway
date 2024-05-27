import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/certificate-7");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/maincontents/join-4");
  }, [navigate]);

  return (
    <div className="coupong-login-3">
      <div className="coupong-rectangle-parent16">
        <div className="coupong-group-child3" />
        <div className="coupong-div28">
          쿠퐁 계정에 등록된 휴대폰번호를 입력해주세요.
        </div>
        <input
          className="coupong-rectangle-input"
          name="phone-number-login"
          id="phone-number-login"
          placeholder="휴대폰번호"
          type="text"
        />
        <div className="coupong-rectangle-parent17" onClick={onGroupContainerClick}>
          <div className="coupong-group-child4" />
          <div className="coupong-div29">인증번호 발송</div>
        </div>
        <img className="coupong-line-icon" alt="" src="/appguide/coupang/line-2.svg" />
        <div className="coupong-group-child5" />
        <div className="coupong-div30">또는</div>
        <div className="coupong-rectangle-parent18" onClick={onGroupContainer1Click}>
          <div className="coupong-group-child6" />
          <div className="coupong-div31">회원가입</div>
        </div>
      </div>
      <div className="coupong-rectangle-parent19">
        <div className="coupong-group-child7" />
        <div className="coupong-div32">이메일 로그인</div>
        <div className="coupong-div33">휴대폰번호 로그인</div>
        <div className="coupong-group-child8" />
      </div>
      <div className="coupong-cou-container">
        <div className="coupong-cou2">cou</div>
        <div className="coupong-p6">p</div>
        <div className="coupong-o2">o</div>
        <div className="coupong-n2">n</div>
        <div className="coupong-g2">g</div>
      </div>
    </div>
  );
};

export default Login;
