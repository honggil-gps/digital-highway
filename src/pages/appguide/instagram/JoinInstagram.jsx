import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import TypeTextStateActive from "../../../components/appguide/instagram/TypeTextStateActive";
import "./JoinInstagram.css";

const JoinInstagram = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInputBoxClick = useCallback(() => {
    navigate("/sertify");
  }, [navigate]);

  return (
    <div className="joininstagram01">
      <div className="frame11">
        <Header1
          headerWidth="26.875rem"
          headerHeight="7.313rem"
          headerPosition="relative"
          headerTop="unset"
          headerLeft="unset"
          openmojireturnIconTop="1.375rem"
          openmojireturnIconLeft="1.313rem"
          openmojireturnIconWidth="4.5rem"
          openmojireturnIconHeight="4.5rem"
          instagramerTop="1.875rem"
          instagramerLeft="6.375rem"
          onOpenmojireturnClick={onOpenmojireturnClick}
        />
        <img
          className="frame-child"
          alt=""
          src="/appguide/instagram/line-1.svg"
        />
      </div>
      <div className="frame12">
        <TypeTextStateActive
          label="전화번호 입력"
          typeTextStateActiveHeight="6.25rem"
          labelFontSize="1.5rem"
          labelLetterSpacing="unset"
          textboxBackgroundColor="#f7f6f9"
          textboxBorder="none"
          textboxFlex="1"
        />
        <button
          className="input-box10"
          // disabled={true}
          onClick={onInputBoxClick}
        >
          <div className="div17">다음</div>
        </button>
      </div>
    </div>
  );
};

export default JoinInstagram;
