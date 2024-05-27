import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import UserLogo from "../../../components/UserLogo";
import InstagramImageForPosts1 from "../../../components/appguide/instagram/InstagramImageForPosts1";
import "./MyPage.css";

const MyPage = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/feed2");
  }, [navigate]);

  const onInstagramImageForPostsClick = useCallback(() => {
    navigate("/maincontents/feed3");
  }, [navigate]);

  return (
    <div className="insta-mypage">
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="relative"
        headerTop="unset"
        headerLeft="unset"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
      <div className="insta-frame18">
        <div className="insta-frame19">
          <div className="insta-userprofile">
            <div className="insta-frame-parent2">
              <div className="insta-profileimgusername-wrapper">
                <div className="insta-profileimgusername">
                  <div className="insta-userlogo">
                    <UserLogo
                      imageRemovebgPreview1="/appguide/instagram/ProfileMedium2.png"
                      propPosition="absolute"
                      propTop="0%"
                      propLeft="0%"
                      propWidth="100%"
                      propHeight="100%"
                      propRight="0%"
                      propBottom="0%"
                      propHeight1="80.65%"
                      propWidth1="75.73%"
                      propTop1="10.52%"
                      propRight1="11.22%"
                      propBottom1="8.83%"
                      propLeft1="13.05%"
                    />
                  </div>
                  <div className="insta-userid">
                    <div className="insta-userid1">Your_id</div>
                  </div>
                </div>
              </div>
              <img
                className="insta-frame-item"
                alt=""
                src="/appguide/instagram/line-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="insta-frame20">
          <div className="insta-frame21">
            <InstagramImageForPosts1
              instagramImageForPosts="/appguide/instagram/instagram--image-for-posts1@2x.png"
              propPosition="relative"
              propTop="unset"
              propLeft="unset"
              propWidth="10.5rem"
              propHeight="8.688rem"
              propBorderRadius="9px"
              onInstagramImageForPostsClick={onInstagramImageForPostsClick}
            />
          </div>
        </div>
      </div>
      <div className="insta-material-symbolshome-outline-parent3">
        <img
          className="insta-material-symbolshome-outline-icon5"
          alt=""
          src="/appguide/instagram/materialsymbolshomeoutline1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon5"
          alt=""
          src="/appguide/instagram/materialsymbolssearch1.svg"
        />
        <img
          className="insta-material-symbolshome-outline-icon5"
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
    </div>
  );
};

export default MyPage;
