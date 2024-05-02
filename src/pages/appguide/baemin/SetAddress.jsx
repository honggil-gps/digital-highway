import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SetAddress.css";

const SetAddress = () => {
  const navigate = useNavigate();

  const onButtonFrameClick = useCallback(() => {
    navigate("/setaddress2");
  }, [navigate]);

  return (
    <div className="setaddress">
      <div className="div24">
        <span className="txt2">
          <p className="p48">배달 받을 주소를</p>
          <p className="p48">설정해주세요</p>
        </span>
      </div>
      <div className="component-33">
        <input className="component-33-child" type="text" />
        <img
          className="search-icon"
          alt=""
          src="/appguide/baemin/search@2x.png"
        />
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
      <div className="button1">
        <div className="buttonframe1" onClick={onButtonFrameClick} />
        <div className="buttontext1">완료</div>
      </div>
    </div>
  );
};

export default SetAddress;
