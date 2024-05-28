import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();

  const onSidebarClick = useCallback(() => {
    navigate("/maincontents/shortcut-08");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/searchpage-03");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/searchpage-03");
  }, [navigate]);

  return (
    <div className="never-mainpage-02">
      <div className="never-mainpagetopframe">
        <img
          className="never-sidebar-icon"
          alt=""
          src="/appguide/never/sidebar.svg"
          onClick={onSidebarClick}
        />
        <div className="never-searchbar">
          <div className="never-searchbar-child" onClick={onRectangleClick} />
          <div className="never-frame" onClick={onFrameContainerClick}>
            <img
              className="never-frame-child"
              alt=""
              src="/appguide/never/rectangle-6@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="never-adbox">
        <div className="never-miniadbox">
          <img
            className="never-miniad-icon"
            alt=""
            src="/appguide/never/miniad@2x.png"
          />
          <img
            className="never-miniad-icon"
            alt=""
            src="/appguide/never/miniad1@2x.png"
          />
        </div>
        <div className="never-longadbox">
          <img
            className="never-longad-icon"
            alt=""
            src="/appguide/never/longad@2x.png"
          />
          <img
            className="never-longad-icon"
            alt=""
            src="/appguide/never/longad1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
