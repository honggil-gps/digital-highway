import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CafeMainPage from "./pages/community/naverCafeWeb/CafeMainPage";
import CafeSearchAfterPage from "./pages/community/naverCafeWeb/CafeSearchAfterPage";
import CafeHotpostPage from "./pages/community/naverCafeWeb/CafeHotpostPage";
import CafeWritingPost from "./pages/community/naverCafeWeb/CafeWritingPost";
import CafePostView from "./pages/community/naverCafeWeb/CafePostView";

function AppCommunityNCafe() {
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
      case "/community/naverCafeWeb/":
        title = "";
        metaDescription = "";
        break;
      case "/community/naverCafeWeb/cafesearchafterpage":
        title = "";
        metaDescription = "";
        break;
      case "/community/naverCafeWeb/cafehotpostpage":
        title = "";
        metaDescription = "";
        break;
      case "/community/naverCafeWeb/cafewritingpost":
        title = "";
        metaDescription = "";
        break;
      case "/community/naverCafeWeb/cafepostview":
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
      <Route path="/community/naverCafeWeb/" element={<CafeMainPage />} />
      <Route path="/community/naverCafeWeb/cafesearchafterpage" element={<CafeSearchAfterPage />} />
      <Route path="/community/naverCafeWeb/cafehotpostpage" element={<CafeHotpostPage />} />
      <Route path="/community/naverCafeWeb/cafewritingpost" element={<CafeWritingPost />} />
      <Route path="/community/naverCafeWeb/cafepostview" element={<CafePostView />} />
    </Routes>
  );
}
export default AppCommunityNCafe;
