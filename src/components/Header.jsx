import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = memo(() => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/profileimg");
  }, [navigate]);

  return (
    <div className="header1">
      <button
        className="openmojireturn"
        id="returnbtn"
        onClick={onOpenmojireturnClick}
      >
        <img
          className="vector-icon"
          alt=""
          src="/appguide/instagram/vector.svg"
        />
      </button>
      <div className="instagramer3">Instagramer</div>
    </div>
  );
});

export default Header;
