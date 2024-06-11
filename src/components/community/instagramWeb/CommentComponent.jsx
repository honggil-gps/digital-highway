import React from "react";
import PropTypes from "prop-types";
import "./CommentComponent.css";

const CommentComponent = ({ className = "", author, content }) => {
  return (
    <div className={`outsta-commentcomponent ${className}`}>
      <div className="outsta-commentframe">
        <img
          className="outsta-commentframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-4@2x.png"
        />
        <div className="outsta-cheese12">{author}</div>
        <div className="outsta-gemachtt">{content}</div>
      </div>
    </div>
  );
};

CommentComponent.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommentComponent;
