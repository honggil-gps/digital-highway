import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPageSNS.css";

const MainPageSNS = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/joininstagram01");
  }, [navigate]);

  return (
    <div className="mainpageinstagram">
      <div className="frame">
        <div className="instagramer">Instagramer</div>
        <div className="instagramer1"></div>
      </div>
      <div className="frame1">
        <img
          className="frame-icon"
          alt=""
          src="/appguide/instagram/frame.svg"
        />
        <button className="frame2">
          <div className="frame3">
            <button className="wrapper" onClick={onFrameButtonClick}>
              <div className="div">시작하기</div>
            </button>
          </div>
          <div className="frame3">
            <button className="container" onClick={onFrameButton1Click}>
              <div className="div">새 계정 만들기</div>
            </button>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MainPageSNS;
