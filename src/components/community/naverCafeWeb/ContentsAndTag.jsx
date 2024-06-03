import PropTypes from "prop-types";
import "./ContentsAndTag.css";

const ContentsAndTag = ({ className = "" }) => {
  return (
    <div className={`contentsandtag ${className}`}>
      <div className="postcontentswriting">
        <textarea className="textarea2" placeholder="내용을 입력해 주세요." />
      </div>
      <div className="taginput">
        <div className="taginput-child" />
        <input
          className="input2"
          placeholder="#태그를 입력해주세요"
          type="text"
        />
      </div>
    </div>
  );
};

ContentsAndTag.propTypes = {
  className: PropTypes.string,
};

export default ContentsAndTag;
