import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SoftwareAgreeA.css";

const SoftwareAgreeA = () => {
  const navigate = useNavigate();

  const onSoftwareAgreeAButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/softwareagreeb-15");
  }, [navigate]);

  return (
    <div className="SAA-softwareagreea-14">
      <button
        className="SAA-softwareagreeabutton"
        onClick={onSoftwareAgreeAButtonClick}
      >
        <b className="SAA-b20">계속</b>
      </button>
      <div className="SAA-allagreecheck">
        <b className="SAA-b21">모두 동의 (선택)</b>
        <input className="SAA-agreeacheckbox" type="checkbox" />
      </div>
      <div className="SAA-softwareagreeacheckboxset">
        <div className="SAA-agreeacheckboxcontent5">
          <input className="SAA-agreeacheckbox1" type="checkbox" />
          <b className="SAA-galaxy-wearable-container8">
            <p className="SAA-galaxy-wearable12">
              Galaxy Wearable 및 관련 관리자 앱
            </p>
            <p className="SAA-galaxy-wearable12">자동 업데이트에 동의(선택)</p>
            <p className="SAA-p18">자세히 보기</p>
          </b>
        </div>
        <div className="SAA-agreeacheckboxcontent4">
          <input className="SAA-agreeacheckbox2" type="checkbox" />
          <b className="SAA-galaxy-watch5-pro-container">
            <p className="SAA-galaxy-wearable12">
              Galaxy Watch5 Pro 자동 업데이트에
            </p>
            <p className="SAA-galaxy-wearable12">동의(선택)</p>
            <p className="SAA-p20">자동 업데이트는 워치 설정에서 끌 수 있습니다</p>
            <p className="SAA-p18">자세히 보기</p>
          </b>
        </div>
        <div className="SAA-agreeacheckboxcontent3">
          <input className="SAA-agreeacheckbox2" type="checkbox" />
          <b className="SAA-b22">
            <p className="SAA-galaxy-wearable12">진단 데이터 보내기 (선택)</p>
            <p className="SAA-p18">자세히 보기</p>
          </b>
        </div>
        <div className="SAA-agreeacheckboxcontent2">
          <input className="SAA-agreeacheckbox2" type="checkbox" />
          <b className="SAA-b22">
            <p className="SAA-galaxy-wearable12">개인정보 수집 이용 동의서</p>
            <p className="SAA-p18">자세히 보기</p>
          </b>
        </div>
        <div className="SAA-agreeacheckboxcontent1">
          <input className="SAA-agreeacheckbox2" type="checkbox" />
          <b className="SAA-galaxy-watch5-pro-container">
            <p className="SAA-galaxy-wearable12">
              삼성 최종 사용자 라이선스 동의서
            </p>
            <p className="SAA-p18">자세히 보기</p>
          </b>
        </div>
      </div>
      <b className="SAA-galaxy-wearable-container9">
        <p className="SAA-galaxy-wearable13">
          <span className="SAA-galaxy-wearable14">
            <span className="SAA-galaxy-wearable15">Galaxy Wearable의 권한</span>
          </span>
          <span className="SAA-galaxy-wearable14">{` `}</span>
          <span className="SAA-span5">{`및 해당 권한이 어떻게 `}</span>
        </p>
        <p className="SAA-p28">
          <span className="SAA-span5">사용되는지 확인하세요.</span>
        </p>
      </b>
      <b className="SAA-b25">아래 항목에 동의</b>
      <div className="SAA-softwareagreelogo">
        <img
          className="SAA-softwareagreelogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/softwareagreelogovector.svg"
        />
      </div>
    </div>
  );
};

export default SoftwareAgreeA;