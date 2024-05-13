import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BtnWithWord.css";

const BtnWithWord = memo(() => {
  const navigate = useNavigate();

  const onBtnWithWordClick = useCallback(() => {
    navigate("/feed");
  }, [navigate]);

  return (
    <button className="btnwithword" onClick={onBtnWithWordClick}>
      <div className="div34">팔로우</div>
    </button>
  );
});

export default BtnWithWord;
