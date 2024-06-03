import PropTypes from "prop-types";
import "./CafeSearchbarFrame.css";

const CafeSearchbarFrame = ({ className = "", onSearchbarButtonClick }) => {
  return (
    <div className={`cafesearchbarframe ${className}`}>
      <div className="searchbarinput">
        <div className="searchbarinput-child" />
        <input
          className="input1"
          placeholder="검색어를 입력해주세요"
          type="text"
        />
      </div>
      <button className="searchbarbutton" onClick={onSearchbarButtonClick}>
        <div className="searchbarbutton-child" />
        <div className="div42">검색</div>
      </button>
    </div>
  );
};

CafeSearchbarFrame.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onSearchbarButtonClick: PropTypes.func,
};

export default CafeSearchbarFrame;
