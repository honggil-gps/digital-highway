import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Intro from "./pages/main/Intro";
import Home from "./pages/main/Home";
import DeviceSubPage from "./pages/main/DeviceSubPage";
import Join from "./pages/main/Join";
import Login from "./pages/main/Login";
import MyPage from "./pages/main/MyPage";
import Info from "./pages/main/Info";
import ScrapingPage from "./pages/main/ScrapingPage";
import MainContents from "./pages/main/MainContents";
import DeviceGuide from "./pages/main/DeviceGuide";
import Community from "./pages/main/Community";
import Sns from "./pages/main/Sns";
import AppGuide from "./pages/main/AppGuide";

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
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/devicesubpage":
        title = "";
        metaDescription = "";
        break;
      case "/join":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/mypage":
        title = "";
        metaDescription = "";
        break;
      case "/info":
        title = "";
        metaDescription = "";
        break;
      case "/scrapingpage":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents":
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
      case "/sns":
        title = "";
        metaDescription = "";
        break;
      case "/appguide":
        title = "";
        metaDescription = "";
        break;
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
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/devicesubpage" element={<DeviceSubPage />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/info" element={<Info />} />
      <Route path="/scrapingpage" element={<ScrapingPage />} />
      <Route path="/maincontents" element={<MainContents />} />
      <Route path="/deviceguide" element={<DeviceGuide />} />
      <Route path="/community" element={<Community />} />
      <Route path="/sns" element={<Sns />} />
      <Route path="/appguide" element={<AppGuide />} />
    </Routes>
  );
}
export default App;
