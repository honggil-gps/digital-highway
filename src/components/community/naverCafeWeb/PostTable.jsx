// PostTable.js
import React from "react";
import PropTypes from "prop-types";
import TableRowComponent from "./TableRowComponent";
import "./PostTable.css";

const PostTable = ({ className = "", posts, onTextClick }) => {
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
        {posts.map((post, index) => (
          <TableRowComponent
          cellWidth="6rem"
          cellWidth1="7.5rem"
          cellWidth2="4.25rem"
            key={index}
            title={post.title}
            author={post.writerName}
            date={post.createdAt}
            views={post.views}
            onTextClick={()=>onTextClick(post._id)}
          />
        ))}
      </div>
    </div>
  );
};

PostTable.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array.isRequired,
  onTextClick: PropTypes.func.isRequired,
};

export default PostTable;
