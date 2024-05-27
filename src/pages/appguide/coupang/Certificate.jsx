import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Certificate.css";

const Certificate = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/maincontents/main-6");
  }, [navigate]);

  return (
    <div className="coupong-certificate-7">
      <div className="coupong-div315">휴대폰번호 로그인</div>
      <div className="coupong-group-parent3">
        <div className="coupong-parent3">
          <div className="coupong-div316">인증번호가</div>
          <div className="coupong-div317">(으)로 발송되었습니다.</div>
          <div className="coupong-group-child99" />
        </div>
        <div className="coupong-rectangle-parent80">
          <input
            className="coupong-group-child100"
            name="certificate_number"
            id="certificate_number"
            placeholder="인증번호 6자리"
            type="text"
          />
          <div className="coupong-group-child101" />
          <div className="coupong-div318">재발송</div>
        </div>
        <div className="coupong-group-parent4">
          <input
            className="coupong-group-input1"
            checked={true}
            id="autologin"
            type="checkbox"
          />
          <div className="coupong-div319">자동 로그인</div>
        </div>
        <div className="coupong-rectangle-parent81" onClick={onGroupContainer3Click}>
          <div className="coupong-group-child102" />
          <div className="coupong-div320">로그인</div>
        </div>
        <div className="coupong-div321">사업자 계정은 이메일 로그인을 해주세요.</div>
        <div className="coupong-frame-child66" />
      </div>
      <div className="coupong-parent4">
        <div className="coupong-div322">인증번호를 받지 못하셨나요?</div>
        <div className="coupong-div323">비밀번호로 로그인</div>
        <img
          className="coupong-angle-up-icon"
          alt=""
          src="/appguide/coupang/angleup.svg"
        />
      </div>
    </div>
  );
};

export default Certificate;
