import { memo, useState, useCallback, useEffect } from "react";
import PopupRefundCompleted from "./PopupRefundCompleted";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./PopupRefundInfo.css";

const PopupRefundInfo = memo(({ onClose }) => {
  const [isPopupRefundCompletedOpen, setPopupRefundCompletedOpen] =
    useState(false);
  const navigate = useNavigate();

  const openPopupRefundCompleted = useCallback(() => {
    setPopupRefundCompletedOpen(true);
  }, []);

  const closePopupRefundCompleted = useCallback(() => {
    setPopupRefundCompletedOpen(false);
  }, []);

  const onPopupRefundInfoButtonCancelClick = useCallback(() => {
    navigate("/maincontents/refund-16");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("환불할 승차권을 선택 후 \n [반환하기]를 눌러주세요.", "반환 수수료를 확인 후 \n [반환요청]을 눌러주세요.", "[확인]버튼을 눌러주세요. \n 환불이 완료되었습니다!")},[])

  return (
    <>
      <div className="krail-popuprefundinfo">
        <div className="krail-popuprefundinfobutton">
          <button
            className="krail-popuprefundinfobuttonrequest"
            onClick={openPopupRefundCompleted}
          >
            <b className="krail-b1955">반환요청</b>
          </button>
          <button
            className="krail-popuprefundinfobuttoncancel"
            onClick={onPopupRefundInfoButtonCancelClick}
          >
            <b className="krail-b195">반환취소</b>
          </button>
        </div>
        <div className="krail-popuprefundinfocontent">
          <b className="krail-b197">
            <p className="krail-p91">승차권 반환수수료는 0원입니다.</p>
            <p className="krail-p91">반환하시겠습니까?</p>
            <p className="krail-p91">&nbsp;</p>
            <p className="krail-p91">{`하단의 [반환요청] 버튼을 눌러야 정상적으로 `}</p>
            <p className="krail-p91">반환할 수 있습니다.</p>
            <p className="krail-p91">&nbsp;</p>
            <p className="krail-p91">취소(환불)는 영업일 기준 3~5일 이내</p>
            <p className="krail-p91">진행될 예정입니다.</p>
          </b>
          <div className="krail-popuprefundinfocontentline" />
          <b className="krail-b198">이용안내</b>
        </div>
      </div>
      {isPopupRefundCompletedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupRefundCompleted}
        >
          <PopupRefundCompleted onClose={closePopupRefundCompleted} />
        </PortalPopup>
      )}
    </>
  );
});

export default PopupRefundInfo;
