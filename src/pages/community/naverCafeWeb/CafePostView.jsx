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
    <div className="cafepostview">
      <img
        className="cafepostview-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
        onClick={onRectangleImageClick}
      />
      <div className="cafepostheadframe">
        <b className="b11">안녕하세요</b>
        <b className="b12">디지털 지름길</b>
        <img
          className="cafepostheadframe-child"
          alt=""
          src="/community/naverCafeWeb/ellipse-2@2x.png"
        />
      </div>
      <img
        className="emptyimage-icon"
        alt=""
        src="/community/naverCafeWeb/emptyimage@2x.png"
      />
      <div className="cafepostheartarea">
        <div className="div30">좋아요</div>
        <div className="div31">99</div>
        <button className="mdiheart-outline">
          <img
            className="vector-icon"
            alt=""
            src="/community/naverCafeWeb/iconheart.svg"
          />
        </button>
        <button className="postrewrite" onClick={onPostRewriteClick}>
          <div className="postrewrite-child" />
          <b className="b13">수정</b>
        </button>
        <button className="postdelete">
          <div className="postrewrite-child" />
          <b className="b13">삭제</b>
        </button>
      </div>
      <div className="cafecommentlist">
        <div className="usercomment">
          <b className="b15">이것은 댓글임니다</b>
        </div>
        <div className="userinfo">
          <b className="b16">디지털 지름길</b>
          <img
            className="userinfo-child"
            alt=""
            src="/community/naverCafeWeb/ellipse-2@2x.png"
          />
        </div>
      </div>
      <div className="cafecommentlist1">
        <div className="usercomment">
          <b className="b15">이것은 댓글임니다</b>
        </div>
        <div className="userinfo">
          <b className="b16">디지털 지름길</b>
          <img
            className="userinfo-child"
            alt=""
            src="/community/naverCafeWeb/ellipse-2@2x.png"
          />
        </div>
      </div>
      <div className="cafeaddcomment">
        <div className="cafecommenthead">
          <button className="commentbutton" onClick={onCommentButtonClick}>
            <div className="commentbutton-child" />
            <b className="b19">댓글 등록</b>
          </button>
          <div className="userinfo2">
            <b className="b16">디지털 지름길</b>
            <img
              className="userinfo-child"
              alt=""
              src="/community/naverCafeWeb/ellipse-2@2x.png"
            />
          </div>
        </div>
        <div className="cafecommenttyping">
          <img
            className="cafecommenttyping-child"
            alt=""
            src="/community/naverCafeWeb/rectangle-8.svg"
          />
          <textarea className="textarea" />
        </div>
      </div>
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafePostView;
