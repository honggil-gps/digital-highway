import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StartingPointSet_10.css";

const Frame91 = () => {
  const navigate = useNavigate();

  const onStartingSetButtonClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="startingpointset-10">
      <iframe className="mapbox" />
      <img
        className="backbutton-icon"
        alt=""
        src="/appguide/kakaotaxi/backbutton@2x.png"
      />
      <div className="startingsetbottom">
        <div className="startingsetbottom-child" />
        <button
          className="startingsetbutton"
          onClick={onStartingSetButtonClick}
        >
          <div className="startingsetbutton-child" />
          <div className="div35">출발지로 설정</div>
        </button>
        <div className="frame-div">
          <div className="div36">뚜레쥬르 부산동아대병원</div>
          <div className="div37">부산 서구 동대신동3가 36</div>
        </div>
      </div>
    </div>
  );
};

export default Frame91;
