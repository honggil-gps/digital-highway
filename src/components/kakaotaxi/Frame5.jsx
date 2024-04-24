import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame5.css";

const Frame5 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  return (
    <div className="popup">
      <b className="b11">
        <p className="p7">카드 등록에 동의하고</p>
        <p className="p8">간편하게 결제하세요</p>
      </b>
      <button className="button3" onClick={onButtonClick}>
        <div className="child3" />
        <b className="b12">모두 동의하기</b>
      </button>
      <img className="x-circle-icon" alt="" src="/xcircle.svg" />
      <div className="group-parent">
        <div className="group-div">
          <div className="div18">카드 등록을 위한 정보제공 전체동의</div>
          <input
            className="material-symbolscheck"
            autoFocus={true}
            type="checkbox"
          />
        </div>
        <div className="parent1">
          <div className="div19">
            (필수) 결제서비스를 위한 개인(신용)정보 수집 이용 동의
          </div>
          <input
            className="material-symbolscheck1"
            required={true}
            type="checkbox"
          />
        </div>
        <div className="parent2">
          <div className="div20">
            (필수) 결제서비스를 위한 개인(신용)정보 제공 동의 (금융사)
          </div>
          <input
            className="material-symbolscheck"
            required={true}
            type="checkbox"
          />
        </div>
        <div className="parent3">
          <div className="div21">
            (필수) 키키오페이 결제 서비스를 위한 개인(신용)정보 제3자 제공
            동의서
          </div>
          <input
            className="material-symbolscheck3"
            required={true}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame5;
