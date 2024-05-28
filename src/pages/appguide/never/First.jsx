import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./First.css";

const First = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  return (
    <div className="never-first-01">
      <div className="never-naverlogo">
        <img
          className="never-naver-logosvg-icon"
          alt=""
          src="/appguide/never/naver-logosvg.svg"
        />
      </div>
      <div className="never-startbutton">
        <button className="never-rectangle-parent">
          <div className="never-group-child" onClick={onRectangleClick} />
          <div className="never-div">시작하기</div>
        </button>
      </div>
    </div>
  );
};

export default First;
