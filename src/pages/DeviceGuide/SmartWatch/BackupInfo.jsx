import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BackupInfo.css";

const BackupInfo = () => {
  const navigate = useNavigate();

  const onBackupInfoButtonClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/emergencyguide-21");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("기본으로 설치될 어플입니다. \n 하단의 [확인]버튼을 눌러주세요.", "백업에 관한 설명입니다. \n [다음]버튼을 눌러주세요.", "긴급상황안내 설명입니다. \n [다음]버튼을 눌러주세요.")},[])

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
