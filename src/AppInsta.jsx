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

function AppInsta() {
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
      case "/maincontents/insta":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/sertify":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/insert-pw":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/insert-id":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/agreement":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/joininstagram01":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/profileimg":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/profileimg1":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/profileimg2":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/login":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/whenfollowzero":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/feed":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/addcontent":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/feed1":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/feed2":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/mypage":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/mypage1":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/feed3":
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
      <Route path="/maincontents/insta" element={<MainPageSNS />} />
      <Route path="/maincontentssertify" element={<Sertify />} />
      <Route path="maincontents/insert-pw" element={<InsertPW />} />
      <Route path="/maincontents/insert-id" element={<InsertID />} />
      <Route path="/maincontents/agreement" element={<Agreement />} />
      <Route path="/maincontents/joininstagram01" element={<JoinInstagram />} />
      <Route path="/maincontents/profileimg" element={<ProfileImg />} />
      <Route path="/maincontents/profileimg1" element={<ProfileImg1 />} />
      <Route path="/maincontents/profileimg2" element={<ProfileImg2 />} />
      <Route path="/maincontents/login" element={<Login />} />
      <Route path="/maincontents/whenfollowzero" element={<WhenFollowZero />} />
      <Route path="/maincontents/feed" element={<Feed />} />
      <Route path="/maincontents/addcontent" element={<AddContent />} />
      <Route path="/maincontents/feed1" element={<Feed1 />} />
      <Route path="/maincontents/feed2" element={<Feed2 />} />
      <Route path="/maincontents/mypage" element={<MyPage />} />
      <Route path="/maincontents/mypage1" element={<MyPage1 />} />
      <Route path="/maincontents/feed3" element={<Feed3 />} />
    </Routes>
  );
}
export default AppInsta;