import { useState, useCallback } from "react";
import InstagramPost from "../../../components/community/instagramWeb/InstagramPost";
import SearchSidebar from "../../../components/community/instagramWeb/SearchSidebar";
import PortalDrawer from "../../../components/community/instagramWeb/PortalDrawer";
import { useNavigate } from "react-router-dom";
import FollowSidebar from "../../../components/community/instagramWeb/FollowSidebar";
import "./InstaWebMain.css";

const InstaWebMain = () => {
  const [isSearchSidebarOpen, setSearchSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [isFollowSidebarOpen, setFollowSidebarOpen] = useState(false);

  const openSearchSidebar = useCallback(() => {
    setSearchSidebarOpen(true);
  }, []);

  const closeSearchSidebar = useCallback(() => {
    setSearchSidebarOpen(false);
  }, []);

  const onSidePostButtonClick = useCallback(() => {
    navigate("/community/instagramWeb/writepost");
  }, [navigate]);

  const openFollowSidebar = useCallback(() => {
    setFollowSidebarOpen(true);
  }, []);

  const closeFollowSidebar = useCallback(() => {
    setFollowSidebarOpen(false);
  }, []);

  return (
    <>
      <div className="instawebmain">
        <InstagramPost />
        <div className="sidebar">
          <button className="instagrambutton">
            <img
              className="mdiinstagram-icon"
              alt=""
              src="/community/instagramWeb/mdiinstagram.svg"
            />
            <div className="instagrambutton-child" />
          </button>
          <button className="homebutton" id="HomeButton">
            <img
              className="material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/materialsymbolshome.svg"
            />
            <div className="homebutton-child" />
          </button>
          <button
            className="magnifybutton"
            id="MainPageSearch"
            onClick={openSearchSidebar}
          >
            <img
              className="material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/phmagnifyingglass.svg"
            />
            <div className="homebutton-child" />
          </button>
          <div className="compassbutton">
            <img
              className="material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/mdicompassoutline.svg"
            />
            <div className="homebutton-child" />
          </div>
          <div className="sideheartbutton">
            <img
              className="material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/phheart.svg"
            />
            <div className="homebutton-child" />
          </div>
          <button
            className="sidepostbutton"
            id="PostWriteButton"
            onClick={onSidePostButtonClick}
          >
            <img
              className="material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/f7plusapp.svg"
            />
            <div className="homebutton-child" />
          </button>
          <button
            className="followbutton"
            id="HomeButton"
            onClick={openFollowSidebar}
          >
            <div className="homebutton-child" />
            <img
              className="solaruser-outline-icon"
              alt=""
              src="/community/instagramWeb/solaruseroutline.svg"
            />
          </button>
        </div>
      </div>
      {isSearchSidebarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSearchSidebar}
        >
          <SearchSidebar onClose={closeSearchSidebar} />
        </PortalDrawer>
      )}
      {isFollowSidebarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeFollowSidebar}
        >
          <FollowSidebar onClose={closeFollowSidebar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default InstaWebMain;
