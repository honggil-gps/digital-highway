import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  return (
    <div className="div61">
      <div className="child" />
      <div className="item" />
      <div className="div62">[무료배달이벤트] 1+1 족발세트</div>
      <div className="div63">맛 선택</div>
      <div className="div64">가격</div>
      <div className="div65">
        <p className="p57">34,900</p>
        <p className="p57">41,900</p>
        <p className="p57">48,900</p>
      </div>
      <div className="div66">
        <p className="p60">+0</p>
        <p className="p60">+2,000</p>
        <p className="p60">+2,000</p>
        <p className="p60">+2,000</p>
        <p className="p57">+2,500</p>
      </div>
      <div className="parent">
        <div className="div67">소</div>
        <div className="ellipse-div" />
      </div>
      <div className="group-parent">
        <div className="container">
          <div className="div68">중</div>
        </div>
        <input className="ellipse-input" type="radio" />
      </div>
      <div className="group">
        <div className="div67">대</div>
        <div className="group-child8" />
      </div>
      <div className="component-27">
        <div className="div70">기본</div>
        <div className="component-27-child" />
      </div>
      <div className="component-28">
        <div className="div70">간장맛</div>
        <div className="component-27-child" />
      </div>
      <div className="component-29">
        <div className="div70">바베큐맛</div>
        <input className="component-29-child" type="radio" />
      </div>
      <div className="component-30">
        <div className="div70">매운맛</div>
        <div className="component-27-child" />
      </div>
      <div className="component-31">
        <div className="div70">마늘맛</div>
        <div className="component-27-child" />
      </div>
      <div className="inner" />
      <div className="div75">15,000원</div>
      <div className="div76">배달최소주문금액</div>
      <div className="rectangle-parent18" onClick={onGroupContainer3Click}>
        <div className="group-child9" />
        <div className="div77">장바구니 담기</div>
      </div>
      <img
        className="image-3-icon"
        alt=""
        src="/appguide/baemin/image-3@2x.png"
      />
    </div>
  );
};

export default Frame11;
