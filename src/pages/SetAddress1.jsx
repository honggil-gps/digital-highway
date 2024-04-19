import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SetAddress1.css";

const SetAddress1 = () => {
  const navigate = useNavigate();

  const onSetAddressContainerClick = useCallback(() => {
    navigate("/setaddress2");
  }, [navigate]);

  return (
    <div className="setaddress" onClick={onSetAddressContainerClick}>
      <div className="div243">
        <span className="txt25">
          <p className="p153">배달 받을 주소를</p>
          <p className="p153">설정해주세요</p>
        </span>
      </div>
      <div className="component-33">
        <input className="component-33-child" type="text" />
        <img className="search-icon3" alt="" src="/search@2x.png" />
        <input
          className="component-33-item"
          placeholder="주소를 입력해주세요"
          type="text"
        />
        <input
          className="component-33-inner"
          placeholder="배달 받을 주소를 입력하세요"
          type="text"
        />
      </div>
    </div>
  );
};

export default SetAddress1;
