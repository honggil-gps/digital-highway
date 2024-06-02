import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext"; // useChatBot context import
import ChatBot from "../../components/ChatBot"; //ChatBot component import
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
          <button className={`button12 ${selectedCategory === "career" ? "selected":""}`} onClick={()=>handleCategoryChange("career")}>취업</button>
          <div className="mainpage-scrapingmainbuttonsetline" />
          <button className={`button13 ${selectedCategory === "welfare" ? "selected":""}`} onClick={()=>handleCategoryChange("welfare")}>복지</button>
          <div className="mainpage-scrapingmainbuttonsetline1" />
          <button className={`button14 ${selectedCategory === "finance" ? "selected":""}`} onClick={()=>handleCategoryChange("finance")}>금융</button>
          <div className="mainpage-scrapingmainbuttonsetline2" />
          <button className={`button15 ${selectedCategory === "health" ? "selected":""}`} onClick={()=>handleCategoryChange("health")}>의료</button>
          <div className="mainpage-scrapingmainbuttonsetline3" />
          <button className={`button16 ${selectedCategory === "culture" ? "selected":""}`} onClick={()=>handleCategoryChange("culture")}>문화</button>
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
      <footer className="mainpage-scrapingfooter">
        <div className="mainpage-copyright5">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="mainpage-footermenutext5">
          <div className="mainpage-div63">고객센터</div>
          <div className="mainpage-div64">저작권 보호정책</div>
          <div className="mainpage-div65">개인정보처리방침</div>
          <div className="mainpage-div66">제휴제안</div>
          <div className="mainpage-div67">오시는길</div>
          <div className="mainpage-div68">이용약관</div>
        </div>
        <div className="mainpage-title6">디지털지름길</div>
        <img className="mainpage-logo-icon5" alt="" src="main/logo@2x.png" />
      </footer>
      <section className="mainpage-chatbot4" >
        <img className="mainpage-box-icon4" alt="" src="main/box.svg" />
        <div className="mainpage-intro5">
          <span className="mainpage-intro-txt4">
            <p className="mainpage-p10">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p10">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start4" onClick={onStartButtonClick}>
          <div className="mainpage-start-child1" />
          <button className="mainpage-button17">시작하기</button>
        </div>
        <img className="mainpage-character-icon4" alt="" src="main/character@2x.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
    </div>
  );
};

export default ScrapingPage;
