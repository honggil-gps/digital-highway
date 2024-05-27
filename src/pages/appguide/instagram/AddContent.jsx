import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserLogo from "../../../components/UserLogo";
import InstagramImageForPosts1 from "../../../components/appguide/instagram/InstagramImageForPosts1";
import Header1 from "../../../components/appguide/instagram/Header";
import "./AddContent.css";

const AddContent = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/feed1");
  }, [navigate]);

  const onNextButton1Click = useCallback(() => {
    navigate("/maincontents/feed2");
  }, [navigate]);

  return (
    <div className="insta-addcontent">
      <div className="insta-material-symbolshome-outline-container">
        <img
          className="insta-material-symbolshome-outline-icon2"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon2"
          alt=""
          src="/appguide/instagram/materialsymbolssearch1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon2"
          alt=""
          src="/appguide/instagram/f7plusapp1.svg"
        />
        <UserLogo
          imageRemovebgPreview1="/appguide/instagram/imageremovebgpreview-1@2x.png"
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
          propWidth="4.313rem"
          propHeight="4.125rem"
          propRight="unset"
          propBottom="unset"
          propHeight1="80.61%"
          propWidth1="75.65%"
          propTop1="10.61%"
          propRight1="11.3%"
          propBottom1="8.79%"
          propLeft1="13.04%"
        />
      </div>
      <div className="insta-div28">새 게시물</div>
      <div className="insta-nextbutton-parent">
        <button className="insta-nextbutton1" disabled={true}>
          <div className="insta-div29">이미지</div>
        </button>
        <button
          className="insta-nextbutton2"
          disabled={true}
          onClick={onNextButton1Click}
        >
          <div className="insta-div29">공유</div>
        </button>
      </div>
      <input className="insta-addcontent-child" type="text" />
      <InstagramImageForPosts1 instagramImageForPosts="/appguide/instagram/instagram--image-for-posts@3x.png" />
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="absolute"
        headerTop="0rem"
        headerLeft="0rem"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
    </div>
  );
};

export default AddContent;
