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
      <img className="close-icon" alt="" src="/close@2x.png" />
      <div className="start-inner">
        <div className="frame-child2" />
      </div>
      <button className="start-child" onClick={onFrameButtonClick}>
        <div className="wrapper">
          <div className="div37">시작하기</div>
        </div>
      </button>
    </div>
  );
};

export default Start;
