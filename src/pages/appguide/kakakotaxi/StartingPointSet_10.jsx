import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StartingPointSet_10.css";

const Frame91 = () => {
  const navigate = useNavigate();

  const onStartingSetButtonClick = useCallback(() => {
    navigate("/maincontents/11");
  }, [navigate]);

  return (
    <div className="kikio-startingpointset-10">
      <iframe className="kikio-mapbox" />
      <img
        className="kikio-backbutton-icon"
        alt=""
        src="/appguide/kakaotaxi/backbutton@2x.png"
      />
      <div className="kikio-startingsetbottom">
        <div className="kikio-startingsetbottom-child" />
        <button
          className="kikio-startingsetbutton"
          onClick={onStartingSetButtonClick}
        >
          <div className="kikio-startingsetbutton-child" />
          <div className="kikio-div35">출발지로 설정</div>
        </button>
        <div className="kikio-frame-div">
          <div className="kikio-div36">뚜레쥬르 부산동아대병원</div>
          <div className="kikio-div37">부산 서구 동대신동3가 36</div>
        </div>
      </div>
    </div>
  );
};

export default Frame91;
