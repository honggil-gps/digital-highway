import { useMemo } from "react";
import "./BottomFooter.css";

const BottomFooter = ({
  bell,
  prop,
  propOverflow,
  propLeft,
  propWidth,
  onDiv2Click,
}) => {
  const bellIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const div1Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className="div50" onClick={onDiv2Click}>
      <div className="child10" />
      <div className="bell-parent">
        <img className="bell-icon" alt="" src={bell} style={bellIconStyle} />
        <div className="div51" style={div1Style}>
          {prop}
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
