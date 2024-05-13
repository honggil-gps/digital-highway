import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate])

  const onJoinButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="join1">
      <div className="join-layout">
        <div className="frame" />
        <div className="join-button" onClick={onJoinButtonContainerClick}>
          <div className="join-button-child" />
          <div className="div38">가입하기</div>
        </div>
        <input className="pn-box" placeholder="핸드폰번호" type="text" />
        <input className="pw-confirm" placeholder="비밀번호 확인" type="password" />
        <input className="pw-box" placeholder="비밀번호" type="password" />
        <input className="id-box" placeholder="아이디" type="text" />
        <input className="name-box" placeholder="이름" type="text" />
        <div className="join-title">회원가입</div>
      </div>
      <div className="footer3">
        <div className="box6" />
        <div className="menu3">
          <div className="div39">이용약관</div>
          <div className="div39">오시는길</div>
          <div className="div39">제휴제안</div>
          <div className="div39">개인정보처리방침</div>
          <div className="div39">저작권 보호정책</div>
          <div className="div39">고객센터</div>
        </div>
        <div className="copyright3">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <img className="logo-icon3" alt="" src="main/logo@2x.png" />
        <div className="title3">디지털지름길</div>
      </div>
      <div className="header3">
        <div className="box7" />
        <div className="logo3">
          <div className="div45" onClick={onLogoContainerClick}>디지털지름길</div>
          <img className="image-1-icon3" alt="" src="main/image-1@2x.png" />
        </div>
        <div className="back3" onClick={onBackContainerClick}>
          <div className="rectangle-div" />
          <div className="div47">뒤로가기</div>
        </div>
      </div>
    </div>
  );
};

export default Join;
