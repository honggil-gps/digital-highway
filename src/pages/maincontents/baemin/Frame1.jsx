import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame1 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  return (
    <div className="div83">
      <div className="child" />
      <div className="item" />
      <div className="div84">[무료배달이벤트] 1+1 족발세트</div>
      <div className="div85">맛 선택</div>
      <div className="div86">가격</div>
      <div className="div87">
        <p className="p48">34,900</p>
        <p className="p48">41,900</p>
        <p className="p48">48,900</p>
      </div>
      <div className="div88">
        <p className="p51">+0</p>
        <p className="p51">+2,000</p>
        <p className="p51">+2,000</p>
        <p className="p51">+2,000</p>
        <p className="p48">+2,500</p>
      </div>
      <div className="container">
        <div className="div89">소</div>
        <div className="ellipse-div" />
      </div>
      <div className="group-parent">
        <div className="wrapper1">
          <div className="div90">중</div>
        </div>
        <input className="ellipse-input" type="radio" />
      </div>
      <div className="parent1">
        <div className="div89">대</div>
        <div className="group-child6" />
      </div>
      <div className="component-27">
        <div className="div92">기본</div>
        <div className="component-27-child" />
      </div>
      <div className="component-28">
        <div className="div92">간장맛</div>
        <div className="component-27-child" />
      </div>
      <div className="component-29">
        <div className="div92">바베큐맛</div>
        <input className="component-29-child" type="radio" />
      </div>
      <div className="component-30">
        <div className="div92">매운맛</div>
        <div className="component-27-child" />
      </div>
      <div className="component-31">
        <div className="div92">마늘맛</div>
        <div className="component-27-child" />
      </div>
      <div className="inner" />
      <div className="div97">15,000원</div>
      <div className="div98">배달최소주문금액</div>
      <div className="rectangle-parent14" onClick={onGroupContainer3Click}>
        <div className="group-child7" />
        <div className="div99">장바구니 담기</div>
      </div>
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default Frame1;
