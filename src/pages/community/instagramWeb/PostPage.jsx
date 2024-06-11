import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentComponent from "../../../../src/components/community/instagramWeb/CommentComponent";
import "./PostPage.css";

const PostPage = () => {
  const [postData, setPostData] = useState(null);
  const [newComment, setNewComment] = useState("");
  const navigate = useNavigate();
  const { postId } = useParams(); // URL에서 postId를 가져옴

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("postData")) || [];
    const post = data.find((p) => p.id === postId);
    console.log("Loaded post data from localStorage:", post); // 데이터 확인용 로그
    setPostData(post);
  }, [postId]);

  const onPhxBoldIconClick = useCallback(() => {
    navigate("/community/instagramWeb/");
  }, [navigate]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const updatedPostData = { ...postData };
    updatedPostData.comments = updatedPostData.comments || [];
    updatedPostData.comments.push({ author: "Digital_highway", content: newComment });

    // 로컬 스토리지 업데이트
    const data = JSON.parse(localStorage.getItem("postData")) || [];
    const updatedData = data.map((post) =>
      post.id === postId ? updatedPostData : post
    );
    localStorage.setItem("postData", JSON.stringify(updatedData));

    // 상태 업데이트
    setPostData(updatedPostData);
    setNewComment("");
  };

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="outsta-postpage">
      <img
        className="outsta-postimageframe-icon"
        alt="Post"
        src={postData.image || "/community/instagramWeb/postimageframe@2x.png"}
      />
      <div className="outsta-rightarea">
        <div className="outsta-idframe">
          <img
            className="outsta-idframe-child"
            alt=""
            src="/community/instagramWeb/PostPagePicCircle.png"
          />
          <b className="outsta-eyesmag1">{postData.author}</b>
          <img
            className="outsta-phx-bold-icon"
            alt=""
            src="/community/instagramWeb/phxbold.svg"
            onClick={onPhxBoldIconClick}
          />
        </div>
        <div className="outsta-postandcomment">
          <div className="outsta-postcontentscomponent">
            <div className="outsta-orion-world1">{postData.postContent}</div>
            <img
              className="outsta-postcontentscomponent-child"
              alt=""
              src="/community/instagramWeb/ellipse-21@2x.png"
            />
            <div className="outsta-eyesmag2">{postData.author}</div>
          </div>
          {postData.comments &&
            postData.comments.map((comment, index) => (
              <CommentComponent key={index} author={comment.author} content={comment.content} />
            ))}
        </div>
        <div className="outsta-postpagecommentframe">
          <div className="outsta-emojiarea">
            <img
              className="outsta-tablermood-smile-icon"
              alt=""
              src="/community/instagramWeb/tablermoodsmile.svg"
            />
          </div>
          <div className="outsta-commentgroup">
            <div className="outsta-commentgroup-child" />
            <input
              className="outsta-input"
              placeholder="댓글 달기..."
              type="text"
              value={newComment}
              onChange={handleCommentChange}
            />
          </div>
          <button className="outsta-commentwritebutton" onClick={handleAddComment}>
            <div className="outsta-commentwritebutton-child" />
            <b className="outsta-b">게시</b>
          </button>
        </div>
        <div className="outsta-heartviewfreame">
          <img
            className="outsta-postpageheartframe-icon"
            alt=""
            src="/community/instagramWeb/postpageheartframe.svg"
          />
          <div className="outsta-postpagelikeframe">
            <b className="outsta-b1">좋아요</b>
            <b className="outsta-b2">999</b>
            <b className="outsta-b3">개</b>
            <div className="outsta-div">시간</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
