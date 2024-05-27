import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Reconfirm_12.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onPhxIconClick = useCallback(() => {
    navigate("/maincontents/11");
  }, [navigate]);

  const onCallButtonClick = useCallback(() => {
    navigate("/maincontents/13");
  }, [navigate]);

  return (
    <div className="kikio-reconfirm-12">
      <iframe className="kikio-mapbox1" />
      <div className="kikio-reconfirmroutebar">
        <div className="kikio-reconfirmroutebar-child" />
        <img
          className="kikio-phx-icon"
          alt=""
          src="/appguide/kakaotaxi/phx.svg"
          onClick={onPhxIconClick}
        />
        <div className="kikio-parent3">
          <div className="kikio-div40">뚜레쥬르 부산동아..</div>
          <img
            className="kikio-chevron-right-icon1"
            alt=""
            src="/appguide/kakaotaxi/chevronright.svg"
          />
          <div className="kikio-div40">국립부경대학 대..</div>
        </div>
      </div>
      <div className="kikio-reconfirmbox-parent">
        <div className="kikio-reconfirmbox" />
        <div className="kikio-normalcallframe">
          <img
            className="kikio-normalcallframe-child"
            alt=""
            src="/rectangle-49@2x.png"
          />
          <div className="kikio-div40">일반호출</div>
        </div>
        <div className="kikio-lottecardframe">
          <div className="kikio-lottecardframe-child" />
          <img
            className="kikio-lottecardframe-item"
            alt=""
            src="/rectangle-48@2x.png"
          />
          <div className="kikio-div43">롯데카드</div>
        </div>
        <div className="kikio-feeframe">
          <div className="kikio-feeframe-child" />
          <div className="kikio-div44">본인탑승</div>
          <div className="kikio-div45">예상</div>
          <div className="kikio-div46">14,200원</div>
        </div>
        <button className="kikio-callbutton" onClick={onCallButtonClick}>
          <div className="kikio-callbutton-child" />
          <div className="kikio-div47">호출하기</div>
        </button>
      </div>
      <div className="kikio-div48">출발-도착</div>
    </div>
  );
};

export default Frame11;
