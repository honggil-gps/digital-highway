import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import TypeTextStateActive from "../../../components/appguide/instagram/TypeTextStateActive";
import "./Sertify.css";

const Sertify = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/joininstagram01");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/insert-pw");
  }, [navigate]);

  return (
    <div className="sertify">
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
      <div className="frame-group">
        <div className="parent">
          <div className="div3">계정 확인을 위해</div>
          <div className="textbox">
            <div className="text">{` `}</div>
          </div>
          <div className="div3">
            <span>{`로 전송된 `}</span>
            <span className="span">6자리 코드를 입력</span>
            <span>하세요.</span>
          </div>
        </div>
        <div className="input-parent">
          <TypeTextStateActive
            label="인증번호 입력"
            typeTextStateActiveHeight="6.25rem"
            labelFontSize="1.5rem"
            labelLetterSpacing="unset"
            textboxBackgroundColor="#f7f6f9"
            textboxBorder="none"
            textboxFlex="1"
          />
          <div className="frame5">
            <div className="input-box-wrapper" onClick={onFrameContainerClick}>
              <button className="input-box">
                <div className="div5">다음</div>
              </button>
            </div>
            <div className="input-box-container">
              <div className="input-box1">
                <div className="div6">코드 다시 전송</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertify;
