import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = memo(() => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/addcontent");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/maincontents/mypage1");
  }, [navigate]);

  return (
    <div className="insta-vector-parent">
      <img
        className="insta-frame-inner"
        alt=""
        src="/appguide/instagram/line-12.svg"
      />
      <div className="insta-frame22">
        <div className="insta-rectangle-parent">
          <div className="insta-rectangle-div" onClick={onRectangleClick} />
          <div className="insta-div31">수정하기</div>
        </div>
      </div>
      <div className="insta-frame23">
        <div className="insta-rectangle-parent">
          <div className="insta-frame-child1" onClick={onRectangle2Click} />
          <div className="insta-div32">삭제하기</div>
        </div>
      </div>
    </div>
  );
});

export default Frame;
