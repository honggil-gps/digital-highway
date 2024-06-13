import PropTypes from "prop-types";
import "./ContentsAndTag.css";

const ContentsAndTag = ({ className = "", content, setContent, tags, setTags}) => {
  return (
    <div className={`ncafe-contentsandtag ${className}`}>
      <div className="ncafe-postcontentswriting">
        <textarea
          className="ncafe-textarea2"
          placeholder="내용을 입력해 주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="ncafe-taginput">
        <div className="ncafe-taginput-child" />
        <input
          className="ncafe-input2"
          placeholder="#태그를 입력해주세요"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
    </div>
  );
};

ContentsAndTag.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  setTags: PropTypes.func.isRequired,
};

export default ContentsAndTag;
