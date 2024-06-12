// CafeSearchAfterPage.jsx

import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PostViewHead from "../../../components/community/naverCafeWeb/PostViewHead";
import PostTable from "../../../components/community/naverCafeWeb/PostTable";
import PageNumberFrame from "../../../components/community/naverCafeWeb/PageNumberFrame";
import CafeSearchbarFrame from "../../../components/community/naverCafeWeb/CafeSearchbarFrame";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafeSearchAfterPage.css";

const CafeSearchAfterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery: initialSearchQuery = "", posts = [] } = location.state;
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    filterPosts();
  }, [searchQuery, posts]);

  const filterPosts = () => {
    
    const filtered = posts.filter(
      (post) =>
        post.title.includes(searchQuery) ||
        post.mainText.includes(searchQuery) ||
        post.writerName.includes(searchQuery)
    );
    setFilteredPosts(filtered);
  };

  const onButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/community/naverCafeWeb/cafehotpostpage");
  }, [navigate]);

  const onTextClick = useCallback((id) => {
    navigate("/community/naverCafeWeb/cafepostview", { state: { id } });
  }, [navigate]);

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onSearchbarButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafesearchafterpage", { state: { searchQuery, posts } });
  }, [navigate, searchQuery, posts]);

  return (
    <div className="ncafe-cafesearchafterpage">
      <img
        className="ncafe-cafesearchafterpage-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
        onClick={onRectangleImageClick}
      />
      <PostViewHead
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
      />
      <PostTable
        posts={filteredPosts}
        onTextClick={onTextClick}
      />
      <PageNumberFrame />
      <CafeSearchbarFrame
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchbarButtonClick={onSearchbarButtonClick}
      />
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafeSearchAfterPage;
