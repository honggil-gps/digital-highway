import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SoftwareAgreeA.css";

const SoftwareAgreeA = () => {
  const navigate = useNavigate();

  const onSoftwareAgreeAButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/softwareagreeb-15");
  }, [navigate]);

  return (
    <div className="softwareagreea-14">
      <button
        className="softwareagreeabutton"
        onClick={onSoftwareAgreeAButtonClick}
      >
        <b className="b20">계속</b>
      </button>
      <div className="allagreecheck">
        <b className="b21">모두 동의 (선택)</b>
        <input className="agreeacheckbox" type="checkbox" />
      </div>
      <div className="softwareagreeacheckboxset">
        <div className="agreeacheckboxcontent5">
          <input className="agreeacheckbox1" type="checkbox" />
          <b className="galaxy-wearable-container8">
            <p className="galaxy-wearable12">
              Galaxy Wearable 및 관련 관리자 앱
            </p>
            <p className="galaxy-wearable12">자동 업데이트에 동의(선택)</p>
            <p className="p18">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent4">
          <input className="agreeacheckbox2" type="checkbox" />
          <b className="galaxy-watch5-pro-container">
            <p className="galaxy-wearable12">
              Galaxy Watch5 Pro 자동 업데이트에
            </p>
            <p className="galaxy-wearable12">동의(선택)</p>
            <p className="p20">자동 업데이트는 워치 설정에서 끌 수 있습니다</p>
            <p className="p18">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent3">
          <input className="agreeacheckbox2" type="checkbox" />
          <b className="b22">
            <p className="galaxy-wearable12">진단 데이터 보내기 (선택)</p>
            <p className="p18">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent2">
          <input className="agreeacheckbox2" type="checkbox" />
          <b className="b22">
            <p className="galaxy-wearable12">개인정보 수집 이용 동의서</p>
            <p className="p18">자세히 보기</p>
          </b>
        </div>
        <div className="agreeacheckboxcontent1">
          <input className="agreeacheckbox2" type="checkbox" />
          <b className="galaxy-watch5-pro-container">
            <p className="galaxy-wearable12">
              삼성 최종 사용자 라이선스 동의서
            </p>
            <p className="p18">자세히 보기</p>
          </b>
        </div>
      </div>
      <b className="galaxy-wearable-container9">
        <p className="galaxy-wearable13">
          <span className="galaxy-wearable14">
            <span className="galaxy-wearable15">Galaxy Wearable의 권한</span>
          </span>
          <span className="galaxy-wearable14">{` `}</span>
          <span className="span5">{`및 해당 권한이 어떻게 `}</span>
        </p>
        <p className="p28">
          <span className="span5">사용되는지 확인하세요.</span>
        </p>
      </b>
      <b className="b25">아래 항목에 동의</b>
      <div className="softwareagreelogo">
        <img
          className="softwareagreelogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/softwareagreelogovector.svg"
        />
      </div>
    </div>
  );
};

export default SoftwareAgreeA;
