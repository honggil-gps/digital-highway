import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopUp_06.css";

const Frame5 = memo(() => {
  const navigate = useNavigate();

  const onCheckButtonClick = useCallback(() => {
    navigate("/maincontents/7");
  }, [navigate]);

  return (
    <div className="kikio-popup-06">
      <img
        className="kikio-x-circle-icon"
        alt=""
        src="/appguide/kakaotaxi/xcircle.svg"
      />
      <b className="kikio-b12">
        <p className="kikio-p7">카드 등록에 동의하고</p>
        <p className="kikio-p8">간편하게 결제하세요</p>
      </b>
      <button className="kikio-checkbutton1" onClick={onCheckButtonClick}>
        <div className="kikio-checkbutton-item" />
        <b className="kikio-b13">모두 동의하기</b>
      </button>
      <div className="kikio-agreementtext">
        <div className="kikio-group">
          <div className="kikio-div22">카드 등록을 위한 정보제공 전체동의</div>
          <input
            className="kikio-material-symbolscheck"
            autoFocus={true}
            type="checkbox"
          />
        </div>
        <div className="kikio-frame2">
          <div className="kikio-group-div">
            <div className="kikio-div23">
              (필수) 결제서비스를 위한 개인(신용)정보 수집 이용 동의
            </div>
            <input
              className="kikio-material-symbolscheck1"
              required={true}
              type="checkbox"
            />
          </div>
        </div>
        <div className="kikio-frame3">
          <div className="kikio-parent1">
            <div className="kikio-div24">
              (필수) 키키오페이 결제 서비스를 위한 개인(신용)정보 제3자 제공
              동의서
            </div>
            <input
              className="kikio-material-symbolscheck2"
              required={true}
              type="checkbox"
            />
          </div>
        </div>
        <div className="kikio-frame4">
          <div className="kikio-parent2">
            <div className="kikio-div25">
              (필수) 결제서비스를 위한 개인(신용)정보 제공 동의 (금융사)
            </div>
            <input
              className="kikio-material-symbolscheck"
              required={true}
              type="checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Frame5;
