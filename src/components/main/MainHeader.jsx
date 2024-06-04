import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <header className="mainpage-appguideheader">
      <button
        className="mainpage-headermyinfobutton1"
        onClick={onHeaderMyinfoButtonClick}
      >
        <div className="mainpage-div57">내 정보</div>
      </button>
      <div className="mainpage-headertitle2" onClick={onLogoContainerClick}>
        <img
          className="mainpage-headertitleimage-icon4"
          alt=""
          src="main/image-1@2x.png"
        />
        <div className="mainpage-div58">디지털지름길</div>
      </div>
      <button className="mainpage-headerbackbutton5" onClick={onHeaderBackButtonClick}>
        <div className="mainpage-div59">뒤로가기</div>
      </button>
    </header>
  )
}

export default MainHeader;