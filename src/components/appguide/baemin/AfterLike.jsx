import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AfterLike.css";

const AfterLike = memo(() => {
  const navigate = useNavigate();

  const onAfterLikeContainerClick = useCallback(() => {
    navigate("/menulist");
  }, [navigate]);

  return (
    <div className="afterlike" onClick={onAfterLikeContainerClick}>
      <div className="afterlike-child" />
      <div className="div203">찜하기</div>
      <img className="vector-icon" alt="" src="/appguide/baemin/vector.svg" />
    </div>
  );
});

export default AfterLike;
