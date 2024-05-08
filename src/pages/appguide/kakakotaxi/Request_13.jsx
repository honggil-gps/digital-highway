import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Request_13.css";

const Frame12 = () => {
  const navigate = useNavigate();

  const onHomeButtonIconClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onCallCancelButtonClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="request-13">
      <iframe className="mapbox2" />
      <img
        className="homebutton-icon"
        alt=""
        src="/appguide/kakaotaxi/1@2x.png"
        onClick={onHomeButtonIconClick}
      />
      <button className="callcancelbutton" onClick={onCallCancelButtonClick}>
        <div className="callcancelbutton-child" />
        <div className="div49">호출취소</div>
      </button>
      <div className="request-13-child" />
      <img
        className="advertisment-icon"
        alt=""
        src="/appguide/kakaotaxi/rectangle-33@2x.png"
      />
      <div className="requestingbox">
        <div className="div50">자동결제 적용</div>
        <div className="codiconcircle-group">
          <img
            className="codiconcircle1"
            alt=""
            src="/appguide/kakaotaxi/codiconcircle1.svg"
          />
          <div className="div51">뚜레쥬르 부산동아대병원</div>
        </div>
        <div className="parent4">
          <div className="div52">국립부경대학교 대연캠퍼스</div>
          <img
            className="vector-icon3"
            alt=""
            src="/appguide/kakaotaxi/vector21.svg"
          />
        </div>
        <div className="div53">
          <p className="p9">최대 5분 거리의 기사에게</p>
          <p className="p9">요청 중입니다..</p>
        </div>
      </div>
    </div>
  );
};

export default Frame12;
