import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InstaContentUser from "../../../components/appguide/instagram/InstaContentUser";
import InstaContentAdmin11 from "../../../components/appguide/instagram/InstaContentAdmin11";
import Header1 from "../../../components/appguide/instagram/Header";
import UserLogo from "../../../components/UserLogo";
import "./Feed2.css";

const Feed2 = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/addcontent");
  }, [navigate]);

  const onUserLogoContainerClick = useCallback(() => {
    navigate("/maincontents/mypage");
  }, [navigate]);

  return (
    <div className="insta-feed2">
      <div className="insta-frame17">
        <div className="insta-instacontentuser-parent">
          <InstaContentUser
            imageRemovebgPreview1="/appguide/instagram/ProfileMedium.png"
            instagramImageForPosts="/appguide/instagram/ImgforPost.png"
            frameDivWidth="22.938rem"
            userLogoWidth="5.125rem"
            userLogoHeight="4.813rem"
            userIdWidth="unset"
            userIdHeight="4.188rem"
            userIdFlex="1"
            userIdTop="1.344rem"
            userIdLeft="0rem"
            instaContentUserWidth="22.688rem"
            instaContentUserHeight="18.25rem"
            underPictureWidth="22.438rem"
            underPictureHeight="2.125rem"
            mdiheartIconTop="0rem"
            mdiheartIconLeft="0rem"
            mdiheartIconWidth="2.063rem"
            mdiheartIconHeight="2.063rem"
            iconamooncommentTop="0rem"
            iconamooncommentLeft="2.938rem"
            iconamooncommentWidth="2.063rem"
            iconamooncommentHeight="2.063rem"
            commentTop="1.063rem"
            commentLeft="19.688rem"
            likesTop="0rem"
            likesLeft="18.625rem"
            contentWidth="22.75rem"
          />
          <InstaContentAdmin11
            imageRemovebgPreview11="/appguide/instagram/imageremovebgpreview-1-1@2x.png"
            instagramImageForPosts="/appguide/instagram/ImgforPost.png"
          />
        </div>
      </div>
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
      <div className="insta-material-symbolshome-outline-parent2">
        <img
          className="insta-material-symbolshome-outline-icon4"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon4"
          alt=""
          src="/appguide/instagram/materialsymbolssearch1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon4"
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
          onUserLogoContainerClick={onUserLogoContainerClick}
        />
      </div>
    </div>
  );
};

export default Feed2;
