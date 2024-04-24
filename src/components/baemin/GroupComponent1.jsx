import { useMemo } from "react";
import "./GroupComponent1.css";

const GroupComponent = ({
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  rectangle15,
  rectangleIcon,
  propTop,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="rectangle-parent33" style={groupDivStyle}>
      <div className="instance-child26" />
      <div className="div223">
        <span className="txt21">
          <p className="p125">맛집랭킹 1위</p>
          <p className="p125">냉채족발</p>
          <p className="p125">소 : 25,000</p>
          <p className="p125">중 : 32,000</p>
          <p className="p125">대 : 40,000</p>
        </span>
      </div>
      {!rectangleIcon && (
        <img className="instance-child27" alt="" src={rectangle15} />
      )}
      <div className="ant-designheart-filled16" />
    </div>
  );
};

export default GroupComponent;
