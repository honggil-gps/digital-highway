import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame9.css";

const Frame9 = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  return (
    <div className="frame14">
      <div className="frame15">
        <div className="frame-child11" />
        <div className="frame-child12" />
        <div className="frame-child13" />
        <div className="frame-child14" />
        <div className="frame-child15" />
        <div className="frame-child16" />
        <div className="div54">부경대학교</div>
        <div className="div55" onClick={onText1Click}>
          부경대학교 대연캠퍼스
        </div>
        <div className="div56">부경대학교 용당캠퍼스</div>
      </div>
    </div>
  );
};

export default Frame9;
