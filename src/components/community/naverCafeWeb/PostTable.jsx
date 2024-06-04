import TableRowComponent from "./TableRowComponent";
import PropTypes from "prop-types";
import "./PostTable.css";

const PostTable = ({
  className = "",
  onTextClick,
  onText2Click,
  onText3Click,
}) => {
  return (
    <div className={`ncafe-table-1 ${className}`}>
      <div className="ncafe-table">
        <div className="ncafe-row">
          <div className="ncafe-cell4">
            <div className="ncafe-content6">
              <div className="ncafe-text6">제목</div>
            </div>
          </div>
          <div className="ncafe-cell5">
            <div className="ncafe-content6">
              <div className="ncafe-text6">작성자</div>
            </div>
          </div>
          <div className="ncafe-cell6">
            <div className="ncafe-content8">
              <div className="ncafe-text6">작성일</div>
            </div>
          </div>
          <div className="ncafe-cell7">
            <div className="ncafe-content6">
              <div className="ncafe-text6">조회</div>
            </div>
          </div>
        </div>
        <TableRowComponent
          cellWidth="8rem"
          cellWidth1="7.5rem"
          cellWidth2="4.25rem"
          onText2Click={onTextClick}
        />
      </div>
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
        onText2Click={onText2Click}
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
        onText2Click={onText3Click}
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
      <TableRowComponent
        cellWidth="8rem"
        cellWidth1="7.5rem"
        cellWidth2="4.25rem"
      />
    </div>
  );
};

PostTable.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onTextClick: PropTypes.func,
  onText2Click: PropTypes.func,
  onText3Click: PropTypes.func,
};

export default PostTable;
