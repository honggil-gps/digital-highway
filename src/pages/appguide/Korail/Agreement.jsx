import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PopupMenubar from "/";
import PortalDrawer from "./PortalDrawer";
import "./Agreement.css";

const Agreement = () => {
  const navigate = useNavigate();
  const [isPopupMenubarOpen, setPopupMenubarOpen] = useState(false);

  const onAgreementFooterClick = useCallback(() => {
    navigate("/pass-05");
  }, [navigate]);

  const openPopupMenubar = useCallback(() => {
    setPopupMenubarOpen(true);
  }, []);

  const closePopupMenubar = useCallback(() => {
    setPopupMenubarOpen(false);
  }, []);

  return (
    <>
      <div className="agreement-04">
        <button className="agreementfooter" onClick={onAgreementFooterClick}>
          <b className="b25">다음</b>
        </button>
        <main className="agreementmain">
          <div className="agreementmain3">
            <div className="agreementmain3c">
              <input className="rectangle-input" type="checkbox" />
              <div className="frame">
                <b className="b26">
                  이벤트/혜택/마케팅을 위한 정보 활용에 동의합니다.(선택)
                </b>
                <b className="b27">
                  *선택정보에 동의하지 않아도 서비스 이용제한은 없습니다.
                </b>
              </div>
            </div>
            <div className="agreementmain3b">
              <input className="rectangle-input" type="checkbox" />
              <div className="frame1">
                <b className="b28">
                  선택 개인정보 수집 및 이용에 동의합니다.(선택)
                </b>
                <b className="b29">
                  *선택정보에 동의하지 않아도 서비스 이용제한은 없습니다.
                </b>
              </div>
            </div>
            <div className="agreementmain3a">
              <h2 className="h2">개인정보 수집 및 이용에 동의합니다.(필수)</h2>
              <input className="rectangle-input" type="checkbox" />
            </div>
            <div className="agreementmain3ttitle">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <b className="b30">약관보기</b>
              </div>
              <h1 className="h1">
                <ol className="ol">
                  <li>개인정보 수집 및 이용에 대한 안내</li>
                </ol>
              </h1>
            </div>
          </div>
          <div className="agreementmain2">
            <div className="agreementmain2line" />
            <div className="agreementmain2check">
              <b className="b31">회원약관 동의(필수)</b>
              <input className="rectangle-input" type="checkbox" />
            </div>
            <div className="wrapper">
              <b className="b32">약관보기</b>
            </div>
            <h1 className="h11">
              <ol className="ol">
                <li>코레일톡 회원약관</li>
              </ol>
            </h1>
          </div>
          <div className="agreementmain1">
            <div className="agreementmain1line" />
            <b className="b31">회원약관 동의(필수)</b>
            <input className="rectangle-input" type="checkbox" />
          </div>
        </main>
        <header className="agreementheader">
          <b className="b34">회원가입</b>
          <button className="agreementheaderbutton" onClick={openPopupMenubar}>
            <div className="agreementheaderbuttonline3" />
            <div className="agreementheaderbuttonline2" />
            <div className="agreementheaderbuttonline1" />
          </button>
        </header>
      </div>
      {isPopupMenubarOpen && (
        <PortalDrawer placement="Right" onOutsideClick={closePopupMenubar}>
          <PopupMenubar onClose={closePopupMenubar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Agreement;
