import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CardComplete_07.css";

const Frame6 = () => {
  const navigate = useNavigate();

  const onGohomeClick = useCallback(() => {
    navigate("/maincontents/8");
  }, [navigate]);

  return (
    <div className="kikio-cardcomplete-07">
      <div className="kikio-cardcomplete-07-child" />
      <div className="kikio-completetext">
        <b className="kikio-b14">카드 등록이 완료되었습니다!</b>
      </div>
      <button className="kikio-gohome" onClick={onGohomeClick}>
        <div className="kikio-div26">
          <b className="kikio-b15">홈으로 가기</b>
        </div>
      </button>
    </div>
  );
};

export default Frame6;
