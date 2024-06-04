import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TableRowComponent.css";

const TableRowComponent = ({
  className = "",
  cellWidth,
  cellWidth1,
  cellWidth2,
  onText2Click,
}) => {
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

  return (
    <div className={`ncafe-tablerowcomponent ${className}`}>
      <div className="ncafe-cell">
        <div className="ncafe-content1">
          <div className="ncafe-text1" onClick={onText2Click}>
            가입인사 드립니다
          </div>
        </div>
      </div>
      <div className="ncafe-cell1" style={cellStyle}>
        <div className="ncafe-content1">
          <div className="ncafe-text1">지름길고수</div>
        </div>
      </div>
      <div className="ncafe-cell2" style={cell1Style}>
        <div className="ncafe-content1">
          <div className="ncafe-text1">2024.05.10</div>
        </div>
      </div>
      <div className="ncafe-cell3" style={cell2Style}>
        <div className="ncafe-content1">
          <div className="ncafe-text1">500</div>
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

  /** Action props */
  onText2Click: PropTypes.func,
};

export default TableRowComponent;
