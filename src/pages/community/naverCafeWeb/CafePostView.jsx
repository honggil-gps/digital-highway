import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafePostView.css";

const CafePostView = () => {
  const navigate = useNavigate();

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onPostRewriteClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onCommentButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="ncafe-cafepostview">
      <img
        className="ncafe-cafepostview-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
        onClick={onRectangleImageClick}
      />
      <div className="ncafe-cafepostheadframe">
        <b className="ncafe-b11">안녕하세요</b>
        <b className="ncafe-b12">디지털 지름길</b>
        <img
          className="ncafe-cafepostheadframe-child"
          alt=""
          src="/community/naverCafeWeb/ellipse-2@2x.png"
        />
      </div>
      <img
        className="ncafe-emptyimage-icon"
        alt=""
        src="/community/naverCafeWeb/emptyimage@2x.png"
      />
      <div className="ncafe-cafepostheartarea">
        <div className="ncafe-div30">좋아요</div>
        <div className="ncafe-div31">99</div>
        <button className="ncafe-mdiheart-outline">
          <img
            className="ncafe-vector-icon"
            alt=""
            src="/community/naverCafeWeb/iconheart.svg"
          />
        </button>
        <button className="ncafe-postrewrite" onClick={onPostRewriteClick}>
          <div className="ncafe-postrewrite-child" />
          <b className="ncafe-b13">수정</b>
        </button>
        <button className="ncafe-postdelete">
          <div className="ncafe-postrewrite-child" />
          <b className="ncafe-b13">삭제</b>
        </button>
      </div>
      <div className="ncafe-cafecommentlist">
        <div className="ncafe-usercomment">
          <b className="ncafe-b15">이것은 댓글임니다</b>
        </div>
        <div className="ncafe-userinfo">
          <b className="ncafe-b16">디지털 지름길</b>
          <img
            className="ncafe-userinfo-child"
            alt=""
            src="/community/naverCafeWeb/ellipse-2@2x.png"
          />
        </div>
      </div>
      <div className="ncafe-cafecommentlist1">
        <div className="ncafe-usercomment">
          <b className="ncafe-b15">이것은 댓글임니다</b>
        </div>
        <div className="ncafe-userinfo">
          <b className="ncafe-b16">디지털 지름길</b>
          <img
            className="ncafe-userinfo-child"
            alt=""
            src="/community/naverCafeWeb/ellipse-2@2x.png"
          />
        </div>
      </div>
      <div className="ncafe-cafeaddcomment">
        <div className="ncafe-cafecommenthead">
          <button className="ncafe-commentbutton" onClick={onCommentButtonClick}>
            <div className="ncafe-commentbutton-child" />
            <b className="ncafe-b19">댓글 등록</b>
          </button>
          <div className="ncafe-userinfo2">
            <b className="ncafe-b16">디지털 지름길</b>
            <img
              className="ncafe-userinfo-child"
              alt=""
              src="/community/naverCafeWeb/ellipse-2@2x.png"
            />
          </div>
        </div>
        <div className="ncafe-cafecommenttyping">
          <img
            className="ncafe-cafecommenttyping-child"
            alt=""
            src="/community/naverCafeWeb/rectangle-8.svg"
          />
          <textarea className="ncafe-textarea" />
        </div>
      </div>
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafePostView;
