import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TableRowComponent.css";

const TableRowComponent = ({ className = "", cellWidth,
  cellWidth1,
  cellWidth2, title, author, date, views, onTextClick }) => {
  const cellStyle = useMemo(() => {
    return {
      width: cellWidth,
    };
  }, [cellWidth]);

  const cell1Style = useMemo(() => {
    return {
      width: cellWidth1,
    };
  }, [cellWidth1]);

  const cell2Style = useMemo(() => {
    return {
      width: cellWidth2,
    };
  }, [cellWidth2]);

  //날짜 표시 슬라이싱
  const formattedDate = date.slice(0,10);

  return (
    <div className={`ncafe-tablerowcomponent ${className}`}>
      <div className="ncafe-cell">
        <div className="ncafe-content1">
          <div className="ncafe-text1" onClick={onTextClick}>
            {title}
          </div>
        </div>
      </div>
      <div className="ncafe-cell1" style={cellStyle}>
        <div className="ncafe-content1">
          <div className="ncafe-text1">{author}</div>
        </div>
      </div>
      <div className="ncafe-cell2" style={cell1Style}>
        <div className="ncafe-content1">
          <div className="ncafe-text1">{formattedDate}</div>
        </div>
      </div>
      <div className="ncafe-cell3" style={cell2Style}>
        <div className="ncafe-content1">
          <div className="ncafe-text1">{views}</div>
        </div>
      </div>
    </div>
  );
};

TableRowComponent.propTypes = {
  className: PropTypes.string,
/** Style props */
  cellWidth: PropTypes.any,
  cellWidth1: PropTypes.any,
  cellWidth2: PropTypes.any,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  onText2Click: PropTypes.func,
};

export default TableRowComponent;