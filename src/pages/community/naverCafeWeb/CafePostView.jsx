import { useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafePostView.css";
import axios from 'axios'

const CafePostView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {id} = location.state;
  const [post, setPost] = useState({});
  const [writerName, setWriterName]=useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/community/${id}`, { withCredentials: true });
        setPost(response.data.post);
        setWriterName(response.data.writerName)
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

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
        <b className="ncafe-b11">{post.title}</b>
        <b className="ncafe-b12">{writerName}</b>
        <img
          className="ncafe-cafepostheadframe-child"
          alt=""
          src="/community/naverCafeWeb/ellipse-2@2x.png"
        />
      </div>
      {/* <img
        className="ncafe-emptyimage-icon"
        alt=""
        src="/community/naverCafeWeb/emptyimage@2x.png"
      /> */}
      <p className="ncafe-postarea">{post.mainText}</p>
      <div className="ncafe-cafepostheartarea">
        <div className="ncafe-div30">좋아요</div>
        <div className="ncafe-div31">{post.ups}</div>
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
        {post.comments && post.comments.map((comment, index) => (
          <div key={index} className="ncafe-usercomment">
            <b className="ncafe-b15">{comment.content}</b>
            <div className="ncafe-userinfo">
              <b className="ncafe-b16">{comment.writer}</b>
              <img
                className="ncafe-userinfo-child"
                alt=""
                src="/community/naverCafeWeb/ellipse-2@2x.png"
              />
            </div>
          </div>
        ))}
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
