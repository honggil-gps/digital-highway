import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onButtonFrameClick = useCallback(() => {
    navigate("/setaddress");
  }, [navigate]);

  return (
    <div className="start">
      <img className="close-icon" alt="" src="/appguide/baemin/close@2x.png" />
      <div className="start-inner">
        <div className="frame-child" />
      </div>
      <div className="button">
        <div className="buttonframe" onClick={onButtonFrameClick} />
        <div className="buttontext">시작하기</div>
      </div>
    </div>
  );
};

export default Start;
