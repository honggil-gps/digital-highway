import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ScrapingPage.css";

const ScrapingPage = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate])

  const onBackContainerClick = useCallback(() => {
    navigate("/info");
  }, [navigate]);

  return (
    <div className="scrapingpage">
      <div className="scrapingpage1">
        <div className="header7">
          <div className="box14" />
          <div className="logo7">
            <div className="div86" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon7" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode7">
            <div className="rectangle-parent4">
              <div className="group-child4" />
              <div className="div87">내 정보</div>
            </div>
          </div>
          <div className="back7" onClick={onBackContainerClick}>
            <div className="group-child4" />
            <div className="div88">뒤로가기</div>
          </div>
        </div>
        <div className="body3">
          <div className="chatbot4">
            <img className="box-icon4" alt="" src="main/box.svg" />
            <div className="intro5">
              <span className="intro-txt4">
                <p className="p14">어려운 단어가 있으신가요?</p>
                <p className="p14">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start4">
              <div className="start-child2" />
              <div className="div89">시작하기</div>
            </div>
            <img className="character-icon4" alt="" src="main/character@2x.png" />
          </div>
          <div className="scraping" />
          <div className="menu8">
            <div className="menu-child1" />
            <div className="div90">취업</div>
            <div className="menu-child2" />
            <div className="div91">복지</div>
            <div className="menu-child3" />
            <div className="div92">금융</div>
            <div className="menu-child4" />
            <div className="div93">의료</div>
            <div className="menu-child5" />
            <div className="div94">문화</div>
          </div>
        </div>
        <div className="footer7">
          <div className="box15" />
          <div className="menu9">
            <div className="div95">이용약관</div>
            <div className="div95">오시는길</div>
            <div className="div95">제휴제안</div>
            <div className="div95">개인정보처리방침</div>
            <div className="div95">저작권 보호정책</div>
            <div className="div95">고객센터</div>
          </div>
          <div className="copyright7">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon7" alt="" src="main/logo@2x.png" />
          <div className="title8">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default ScrapingPage;
