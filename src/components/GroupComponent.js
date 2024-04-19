import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <div className="rectangle-parent">
      <div className="component-child" />
      <div className="div">
        <span className="txt">
          <p className="p">[무료배달이벤트]</p>
          <p className="p">1+1 족발세트</p>
          <p className="p">소 : 34,900</p>
          <p className="p">중 : 41,900</p>
          <p className="p">대 : 48,900</p>
        </span>
      </div>
      <img className="component-item" alt="" src="/rectangle-15@2x.png" />
      <div className="ant-designheart-filled" />
    </div>
  );
};

export default GroupComponent;
