import PropTypes from "prop-types";
import Pagination from "../../../components/Pagination";
import "./PageNumberFrame.css";

const PageNumberFrame = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  return (
    <div className="ncafe-pagenumberframe">
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

PageNumberFrame.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PageNumberFrame;