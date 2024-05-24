import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageA.css";

const LodingPageA = () => {
  const navigate = useNavigate();

  const onLodingPageA07ContainerClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/installationpermissiona-08");
  }, [navigate]);

  return (
    <div className="lodingpagea-07" onClick={onLodingPageA07ContainerClick}>
      <button className="lodingpageacanclebutton">
        <div className="div">취소</div>
      </button>
      <div className="lodingpagealine" />
      <div className="div1">설치중...</div>
      <b className="galaxy-wearable">
        <p className="galaxy">Galaxy</p>
        <p className="galaxy">Wearable</p>
      </b>
    </div>
  );
};

export default LodingPageA;
