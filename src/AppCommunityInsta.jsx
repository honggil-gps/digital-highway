import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import InstaWebMain from "./pages/community/instagramWeb/InstaWebMain";
import PostPage from "./pages/community/instagramWeb/PostPage";
import WritePost from "./pages/community/instagramWeb/WritePost";

function AppCommunityInsta() {
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
      case "/community/instagramWeb/":
        title = "";
        metaDescription = "";
        break;
      case "/community/instagramWeb/Postpage":
        title = "";
        metaDescription = "";
        break;
      case "/community/instagramWeb/WritePost":
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
      <Route path="/community/instagramWeb/" element={<InstaWebMain />} />
      <Route path="/community/instagramWeb/postpage/:postId" element={<PostPage />} />
      <Route path="/community/instagramWeb/writepost" element={<WritePost />} />
    </Routes>
  );
}
export default AppCommunityInsta;
