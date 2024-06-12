import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InstagramPost.css";

const InstagramPost = ({ className = "", image, title, content, id, onDelete }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

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

  return (
    <div className={`outsta-instagrampost ${className}`}>
      <div className="outsta-instagrampost-parent">
        <img
          className="outsta-instagrampost-child"
          alt="Post"
          src={image || "/community/instagramWeb/rectangle-11@2x.png"}
        />
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
          <b className="outsta-digital-highway2">Digital_highway</b>
        </div>
        <div className="outsta-div6">13시간</div>
      </div>
      <img
        className="outsta-heartandcommenticon"
        alt=""
        src="/community/instagramWeb/heartandcommenticon.svg"
      />
      <div className="outsta-digital-highway3">{title}</div>
      <div className="outsta-orion-world2" onClick={onTextClick}>
        {content}
      </div>
      <div className="outsta-div7" onClick={onTextClick}>
        댓글 24개 모두 보기
      </div>
      <input className="outsta-input2" placeholder="댓글 달기..." type="text" />
      <div className="outsta-likegroup">
        <div className="outsta-div8">좋아요</div>
        <div className="outsta-div9">999</div>
        <div className="outsta-div10">개</div>
      </div>

      {showConfirm && (
        <div className="delete-confirmation">
          <p className="delete-confirmation-guidement" >이 게시물을 삭제하고 싶지 않다면 게시물을 보관할 수 있습니다. <br />보관한 게시물은 회원님만 볼 수 있습니다.</p>
          <button className="delete-confirmation-delete-button" onClick={handleConfirmDelete}>삭제</button>
          <button className="delete-confirmation-cancel-button" onClick={handleCancelDelete}>보관</button>
        </div>
      )}
    </div>
  );
};

InstagramPost.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InstagramPost;
