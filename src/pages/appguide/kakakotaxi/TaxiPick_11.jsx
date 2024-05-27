import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaxiModelComponent from "../../../components/appguide/kakaotaxi/TaxiModelComponent";
import "./TaxiPick_11.css";

const Frame10 = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/maincontents/12");
  }, [navigate]);

  const onFluentMdl2backIconClick = useCallback(() => {
    navigate("/maincontents/10");
  }, [navigate]);

  const onRectangleLink2Click = useCallback(() => {
    navigate("/maincontents/12");
  }, [navigate]);

  const onRectangleLink1Click = useCallback(() => {
    navigate("/maincontents/12");
  }, [navigate]);

  return (
    <div className="kikio-taxipick-11">
      <div className="kikio-taxipickheader">
        <div className="kikio-taxipickheader-child" />
        <img
          className="kikio-fluent-mdl2back-icon"
          alt=""
          src="/appguide/kakaotaxi/fluentmdl2back.svg"
          onClick={onFluentMdl2backIconClick}
        />
        <div className="kikio-taxipickheader-item" />
        <div className="kikio-taxipicktop">
          <div className="kikio-div38">뚜레쥬르 부산동아..</div>
          <img
            className="kikio-chevron-right-icon"
            alt=""
            src="/appguide/kakaotaxi/chevronright.svg"
          />
          <div className="kikio-div38">국립부경대학 대..</div>
        </div>
      </div>
      <TaxiModelComponent
        prop="일반 택시"
        prop1="예상 14,200원"
        onRectangleLinkClick={onRectangleLinkClick}
      />
      <div className="kikio-bluetaxi">
        <Link
          className="kikio-bluetaxi-child"
          to="/12"
          onClick={onRectangleLink2Click}
        />
        <div className="kikio-bluetaxi-item" />
        <div className="kikio-bluetaxi-inner" />
        <b className="kikio-b19">블루 택시</b>
        <b className="kikio-b20">예상 15,200원</b>
        <img
          className="kikio-noto-v1taxi-icon1"
          alt=""
          src="/appguide/kakaotaxi/notov1taxi1@2x.png"
        />
      </div>
      <div className="kikio-busmodel">
        <Link
          className="kikio-bluetaxi-child"
          to="/12"
          onClick={onRectangleLink1Click}
        />
        <div className="kikio-bluetaxi-item" />
        <div className="kikio-bluetaxi-inner" />
        <b className="kikio-b21">버스</b>
        <b className="kikio-b22">카드 2,100원</b>
        <img
          className="kikio-notobus-icon"
          alt=""
          src="/appguide/kakaotaxi/notobus.svg"
        />
      </div>
    </div>
  );
};

export default Frame10;
