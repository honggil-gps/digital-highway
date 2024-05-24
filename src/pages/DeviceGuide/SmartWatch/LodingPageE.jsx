import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageE.css";

const LodingPageE = () => {
  const navigate = useNavigate();

  const onLodingPageE25ContainerClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/setupcomplete-26");
  }, [navigate]);

  return (
    <div className="lodingpagee-25" onClick={onLodingPageE25ContainerClick}>
      <button className="lodingpageebutton">
        <b className="b83">팁과 사용 설명서</b>
      </button>
      <b className="b84">
        <p className="p71">{`데이터를 전송하는 동안 워치에 어떤 기능이 있는지 `}</p>
        <p className="p72">알아보세요.</p>
      </b>
      <div className="lodingpageeprogressimage">
        <div className="lodingpageeprogressimage-child" />
        <div className="div14">
          <b>100</b>
          <span className="span13">%</span>
        </div>
      </div>
      <b className="b85">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
      <b className="b86">완료 중...</b>
      <div className="lodingpageelogo">
        <img
          className="lodingpageelogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default LodingPageE;
