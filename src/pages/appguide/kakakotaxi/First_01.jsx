import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./First_01.css";

const Frame = () => {
  const navigate = useNavigate();

  const onFirst01ContainerClick = useCallback(() => {
    navigate("/second-02");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/second-02");
  }, [navigate]);

  return (
    <div className="first-01" onClick={onFirst01ContainerClick}>
      <div className="frame">
        <div className="frame1">
          <div className="div">
            <p className="p">{`안녕하세요 `}</p>
            <p className="p">키키오 택시입니다</p>
          </div>
          <img
            className="fa6-solidt-icon"
            alt=""
            src="/appguide/kakaotaxi/fa6solidt.svg"
          />
        </div>
      </div>
      <button className="button">
        <div className="child" onClick={onRectangleClick} />
        <div className="div1">키키오계정으로 시작하기</div>
      </button>
    </div>
  );
};

export default Frame;
