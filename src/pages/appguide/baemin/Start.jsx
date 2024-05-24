import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onButtonFrameClick = useCallback(() => {
    navigate("/maincontents/setaddress");
  }, [navigate]);

  return (
    <div className="baeman-start">
      <img className="baeman-close-icon" alt="" src="/appguide/baemin/close@2x.png" />
      <div className="baeman-start-inner">
        <div className="baeman-frame-child" />
      </div>
      <div className="baeman-button">
        <div className="baeman-buttonframe" onClick={onButtonFrameClick} />
        <div className="baeman-buttontext">시작하기</div>
      </div>
    </div>
  );
};

export default Start;
