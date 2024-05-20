import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPageGuideList.css";

const MyPageGuideList = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/devicesubpage");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/maincontents");
  }, [navigate]);

  const onMyPageMenuButton2ContainerClick = useCallback(() => {
    navigate("/mypagestoragebox");
  }, [navigate]);

  const onMyPageMenuButton1ContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/mypagestoragebox");
  }, [navigate]);

  return (
    <div className="mypageguidelist">
      <div className="chatbot9">
        <img className="box-icon9" alt="" src="main/box1.svg" />
        <div className="intro10">
          <span className="intro-txt9">
            <p className="p26">어려운 단어가 있으신가요?</p>
            <p className="p26">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start9">
          <div className="start-child6" />
          <div className="div163">시작하기</div>
        </div>
        <img className="character-icon9" alt="" src="main/character@2x.png" />
      </div>
      <div className="guidelist">
        <div className="guidelistcontentset">
          <div className="guidelistcontent21">
            <div className="div164">크롬</div>
            <div className="div165">1/10</div>
            <img
              className="guidelistcontentchromeimage-icon"
              alt=""
              src="main/guidelistcontentchromeimage@2x.png"
            />
            <button className="button23" onClick={onButtonClick}>
              바로가기
            </button>
          </div>
          <div className="div166">전자기기</div>
          <div className="guidelistcontent12">
            <div className="div164">지도</div>
            <div className="div165">10/15</div>
            <button className="button23" onClick={onButton1Click}>
              바로가기
            </button>
            <img
              className="guidelistcontentmapimage-icon"
              alt=""
              src="main/guidelistcontentmapimage@2x.png"
            />
          </div>
          <div className="guidelistcontent11">
            <img
              className="guidelistcontentbankimage-icon"
              alt=""
              src="main/guidelistcontentbankimage@2x.png"
            />
            <div className="div164">은행</div>
            <div className="div165">4/12</div>
            <button className="button23" onClick={onButton2Click}>
              바로가기
            </button>
          </div>
          <div className="div171">앱</div>
        </div>
        <div className="scrollbackground1" />
        <div className="guidelistmainbuttonset">
          <div className="mypagemenubutton32">
            <div className="div172">진행 중인 가이드</div>
          </div>
          <div
            className="mypagemenubutton22"
            onClick={onMyPageMenuButton2ContainerClick}
          >
            <div className="div173">보관함</div>
          </div>
          <div
            className="mypagemenubutton12"
            onClick={onMyPageMenuButton1ContainerClick}
          >
            <div className="div174">나의 정보</div>
          </div>
        </div>
      </div>
      <div className="mypagefooter2">
        <div className="copyright12">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext12">
          <div className="div175">고객센터</div>
          <div className="div176">저작권 보호정책</div>
          <div className="div177">개인정보처리방침</div>
          <div className="div178">제휴제안</div>
          <div className="div179">오시는길</div>
          <div className="div180">이용약관</div>
        </div>
        <div className="title14">디지털지름길</div>
        <img className="logo-icon12" alt="" src="main/logo@2x.png" />
      </div>
      <div className="mypageheader2">
        <button
          className="headermyinfobutton8"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="div181">내 정보</div>
        </button>
        <div className="headertitle9" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon11"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div182">디지털지름길</div>
        </div>
        <button
          className="headerbackbutton12"
          onClick={onHeaderBackButtonClick}
        >
          <div className="div183">뒤로가기</div>
        </button>
      </div>
    </div>
  );
};

export default MyPageGuideList;
