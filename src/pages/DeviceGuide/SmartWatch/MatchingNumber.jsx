import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MatchingNumber.css";

const MatchingNumber = () => {
  const navigate = useNavigate();

  const onMatchingNumberButtonBClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/watchaccessgranted-12");
  }, [navigate]);

  return (
    <div className="matchingnumber-11">
      <div className="matchingnumberbuttonset">
        <div
          className="matchingnumberbuttonb"
          onClick={onMatchingNumberButtonBClick}
        >
          <b className="b8">확인</b>
        </div>
        <div className="matchingnumberbuttona">
          <b className="b8">취소</b>
        </div>
      </div>
      <div className="galaxy-wearable-container6">
        <span className="txt">
          <p className="galaxy-wearable9">
            <span className="galaxy-wearable10">
              <b className="galaxy-wearable11">Galaxy Wearable의 권한</b>
            </span>
            <span>
              <span className="galaxy-wearable10">{` `}</span>
              <span>{`및 해당 권한이 어떻게 `}</span>
            </span>
          </p>
          <p className="galaxy-wearable9">
            <span>
              <span>사용되는지 확인하세요</span>
            </span>
          </p>
        </span>
      </div>
      <img
        className="matchingnumberwatchimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/matchingnumberwatchimage@2x.png"
      />
      <b className="b10">
        <span className="txt">
          <p className="galaxy-wearable9">워치에 표시된 숫자가</p>
          <p className="galaxy-wearable9">일치하는지 확인하세요</p>
        </span>
      </b>
      <div className="matchingnumberwatchlogo">
        <img
          className="matchingnumberwatchlogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default MatchingNumber;
