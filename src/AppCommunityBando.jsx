import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation, useNavigate } from "react-router-dom";
import BandoMain from "./pages/community/BandoWeb/BandoMain";
import BandoPostPage from "./components/community/BandoWeb/BandoPostPage";

function AppCommunityBando() {
  const action = useNavigationType();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [posts, setPosts] = useState([
    {
      date: "2024.05.31",
      title: "연우님 보고싶다",
      content: "글 내용 냥냥",
      user: "지름길고수",
    }
  ]);

  const addPost = (title, content) => {
    const newPost = {
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      user: "새 유저",  // 예시로 유저명 추가
    };
    setPosts([newPost, ...posts]);
    navigate("/community/bandoWeb/");
  };

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/community/bandoWeb/':
        title = 'Bando Main';
        metaDescription = 'Welcome to the Bando Main Page';
        break;
      case '/community/bandoWeb/postpage':
        title = 'Bando Post Page';
        metaDescription = 'Create a new post on Bando';
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
    <Routes>
      <Route path="/community/bandoWeb/" element={<BandoMain posts={posts} />} />
      <Route path="/community/bandoWeb/postpage" element={<BandoPostPage addPost={addPost} />} />
    </Routes>
  );
}

export default AppCommunityBando;