import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import "./Frame12.css";

const Frame12 = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="requsting">
      <iframe className="requsting-child" />
      <div className="requsting-item" />
      <img className="icon1" alt="" src="/1@2x.png" onClick={onIconClick} />
      <button className="button7" onClick={onButtonClick}>
        <div className="child8" />
        <div className="div41">호출취소</div>
      </button>
      <img className="requsting-inner" alt="" src="/rectangle-33@2x.png" />
      <div className="div42">지도</div>
      <FrameComponent />
      <div className="frame9" />
      <div className="frame10" />
      <div className="frame11" />
    </div>
  );
};

export default Frame12;
