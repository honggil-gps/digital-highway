import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPageSNS from "./pages/appguide/instagram/MainPageSNS";
import Sertify from "./pages/appguide/instagram/Sertify";
import InsertPW from "./pages/appguide/instagram/InsertPW";
import InsertID from "./pages/appguide/instagram/InsertID";
import Agreement from "./pages/appguide/instagram/Agreement";
import JoinInstagram from "./pages/appguide/instagram/JoinInstagram";
import ProfileImg from "./pages/appguide/instagram/ProfileImg";
import ProfileImg1 from "./pages/appguide/instagram/ProfileImg1";
import ProfileImg2 from "./pages/appguide/instagram/ProfileImg2";
import Login from "./pages/appguide/instagram/Login";
import WhenFollowZero from "./pages/appguide/instagram/WhenFollowZero";
import Feed from "./pages/appguide/instagram/Feed";
import AddContent from "./pages/appguide/instagram/AddContent";
import Feed1 from "./pages/appguide/instagram/Feed1";
import Feed2 from "./pages/appguide/instagram/Feed2";
import MyPage from "./pages/appguide/instagram/MyPage";
import MyPage1 from "./pages/appguide/instagram/MyPage1";
import Feed3 from "./pages/appguide/instagram/Feed3";

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
      case "/sertify":
        title = "";
        metaDescription = "";
        break;
      case "/insert-pw":
        title = "";
        metaDescription = "";
        break;
      case "/insert-id":
        title = "";
        metaDescription = "";
        break;
      case "/agreement":
        title = "";
        metaDescription = "";
        break;
      case "/joininstagram01":
        title = "";
        metaDescription = "";
        break;
      case "/profileimg":
        title = "";
        metaDescription = "";
        break;
      case "/profileimg1":
        title = "";
        metaDescription = "";
        break;
      case "/profileimg2":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/whenfollowzero":
        title = "";
        metaDescription = "";
        break;
      case "/feed":
        title = "";
        metaDescription = "";
        break;
      case "/addcontent":
        title = "";
        metaDescription = "";
        break;
      case "/feed1":
        title = "";
        metaDescription = "";
        break;
      case "/feed2":
        title = "";
        metaDescription = "";
        break;
      case "/mypage":
        title = "";
        metaDescription = "";
        break;
      case "/mypage1":
        title = "";
        metaDescription = "";
        break;
      case "/feed3":
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
      <Route path="/" element={<MainPageSNS />} />
      <Route path="/sertify" element={<Sertify />} />
      <Route path="/insert-pw" element={<InsertPW />} />
      <Route path="/insert-id" element={<InsertID />} />
      <Route path="/agreement" element={<Agreement />} />
      <Route path="/joininstagram01" element={<JoinInstagram />} />
      <Route path="/profileimg" element={<ProfileImg />} />
      <Route path="/profileimg1" element={<ProfileImg1 />} />
      <Route path="/profileimg2" element={<ProfileImg2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/whenfollowzero" element={<WhenFollowZero />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/addcontent" element={<AddContent />} />
      <Route path="/feed1" element={<Feed1 />} />
      <Route path="/feed2" element={<Feed2 />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage1" element={<MyPage1 />} />
      <Route path="/feed3" element={<Feed3 />} />
    </Routes>
  );
}
export default App;
