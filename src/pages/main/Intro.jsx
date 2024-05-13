import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();

  const onIntroContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="intro1" onClick={onIntroContainerClick}>
      <img className="mindmap-icon" alt="" src="main/mindmap@2x.png" />
      {/* footer */}
      <div className="footer1">
        <div className="box2" />
        <div className="menu1">
          <div className="div18">이용약관</div>
          <div className="div18">오시는길</div>
          <div className="div18">제휴제안</div>
          <div className="div18">개인정보처리방침</div>
          <div className="div18">저작권 보호정책</div>
          <div className="div18">고객센터</div>
        </div>
        <div className="copyright1">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <img className="logo-icon1" alt="" src="main/logo@2x.png" />
        <div className="title1">디지털지름길</div>
      </div>
      {/* header */}
      <div className="header1">
        <div className="box3" />
        <div className="logo1">
          <div className="div24">디지털지름길</div>
          <img className="image-1-icon1" alt="" src="main/image-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
