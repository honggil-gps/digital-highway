import { memo } from "react";
import UserLogo from "./UserLogo";
import "./Frame.css";

const Frame = memo(() => {
  return (
    <div className="frame25">
      <div className="userprofile1">
        <div className="frame-parent6">
          <div className="profileimgusername-container">
            <div className="profileimgusername3">
              <div className="userlogo5">
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
              <div className="userid6">
                <div className="userid7">Your_id</div>
              </div>
            </div>
            <button className="status" disabled={true}>
              <div className="group">
                <div className="div37">게시글</div>
                <div className="div37">팔로워</div>
                <div className="div37">팔로잉</div>
              </div>
              <div className="parent1">
                <div className="div37">0</div>
                <div className="div37">0</div>
                <div className="div37">1</div>
              </div>
            </button>
          </div>
          <img
            className="line-icon"
            alt=""
            src="/appguide/instagram/line-11.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default Frame;
