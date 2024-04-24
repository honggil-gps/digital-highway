import { useCallback } from "react";
import PaymentMethod from "../components/PaymentMethod";
import { useNavigate } from "react-router-dom";
import "./Frame3.css";

const Frame3 = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/cardinfo");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/cardinfo");
  }, [navigate]);

  return (
    <div className="cardadd">
      <PaymentMethod t="키키오 T 포인트" />
      <PaymentMethod
        t="휴대폰"
        propTop="43.5rem"
        propLeft="1rem"
        propTextAlign="left"
      />
      <b className="b6">신용/체크카드 등록 가능해요</b>
      <b className="b7">카드 등록</b>
      <div className="frame3">
        <div className="frame-item" />
        <b className="b8">신용/체크카드</b>
        <div className="group">
          <b className="b9">꼭 확인하세요!</b>
          <div className="div9">
            <p className="p4">
              -최초 1회 등록 후 서비스 이용 시 자동으로 결제됩니다.
            </p>
            <p className="p4">
              -카드사 정책에 따라 일부 카드는 등록 불가합니다.자세한 사항은
              카카오페이에서 확인할 수 있습니다.
            </p>
            <p className="p4">-결제 취소는 6개월 이내에만 가능합니다.</p>
          </div>
        </div>
        <div className="rectangle-group">
          <img className="frame-inner" alt="" src="/rectangle-38@2x.png" />
          <div className="div10">비씨카드</div>
        </div>
        <div className="rectangle-div" />
        <div className="div11">
          <img className="item" alt="" src="/rectangle-36.svg" />
          <div className="div12">카드 삭제</div>
        </div>
        <div className="line-div" />
        <img className="chevron-up-icon" alt="" src="/chevronup.svg" />
        <div className="div13" onClick={onContainerClick}>
          <div className="inner" />
          <div className="div14" onClick={onTextClick}>
            카드 추가
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
