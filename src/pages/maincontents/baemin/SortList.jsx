import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SortList.css";

const SortList = () => {
  const navigate = useNavigate();

  const onComponent10ContainerClick = useCallback(() => {
    navigate("/menulist");
  }, [navigate]);

  return (
    <div className="sortlist">
      <div className="component-91">
        <div className="search1" />
        <div className="div55">장바구니</div>
      </div>
      <img className="shopping-cart-icon2" alt="" src="/shopping-cart@2x.png" />
      <div className="div56">뒤로가기</div>
      <div className="sortlist-child" />
      <div className="component-102" onClick={onComponent10ContainerClick}>
        <div className="component-10-child6" />
        <div className="div57">말왕족발 부경점</div>
        <img className="star-icon4" alt="" src="/star@2x.png" />
        <div className="div58">5.0</div>
        <img
          className="component-10-child7"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="component-10-child8"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="component-10-child9"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="component-111">
        <div className="component-10-child6" />
        <div className="div57">시민족발 부경점</div>
        <img className="star-icon4" alt="" src="/star@2x.png" />
        <div className="div58">4.9</div>
        <img
          className="component-10-child7"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="component-10-child8"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="component-10-child9"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="component-121">
        <div className="component-10-child6" />
        <div className="div57">야웅족발 부경점</div>
        <img className="star-icon4" alt="" src="/star@2x.png" />
        <div className="div58">4.8</div>
        <img
          className="component-10-child7"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <img
          className="component-10-child8"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="component-10-child9"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="sortlist-item" />
      <div className="div63">족발/보쌈</div>
      <div className="div64">돈까스/회/일식</div>
      <div className="div65">고기/</div>
      <div className="div66">정렬</div>
      <div className="rectangle-parent7">
        <div className="group-child2" />
        <div className="div67">별점순</div>
      </div>
      <div className="rectangle-parent8">
        <div className="group-child2" />
        <div className="div68">쿠폰</div>
      </div>
      <div className="rectangle-parent9">
        <div className="group-child2" />
        <div className="div67">배달팁</div>
      </div>
      <div className="rectangle-parent10">
        <div className="group-child2" />
        <div className="div70">배달방식</div>
      </div>
    </div>
  );
};

export default SortList;
