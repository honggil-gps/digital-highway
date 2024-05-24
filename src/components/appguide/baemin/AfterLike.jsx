import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AfterLike.css";

const AfterLike = memo(() => {
  const navigate = useNavigate();

  const onAfterLikeContainerClick = useCallback(() => {
    navigate("/maincontents/menulist");
  }, [navigate]);

  return (
    <div className="baeman-afterlike" onClick={onAfterLikeContainerClick}>
      <div className="baeman-afterlike-child" />
      <div className="baeman-div203">찜하기</div>
      <img className="baeman-vector-icon" alt="" src="/appguide/baemin/vector.svg" />
    </div>
  );
});

export default AfterLike;
