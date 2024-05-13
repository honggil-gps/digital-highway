import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypeTextStateActive from "../../../components/appguide/instagram/TypeTextStateActive";
import Header1 from "../../../components/appguide/instagram/Header";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNextButtonClick = useCallback(() => {
    navigate("/whenfollowzero");
  }, [navigate]);

  return (
    <div className="login">
      <button
        className="nextbutton"
        // disabled={ㅜㅐㅜ}
        onClick={onNextButtonClick}
      >
        <div className="div25">다음</div>
      </button>
      <div className="input-group">
        <TypeTextStateActive
          label="아이디 입력"
          typeTextStateActiveHeight="6.25rem"
          labelFontSize="1.5rem"
          labelLetterSpacing="unset"
          textboxBackgroundColor="#f7f6f9"
          textboxBorder="none"
          textboxFlex="1"
        />
        <TypeTextStateActive
          label="비밀번호 입력"
          typeTextStateActiveHeight="6.25rem"
          labelFontSize="1.5rem"
          labelLetterSpacing="unset"
          textboxBackgroundColor="#f7f6f9"
          textboxBorder="none"
          textboxFlex="1"
        />
      </div>
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="absolute"
        headerTop="-0.062rem"
        headerLeft="-0.062rem"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
    </div>
  );
};

export default Login;
