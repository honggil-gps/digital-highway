import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaxiModelComponent from "../../../components/appguide/kakaotaxi/TaxiModelComponent";
import "./TaxiPick_11.css";

const Frame10 = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  const onFluentMdl2backIconClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onRectangleLink2Click = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  const onRectangleLink1Click = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  return (
    <div className="taxipick-11">
      <div className="taxipickheader">
        <div className="taxipickheader-child" />
        <img
          className="fluent-mdl2back-icon"
          alt=""
          src="/appguide/kakaotaxi/fluentmdl2back.svg"
          onClick={onFluentMdl2backIconClick}
        />
        <div className="taxipickheader-item" />
        <div className="taxipicktop">
          <div className="div38">뚜레쥬르 부산동아..</div>
          <img
            className="chevron-right-icon"
            alt=""
            src="/appguide/kakaotaxi/chevronright.svg"
          />
          <div className="div38">국립부경대학 대..</div>
        </div>
      </div>
      <TaxiModelComponent
        prop="일반 택시"
        prop1="예상 14,200원"
        onRectangleLinkClick={onRectangleLinkClick}
      />
      <div className="bluetaxi">
        <Link
          className="bluetaxi-child"
          to="/12"
          onClick={onRectangleLink2Click}
        />
        <div className="bluetaxi-item" />
        <div className="bluetaxi-inner" />
        <b className="b19">블루 택시</b>
        <b className="b20">예상 15,200원</b>
        <img
          className="noto-v1taxi-icon1"
          alt=""
          src="/appguide/kakaotaxi/notov1taxi1@2x.png"
        />
      </div>
      <div className="busmodel">
        <Link
          className="bluetaxi-child"
          to="/12"
          onClick={onRectangleLink1Click}
        />
        <div className="bluetaxi-item" />
        <div className="bluetaxi-inner" />
        <b className="b21">버스</b>
        <b className="b22">카드 2,100원</b>
        <img
          className="notobus-icon"
          alt=""
          src="/appguide/kakaotaxi/notobus.svg"
        />
      </div>
    </div>
  );
};

export default Frame10;
