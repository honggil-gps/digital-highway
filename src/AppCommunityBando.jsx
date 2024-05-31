import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BandoMain from "./pages/community/BandoWeb/BandoMain";
import BandoPostPage from "./components/community/BandoWeb/BandoPostPage";

function AppCommunityBando() {
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
      case "/community/bandoWeb/":
        title = "";
        metaDescription = "";
        break;
      case "/community/bandoWeb/postpage":
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
      <Route path="/community/bandoWeb/" element={<BandoMain />} />
      <Route path="/community/bandoWeb/postpage/" element={<BandoPostPage />} />
    </Routes>
  );
}
export default AppCommunityBando;
