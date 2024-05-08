import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Reconfirm_12.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onPhxIconClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  const onCallButtonClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="reconfirm-12">
      <iframe className="mapbox1" />
      <div className="reconfirmroutebar">
        <div className="reconfirmroutebar-child" />
        <img
          className="phx-icon"
          alt=""
          src="/appguide/kakaotaxi/phx.svg"
          onClick={onPhxIconClick}
        />
        <div className="parent3">
          <div className="div40">뚜레쥬르 부산동아..</div>
          <img
            className="chevron-right-icon1"
            alt=""
            src="/appguide/kakaotaxi/chevronright.svg"
          />
          <div className="div40">국립부경대학 대..</div>
        </div>
      </div>
      <div className="reconfirmbox-parent">
        <div className="reconfirmbox" />
        <div className="normalcallframe">
          <img
            className="normalcallframe-child"
            alt=""
            src="/rectangle-49@2x.png"
          />
          <div className="div40">일반호출</div>
        </div>
        <div className="lottecardframe">
          <div className="lottecardframe-child" />
          <img
            className="lottecardframe-item"
            alt=""
            src="/rectangle-48@2x.png"
          />
          <div className="div43">롯데카드</div>
        </div>
        <div className="feeframe">
          <div className="feeframe-child" />
          <div className="div44">본인탑승</div>
          <div className="div45">예상</div>
          <div className="div46">14,200원</div>
        </div>
        <button className="callbutton" onClick={onCallButtonClick}>
          <div className="callbutton-child" />
          <div className="div47">호출하기</div>
        </button>
      </div>
      <div className="div48">출발-도착</div>
    </div>
  );
};

export default Frame11;
