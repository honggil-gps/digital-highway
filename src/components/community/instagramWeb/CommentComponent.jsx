import { useMemo } from "react";
import "./CommentComponent.css";
import PropTypes from 'prop-types';

const CommentComponent = ({ className = "", propTop }) => {
  const commentComponentStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`commentcomponent ${className}`}
      style={commentComponentStyle}
    >
      <div className="commentframe">
        <img
          className="commentframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-4@2x.png"
        />
        <div className="cheese12">cheese12</div>
        <div className="gemachtt">@gemachtt 서윗치즈맛 먹어보자</div>
      </div>
    </div>
  );
};

CommentComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default CommentComponent;
