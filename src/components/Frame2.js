import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame2.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onText6Click = useCallback(() => {
    navigate("/sortlist");
  }, [navigate]);

  return (
    <div className="rectangle-root">
      <div className="frame-child1" />
      <div className="div28">정렬</div>
      <div className="div29">닫기</div>
      <div className="div30">배달 빠른 순</div>
      <div className="div31">배달팁 낮은 순</div>
      <div className="div32">기본 순</div>
      <div className="div33">주문 많은 순</div>
      <div className="div34" onClick={onText6Click}>
        별점 높은 순
      </div>
      <div className="div35">가까운 순</div>
      <div className="div36">찜 많은 순</div>
      <img className="done-icon" alt="" src="/done@2x.png" />
    </div>
  );
};

export default Frame2;
