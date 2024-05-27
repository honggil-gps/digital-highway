import { memo } from "react";
import UserLogo from "./UserLogo";
import "./Frame.css";

const Frame = memo(() => {
  return (
    <div className="insta-frame25">
      <div className="insta-userprofile1">
        <div className="insta-frame-parent6">
          <div className="insta-profileimgusername-container">
            <div className="insta-profileimgusername3">
              <div className="insta-userlogo5">
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
              <div className="insta-userid6">
                <div className="insta-userid7">Your_id</div>
              </div>
            </div>
            <button className="insta-status" disabled={true}>
              <div className="insta-group">
                <div className="insta-div37">게시글</div>
                <div className="insta-div37">팔로워</div>
                <div className="insta-div37">팔로잉</div>
              </div>
              <div className="insta-parent1">
                <div className="insta-div37">0</div>
                <div className="insta-div37">0</div>
                <div className="insta-div37">1</div>
              </div>
            </button>
          </div>
          <img
            className="insta-line-icon"
            alt=""
            src="/appguide/instagram/line-11.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default Frame;
