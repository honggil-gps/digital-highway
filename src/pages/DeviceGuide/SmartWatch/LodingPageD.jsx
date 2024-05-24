import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageD.css";

const LodingPageD = () => {
  const navigate = useNavigate();

  const onLodingPageD23ContainerClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/preinstallapppermission-24");
  }, [navigate]);

  return (
    <div className="lodingpaged-23" onClick={onLodingPageD23ContainerClick}>
      <div className="lodingpagedprogressiamge">
        <div className="lodingpagedprogressiamgeellips" />
        <div className="div13">
          <b>100</b>
          <span className="span12">%</span>
        </div>
      </div>
      <b className="b77">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
      <b className="b78">
        <p className="p67">워치를 앱 정보를</p>
        <p className="p67">가져오는 중....</p>
      </b>
      <div className="lodingpagedlogo">
        <div className="lodingpagedlogoellipse4" />
        <div className="lodingpagedlogoellipse3" />
        <div className="lodingpagedlogoellipse2" />
        <div className="lodingpagedlogoellipse1" />
      </div>
    </div>
  );
};

export default LodingPageD;
