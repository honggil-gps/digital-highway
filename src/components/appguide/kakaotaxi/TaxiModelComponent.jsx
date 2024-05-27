import { memo, useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TaxiModelComponent.css";

const TaxiModelComponent = memo(
  ({ prop, prop1, bTop, onRectangleLinkClick }) => {
    const taxiModelStyle = useMemo(() => {
      return {
        top: bTop,
      };
    }, [bTop]);

    const navigate = useNavigate();

    const onTextClick = useCallback(() => {
      navigate("/maincontents/12");
    }, [navigate]);

    const onNotoV1taxiImageClick = useCallback(() => {
      navigate("/maincontents/12");
    }, [navigate]);

    return (
      <div className="kikio-taximodel" style={taxiModelStyle}>
        <Link
          className="kikio-taximodel-child"
          to="/12"
          onClick={onRectangleLinkClick}
        />
        <div className="kikio-taximodel-item" />
        <div className="kikio-taximodel-inner" />
        <b className="kikio-b23" onClick={onTextClick}>
          {prop}
        </b>
        <b className="kikio-b24">{prop1}</b>
        <img
          className="kikio-noto-v1taxi-icon2"
          alt=""
          src="/appguide/kakaotaxi/notov1taxi1@2x.png"
          onClick={onNotoV1taxiImageClick}
        />
      </div>
    );
  }
);

export default TaxiModelComponent;
