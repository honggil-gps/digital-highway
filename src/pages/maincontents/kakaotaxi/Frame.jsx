import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onFirstContainerClick = useCallback(() => {
    navigate("/second");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/second");
  }, [navigate]);

  return (
    <div className="first" onClick={onFirstContainerClick}>
      <button className="button">
        <div className="child" onClick={onRectangleClick} />
        <div className="div">키키오계정으로 시작하기</div>
      </button>
      <div className="frame">
        <div className="frame1">
          <div className="div1">
            <p className="p">{`안녕하세요 `}</p>
            <p className="p">키키오 택시입니다</p>
          </div>
          <img className="fa6-solidt-icon" alt="" src="/fa6solidt.svg" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
