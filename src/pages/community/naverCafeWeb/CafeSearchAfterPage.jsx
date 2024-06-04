import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PostViewHead from "../../../components/community/naverCafeWeb/PostViewHead";
import PostTable from "../../../components/community/naverCafeWeb/PostTable";
import PageNumberFrame from "../../../components/community/naverCafeWeb/PageNumberFrame";
import CafeSearchbarFrame from "../../../components/community/naverCafeWeb/CafeSearchbarFrame";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafeSearchAfterPage.css";

const CafeSearchAfterPage = () => {
  const navigate = useNavigate();

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

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

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
        onTextClick={onTextClick}
        onText2Click={onText2Click}
        onText3Click={onText3Click}
      />
      <PageNumberFrame />
      <CafeSearchbarFrame />
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafeSearchAfterPage;
