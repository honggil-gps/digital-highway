import { useMemo } from "react";
import "./CommentComponent.css";
import PropTypes from 'prop-types';

const CommentComponent = ({ className = "", propTop, propOverflow }) => {
  const commentComponentStyle = useMemo(() => {
    return {
      top: propTop,
      overflow: propOverflow,
    };
  }, [propTop, propOverflow]);

  return (
    <div
      className={`commentcomponent ${className}`}
      style={commentComponentStyle}
    >
      <div className="commentframe">
        <img
          className="commentframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-2@2x.png"
        />
        <div className="frame3">
          <div className="cheese12">cheese12</div>
          <div className="gemachtt">@gemachtt 서윗치즈맛 먹어보자</div>
        </div>
      </div>
    </div>
  );
};

CommentComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propOverflow: PropTypes.any,
};

export default CommentComponent;
