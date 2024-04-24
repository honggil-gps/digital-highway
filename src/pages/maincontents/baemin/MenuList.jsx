import Frame1 from "../../../components/baemin/Frame1";
import "./MenuList.css";

const MenuList = () => {
  return (
    <div className="menulist">
      <img className="image-1-icon" alt="" src="/image-4@2x.png" />
      <div className="frame">
        <div className="div71">인기 메뉴</div>
      </div>
      <div className="frame1">
        <div className="rectangle-parent11">
          <div className="instance-child8" />
          <div className="div72">
            <span className="txt7">
              <p className="p33">마늘보쌈</p>
              <p className="p33">소 : 29,000원</p>
              <p className="p33">중 : 36,000원</p>
              <p className="p33">대 : 43,000원</p>
            </span>
          </div>
          <img className="instance-child9" alt="" src="/rectangle-15@2x.png " />
          <div className="ant-designheart-filled6" />
        </div>
      </div>
      <div className="frame2">
        <div className="rectangle-parent11">
          <div className="instance-child8" />
          <div className="div72">
            <span className="txt7">
              <p className="p33">[무료배달이벤트]</p>
              <p className="p33">1+1 족발세트</p>
              <p className="p33">소 : 34,900</p>
              <p className="p33">중 : 41,900</p>
              <p className="p33">대 : 48,900</p>
            </span>
          </div>
          <img className="instance-child9" alt="" src="/image-3@2x.png"/>
          <div className="ant-designheart-filled6" />
        </div>
      </div>
      <Frame1 />
    </div>
  );
};

export default MenuList;
