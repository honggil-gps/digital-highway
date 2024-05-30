import { useMemo } from "react";
import "./SearchHistory.css";
import PropTypes from 'prop-types';

const SearchHistory = ({
  className = "",
  searchHistoryPosition,
  xButtonTop,
  searchHistoryLeft,
}) => {
  const searchHistoryStyle = useMemo(() => {
    return {
      position: searchHistoryPosition,
      top: xButtonTop,
      left: searchHistoryLeft,
    };
  }, [searchHistoryPosition, xButtonTop, searchHistoryLeft]);

  return (
    <div className={`searchhistory ${className}`} style={searchHistoryStyle}>
      <div className="searchhistoryframe">
        <img
          className="searchhistoryframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-22@2x.png"
        />
        <div className="digital-highway1">Digital_highway</div>
        <button className="xbutton">
          <img
            className="phx-bold-icon1"
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
  searchHistoryPosition: PropTypes.any,
  xButtonTop: PropTypes.any,
  searchHistoryLeft: PropTypes.any,
};

export default SearchHistory;
