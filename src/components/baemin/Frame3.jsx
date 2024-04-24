import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame3.css";

const Frame3 = ({ onClose }) => {
  const navigate = useNavigate();

  const onText6Click = useCallback(() => {
    navigate("/sortlist");
  }, [navigate]);

  const handleExitClick = useCallback(() => {
    onClose(); // 부모 컴포넌트로부터 전달받은 onClose 함수 호출
  }, [onClose]);

  return (
    <div className="rectangle-root">
      <div className="frame-child8" />
      <div className="div207">정렬</div>
      <div className="div208" onClick={handleExitClick}>
        닫기
      </div>
      <div className="div209">배달 빠른 순</div>
      <div className="div210">배달팁 낮은 순</div>
      <div className="div211">기본 순</div>
      <div className="div212">주문 많은 순</div>
      <div className="div213" onClick={onText6Click}>
        별점 높은 순
      </div>
      <div className="div214">가까운 순</div>
      <div className="div215">찜 많은 순</div>
      <img className="done-icon" alt="" src="baemin/done@2x.png" />
    </div>
  );
};

export default Frame3;