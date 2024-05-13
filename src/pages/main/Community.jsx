import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Community.css";

const Community = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBandContainerClick = useCallback(() => {
    navigate("/sns");
  }, [navigate]);

  const onInstagramContainerClick = useCallback(() => {
    navigate("/sns");
  }, [navigate]);

  const onCafeContainerClick = useCallback(() => {
    navigate("/sns");
  }, [navigate]);

  return (
    <div className="community1">
      <div className="community2">
        <div className="header10">
          <div className="box20" />
          <div className="logo10">
            <div className="div127" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon10" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode10">
            <div className="rectangle-parent7">
              <div className="group-child7" />
              <div className="div128">내 정보</div>
            </div>
          </div>
          <div className="back10" onClick={onBackContainerClick}>
            <div className="group-child7" />
            <div className="div129">뒤로가기</div>
          </div>
        </div>
        <div className="body7">
          <div className="chatbot7">
            <img className="box-icon7" alt="" src="main/box.svg" />
            <div className="intro8">
              <span className="intro-txt7">
                <p className="sns">어려운 단어가 있으신가요?</p>
                <p className="sns">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start7">
              <div className="start-child5" />
              <div className="div130">시작하기</div>
            </div>
            <img className="character-icon7" alt="" src="main/character@2x.png" />
          </div>
          <div className="band" onClick={onBandContainerClick}>
            <div className="band-child" />
            <div className="div131">네이버밴드</div>
            <img
              className="band-logopng-icon"
              alt=""
              src="main/band-logopng@2x.png"
            />
          </div>
          <div className="instagram" onClick={onInstagramContainerClick}>
            <div className="band-child" />
            <div className="div131">인스타그램</div>
            <img className="pngwing-1-icon" alt="" src="main/pngwing-1@2x.png" />
          </div>
          <div className="cafe" onClick={onCafeContainerClick}>
            <div className="band-child" />
            <div className="div133">네이버카페</div>
            <img className="ai-11-1-icon" alt="" src="main/-ai11-1@2x.png" />
          </div>
          <div className="title12">
            커뮤니티
            <p className="sns-layout">원하는 플랫폼을 선택하세요</p>
          </div>
          <div className="info5">
            <div className="info-child1" />
            <div className="sns-container">
              <p className="desc">SNS 가이드를 사용해보고 난 후,<br />혹은 디지털 기기를 사용해본 후기 등을 나누는 공간입니다</p>
            </div>
          </div>
          <div className="menu13">
            <div className="menu-child10" />
            <div className="div134">커뮤니티</div>
            <div className="menu-child11" />
            <div className="div135">전자기기 가이드</div>
            <div className="menu-child12" />
            <div className="div136">앱 배우기</div>
            <div className="menu-child13" />
            <div className="div137">정보제공</div>
          </div>
        </div>
        <div className="footer10">
          <div className="box21" />
          <div className="menu14">
            <div className="div138">이용약관</div>
            <div className="div138">오시는길</div>
            <div className="div138">제휴제안</div>
            <div className="div138">개인정보처리방침</div>
            <div className="div138">저작권 보호정책</div>
            <div className="div138">고객센터</div>
          </div>
          <div className="copyright10">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon10" alt="" src="main/logo@2x.png" />
          <div className="title13">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default Community;
