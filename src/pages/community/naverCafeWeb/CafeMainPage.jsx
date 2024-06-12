import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostViewHead from "../../../components/community/naverCafeWeb/PostViewHead";
import PostTable from "../../../components/community/naverCafeWeb/PostTable";
import PageNumberFrame from "../../../components/community/naverCafeWeb/PageNumberFrame";
import CafeSearchbarFrame from "../../../components/community/naverCafeWeb/CafeSearchbarFrame";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafeMainPage.css";

const CafeMainPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, [searchQuery]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4000/community/', { withCredentials: true });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/community/naverCafeWeb/cafehotpostpage");
  }, [navigate]);

  const onTextClick = useCallback((id) => {
    navigate("/community/naverCafeWeb/cafepostview", { state: { id } });
  }, [navigate]);

  const onSearchbarButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafesearchafterpage", { state: { searchQuery, posts } });
  }, [navigate, searchQuery, posts]);

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  // 페이지네이션 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 현재 페이지의 게시물 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="ncafe-cafemainpage">
      <img
        className="ncafe-cafemainpage-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
      />
      <PostViewHead
        propColor="#000"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
      />
      <PostTable
        posts={currentPosts}
        onTextClick={onTextClick}
      />
      <PageNumberFrame
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <CafeSearchbarFrame
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchbarButtonClick={onSearchbarButtonClick}
      />
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafeMainPage;
