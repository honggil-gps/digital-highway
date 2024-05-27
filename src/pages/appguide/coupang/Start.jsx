import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/beforelogin-2");
  }, [navigate]);

  return (
    <div className="coupong-start-1">
      <div className="coupong-cou-parent">
        <div className="coupong-cou">cou</div>
        <div className="coupong-p">p</div>
        <div className="coupong-o">o</div>
        <div className="coupong-n">n</div>
        <div className="coupong-g">g</div>
      </div>
      <div className="coupong-rectangle-parent" onClick={onGroupContainerClick}>
        <div className="coupong-group-child" />
        <div className="coupong-div">시작하기</div>
      </div>
    </div>
    
  );
};

export default Start;
