import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import InstaWebMain from "./pages/community/instagramWeb/InstaWebMain";
import WritePost from "./pages/community/instagramWeb/WritePost";
import PostPage from "./pages/community/instagramWeb/PostPage";

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
      case "/writepost":
        title = "";
        metaDescription = "";
        break;
      case "/postpage":
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
      <Route path="/" element={<InstaWebMain />} />
      <Route path="/writepost" element={<WritePost />} />
      <Route path="/postpage" element={<PostPage />} />
    </Routes>
  );
}
export default App;
