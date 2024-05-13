import { memo } from "react";
import DigiitalHighwayLogo from "./DigiitalHighwayLogo";
import InstagramImageForPosts1 from "./InstagramImageForPosts1";
import "./InstaContentAdmin11.css";

const InstaContentAdmin11 = memo(
  ({ imageRemovebgPreview11, instagramImageForPosts }) => {
    return (
      <div className="instacontentadmin3">
        <div className="frame-parent5">
          <div className="digiitalhighway-logo-parent1">
            <DigiitalHighwayLogo
              imageRemovebgPreview11="/appguide/instagram/logo.png"
              propPosition="relative"
              propTop="unset"
              propLeft="unset"
              propWidth="4.5rem"
              propHeight="4.5rem"
              propHeight1="78.33%"
              propWidth1="85.56%"
              propTop1="10.83%"
              propRight="5.42%"
              propBottom="10.83%"
              propLeft1="9.03%"
            />
            <div className="div36">디지털지름길_공식</div>
          </div>
          <InstagramImageForPosts1
            instagramImageForPosts="/appguide/instagram/instagram--image-for-posts@3x.png"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="22.688rem"
            propHeight="18.25rem"
            propBorderRadius="unset"
          />
          <div className="underpicture4">
            <img
              className="mdiheart-icon4"
              alt=""
              src="/appguide/instagram/mdiheart.svg"
            />
            <img
              className="iconamooncomment4"
              alt=""
              src="/appguide/instagram/iconamooncomment.svg"
            />
            <div className="comment4">댓글 3개</div>
            <div className="likes4">좋아요 21개</div>
          </div>
          <div className="content5">
            <p className="blank-line">{`반갑습니다 ! “디지털지름길” 서비스가 2024년 6월 시작합니다! 저희 서비스는 “디지털 환경의 보다 더 빠르고 쉬운 적응"을 위해 노력하는 서비스입니다. `}</p>
            <p className="blank-line">
              어디서도 가르쳐주지 않은 각종 휴대폰 어플리케이션의 사용법,
              스마트기기들의 사용법을 여기서 차근 차근 알려줄께요!
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">
              당신의 디지털 라이프를 위해, 디지털 지름길
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default InstaContentAdmin11;
