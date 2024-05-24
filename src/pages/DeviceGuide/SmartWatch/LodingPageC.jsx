import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageC.css";

const LodingPageC = () => {
  const navigate = useNavigate();

  const onLodingPageC17ContainerClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/googlelogin-18");
  }, [navigate]);

  return (
    <div className="lodingpagec-17" onClick={onLodingPageC17ContainerClick}>
      <div className="lodingpagecprogressimage">
        <div className="lodingpagecprogressimageellips" />
        <div className="div11">
          <b>100</b>
          <span className="span11">%</span>
        </div>
      </div>
      <b className="b62">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
      <b className="b63">워치를 준비하는 중....</b>
      <div className="lodingpageclogo">
        <img
          className="lodingpageclogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default LodingPageC;
