import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css";

const Info = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate])

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onJobImageClick = useCallback(() => {
    navigate("/scrapingpage");
  }, [navigate]);

  const onWelfareImageClick = useCallback(() => {
    navigate("/scrapingpage");
  }, [navigate]);

  const onFinanceImageClick = useCallback(() => {
    navigate("/scrapingpage");
  }, [navigate]);

  const onMedicalImageClick = useCallback(() => {
    navigate("/scrapingpage");
  }, [navigate]);

  const onCultureImageClick = useCallback(() => {
    navigate("/scrapingpage");
  }, [navigate]);

  return (
    <div className="info1">
      <div className="info2">
        <div className="header6">
          <div className="box12" />
          <div className="logo6">
            <div className="div71" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon6" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode6">
            <div className="rectangle-parent3">
              <div className="group-child3" />
              <div className="div72">내 정보</div>
            </div>
          </div>
          <div className="back6" onClick={onBackContainerClick}>
            <div className="group-child3" />
            <div className="div73">뒤로가기</div>
          </div>
        </div>
        <div className="body2">
          <div className="chatbot3">
            <img className="box-icon3" alt="" src="main/box.svg" />
            <div className="intro4">
              <span className="intro-txt3">
                <p className="p10">어려운 단어가 있으신가요?</p>
                <p className="p10">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start3">
              <div className="start-child1" />
              <div className="div74">시작하기</div>
            </div>
            <img className="character-icon3" alt="" src="main/character@2x.png" />
          </div>
          <img
            className="job-icon"
            alt=""
            src="main/job@2x.png"
            onClick={onJobImageClick}
          />
          <img
            className="welfare-icon"
            alt=""
            src="main/welfare@2x.png"
            onClick={onWelfareImageClick}
          />
          <img
            className="finance-icon"
            alt=""
            src="main/finance@2x.png"
            onClick={onFinanceImageClick}
          />
          <img
            className="medical-icon"
            alt=""
            src="main/medical@2x.png"
            onClick={onMedicalImageClick}
          />
          <img
            className="culture-icon"
            alt=""
            src="main/culture@2x.png"
            onClick={onCultureImageClick}
          />
          <div className="title6">
            정보제공
            <p className="desc">항목을 선택하세요</p>
          </div>
          <div className="info3">
            <div className="info-item" />
            <div className="div75">
              <p className="p10">
                여기저기 흩어져 있는 유익한 정보들을 모았습니다
              </p>
              <p className="p10">
                정보제공 페이지에서 생활 속에 필요한 지식을 얻어보세요!
              </p>
            </div>
          </div>
          <div className="menu6">
            <div className="menu-child" />
            <div className="div76">커뮤니티</div>
            <div className="menu-item" />
            <div className="div77">전자기기 가이드</div>
            <div className="menu-inner" />
            <div className="div78">앱 배우기</div>
            <div className="line-div" />
            <div className="div79">정보제공</div>
          </div>
        </div>
        <div className="footer6">
          <div className="box13" />
          <div className="menu7">
            <div className="div80">이용약관</div>
            <div className="div80">오시는길</div>
            <div className="div80">제휴제안</div>
            <div className="div80">개인정보처리방침</div>
            <div className="div80">저작권 보호정책</div>
            <div className="div80">고객센터</div>
          </div>
          <div className="copyright6">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon6" alt="" src="main/logo@2x.png" />
          <div className="title7">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
