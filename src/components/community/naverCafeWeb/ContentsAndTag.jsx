import PropTypes from "prop-types";
import "./ContentsAndTag.css";

const ContentsAndTag = ({ className = "" }) => {
  return (
    <div className={`ncafe-contentsandtag ${className}`}>
      <div className="ncafe-postcontentswriting">
        <textarea className="ncafe-textarea2" placeholder="내용을 입력해 주세요." />
      </div>
      <div className="ncafe-taginput">
        <div className="ncafe-taginput-child" />
        <input
          className="ncafe-input2"
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
