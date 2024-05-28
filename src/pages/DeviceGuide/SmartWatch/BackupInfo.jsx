import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BackupInfo.css";

const BackupInfo = () => {
  const navigate = useNavigate();

  const onBackupInfoButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/emergencyguide-21");
  }, [navigate]);

  return (
    <div className="backupinfo-20">
      <button className="backupinfobutton" onClick={onBackupInfoButtonClick}>
        <b className="b69">다음</b>
      </button>
      <b className="smart-switch-container">
        <p className="p57">{`내 워치 데이터와 파일을 정기적으로 백업하고 새 휴대전화를 연결하거나, 워치를 초기화하고 복원할 때 간편하게 사용해 보세요. `}</p>
        <p className="smart-switch">
          백업을 하려면 휴대전화를 충전 중인 상태에서 워치가 휴대전화에 연결되어
          있어야 하며, 백업을 휴대전화에 저장하는데 Smart Switch가 사용됩니다.
        </p>
      </b>
      <img
        className="backupinfoimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/backupinfoimage@2x.png"
      />
      <b className="b70">워치 데이터 자동 백업</b>
      <div className="backupinfologo">
        <img
          className="backupinfologovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/backupinfologovector.svg"
        />
      </div>
    </div>
  );
};

export default BackupInfo;
