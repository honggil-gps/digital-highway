import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent11.css";

const GroupComponent5 = memo(() => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/usecoupon");
  }, [navigate]);

  return (
    <div className="rectangle-parent52">
      <div className="group-child42" />
      <div className="div215">할인쿠폰</div>
      <div className="div216">1장보유</div>
      <div className="rectangle-parent53" onClick={onGroupContainerClick}>
        <div className="group-child43" />
        <div className="div217">사용 가능한 쿠폰이 1장 있어요!</div>
        <img
          className="more-than-icon1"
          alt=""
          src="/appguide/baemin/more-than@2x.png"
        />
      </div>
    </div>
  );
});

export default GroupComponent5;
