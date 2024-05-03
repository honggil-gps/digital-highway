import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import "./Request1.css";

const Request1 = () => {
  const navigate = useNavigate();
  const {baseAddress, detailAddress} = useAddress();

  const onFrameContainerClick = useCallback(() => {
    navigate("/setphone");
  }, [navigate]);

  return (
    <div className="request">
      <div className="frame">
        <div className="frame1">
          <div className="frame-child1" />
          <div className="div104">
            <span className="txt6">
              <p className="p108">{baseAddress}</p>
              <p className="p108">{detailAddress}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="frame2">
        <div className="frame3" onClick={onFrameContainerClick}>
          <div className="div105">휴대폰번호 인증이 필요합니다</div>
          <div className="rectangle-parent29">
            <button className="rectangle-button" />
            <div className="div106">인증</div>
          </div>
        </div>
      </div>
      <div className="div107">요청사항</div>
      <div className="frame4">
        <div className="div105">가게 사장님께</div>
      </div>
      <input
        className="request-child"
        placeholder="ex)일회용 젓가락이 필요해요"
        type="text"
      />
      <div className="frame5">
        <div className="div105">라이더님께</div>
      </div>
      <div className="frame6">
        <div className="frame7">
          <div className="frame-child2" />
          <div className="div105">위 내용에 모두 동의합니다</div>
        </div>
        <div className="wrapper1">
          <div className="div105">44,900원 결제하기</div>
        </div>
      </div>
      <input
        className="request-item"
        placeholder="ex) 안전하게 와주세요"
        type="text"
      />
      <div className="frame8">
        <div className="frame9">
          <div className="div105">알뜰배달</div>
          <img
            className="won-icon1"
            alt=""
            src="/appguide/baemin/won1@2x.png"
          />
          <div className="div113">로 받을게요</div>
        </div>
        <div className="div114">30~45분 후 도착</div>
      </div>
    </div>
  );
};

export default Request1;
