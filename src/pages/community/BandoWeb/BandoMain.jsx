// import { useCallback, useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./BandoMain.css";
// import BandoPostPage from "../../../components/community/BandoWeb/BandoPostPage";

// const BandoMain = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);
//   const [comments, setComments] = useState({});
//   const [expandedPostIndex, setExpandedPostIndex] = useState(null);
//   const [expandedComments, setExpandedComments] = useState({});
//   const [likes, setLikes] = useState({});
//   const [views, setViews] = useState({});
//   const [comment, setComment] = useState(""); // comment 변수 정의
//   const commentInputRefs = useRef({}); // 댓글 입력창을 참조하기 위한 ref 객체

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/community/', { withCredentials: true });
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const onTextClick = useCallback(() => {
//     navigate("/community/bandoWeb/postpage");
//   }, [navigate]);

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleCommentSubmit = (postId) => {
//     const newComment = {
//       user: "현재 사용자",
//       content: comment,
//       date: new Date().toISOString().split('T')[0]
//     };
//     addComment(postId, newComment);
//     setComment("");
//   };

//   const toggleExpandPost = (index) => {
//     setExpandedPostIndex(expandedPostIndex === index ? null : index);
//   };

//   const toggleExpandComments = (postId) => {
//     setExpandedComments((prev) => ({
//       ...prev,
//       [postId]: !prev[postId],
//     }));
//   };

//   const handleLikeClick = (postId) => {
//     setLikes((prevLikes) => ({
//       ...prevLikes,
//       [postId]: !prevLikes[postId],
//     }));
//   };

//   const handlePostClick = (postId) => {
//     setViews((prevViews) => ({
//       ...prevViews,
//       [postId]: prevViews[postId] + 1,
//     }));
//   };

//   const handleCommentFocus = (postId) => {
//     setExpandedComments((prev) => ({
//       ...prev,
//       [postId]: true,
//     }));
//     commentInputRefs.current[postId].scrollIntoView({ behavior: "smooth", block: "center" });
//   };

//   return (
//     <div className="bandomain">
//       <div className="bandosidebarsection">
//         <div className="bandosidebar1">
//           <div className="bandosidebarbg1" />
//           <img
//             className="bandoinfoimage-icon1"
//             alt=""
//             src="/community/BandoWeb/bandoinfoimage@2x.png"
//           />
//           <div className="bandoinfocontainer1" />
//           <div className="bandotitlebox2" />
//           <div className="bandomemberbox1" />
//           <div className="bandoinfobox1" />
//           <div className="bandowritingstartbutton1" onClick={onTextClick} />
//           <b className="bandob7" onClick={onTextClick}>
//             글쓰기
//           </b>
//           <b className="bandob8">디지털둘레길</b>
//           <div className="bandodiv15">멤버 6 • 리더 홍</div>
//           <div className="bandodiv16">{`밴드 정보 보기 >`}</div>
//           <div className="bandodiv17">
//             <p className="bandop5">누구나 밴드를 검색해 찾을 수 있고,</p>
//             <p className="bandop5">밴드소개와 게시글을 볼 수 있습니다.</p>
//           </div>
//         </div>
//       </div>
//       <div className="bandobodysection">
//         <div className="bandopostlisttest">
//           <div className="bandopostlistframe1">
//             {posts.map((post, index) => (
//               <div key={post._id} className="bandopostframe1" onClick={() => handlePostClick(post._id)}>
//                 <div className="bandouser1">
//                   <div className="bandodiv18">{post.date}</div>
//                   <b className="bandob9">{post.user}</b>
//                   <img
//                     className="bandouserimagebox-icon1"
//                     alt=""
//                     src="/community/BandoWeb/bandouserimagebox@2x.png"
//                   />
//                   <div className="bandousernamebox1" />
//                 </div>
//                 <div className="bandopost1">
//                   <div className="bandopostbackground1" />
//                   <div className="bandotitlebox3" />
//                   <div className="bandotextbox1" />
//                   <b className="bandob10">{post.title}</b>
//                   <div className="bandodiv19">
//                     <p
//                       className={`bandop555 ${
//                         expandedPostIndex === index
//                           ? "expanded"
//                           : "collapsed"
//                       }`}
//                       onClick={() => toggleExpandPost(index)}
//                     >
//                       {post.content}
//                     </p>
//                   </div>
//                   <img
//                     className="bandobodyimage-icon1"
//                     alt=""
//                     src={post.image || "/community/BandoWeb/bandobodyimage@333x.jpg"}
//                   />
//                   <img
//                     className="mingcutemore-2-fill-icon1"
//                     alt=""
//                     src="/community/BandoWeb/mingcutemore2fill.svg"
//                   />
//                   <div className="bandopostunderbar1" />
//                   <div className="bandocommentlistbox1" />
//                   <div className="bandodiv20">
//                     댓글 {comments[post._id] ? comments[post._id].length : 0}
//                     {comments[post._id] && comments[post._id].length > 2 && (
//                       <button 
//                         className="bandocommentviewbutton1" 
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           toggleExpandComments(post._id);
//                         }}
//                       >
//                         <img
//                           src={expandedComments[post._id] ? "/community/BandoWeb/bandoArrowUp.png" : "/community/BandoWeb/bandoArrowDown.png"}
//                           alt="더보기/접기"
//                         />
//                       </button>
//                     )}
//                   </div>
//                   <img
//                     className="fa-solideye-icon1"
//                     alt=""
//                     src="/community/BandoWeb/fasolideye.svg"
//                   />
//                   <div className="bandoviewcountbox1" />
//                   <div className="bandodiv21">{views[post._id]}</div>
//                   <img
//                     className="bandoheart-icon"
//                     alt="like"
//                     src="/community/BandoWeb/bandoheart.svg"
//                     onClick={() => handleLikeClick(post._id)}
//                   />
//                   <div className="bandolikecountbox1">{likes[post._id] ? 1 : 0}</div>
//                 </div>
//                 <div className="bandolikesharebar1">
//                   <div className="bandolikesharebarbg1" />
//                   <svg
//                     className={`akar-iconsheart1 ${likes[post._id] ? "liked" : ""}`}
//                     viewBox="0 0 24 24"
//                     fill={likes[post._id] ? "pink" : "none"}
//                     stroke="black"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     onClick={() => handleLikeClick(post._id)}
//                   >
//                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
//                   </svg>
//                   <div className="bandodiv22" onClick={() => handleLikeClick(post._id)}>좋아요</div>
//                   <div className="bandodiv23">공유하기</div>
//                   <img
//                     className="icon-parkshare1"
//                     alt=""
//                     src="/community/BandoWeb/iconparkshare.svg"
//                   />
//                 </div>
//                 {comments[post._id] &&
//                   comments[post._id].map((comment, commentIndex) => {
//                     if (
//                       !expandedComments[post._id] &&
//                       commentIndex >= 2
//                     ) {
//                       return null;
//                     }
//                     return (
//                       <div key={commentIndex} className="bandousercomment2">
//                         <div className="bandocommentcontainer2" />
//                         <img
//                           className="bandousercomment-inner"
//                           alt=""
//                           src="/community/BandoWeb/bandouserimagebox@2x.png"
//                         />
//                         <b className="bandob11">{comment.user}</b>
//                         <div className="bandocommentuserbox2" />
//                         <div className="bandocommentbodybox2" />
//                         <div className="bandopostingtimebox2" />
//                         <div className="bandodiv24">{comment.content}</div>
//                         <div className="bandodiv25">{comment.date} • 🙂 표정짓기</div>
//                       </div>
//                     );
//                   })}
//                 <div className="bandocomment-input-container" ref={(el) => (commentInputRefs.current[post._id] = el)}>
//                   <img
//                     className="bandouserimage"
//                     alt=""
//                     src="/community/BandoWeb/bandouserimagebox@2x.png"
//                   />
//                   <input
//                     type="text"
//                     value={comment}
//                     onChange={handleCommentChange}
//                     className="bandocomment-input"
//                     placeholder="댓글을 남겨주세요."
//                     onFocus={() => handleCommentFocus(post._id)} // 댓글 입력창에 포커스가 맞춰졌을 때 모든 댓글을 표시
//                   />
//                   <button
//                     onClick={() => handleCommentSubmit(post._id)}
//                     className={`bandosend-button ${comment.trim() ? "active" : ""}`}
//                   >
//                     보내기
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BandoMain;


import { useCallback, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BandoMain.css";
import BandoPostPage from "../../../components/community/BandoWeb/BandoPostPage";

const BandoMain = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [expandedPostIndex, setExpandedPostIndex] = useState(null);
  const [expandedComments, setExpandedComments] = useState({});
  const [likes, setLikes] = useState({});
  const [views, setViews] = useState({});
  const [comment, setComment] = useState(""); // comment 변수 정의
  const commentInputRefs = useRef({}); // 댓글 입력창을 참조하기 위한 ref 객체

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/community/', { withCredentials: true });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const onTextClick = useCallback(() => {
    navigate("/community/bandoWeb/postpage");
  }, [navigate]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (postId) => {
    const newComment = {
      user: "현재 사용자",
      content: comment,
      date: new Date().toISOString().split('T')[0]
    };
    addComment(postId, newComment);
    setComment("");
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

  const handleLikeClick = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  const handlePostClick = (postId) => {
    setViews((prevViews) => ({
      ...prevViews,
      [postId]: prevViews[postId] + 1,
    }));
  };

  const handleCommentFocus = (postId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [postId]: true,
    }));
    commentInputRefs.current[postId].scrollIntoView({ behavior: "smooth", block: "center" });
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
          <div className="bandowritingstartbutton1" onClick={onTextClick} />
          <b className="bandob7" onClick={onTextClick}>
            글쓰기
          </b>
          <b className="bandob8">디지털둘레길</b>
          <div className="bandodiv15">멤버 6 • 리더 홍</div>
          <div className="bandodiv16">{`밴드 정보 보기 >`}</div>
          <div className="bandodiv17">
            <p className="bandop5">누구나 밴드를 검색해 찾을 수 있고,</p>
            <p className="bandop5">밴드소개와 게시글을 볼 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div className="bandobodysection">
        <div className="bandopostlisttest">
          <div className="bandopostlistframe1">
            {posts.map((post, index) => (
              <div key={post._id} className="bandopostframe1" onClick={() => handlePostClick(post._id)}>
                <div className="bandouser1">
                  <div className="bandodiv18">{post.createdAt}</div> {/* 포스트 생성 날짜 */}
                  <b className="bandob9">{post.writerName}</b> {/* 포스트 작성자 */}
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
                  <b className="bandob10">{post.title}</b> {/* 포스트 제목 */}
                  <div className="bandodiv19">
                    <p
                      className={`bandop555 ${
                        expandedPostIndex === index
                          ? "expanded"
                          : "collapsed"
                      }`}
                      onClick={() => toggleExpandPost(index)}
                    >
                      {post.mainText} {/* 포스트 내용 */}
                    </p>
                  </div>
                  <img
                    className="bandobodyimage-icon1"
                    alt=""
                    src={post.imageUrl || "/community/BandoWeb/bandobodyimage@333x.jpg"}
                  />
                  <img
                    className="mingcutemore-2-fill-icon1"
                    alt=""
                    src="/community/BandoWeb/mingcutemore2fill.svg"
                  />
                  <div className="bandopostunderbar1" />
                  <div className="bandocommentlistbox1" />
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
                    className="fa-solideye-icon1"
                    alt=""
                    src="/community/BandoWeb/fasolideye.svg"
                  />
                  <div className="bandoviewcountbox1" />
                  <div className="bandodiv21">{views[post._id]}</div>
                  <img
                    className="bandoheart-icon"
                    alt="like"
                    src="/community/BandoWeb/bandoheart.svg"
                    onClick={() => handleLikeClick(post._id)}
                  />
                  <div className="bandolikecountbox1">{likes[post._id] ? 1 : 0}</div>
                </div>
                <div className="bandolikesharebar1">
                  <div className="bandolikesharebarbg1" />
                  <svg
                    className={`akar-iconsheart1 ${likes[post._id] ? "liked" : ""}`}
                    viewBox="0 0 24 24"
                    fill={likes[post._id] ? "pink" : "none"}
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
                    if (
                      !expandedComments[post._id] &&
                      commentIndex >= 2
                    ) {
                      return null;
                    }
                    return (
                      <div key={commentIndex} className="bandousercomment2">
                        <div className="bandocommentcontainer2" />
                        <img
                          className="bandousercomment-inner"
                          alt=""
                          src="/community/BandoWeb/bandouserimagebox@2x.png"
                        />
                        <b className="bandob11">{comment.user}</b>
                        <div className="bandocommentuserbox2" />
                        <div className="bandocommentbodybox2" />
                        <div className="bandopostingtimebox2" />
                        <div className="bandodiv24">{comment.content}</div>
                        <div className="bandodiv25">{comment.date} • 🙂 표정짓기</div>
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
                    onFocus={() => handleCommentFocus(post._id)} // 댓글 입력창에 포커스가 맞춰졌을 때 모든 댓글을 표시
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
    </div>
  );
};

export default BandoMain;
