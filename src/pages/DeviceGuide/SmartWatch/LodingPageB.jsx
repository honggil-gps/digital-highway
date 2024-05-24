import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageB.css";

const LodingPageB = () => {
  const navigate = useNavigate();

  const onLodingPageB13ContainerClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/softwareagreea-14");
  }, [navigate]);

  return (
    <div className="lodingpageb-13" onClick={onLodingPageB13ContainerClick}>
      <b className="galaxy-watch5-manager-container">
        <p className="galaxy-watch5-manager">Galaxy Watch5 Manager</p>
        <p className="galaxy-watch5-manager">177MB</p>
      </b>
      <div className="lodingpagebprogressimage">
        <div className="lodingpagebprogressimageellips" />
        <div className="div9">
          <b>100</b>
          <span className="span3">%</span>
        </div>
      </div>
      <b className="b18">
        <p className="p15">워치 연결 시 휴대전화에서 이 소프트웨어를</p>
        <p className="galaxy-watch5-manager">사용합니다.</p>
      </b>
      <b className="b19">소프트웨어 다운로드 중....</b>
      <div className="lodingpageblogo">
        <img
          className="lodingpageblogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default LodingPageB;
