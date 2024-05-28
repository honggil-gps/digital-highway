import { useMemo } from "react";
import "./SearchHistory.css";
import PropTypes from 'prop-types';

const SearchHistory = ({ className = "", xButtonTop }) => {
  const searchHistoryStyle = useMemo(() => {
    return {
      top: xButtonTop,
    };
  }, [xButtonTop]);

  return (
    <div className={`searchhistory10 ${className}`} style={searchHistoryStyle}>
      <div className="searchhistoryframe10">
        <img
          className="searchhistoryframe-child7"
          alt=""
          src="/community/instagramWeb/ellipse-22@2x.png"
        />
        <div className="digital-highway13">Digital_highway</div>
        <button className="xbutton10">
          <img
            className="phx-bold-icon11"
            alt=""
            src="/community/instagramWeb/phxbold1.svg"
          />
        </button>
      </div>
    </div>
  );
}; 

SearchHistory.propTypes = {
  className: PropTypes.string,

  /** Style props */
  xButtonTop: PropTypes.any,
};

export default SearchHistory;
