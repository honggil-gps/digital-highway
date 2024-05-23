import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { ChatBotProvider } from "./context/ChatBotContext"; // ChatBotContext의 경로 확인
import Intro from "./pages/main/Intro";
import Sns from "./pages/main/Sns";
import DeviceSubPage from "./pages/main/DeviceSubPage";
import MainContents from "./pages/main/MainContents";
import AppGuide from "./pages/main/AppGuide";
import ScrapingPage from "./pages/main/ScrapingPage";
import Info from "./pages/main/Info";
import Login from "./pages/main/Login";
import Join from "./pages/main/Join";
import Home from "./pages/main/Home";
import MyPageMyAccount from "./pages/main/MyPageMyAccount";
import MyPageStorageBox from "./pages/main/MyPageStorageBox";
import MyPageGuideList from "./pages/main/MyPageGuideList";
import DeviceGuide from "./pages/main/DeviceGuide";
import Community from "./pages/main/Community";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sns":
        title = "";
        metaDescription = "";
        break;
      case "/devicesubpage":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents":
        title = "";
        metaDescription = "";
        break;
      case "/appguide":
        title = "";
        metaDescription = "";
        break;
      case "/scrapingpage":
        title = "";
        metaDescription = "";
        break;
      case "/info":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/join":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/mypagemyaccount":
        title = "";
        metaDescription = "";
        break;
      case "/mypagestoragebox":
        title = "";
        metaDescription = "";
        break;
      case "/mypageguidelist":
        title = "";
        metaDescription = "";
        break;
      case "/deviceguide":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      default:
        console.warn('Unknown path:', pathname);
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <ChatBotProvider>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/sns" element={<Sns />} />
        <Route path="/devicesubpage" element={<DeviceSubPage />} />
        <Route path="/maincontents" element={<MainContents />} />
        <Route path="/appguide" element={<AppGuide />} />
        <Route path="/scrapingpage" element={<ScrapingPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypagemyaccount" element={<MyPageMyAccount />} />
        <Route path="/mypagestoragebox" element={<MyPageStorageBox />} />
        <Route path="/mypageguidelist" element={<MyPageGuideList />} />
        <Route path="/deviceguide" element={<DeviceGuide />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </ChatBotProvider>
  );
}
export default App;