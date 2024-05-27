import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SecondPage_02.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/paymentmethod-03");
  }, [navigate]);

  return (
    <div className="kikio-second-02">
      <div className="kikio-wrapper">
        <div className="kikio-div2">
          <p className="kikio-p2">카드 정보를</p>
          <p className="kikio-p2">지금 바로 입력해보세요!</p>
        </div>
      </div>
      <div className="kikio-container">
        <div className="kikio-div2">키키오 택시를 더 편리하게 이용할 수 있습니다</div>
      </div>
      <div className="kikio-secondpagebottom">
        <button className="kikio-button1">
          <b className="kikio-b">나중에 하기</b>
        </button>
        <div className="kikio-infoinputbutton">
          <div className="kikio-infoinputbutton-child" onClick={onRectangleClick} />
          <b className="kikio-b1">추가 정보 입력</b>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
