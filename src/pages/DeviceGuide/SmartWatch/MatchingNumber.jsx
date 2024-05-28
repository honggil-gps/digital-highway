import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MatchingNumber.css";

const MatchingNumber = () => {
  const navigate = useNavigate();

  const onMatchingNumberButtonBClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/watchaccessgranted-12");
  }, [navigate]);

  return (
    <div className="WMN-matchingnumber-11">
      <div className="WMN-matchingnumberbuttonset">
        <div
          className="WMN-matchingnumberbuttonb"
          onClick={onMatchingNumberButtonBClick}
        >
          <b className="WMN-b8">확인</b>
        </div>
        <div className="WMN-matchingnumberbuttona">
          <b className="WMN-b8">취소</b>
        </div>
      </div>
      <div className="WMN-galaxy-wearable-container6">
        <span className="WMN-txt">
          <p className="WMN-galaxy-wearable9">
            <span className="WMN-galaxy-wearable10">
              <b className="WMN-galaxy-wearable11">Galaxy Wearable의 권한</b>
            </span>
            <span>
              <span className="WMN-galaxy-wearable10">{` `}</span>
              <span>{`및 해당 권한이 어떻게 `}</span>
            </span>
          </p>
          <p className="WMN-galaxy-wearable9">
            <span>
              <span>사용되는지 확인하세요</span>
            </span>
          </p>
        </span>
      </div>
      <img
        className="WMN-matchingnumberwatchimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/matchingnumberwatchimage@2x.png"
      />
      <b className="WMN-b10">
        <span className="WMN-txt">
          <p className="WMN-galaxy-wearable9">워치에 표시된 숫자가</p>
          <p className="WMN-galaxy-wearable9">일치하는지 확인하세요</p>
        </span>
      </b>
      <div className="WMN-matchingnumberwatchlogo">
        <img
          className="WMN-matchingnumberwatchlogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default MatchingNumber;
