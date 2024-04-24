import Frame9 from "./Frame9";
import "./Frame8.css";

const Frame8 = () => {
  return (
    <div className="search">
      <img className="frame-icon" alt="" src="/frame.svg" />
      <div className="frame5">
        <div className="frame6">
          <div className="codiconcircle-parent">
            <img className="codiconcircle" alt="" src="/codiconcircle.svg" />
            <div className="div24">현위치: 언어청각상담센터이음</div>
          </div>
        </div>
      </div>
      <Frame9 />
      <div className="frame7">
        <div className="frame8">
          <input className="rectangle-input" type="text" />
          <img
            className="zondiconsclose-solid"
            alt=""
            src="/zondiconsclosesolid.svg"
          />
          <div className="vector-parent">
            <img className="vector-icon3" alt="" src="/vector2.svg" />
            <input className="input" placeholder="부경대" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame8;
