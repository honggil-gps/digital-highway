import { useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Component.css";

const Component = ({ prop, prop1, bTop, onRectangleLinkClick }) => {
  const div2Style = useMemo(() => {
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
    <div className="div57" style={div2Style}>
      <Link className="child11" to="/12" onClick={onRectangleLinkClick} />
      <div className="child12" />
      <div className="child13" />
      <b className="b20" onClick={onTextClick}>
        {prop}
      </b>
      <b className="b21">{prop1}</b>
      <img
        className="noto-v1taxi-icon1"
        alt=""
        src="/notov1taxi1@2x.png"
        onClick={onNotoV1taxiImageClick}
      />
    </div>
  );
};

export default Component;
