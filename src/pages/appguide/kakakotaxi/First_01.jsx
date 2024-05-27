import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./First_01.css";

const Frame = () => {
  const navigate = useNavigate();

  const onFirst01ContainerClick = useCallback(() => {
    navigate("/maincontents/second-02");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/second-02");
  }, [navigate]);

  return (
    <div className="kikio-first-01" onClick={onFirst01ContainerClick}>
      <div className="kikio-frame">
        <div className="kikio-frame1">
          <div className="kikio-div">
            <p className="kikio-p">{`안녕하세요 `}</p>
            <p className="kikio-p">키키오 택시입니다</p>
          </div>
          <img
            className="kikio-fa6-solidt-icon"
            alt=""
            src="/appguide/kakaotaxi/kikio.png"
          />
        </div>
      </div>
      <button className="kikio-button">
        <div className="kikio-child" onClick={onRectangleClick} />
        <div className="kikio-div1">키키오계정으로 시작하기</div>
      </button>
    </div>
  );
};

export default Frame;
