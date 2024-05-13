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
      navigate("/12");
    }, [navigate]);

    const onNotoV1taxiImageClick = useCallback(() => {
      navigate("/12");
    }, [navigate]);

    return (
      <div className="taximodel" style={taxiModelStyle}>
        <Link
          className="taximodel-child"
          to="/12"
          onClick={onRectangleLinkClick}
        />
        <div className="taximodel-item" />
        <div className="taximodel-inner" />
        <b className="b23" onClick={onTextClick}>
          {prop}
        </b>
        <b className="b24">{prop1}</b>
        <img
          className="noto-v1taxi-icon2"
          alt=""
          src="/appguide/kakaotaxi/notov1taxi1@2x.png"
          onClick={onNotoV1taxiImageClick}
        />
      </div>
    );
  }
);

export default TaxiModelComponent;
