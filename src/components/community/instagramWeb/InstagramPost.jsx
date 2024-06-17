import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./InstagramPost.css";
import defaultImage from "../../../../public/snail_logo.svg"; // 기본 이미지 경로

const InstagramPost = ({ className = "", images, title, content, id, onDelete, writerName, createdAt, commentCount, likeCount, likeList, userId }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likedBy, setLikeBy] = useState(likeList);
  const [likes, setLikes] = useState(likeCount);
  const [shortContent, setShortContent] = useState(content);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    // 처음 로드될 때 해당 사용자가 이미 좋아요를 눌렀는지 확인
    const checkIfLiked = async () => {
      try {
        if(likedBy.includes(userId)){
          setIsLiked(true);
          console.log(isLiked);
        }
      } catch (error) {
        console.error('Error checking like status:', error);
      }
    };
    checkIfLiked();
  }, [id, userId]);

  useEffect(() => {
    if (content.length > 110) {
      setShortContent(content.substring(0, 110));
      setIsTruncated(true);
    } else {
      setShortContent(content);
      setIsTruncated(false);
    }
  }, [content]);

  const onTextClick = useCallback(() => {
    navigate(`/community/instagramWeb/postpage/${id}`);
  }, [navigate, id]);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  const handleLikeClick = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/community/${id}/updateUps`, {}, { withCredentials: true });
      setLikes(response.data.post.ups);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

  const formatTime = (time) => {
    const postDate = new Date(time);
    const now = new Date();
    const diff = now - postDate;

    const diffInMinutes = Math.floor(diff / (1000 * 60));
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInDays}일 전`;
    }
  };

  return (
    <div className={`outsta-instagrampost ${className}`}>
      <div className="outsta-instagrampost-parent">
        <div className="outsta-instagrampost-scroll">
          {(images.length > 0 ? images : [defaultImage]).map((image, index) => (
            <img
              key={index}
              className="outsta-instagrampost-child"
              alt={`Post ${index}`}
              src={image || defaultImage}
            />
          ))}
        </div>
      </div>
      <div className="outsta-instagrampost-item" />
      <div className="outsta-instagrampost-inner" />
      <div className="outsta-postidframe">
        <img
          className="outsta-postidframe-child"
          alt=""
          src="/community/instagramWeb/PostPagePicCircle.png"
        />
        <img
          className="outsta-iconamoonmenu-kebab-horizonta"
          alt=""
          src="/community/instagramWeb/iconamoonmenukebabhorizontal.svg"
          onClick={handleDeleteClick}
        />
        <div className="outsta-posttitleframe">
          <b className="outsta-digital-highway2">{writerName}</b>
        </div>
        <div className="outsta-div6">{formatTime(createdAt)}</div>
      </div>
      <img
        className="outsta-heartandcommenticon"
        alt="like"
        src={isLiked ? "/community/instagramWeb/filledheartandcomment.svg" : "/community/instagramWeb/phheartandcomment.svg"}
        onClick={handleLikeClick}
      />
      <div className="outsta-digital-highway3">{title}</div>
      <div className="outsta-orion-world2" onClick={onTextClick}>
        {shortContent}
        {isTruncated && <span style={{ color: "gray" }}>...더보기</span>}
      </div>
      <div className="outsta-div7" onClick={onTextClick}>
        댓글 {commentCount}개 모두보기
      </div>
      <input className="outsta-input2" placeholder="댓글 달기..." type="text" />
      <div className="outsta-likegroup">
        <div className="outsta-div8">좋아요</div>
        <div className="outsta-div9">{likes}</div>
        <div className="outsta-div10">개</div>
      </div>

      {showConfirm && (
        <div className="delete-confirmation">
          <p className="delete-confirmation-guidement">이 게시물을 삭제하고 싶지 않다면 게시물을 보관할 수 있습니다.<br />보관한 게시물은 회원님만 볼 수 있습니다.</p>
          <button className="delete-confirmation-delete-button" onClick={handleConfirmDelete}>삭제</button>
          <button className="delete-confirmation-cancel-button" onClick={handleCancelDelete}>보관</button>
        </div>
      )}
    </div>
  );
};

InstagramPost.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string), // 배열로 여러 이미지 지원
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  writerName: PropTypes.string,
  createdAt: PropTypes.string.isRequired, // 작성 시간 추가
  commentCount: PropTypes.number.isRequired, // 댓글 갯수 추가
  likeCount: PropTypes.number.isRequired, // 좋아요 갯수 추가
  userId: PropTypes.string.isRequired, // 사용자 ID 추가
};

export default InstagramPost;
