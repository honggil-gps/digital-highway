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
      className={`outsta-commentcomponent ${className}`}
      style={commentComponentStyle}
    >
      <div className="outsta-commentframe">
        <img
          className="outsta-commentframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-4@2x.png"
        />
        <div className="outsta-cheese12">cheese12</div>
        <div className="outsta-gemachtt">@gemachtt 서윗치즈맛 먹어보자</div>
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
