import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import TypeTextStateActive from "../../../components/appguide/instagram/TypeTextStateActive";
import "./Sertify.css";

const Sertify = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/joininstagram01");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/insert-pw");
  }, [navigate]);

  return (
    <div className="insta-sertify">
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
      <div className="insta-frame-group">
        <div className="insta-parent">
          <div className="insta-div3">계정 확인을 위해</div>
          <div className="insta-textbox">
            <div className="insta-text">{` `}</div>
          </div>
          <div className="insta-div3">
            <span>{`로 전송된 `}</span>
            <span className="insta-span">6자리 코드를 입력</span>
            <span>하세요.</span>
          </div>
        </div>
        <div className="insta-input-parent">
          <TypeTextStateActive
            label="인증번호 입력"
            typeTextStateActiveHeight="6.25rem"
            labelFontSize="1.5rem"
            labelLetterSpacing="unset"
            textboxBackgroundColor="#f7f6f9"
            textboxBorder="none"
            textboxFlex="1"
          />
          <div className="insta-frame5">
            <div className="insta-input-box-wrapper" onClick={onFrameContainerClick}>
              <button className="insta-input-box">
                <div className="insta-div5">다음</div>
              </button>
            </div>
            <div className="insta-input-box-container">
              <div className="insta-input-box1">
                <div className="insta-div6">코드 다시 전송</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertify;
