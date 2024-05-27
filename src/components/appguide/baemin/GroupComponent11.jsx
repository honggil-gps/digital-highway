import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent11.css";

const GroupComponent5 = memo(() => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/usecoupon");
  }, [navigate]);

  return (
    <div className="baeman-rectangle-parent52">
      <div className="baeman-group-child42" />
      <div className="baeman-div215">할인쿠폰</div>
      <div className="baeman-div216">1장보유</div>
      <div className="baeman-rectangle-parent53" onClick={onGroupContainerClick}>
        <div className="baeman-group-child43" />
        <div className="baeman-div217" onClick={onGroupContainerClick}>사용 가능한 쿠폰이 1장 있어요!</div>
        <img
          className="baeman-more-than-icon1"
          alt=""
          src="/appguide/baemin/more-than@2x.png"
        />
      </div>
    </div>
  );
});

export default GroupComponent5;
