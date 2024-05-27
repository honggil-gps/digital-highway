import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddAddress.css";

const AddAddress = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/deliveryaddress-17");
  }, [navigate]);

  return (
    <div className="coupong-addaddress-16">
      <div className="coupong-div257">주문/결제</div>
      <div className="coupong-div258">배송지 추가</div>
      <div className="coupong-rectangle-parent75">
        <div className="coupong-frame-child38" />
        <input
          className="coupong-frame-child39"
          name="receiver"
          id="receiver"
          placeholder="받는사람"
          type="text"
        />
        <input
          className="coupong-frame-child40"
          name="zip_code"
          id="zip_code"
          placeholder="우편번호"
          type="text"
        />
        <input
          className="coupong-frame-child41"
          name="phone_number"
          id="phone_number"
          placeholder="휴대폰 번호"
          type="text"
        />
        <input
          className="coupong-frame-child42"
          name="delivery_info"
          id="delivery_info"
          placeholder="일반배송 정보를 입력해 주세요."
          type="text"
        />
        <input
          className="coupong-frame-child43"
          name="delivery_info_dawn"
          id="delivery_info_dawn"
          placeholder="새벽배송 정보를 입력해 주세요."
          type="text"
        />
        <div className="coupong-frame-child44" />
        <div className="coupong-frame-child45" />
        <div className="coupong-frame-child46" />
        <div className="coupong-frame-child47" />
        <img className="coupong-sms-icon" alt="" src="/appguide/coupang/sms@2x.png" />
        <img
          className="coupong-uiwuser-icon1"
          alt=""
          src="/appguide/coupang/uiwuser.svg"
        />
        <img
          className="coupong-mdicellphone-icon1"
          alt=""
          src="/appguide/coupang/mdicellphone.svg"
        />
        <img
          className="coupong-place-marker-icon"
          alt=""
          src="/appguide/coupang/place-marker@2x.png"
        />
        <input
          className="coupong-rectangle-input3"
          checked={true}
          id="basic_address"
          type="checkbox"
        />
        <div className="coupong-div259">기본 배송지로 선택</div>
        <div className="coupong-rectangle-parent76" onClick={onGroupContainerClick}>
          <div className="coupong-group-child97" />
          <div className="coupong-div260">저장</div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
