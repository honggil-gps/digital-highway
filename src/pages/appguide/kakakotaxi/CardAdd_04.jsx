import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CardAdd_04.css";

const Frame3 = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/cardinfo-05");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/cardinfo-05");
  }, [navigate]);

  return (
    <div className="cardadd-04">
      <b className="b6">카드 등록</b>
      <b className="b7">신용/체크카드 등록 가능해요</b>
      <div className="kikiopoint1">
        <div className="div9">
          <div className="child3" />
          <img
            className="chevron-down-icon5"
            alt=""
            src="/appguide/kakaotaxi/group-1.svg"
          />
        </div>
        <b className="t1">키키오 T 포인트</b>
      </div>
      <div className="cardaddcreditcard">
        <div className="cardaddcreditcard-child" />
        <b className="b8">신용/체크카드</b>
        <div className="parent">
          <b className="b9">꼭 확인하세요!</b>
          <div className="div10">
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
        <div className="rectangle-parent">
          <img
            className="frame-child"
            alt=""
            src="/appguide/kakaotaxi/rectangle-38@2x.png"
          />
          <div className="div11">비씨카드</div>
        </div>
        <div className="cardaddcreditcard-item" />
        <div className="div12">
          <img
            className="rectangle-icon"
            alt=""
            src="/appguide/kakaotaxi/rectangle-36.svg"
          />
          <div className="div13">카드 삭제</div>
        </div>
        <div className="cardaddcreditcard-inner" />
        <img
          className="chevron-up-icon"
          alt=""
          src="/appguide/kakaotaxi/chevronup.svg"
        />
        <div className="div14" onClick={onContainerClick}>
          <div className="child4" />
          <div className="div15" onClick={onTextClick}>
            카드 추가
          </div>
        </div>
      </div>
      <div className="cellphone1">
        <div className="div9">
          <div className="child3" />
          <img
            className="chevron-down-icon5"
            alt=""
            src="/appguide/kakaotaxi/group-1.svg"
          />
        </div>
        <b className="t1">휴대폰</b>
      </div>
    </div>
  );
};

export default Frame3;
