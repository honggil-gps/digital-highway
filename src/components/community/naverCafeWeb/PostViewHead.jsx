import { useMemo,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./PostViewHead.css";


const PostViewHead = ({
  className = "",
  propColor,
  onButtonClick,
  onButton1Click,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);




  return (
    <div className={`postviewhead ${className}`}>
      <button className="button" onClick={onButtonClick}>
        전체글보기
      </button>
      <button className="button1" onClick={onButton1Click} style={buttonStyle}>
        인기글보기
      </button>
    </div>
  );
};

PostViewHead.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,

  /** Action props */
  onButtonClick: PropTypes.func,
  onButton1Click: PropTypes.func,
};

export default PostViewHead;
