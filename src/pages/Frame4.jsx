import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame4.css";

const Frame4 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  return (
    <div className="div152">
      <div className="child" />
      <div className="item" />
      <div className="div153">[무료배달이벤트] 1+1 족발세트</div>
      <div className="div154">맛 선택</div>
      <div className="div155">가격</div>
      <div className="div156">
        <p className="p121">34,900</p>
        <p className="p121">41,900</p>
        <p className="p121">48,900</p>
      </div>
      <div className="div157">
        <p className="p124">+0</p>
        <p className="p124">+2,000</p>
        <p className="p124">+2,000</p>
        <p className="p124">+2,000</p>
        <p className="p121">+2,500</p>
      </div>
      <div className="parent4">
        <div className="div158">소</div>
        <div className="group-child30" />
      </div>
      <div className="group-container">
        <div className="wrapper4">
          <div className="div159">중</div>
        </div>
        <input className="group-child31" type="radio" />
      </div>
      <div className="parent5">
        <div className="div158">대</div>
        <div className="group-child32" />
      </div>
      <div className="component-271">
        <div className="div161">기본</div>
        <div className="component-27-item" />
      </div>
      <div className="component-28">
        <div className="div161">간장맛</div>
        <div className="component-27-item" />
      </div>
      <div className="component-29">
        <div className="div161">바베큐맛</div>
        <input className="component-29-child" type="radio" />
      </div>
      <div className="component-30">
        <div className="div161">매운맛</div>
        <div className="component-27-item" />
      </div>
      <div className="component-31">
        <div className="div161">마늘맛</div>
        <div className="component-27-item" />
      </div>
      <div className="inner" />
      <div className="div166">15,000원</div>
      <div className="div167">배달최소주문금액</div>
      <div className="rectangle-parent29" onClick={onGroupContainer3Click}>
        <div className="group-child33" />
        <div className="div168">장바구니 담기</div>
      </div>
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default Frame4;
