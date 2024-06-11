import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import PostViewHead from "../../../components/community/naverCafeWeb/PostViewHead";
import PostTable from "../../../components/community/naverCafeWeb/PostTable";
import PageNumberFrame from "../../../components/community/naverCafeWeb/PageNumberFrame";
import CafeSearchbarFrame from "../../../components/community/naverCafeWeb/CafeSearchbarFrame";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafeHotpostPage.css";

const CafeHotpostPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetchPosts();
  },[])

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:4000/community/',{params:{type:"hot"}},{withCredentials:true});
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

  const onTextClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafepostview");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    // Please sync "CafePostView" to the project
  }, []);

  const onText3Click = useCallback(() => {
    // Please sync "CafePostView" to the project
  }, []);

  const onSearchbarButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafesearchafterpage");
  }, [navigate]);

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  return (
    <div className="ncafe-cafehotpostpage">
      <img
        className="ncafe-cafehotpostpage-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
        onClick={onRectangleImageClick}
      />
      <PostViewHead
        propColor="#248f40"
        onButtonClick={onButtonClick}
        onButton1Click={onButton1Click}
      />
      <PostTable
        posts={posts}
        onTextClick={onTextClick}
      />
      <PageNumberFrame />
      <CafeSearchbarFrame onSearchbarButtonClick={onSearchbarButtonClick} />
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafeHotpostPage;
