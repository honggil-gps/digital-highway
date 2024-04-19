import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AfterLike.css";

const AfterLike = () => {
  const navigate = useNavigate();

  const onAfterLikeContainerClick = useCallback(() => {
    navigate("/menulist");
  }, [navigate]);

  return (
    <div className="afterlike" onClick={onAfterLikeContainerClick}>
      <div className="afterlike-child" />
      <div className="div22">찜하기</div>
      <img className="vector-icon" alt="" src="/vector.svg" />
    </div>
  );
};

export default AfterLike;
