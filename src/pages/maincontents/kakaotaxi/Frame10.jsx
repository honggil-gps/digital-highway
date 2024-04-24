import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Component from "../components/Component";
import "./Frame10.css";

const Frame10 = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  const onRectangleLink2Click = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  const onFluentMdl2backIconClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onRectangleLink3Click = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  return (
    <div className="taxipick">
      <div className="taxipick-child" />
      <img
        className="fluent-mdl2back-icon"
        alt=""
        src="/fluentmdl2back.svg"
        onClick={onFluentMdl2backIconClick}
      />
      <div className="taxipick-item" />
      <Component
        prop="일반 택시"
        prop1="예상 14,200원"
        onRectangleLinkClick={onRectangleLinkClick}
      />
      <Component
        prop="블루 택시"
        prop1="예상 15,200원"
        bTop="18.5rem"
        onRectangleLinkClick={onRectangleLink2Click}
      />
      <div className="parent5">
        <div className="div29">뚜레쥬르 부산동아..</div>
        <img className="chevron-right-icon" alt="" src="/chevronright.svg" />
        <div className="div29">국립부경대학 대..</div>
      </div>
      <div className="div31">
        <Link
          className="rectangle-a"
          to="/12"
          onClick={onRectangleLink3Click}
        />
        <div className="child5" />
        <div className="child6" />
        <b className="b18">버스</b>
        <b className="b19">카드 2,100원</b>
        <img className="notobus-icon" alt="" src="/notobus.svg" />
      </div>
    </div>
  );
};

export default Frame10;
