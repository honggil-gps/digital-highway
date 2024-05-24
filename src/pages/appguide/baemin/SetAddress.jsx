import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import "./SetAddress.css";

const SetAddress = () => {
  const navigate = useNavigate();
  const { baseAddress, setBaseAddress } = useAddress(); // 전역 주소 상태 사용

  const onButtonFrameClick = useCallback(() => {
    if (baseAddress) {
      navigate("/maincontents/setaddress2", { state: { baseAddress } }); // 주소를 다음 페이지로 전달
    } else {
      alert("주소를 입력해주세요.");
    }
  }, [navigate, baseAddress, setBaseAddress]);

  return (
    <div className="baeman-setaddress">
      <div className="baeman-div24">
        <span className="baeman-txt2">
          <p className="baeman-p48">배달 받을 주소를</p>
          <p className="baeman-p48">설정해주세요</p>
        </span>
      </div>
      <div className="baeman-component-33">
        <div className="baeman-component-33-child" />
        <img
          className="baeman-search-icon"
          alt=""
          src="/appguide/baemin/search@2x.png"
        />
        <input
          className="baeman-component-33-inner"
          placeholder="배달 받을 주소를 입력하세요"
          type="text"
          value={baseAddress}
          onChange={e => setBaseAddress(e.target.value)}
        /> 
      </div>
      <div className="baeman-button1">
        <div className="baeman-buttonframe1" onClick={onButtonFrameClick} />
        <div className="baeman-buttontext1">완료</div>
      </div>
    </div>
  );
};

export default SetAddress;