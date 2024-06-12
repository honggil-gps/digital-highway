import PropTypes from "prop-types";
import "./CafeSearchbarFrame.css";

const CafeSearchbarFrame = ({ className = "", searchQuery, setSearchQuery, onSearchbarButtonClick }) => {
  return (
    <div className={`ncafe-cafesearchbarframe ${className}`}>
      <div className="ncafe-searchbarinput">
        <div className="ncafe-searchbarinput-child" />
        <input
          className="ncafe-input1"
          placeholder="검색어를 입력해주세요"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          type="text"
        />
      </div>
      <button className="ncafe-searchbarbutton" onClick={onSearchbarButtonClick}>
        <div className="ncafe-searchbarbutton-child" />
        <div className="ncafe-div42">검색</div>
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
