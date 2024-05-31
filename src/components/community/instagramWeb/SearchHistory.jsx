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
    <div className={`outsta-searchhistory ${className}`} style={searchHistoryStyle}>
      <div className="outsta-searchhistoryframe">
        <img
          className="outsta-searchhistoryframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-22@2x.png"
        />
        <div className="outsta-digital-highway1">Digital_highway</div>
        <button className="outsta-xbutton">
          <img
            className="outsta-phx-bold-icon1"
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
