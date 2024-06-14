import { useCallback, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BandoMain.css";

const BandoMain = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);
  const [expandedComments, setExpandedComments] = useState({});
  const [views, setViews] = useState({});
  const [comment, setComment] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [userId, setUserId] = useState(null);
  const commentInputRefs = useRef({});

  useEffect(() => {
    fetchPosts();
    fetchUserId();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/community/', { withCredentials: true });
      setPosts(response.data);
      response.data.forEach(post => fetchComments(post._id));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const fetchUserId = async () => {
    try {
      const response = await axios.get('http://localhost:4000/myPage', { withCredentials: true });
      setUserId(response.data.userId);
    } catch (error) {
      console.error('Error fetching user ID:', error);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`http://localhost:4000/community/${postId}`, { withCredentials: true });
      setComments(prevComments => ({ ...prevComments, [postId]: response.data.comments }));
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const onTextClick = useCallback(() => {
    navigate("/community/bandoWeb/postpage");
  }, [navigate]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (postId) => {
    const newComment = {
      commentContent: comment
    };
    try {
      await axios.post(`http://localhost:4000/community/${postId}/addComment`, newComment, { withCredentials: true });
      fetchComments(postId);
      setComment("");
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const toggleExpandPost = (index) => {
    setExpandedPostIndex(expandedPostIndex === index ? null : index);
  };

  const toggleExpandComments = (postId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleLikeClick = async (postId) => {
    try {
      const response = await axios.put(`http://localhost:4000/community/${postId}/updateUps`, {}, { withCredentials: true });
      const updatedPost = response.data.post;

      setPosts((prevPosts) =>
        prevPosts.map((post) => (post._id === postId ? { ...post, ups: updatedPost.ups, likedBy: updatedPost.likedBy } : post))
      );
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handlePostClick = (postId) => {
    setViews((prevViews) => ({
      ...prevViews,
      [postId]: (prevViews[postId] || 0) + 1,
    }));
  };

  const handleCommentFocus = (postId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: true,
    }));
    commentInputRefs.current[postId].scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openModal = (images) => {
    setSelectedImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleModalBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="bandomain">
      <div className="bandosidebarsection">
        <div className="bandosidebar1">
          <div className="bandosidebarbg1" />
          <img
            className="bandoinfoimage-icon1"
            alt=""
            src="/community/BandoWeb/bandoinfoimage@2x.png"
          />
          <div className="bandoinfocontainer1" />
          <div className="bandotitlebox2" />
          <div className="bandomemberbox1" />
          <div className="bandoinfobox1" />
          <div className="bandowritingstartbutton1" onClick={onTextClick}>
            <b className="bandob7" onClick={onTextClick}>
              글쓰기
            </b>
          </div>
          <b className="bandob8">디지털둘레길</b>
          <div className="bandodiv15">멤버 6 • 리더 홍</div>
          <div className="bandodiv16">{`밴드 정보 보기 >`}</div>
          <div className="bandodiv17">
            <p className="bandop5">디지털둘레길을 찾아 떠나는 여행</p>
            <p className="bandop5">여러분도 함께해요</p>
          </div>
        </div>
      </div>
      <div className="bandobodysection">
        <div className="bandopostlisttest">
          <div className="bandopostlistframe1">
            {posts.map((post, index) => (
              <div key={post._id} className={`bandopostframe1 ${post.imageUrl ? '' : 'no-image'}`} onClick={() => handlePostClick(post._id)}>
                <div className="bandouser1">
                  <div className="bandodiv18">{new Date(post.createdAt).toLocaleDateString()}</div>
                  <b className="bandob9">{post.writerName}</b>
                  
                  <div>
                    <img
                      className="mingcutemore-2-fill-icon1"
                      alt=""
                      src="/community/BandoWeb/mingcutemore2fill.svg"
                    />
                  </div>

                  <img
                    className="bandouserimagebox-icon1"
                    alt=""
                    src="/community/BandoWeb/bandouserimagebox@2x.png"
                  />
                  <div className="bandousernamebox1" />
                </div>
                <div className="bandopost1">
                  <div className="bandopostbackground1" />
                  <div className="bandotitlebox3" />
                  <div className="bandotextbox1" />
                  <b className="bandob10">{post.title}</b>
                
                  <div className="bandodiv19">
                    <p
                      className={`bandop555 ${expandedPostIndex === index ? "expanded" : "collapsed"}`}
                      onClick={() => toggleExpandPost(index)}
                    >
                      {post.mainText}
                    </p>
                  </div>
                  {post.imageUrl && post.imageUrl.length > 0 && (
                  <div className="bandobodyuploadimage">
                        {post.imageUrl.length === 1 && (
                          <img src={post.imageUrl[0]} alt="post image 1" className="bandoimageone" />
                        )}
                    {post.imageUrl.length === 2 && (
                      post.imageUrl.map((url, index) => (
                        <img key={index} src={url} alt={`post image ${index}`} className="bandotwo-image" />
                      ))
                    )}
                    {post.imageUrl.length === 3 && (
                      <>
                        <img src={post.imageUrl[0]} alt="post image 1" className="bandothree-image-large" />
                        <div className="bandothree-image-small-container">
                          <img src={post.imageUrl[1]} alt="post image 2" className="bandothree-image-small" />
                          <img src={post.imageUrl[2]} alt="post image 3" className="bandothree-image-small" />
                        </div>
                      </>
                    )}
                    {post.imageUrl.length >= 4 && (
                      <>
                        <img src={post.imageUrl[0]} alt="post image 1" className="bandofour-image-large" />
                        <div className="bandofour-image-small-container">
                          {post.imageUrl.slice(1, 4).map((url, index) => (
                            <img key={index} src={url} alt={`post image ${index + 2}`} className="bandofour-image-small" />
                          ))}
                          {post.imageUrl.length > 4 && (
                            <div className="bandofour-image-small bandomore-images" onClick={() => openModal(post.imageUrl)}>
                              <div className="bandooverlay">더보기 </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  )}

                  <div className="bandopostunderbar1">
                    <div className="bandodiv20">
                      댓글 {comments[post._id] ? comments[post._id].length : 0}
                      {comments[post._id] && comments[post._id].length > 2 && (
                        <button 
                          className="bandocommentviewbutton1" 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpandComments(post._id);
                          }}
                        >
                          <img
                            src={expandedComments[post._id] ? "/community/BandoWeb/bandoArrowUp.png" : "/community/BandoWeb/bandoArrowDown.png"}
                            alt="더보기/접기"
                          />
                        </button>
                      )}
                    </div>
                    <img
                      className="bandoheart-icon"
                      alt="like"
                      src="/community/BandoWeb/bandoheart.svg"
                      onClick={() => handleLikeClick(post._id)}
                    />
                    <div className="bandolikecountbox1">{post.ups}</div>
                    <img
                      className="bando-fa-solideye-icon1"
                      alt=""
                      src="/community/BandoWeb/fasolideye.svg"
                    />
                    <div className="bandoviewcountbox1">{post.views}</div>

                  </div>
                  
                </div>
                <div className="bandolikesharebar1">
                  <div className="bandolikesharebarbg1" />
                  <svg
                    className={`akar-iconsheart1 ${post.likedBy.includes(userId) ? "liked" : ""}`}
                    viewBox="0 0 24 24"
                    fill={post.likedBy.includes(userId) ? "pink" : "none"}
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => handleLikeClick(post._id)}
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                  <div className="bandodiv22" onClick={() => handleLikeClick(post._id)}>좋아요</div>
                  <div className="bandodiv23">공유하기</div>
                  <img
                    className="icon-parkshare1"
                    alt=""
                    src="/community/BandoWeb/iconparkshare.svg"
                  />
                </div>
                
                {comments[post._id] &&
                  comments[post._id].map((comment, commentIndex) => {
                    if (!expandedComments[post._id] && commentIndex >= 2) {
                      return null;
                    }
                    console.log('Comment CreatedAt:', comment.createdAt); // Add this line to log the createdAt value
                    return (
                      <div key={commentIndex} className="bandousercomment2">
                        <div className="bandocommentcontainer2">
                          <img
                            className="bandousercomment-inner"
                            alt=""
                            src="/community/BandoWeb/bandouserimagebox@2x.png"
                          />
                          <b className="bandob11">{comment.writerName}</b>
                        </div>
                        <div className="bandocommentbodybox2">
                          <div className="bandodiv24">
                            {comment._doc.commentContent}
                          </div>
                          <div className="bandodiv25">
                            {new Date(comment._doc.createdAt).toLocaleDateString()} • 🙂 표정짓기
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="bandocomment-input-container" ref={(el) => (commentInputRefs.current[post._id] = el)}>
                  <img
                    className="bandouserimage"
                    alt=""
                    src="/community/BandoWeb/bandouserimagebox@2x.png"
                  />
                  <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    className="bandocomment-input"
                    placeholder="댓글을 남겨주세요."
                    onFocus={() => handleCommentFocus(post._id)}
                  />
                  <button
                    onClick={() => handleCommentSubmit(post._id)}
                    className={`bandosend-button ${comment.trim() ? "active" : ""}`}
                  >
                    보내기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="bandomodal" className={`bandomodal ${modalIsOpen ? 'open' : ''}`} onClick={handleModalBackgroundClick}>
        <div className="bandomodal-content" onClick={(e) => e.stopPropagation()}>
          <span className="bandoclose" onClick={closeModal}>&times;</span>
          {selectedImages.map((url, index) => (
            <img key={index} src={url} alt={`modal image ${index}`} className="bandoimage" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BandoMain;
