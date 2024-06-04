import PropTypes from "prop-types";
import "./PageNumberFrame.css";

const PageNumberFrame = ({ className = "" }) => {
  return (
    <div className={`ncafe-pagenumberframe ${className}`}>
      <div className="ncafe-div32">10</div>
      <div className="ncafe-div33">9</div>
      <div className="ncafe-div34">8</div>
      <div className="ncafe-div35">7</div>
      <div className="ncafe-div36">6</div>
      <div className="ncafe-div37">5</div>
      <div className="ncafe-div38">4</div>
      <div className="ncafe-div39">3</div>
      <div className="ncafe-div40">2</div>
      <div className="ncafe-div41">1</div>
    </div>
  );
};

PageNumberFrame.propTypes = {
  className: PropTypes.string,
};

export default PageNumberFrame;
