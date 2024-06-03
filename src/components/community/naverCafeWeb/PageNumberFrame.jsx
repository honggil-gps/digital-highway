import PropTypes from "prop-types";
import "./PageNumberFrame.css";

const PageNumberFrame = ({ className = "" }) => {
  return (
    <div className={`pagenumberframe ${className}`}>
      <div className="div32">10</div>
      <div className="div33">9</div>
      <div className="div34">8</div>
      <div className="div35">7</div>
      <div className="div36">6</div>
      <div className="div37">5</div>
      <div className="div38">4</div>
      <div className="div39">3</div>
      <div className="div40">2</div>
      <div className="div41">1</div>
    </div>
  );
};

PageNumberFrame.propTypes = {
  className: PropTypes.string,
};

export default PageNumberFrame;
