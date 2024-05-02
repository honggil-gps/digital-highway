import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame3.css";

const Frame3 = memo(() => {
  const navigate = useNavigate();

  const onText6Click = useCallback(() => {
    navigate("/sortlist");
  }, [navigate]);

  return (
    <div className="rectangle-wrapper">
      <div className="frame-child9" />
      <div className="div189">정렬</div>
      <div className="div190">닫기</div>
      <div className="div191">배달 빠른 순</div>
      <div className="div192">배달팁 낮은 순</div>
      <div className="div193">기본 순</div>
      <div className="div194">주문 많은 순</div>
      <div className="div195" onClick={onText6Click}>
        별점 높은 순
      </div>
      <div className="div196">가까운 순</div>
      <div className="div197">찜 많은 순</div>
      <img className="done-icon" alt="" src="/appguide/baemin/done@2x.png" />
    </div>
  );
});

export default Frame3;
