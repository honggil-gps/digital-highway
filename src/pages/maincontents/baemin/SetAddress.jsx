import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SetAddress.css";

const SetAddress = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const addressInputRef = useRef(null);

  const handleAddressChange = useCallback((event) => {
    setAddress(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    navigate(`/setaddress2?address=${encodeURIComponent(address)}`);
  }, [navigate, address]);

  return (
    <div className="setaddress">
      <div className="div15">
        <span className="txt6">
          <p className="p29">배달 받을 주소를</p>
          <p className="p29">설정해주세요</p>
        </span>
      </div>
      <div className="component-33">
        <img className="search-icon" alt="" src="baemin/search@2x.png" />
        <input
          className="component-33-item"
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="주소를 입력해주세요"
          ref={addressInputRef}
        />
      </div>
      <div className="setaddress2-child" onClick={handleSubmit}></div>
      <div className="div16">완료</div>
    </div>
  );
};

export default SetAddress;