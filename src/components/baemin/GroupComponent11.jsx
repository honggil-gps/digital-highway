import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GroupComponent11.css";

const GroupComponent1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/usecoupon");
  }, [navigate]);

  return (
    <div className="rectangle-parent35">
      <div className="group-child37" />
      <div className="div237">할인쿠폰</div>
      <div className="div238">1장보유</div>
      <div className="rectangle-parent36" onClick={onGroupContainerClick}>
        <div className="group-child38" />
        <div className="div239">사용 가능한 쿠폰이 1장 있어요!</div>
        <img className="more-than-icon1" alt="" src="/more-than@2x.png" />
      </div>
    </div>
  );
};

export default GroupComponent1;
