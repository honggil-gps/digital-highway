import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = memo(() => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/profileimg");
  }, [navigate]);

  return (
    <div className="insta-header1">
      <button
        className="insta-openmojireturn"
        id="returnbtn"
        onClick={onOpenmojireturnClick}
      >
        <img
          className="insta-vector-icon"
          alt=""
          src="/appguide/instagram/vector.svg"
        />
      </button>
      <div className="insta-instagramer3">Instagramer</div>
    </div>
  );
});

export default Header;
