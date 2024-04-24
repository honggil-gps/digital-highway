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
        <div className="wrapper5"> <p>시작하기</p>
        </div>
      </button>
    </div>
  );
};

export default Start;
