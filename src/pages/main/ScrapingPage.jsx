import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ScrapingPage.css";
import Career from "../Information/Career";
import Culture from "../Information/Culture";
import Finance from "../Information/Finance";
import Welfare from "../Information/Welfare";
import Health from "../Information/Health";

const ScrapingPage = () => {
  const navigate = useNavigate();
  const [ selectedCategory, setSelectedCategory] = useState("culture");

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);
  
  const onHeaderMyinfoButtonContainerClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);
//카테고리 변경 함수
const handleCategoryChange = (category) => {
  setSelectedCategory(category);
}

// 선택된 카테고리에 따라 해당 컴포넌트를 렌더링
let selectedComponent;
switch (selectedCategory) {
  case "career":
    selectedComponent = <Career />;
    break;
  case "culture":
    selectedComponent = <Culture />;
    break;
  case "finance":
    selectedComponent = <Finance />;
    break;
  case "health":
    selectedComponent = <Health />;
    break;
  case "welfare":
    selectedComponent = <Welfare />;
    break;
  default:
    selectedComponent = <Culture />;
}

  return (
    <div className="scrapingpage">
      <main className="scrapingmain">
        <div className="scrapingcontent">
          {/* 선택된 카테고리에 따라 해당 컴포넌트 렌더링 */}
          {selectedComponent}
        </div> 
        <div className="scrapingmainbuttonset">
          <button className={`button12 ${selectedCategory === "career" ? "selected":""}`} onClick={()=>handleCategoryChange("career")}>취업</button>
          <div className="scrapingmainbuttonsetline" />
          <button className={`button13 ${selectedCategory === "welfare" ? "selected":""}`} onClick={()=>handleCategoryChange("welfare")}>복지</button>
          <div className="scrapingmainbuttonsetline1" />
          <button className={`button14 ${selectedCategory === "finance" ? "selected":""}`} onClick={()=>handleCategoryChange("finance")}>금융</button>
          <div className="scrapingmainbuttonsetline2" />
          <button className={`button15 ${selectedCategory === "health" ? "selected":""}`} onClick={()=>handleCategoryChange("health")}>의료</button>
          <div className="scrapingmainbuttonsetline3" />
          <button className={`button16 ${selectedCategory === "culture" ? "selected":""}`} onClick={()=>handleCategoryChange("culture")}>문화</button>
        </div>
      </main>
      <header className="scrapingheader">
        <div
          className="headermyinfobutton2"
          onClick={onHeaderMyinfoButtonContainerClick}
        >
          <div className="div60">내 정보</div>
        </div>
        <div className="headertitle3" onClick={onLogoContainerClick}>
          <img
            className="headertitleimage-icon5"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div61">디지털지름길</div>
        </div>
        <div
          className="headerbackbutton6"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="div62">뒤로가기</div>
        </div>
      </header>
      <footer className="scrapingfooter">
        <div className="copyright5">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext5">
          <div className="div63">고객센터</div>
          <div className="div64">저작권 보호정책</div>
          <div className="div65">개인정보처리방침</div>
          <div className="div66">제휴제안</div>
          <div className="div67">오시는길</div>
          <div className="div68">이용약관</div>
        </div>
        <div className="title6">디지털지름길</div>
        <img className="logo-icon5" alt="" src="main/logo@2x.png" />
      </footer>
      <section className="chatbot4">
        <img className="box-icon4" alt="" src="main/box.svg" />
        <div className="intro5">
          <span className="intro-txt4">
            <p className="p10">어려운 단어가 있으신가요?</p>
            <p className="p10">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start4">
          <div className="start-child1" />
          <button className="button17">시작하기</button>
        </div>
        <img className="character-icon4" alt="" src="main/character@2x.png" />
      </section>
    </div>
  );
};

export default ScrapingPage;
