import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame3.css";

const Frame3 = memo(() => {
  const navigate = useNavigate();

  const onText6Click = useCallback(() => {
    navigate("/maincontents/sortlist");
  }, [navigate]);

  return (
    <div className="baeman-rectangle-wrapper">
      <div className="baeman-frame-child9" />
      <div className="baeman-div189">정렬</div>
      <div className="baeman-div190">닫기</div>
      <div className="baeman-div191">배달 빠른 순</div>
      <div className="baeman-div192">배달팁 낮은 순</div>
      <div className="baeman-div193">기본 순</div>
      <div className="baeman-div194">주문 많은 순</div>
      <div className="baeman-div195" onClick={onText6Click}>
        별점 높은 순
      </div>
      <div className="baeman-div196">가까운 순</div>
      <div className="baeman-div197">찜 많은 순</div>
      <img className="baeman-done-icon" alt="" src="/appguide/baemin/done@2x.png" />
    </div>
  );
});

export default Frame3;
