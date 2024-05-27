import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckBox.css";

const CheckBox = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/main-6");
  }, [navigate]);

  return (
    <div className="coupong-checkbox-5">
      <div className="coupong-coupong-corp-all">
        @Coupong Corp. All rights reserved.
      </div>
      <div className="coupong-rectangle-parent22" onClick={onGroupContainerClick}>
        <div className="coupong-group-child19" />
        <div className="coupong-div38">동의하고 가입하기</div>
      </div>
      <div className="coupong-rectangle-parent23">
        <div className="coupong-group-child20" />
        <input
          className="coupong-material-symbols-lightcheck"
          required={true}
          checked={true}
          id="agreement_1"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck1"
          required={true}
          checked={true}
          id="agreement_2"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck2"
          required={true}
          checked={true}
          id="agreement_3"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck3"
          required={true}
          checked={true}
          id="agreement_4"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck4"
          required={true}
          checked={true}
          id="agreement_5"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck5"
          checked={true}
          id="agreement_6"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck6"
          checked={true}
          id="agreement_7"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck7"
          checked={true}
          id="agreement_8"
          type="checkbox"
        />
        <input
          className="coupong-material-symbols-lightcheck8"
          checked={true}
          id="agreement_9"
          type="checkbox"
        />
        <div className="coupong-div39">[필수] 만 14세 이상입니다</div>
        <div className="coupong-div40">[필수] 쿠퐁 이용약관 동의</div>
        <div className="coupong-div41">[필수] 전자금융거래 이용약관 동의</div>
        <div className="coupong-div42">[필수] 개인정보 수집 및 이용 동의</div>
        <div className="coupong-div43">[필수] 개인정보 제3자 제공 동의</div>
        <div className="coupong-div44">
          <p className="coupong-p11">[선택] 마케팅 목적의 개인정보 수집</p>
          <p className="coupong-p11">및 이용 동의</p>
        </div>
        <div className="coupong-div45">[선택] 광고성 정보 수신 동의</div>
        <div className="coupong-div46">[선택] 이메일 수신 동의</div>
        <div className="coupong-div47">[선택] 앱 푸시 수신 동의</div>
      </div>
      <div className="coupong-parent">
        <div className="coupong-div48">
          <p className="coupong-p11">
            전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
          </p>
          <p className="coupong-p11">개별적으로 동의를 선택 하실 수 있습니다.</p>
          <p className="coupong-p11">
            선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이
            가능합니다.
          </p>
        </div>
        <div className="coupong-div49">모두 확인하였으며 동의합니다.</div>
        <input
          className="coupong-material-symbols-lightcheck9"
          required={true}
          checked={true}
          id="agreement_all"
          type="checkbox"
        />
      </div>
      <div className="coupong-div50">회원가입</div>
    </div>
  );
};

export default CheckBox;
