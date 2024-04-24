import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame6.css";

const Frame6 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  return (
    <div className="cardcomplete">
      <div className="cardcomplete-child" />
      <button className="button4" onClick={onButtonClick}>
        <div className="div22">
          <b className="b13">홈으로 가기</b>
        </div>
      </button>
      <div className="frame-div">
        <b className="b14">카드 등록이 완료되었습니다!</b>
      </div>
    </div>
  );
};

export default Frame6;
