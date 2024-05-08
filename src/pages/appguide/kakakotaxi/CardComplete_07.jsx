import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CardComplete_07.css";

const Frame6 = () => {
  const navigate = useNavigate();

  const onGohomeClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  return (
    <div className="cardcomplete-07">
      <div className="cardcomplete-07-child" />
      <div className="completetext">
        <b className="b14">카드 등록이 완료되었습니다!</b>
      </div>
      <button className="gohome" onClick={onGohomeClick}>
        <div className="div26">
          <b className="b15">홈으로 가기</b>
        </div>
      </button>
    </div>
  );
};

export default Frame6;
