import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PopUp_06.css";

const Frame5 = memo(() => {
  const navigate = useNavigate();

  const onCheckButtonClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  return (
    <div className="popup-06">
      <img
        className="x-circle-icon"
        alt=""
        src="/appguide/kakaotaxi/xcircle.svg"
      />
      <b className="b12">
        <p className="p7">카드 등록에 동의하고</p>
        <p className="p8">간편하게 결제하세요</p>
      </b>
      <button className="checkbutton1" onClick={onCheckButtonClick}>
        <div className="checkbutton-item" />
        <b className="b13">모두 동의하기</b>
      </button>
      <div className="agreementtext">
        <div className="group">
          <div className="div22">카드 등록을 위한 정보제공 전체동의</div>
          <input
            className="material-symbolscheck"
            autoFocus={true}
            type="checkbox"
          />
        </div>
        <div className="frame2">
          <div className="group-div">
            <div className="div23">
              (필수) 결제서비스를 위한 개인(신용)정보 수집 이용 동의
            </div>
            <input
              className="material-symbolscheck1"
              required={true}
              type="checkbox"
            />
          </div>
        </div>
        <div className="frame3">
          <div className="parent1">
            <div className="div24">
              (필수) 키키오페이 결제 서비스를 위한 개인(신용)정보 제3자 제공
              동의서
            </div>
            <input
              className="material-symbolscheck2"
              required={true}
              type="checkbox"
            />
          </div>
        </div>
        <div className="frame4">
          <div className="parent2">
            <div className="div25">
              (필수) 결제서비스를 위한 개인(신용)정보 제공 동의 (금융사)
            </div>
            <input
              className="material-symbolscheck"
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
