import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Request_13.css";

const Frame12 = () => {
  const navigate = useNavigate();

  const onHomeButtonIconClick = useCallback(() => {
    navigate("/maincontents/8");
  }, [navigate]);

  const onCallCancelButtonClick = useCallback(() => {
    navigate("/maincontents/11");
  }, [navigate]);

  return (
    <div className="kikio-request-13">
      <iframe className="kikio-mapbox2" />
      <img
        className="kikio-homebutton-icon"
        alt=""
        src="/appguide/kakaotaxi/1@2x.png"
        onClick={onHomeButtonIconClick}
      />
      <button className="kikio-callcancelbutton" onClick={onCallCancelButtonClick}>
        <div className="kikio-callcancelbutton-child" />
        <div className="kikio-div49">호출취소</div>
      </button>
      <div className="kikio-request-13-child" />
      <img
        className="kikio-advertisment-icon"
        alt=""
        src="/appguide/kakaotaxi/rectangle-33@2x.png"
      />
      <div className="kikio-requestingbox">
        <div className="kikio-div50">자동결제 적용</div>
        <div className="kikio-codiconcircle-group">
          <img
            className="kikio-codiconcircle1"
            alt=""
            src="/appguide/kakaotaxi/codiconcircle1.svg"
          />
          <div className="kikio-div51">뚜레쥬르 부산동아대병원</div>
        </div>
        <div className="kikio-parent4">
          <div className="kikio-div52">국립부경대학교 대연캠퍼스</div>
          <img
            className="kikio-vector-icon3"
            alt=""
            src="/appguide/kakaotaxi/vector21.svg"
          />
        </div>
        <div className="kikio-div53">
          <p className="kikio-p9">최대 5분 거리의 기사에게</p>
          <p className="kikio-p9">요청 중입니다..</p>
        </div>
      </div>
    </div>
  );
};

export default Frame12;
