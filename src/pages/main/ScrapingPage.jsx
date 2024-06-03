import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; // useChatBot context import
import ChatBot from "../../components/ChatBot"; //ChatBot component import
import MainFooter from "../../components/main/MainFooter";
import "./ScrapingPage.css";
import Career from "../Information/Career";
import Culture from "../Information/Culture";
import Finance from "../Information/Finance";
import Welfare from "../Information/Welfare";
import Health from "../Information/Health";

const ScrapingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.selectedCategory);
  const { isChatBotActive , activateChatBot, chatBotStyle} = useChatBot(); // chatbot functions

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

const onStartButtonClick = () => {
  console.log('Start button clicked');
  try {
    activateChatBot();
  } catch (error) {
    console.error('Error activating ChatBot:', error);
  }
};

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
    <div className="mainpage-scrapingpage">
      <main className="mainpage-scrapingmain">
        <div className="mainpage-scrapingcontent">
          {/* 선택된 카테고리에 따라 해당 컴포넌트 렌더링 */}
          {selectedComponent}
        </div> 
        <div className="mainpage-scrapingmainbuttonset">
          <button className={`mainpage-button12 ${selectedCategory === "career" ? "selected":""}`} onClick={()=>handleCategoryChange("career")}>취업</button>
          <div className="mainpage-scrapingmainbuttonsetline" />
          <button className={`mainpage-button13 ${selectedCategory === "welfare" ? "selected":""}`} onClick={()=>handleCategoryChange("welfare")}>복지</button>
          <div className="mainpage-scrapingmainbuttonsetline1" />
          <button className={`mainpage-button14 ${selectedCategory === "finance" ? "selected":""}`} onClick={()=>handleCategoryChange("finance")}>금융</button>
          <div className="mainpage-scrapingmainbuttonsetline2" />
          <button className={`mainpage-button15 ${selectedCategory === "health" ? "selected":""}`} onClick={()=>handleCategoryChange("health")}>의료</button>
          <div className="mainpage-scrapingmainbuttonsetline3" />
          <button className={`mainpage-button16 ${selectedCategory === "culture" ? "selected":""}`} onClick={()=>handleCategoryChange("culture")}>문화</button>
        </div>
      </main>
      <header className="mainpage-scrapingheader">
        <div
          className="mainpage-headermyinfobutton2"
          onClick={onHeaderMyinfoButtonContainerClick}
        >
          <div className="mainpage-div60">내 정보</div>
        </div>
        <div className="mainpage-headertitle3" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon5"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div61">디지털지름길</div>
        </div>
        <div
          className="mainpage-headerbackbutton6"
          onClick={onHeaderBackButtonContainerClick}
        >
          <div className="mainpage-div62">뒤로가기</div>
        </div>
      </header>
      <section className="mainpage-chatbot4" >
        <img className="mainpage-box-icon4" alt="" src="main/box.svg" />
        <div className="mainpage-intro5">
          <span className="mainpage-intro-txt4">
            <p className="mainpage-p10">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p10">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start4" onClick={onStartButtonClick}>
          <div className="mainpage-start-child1">
            <button className="mainpage-button17">시작하기</button>
          </div>
        </div>
        <img className="mainpage-character-icon4" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      <MainFooter />
    </div>
  );
};

export default ScrapingPage;
