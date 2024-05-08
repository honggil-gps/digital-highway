import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import "./Agreement.css";

const Agreement = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/insert-id");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/profileimg");
  }, [navigate]);

  return (
    <div className="agreement">
      <button className="frame-button" onClick={onFrameButtonClick}>
        <button className="input-box6">
          <div className="div12">다음</div>
        </button>
      </button>
      <div className="frame8">
        <div className="frame9">
          <div className="input-box7">
            <div className="div13">위치 기반 기능</div>
          </div>
          <div className="frame-div">
            <div className="input-box7">
              <div className="div13">이용 약관</div>
            </div>
          </div>
          <div className="frame-div">
            <div className="input-box7">
              <div className="div13">개인정보 처리방침</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame10">
        <div className="div16">
          계정을 만들려면 모든 약관에 동의해야 합니다.
        </div>
      </div>
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="absolute"
        headerTop="0rem"
        headerLeft="-0.125rem"
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

export default Agreement;
