import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame9.css";

const Frame91 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="startingset">
      <iframe className="startingset-child" />
      <div className="div25">지도</div>
      <div className="startingset-item" />
      <button className="button5" onClick={onButtonClick}>
        <div className="child4" />
        <div className="div26">출발지로 설정</div>
      </button>
      <img className="icon" alt="" src="/@2x.png" />
      <div className="parent4">
        <div className="div27">뚜레쥬르 부산동아대병원</div>
        <div className="div28">부산 서구 동대신동3가 36</div>
      </div>
    </div>
  );
};

export default Frame91;
