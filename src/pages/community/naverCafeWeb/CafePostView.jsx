import { useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafePostView.css";
import axios from 'axios';

const CafePostView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [writerName, setWriterName] = useState("");
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/community/${id}`, { withCredentials: true });
        setPost(response.data.post);
        setWriterName(response.data.writerName);
        setComments(response.data.comments);
        setLikes(response.data.post.ups);
        const response1 = await axios.get('http://localhost:4000/myPage',{withCredentials:true});
        setUser(response1.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4000/community/${postId}/deletePost`);
      console.log('Post deleted successfully');
      navigate("/community/naverCafeWeb/");
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleDeleteButtonClick = () => {
    deletePost(post._id);
  };

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onPostRewriteClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafeupdatepost",{state:{id:id}});
  }, [navigate]);

  const onCommentButtonClick = useCallback(async () => {
    if (!commentContent.trim()) {
      return;
    }
    try {
      await axios.post(`http://localhost:4000/community/${id}/addComment`, { commentContent }, { withCredentials: true });
      setCommentContent("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }, [commentContent, navigate]);

  const likeButton = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/community/${id}/updateUps`, {}, { withCredentials: true });
      setLikes(response.data.post.ups)
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

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
      <p className="ncafe-postarea">{post.mainText}</p>
      {post.imageUrl && post.imageUrl.length > 0 && (
        <div className="ncafe-post-images">
          {post.imageUrl.map((url, index) => (
            <img key={index} src={url} alt={`post image ${index}`} />
          ))}
        </div>
      )}
      <div className="ncafe-cafepostheartarea">
        <div className="ncafe-div30">좋아요</div>
        <div className="ncafe-div31">{likes}</div>
        <button className="ncafe-mdiheart-outline" onClick={likeButton}>
          <img
            className="ncafe-vector-icon"
            alt=""
            src="/community/naverCafeWeb/iconheart.svg"
          />
        </button>
        {writerName === user.userID && (
          <>
            <button className="ncafe-postrewrite" onClick={onPostRewriteClick}>
              <div className="ncafe-postrewrite-child" />
              <b className="ncafe-b13">수정</b>
            </button>
            <button className="ncafe-postdelete" onClick={handleDeleteButtonClick}>
              <div className="ncafe-postrewrite-child" />
              <b className="ncafe-b13">삭제</b>
            </button>
          </>
        )}
      </div>
      <div className="parents">
      <div className="ncafe-cafecommentlist">
        {comments.map((comment, index) => (
          <div key={index} className="ncafe-usercomment">
            <div className="ncafe-userinfo">
              <b className="ncafe-b16">{comment.writerName}</b>
              <img
                className="ncafe-userinfo-child"
                alt=""
                src="/community/naverCafeWeb/ellipse-2@2x.png"
              />
            </div>
            <b className="ncafe-b15">{comment._doc.commentContent}</b>
          </div>
        ))}
      <div className="ncafe-cafeaddcomment">
        <div className="ncafe-cafecommenthead">
          <button className="ncafe-commentbutton" onClick={onCommentButtonClick}>
            <div className="ncafe-commentbutton-child" />
            <b className="ncafe-b19">댓글 등록</b>
          </button>
          <div className="ncafe-userinfo2">
            <b className="ncafe-b16">{user.userID}</b>
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
          <textarea
            placeholder="댓글을 입력하세요."
            className="ncafe-textarea"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          </div>
        </div>
      </div>
      </div>
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafePostView;
