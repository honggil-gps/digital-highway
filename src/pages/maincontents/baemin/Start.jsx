import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/setaddress");
  }, [navigate]);

  return (
    <div className="start">
      <img className="close-icon3" alt="" src="baemin/close@2x.png" />
      <div className="start-inner">
        <div className="frame-child7" />
      </div>
      <button className="start-child" onClick={onFrameButtonClick}>
        <div className="wrapper5">
          <div className="div206">시작하기</div>
        </div>
      </button>
    </div>
  );
};

export default Start;
