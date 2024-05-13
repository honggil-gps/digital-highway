import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = memo(() => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/addcontent");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/mypage1");
  }, [navigate]);

  return (
    <div className="vector-parent">
      <img
        className="frame-inner"
        alt=""
        src="/appguide/instagram/line-12.svg"
      />
      <div className="frame22">
        <div className="rectangle-parent">
          <div className="rectangle-div" onClick={onRectangleClick} />
          <div className="div31">수정하기</div>
        </div>
      </div>
      <div className="frame23">
        <div className="rectangle-parent">
          <div className="frame-child1" onClick={onRectangle2Click} />
          <div className="div32">삭제하기</div>
        </div>
      </div>
    </div>
  );
});

export default Frame;
