import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TermsOfUse.css";

const TermsOfUse = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/joinpage-11");
  }, [navigate]);

  return (
    <div className="never-termsofuse-10">
      <img
        className="never-naver-logosvg-icon2"
        alt=""
        src="/appguide/never/naver-logosvg2.svg"
      />
      <div className="never-fullagreementframe">
        <input className="never-simple-line-iconscheck" type="checkbox" />
        <div className="never-fullagreement">
          <div className="never-div53">전체 동의하기</div>
        </div>
      </div>
      <div className="never-termsofuseframe">
        <div className="never-termsofusegroup">
          <input
            className="never-simple-line-iconscheck"
            required={true}
            type="checkbox"
          />
          <div className="never-rectangle-parent18">
            <div className="never-group-child18" />
            <div className="never-div54">네이버 이용약관</div>
          </div>
        </div>
        <div className="never-welcometextbox">
          <div className="never-welcometextbox-child" />
          <b className="never-b">여러분을 환영합니다.</b>
          <div className="never-div55">
            네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본
            약관은 다양한 네이버 서비스의 이용과 관련하여...
          </div>
        </div>
      </div>
      <div className="never-privacyframe">
        <div className="never-termsofusegroup">
          <input
            className="never-simple-line-iconscheck"
            required={true}
            type="checkbox"
          />
          <div className="never-rectangle-parent18">
            <div className="never-group-child18" />
            <div className="never-div54">개인정보 수집 및 이용</div>
          </div>
        </div>
        <div className="never-privacytextbox">
          <div className="never-privacytextbox-child" />
          <div className="never-div57">
            개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는
            개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및
            이용기간, 동의 거부권
          </div>
        </div>
      </div>
      <div className="never-termofusebottom">
        <div className="never-nextbutton">
          <div className="never-nextbutton-child" onClick={onRectangleClick} />
          <div className="never-div58">다음</div>
        </div>
        <img
          className="never-bottombar-icon"
          alt=""
          src="/appguide/never/bottombar.svg"
        />
      </div>
    </div>
  );
};

export default TermsOfUse;
