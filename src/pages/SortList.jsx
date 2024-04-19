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
      <div className="component-9">
        <div className="search" />
        <div className="div188">장바구니</div>
      </div>
      <img className="shopping-cart-icon" alt="" src="/shopping-cart@2x.png" />
      <div className="div189">뒤로가기</div>
      <div className="sortlist-child" />
      <div className="component-10" onClick={onComponent10ContainerClick}>
        <div className="component-10-child" />
        <div className="div190">말왕족발 부경점</div>
        <img className="star-icon19" alt="" src="/star@2x.png" />
        <div className="div191">5.0</div>
        <img className="component-10-item" alt="" src="/rectangle-13@2x.png" />
        <img className="component-10-inner" alt="" src="/rectangle-14@2x.png" />
        <img
          className="component-10-child1"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="component-11">
        <div className="component-10-child" />
        <div className="div190">시민족발 부경점</div>
        <img className="star-icon19" alt="" src="/star@2x.png" />
        <div className="div191">4.9</div>
        <img className="component-10-item" alt="" src="/rectangle-13@2x.png" />
        <img className="component-10-inner" alt="" src="/rectangle-14@2x.png" />
        <img
          className="component-10-child1"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="component-12">
        <div className="component-10-child" />
        <div className="div190">야웅족발 부경점</div>
        <img className="star-icon19" alt="" src="/star@2x.png" />
        <div className="div191">4.8</div>
        <img className="component-10-item" alt="" src="/rectangle-13@2x.png" />
        <img className="component-10-inner" alt="" src="/rectangle-14@2x.png" />
        <img
          className="component-10-child1"
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <div className="sortlist-item" />
      <div className="div196">족발/보쌈</div>
      <div className="div197">돈까스/회/일식</div>
      <div className="div198">고기/</div>
      <div className="div199">정렬</div>
      <div className="rectangle-parent34">
        <div className="group-child34" />
        <div className="div200">별점순</div>
      </div>
      <div className="rectangle-parent35">
        <div className="group-child34" />
        <div className="div201">쿠폰</div>
      </div>
      <div className="rectangle-parent36">
        <div className="group-child34" />
        <div className="div200">배달팁</div>
      </div>
      <div className="rectangle-parent37">
        <div className="group-child34" />
        <div className="div203">배달방식</div>
      </div>
    </div>
  );
};

export default SortList;
