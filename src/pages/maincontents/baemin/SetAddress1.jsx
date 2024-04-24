import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SetAddress1.css";

const SetAddress1 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <div className="setaddress2">
      <div className="setaddress2-child" onClick={onRectangleClick} />
      <div className="div16">완료</div>
      <div className="div17">부산 남구 용소로 45(대연동)</div>
      <input
        className="setaddress2-item"
        placeholder="상세주소를 입력해주세요"
        type="text"
      />
    </div>
  );
};

export default SetAddress1;
