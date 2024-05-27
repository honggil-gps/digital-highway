import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FruitCategory.css";

const FruitCategory = () => {
  const navigate = useNavigate();
  
  const toMainPage = useCallback(() => {
    navigate("/maincontents/main-6")
  })

  const onGroupContainer5Click = useCallback(() => {
    navigate("/maincontents/product-10");
  }, [navigate]);

  return (
    <div className="coupong-fruitcategory-9">
      <div className="coupong-frame-parent1">
        <div className="coupong-group-parent">
          <div className="coupong-rectangle-parent47">
            <div className="coupong-group-child48" />
            <img
              className="coupong-group-child49"
              alt=""
              src="/appguide/coupang/rectangle-29@2x.png"
            />
            <div className="coupong-div94">당도보장 하이헬로우팜</div>
          </div>
          <div className="coupong-rectangle-parent48">
            <div className="coupong-group-child50" />
            <img
              className="coupong-group-child51"
              alt=""
              src="/appguide/coupang/rectangle-28@2x.png"
            />
            <div className="coupong-kg">제주 금뀰 낑깡 1kg</div>
          </div>
          <div className="coupong-rectangle-parent49">
            <div className="coupong-group-child50" />
            <img
              className="coupong-group-child53"
              alt=""
              src="/appguide/coupang/rectangle-24@2x.png"
            />
            <div className="coupong-div95">제주 고당도 뀰로향</div>
          </div>
          <div className="coupong-rectangle-parent50">
            <div className="coupong-group-child50" />
            <img
              className="coupong-group-child55"
              alt=""
              src="/appguide/coupang/rectangle-27@2x.png"
            />
            <div className="coupong-div96">탐나황감 당도선별</div>
          </div>
          <div className="coupong-rectangle-parent51">
            <div className="coupong-group-child50" />
            <img
              className="coupong-group-child57"
              alt=""
              src="/appguide/coupang/rectangle-25@2x.png"
            />
            <div className="coupong-div95">굠굠 당도선별 감귤</div>
          </div>
          <div className="coupong-rectangle-parent52" onClick={onGroupContainer5Click}>
            <div className="coupong-group-child50" />
            <img
              className="coupong-group-child59"
              alt=""
              src="/appguide/coupang/rectangle-26@2x.png"
            />
            <div className="coupong-div98">뀰담원 제주 제철 감귤</div>
          </div>
        </div>
        <div className="coupong-rectangle-parent53">
          <div className="coupong-group-child60" />
          <div className="coupong-frame-wrapper1">
            <div className="coupong-group">
              <div className="coupong-div99">
                <div className="coupong-div100">귤</div>
              </div>
              <div className="coupong-div101">
                <div className="coupong-div100">한라봉</div>
              </div>
              <div className="coupong-div103">
                <div className="coupong-div100">천혜향</div>
              </div>
              <div className="coupong-div105">
                <div className="coupong-div100">레드향/기타감귤류</div>
              </div>
            </div>
          </div>
          <div className="coupong-div107">...</div>
        </div>
        <div className="coupong-rectangle-parent54">
          <div className="coupong-group-child61" />
          <div className="coupong-div108">...</div>
          <div className="coupong-group-child62" />
        </div>
        <div className="coupong-container">
          <div className="coupong-div109">
            <div className="coupong-div100">사과/배</div>
          </div>
          <div className="coupong-div111">
            <div className="coupong-div112">귤/한라봉/감귤류</div>
          </div>
          <div className="coupong-div113">
            <div className="coupong-div100">감/홍시/곶감</div>
          </div>
          <div className="coupong-div115">
            <div className="coupong-div100">키위/참다래</div>
          </div>
          <div className="coupong-div117">
            <div className="coupong-div100">토마토/자두/복숭아/포도</div>
          </div>
          <div className="coupong-div119">
            <div className="coupong-div100">수박/메론/참외</div>
          </div>
          <div className="coupong-div121">
            <div className="coupong-div100">딸기/블루베리/베리류</div>
          </div>
          <div className="coupong-div123">
            <div className="coupong-div100">바나나/오렌지/파인애플</div>
          </div>
          <div className="coupong-div125">
            <div className="coupong-div100">자몽/레몬/라임/석류</div>
          </div>
          <div className="coupong-div127">
            <div className="coupong-div100">망고/체리/아보카도/기타</div>
          </div>
          <div className="coupong-div129">
            <div className="coupong-div100">냉동과일/간편과일</div>
          </div>
          <div className="coupong-div131">
            <div className="coupong-div100">과일선물세트</div>
          </div>
        </div>
      </div>
      <div className="coupong-rectangle-parent55">
        <div className="coupong-frame-child8" />
        <img className="coupong-menu-icon3" alt="" src="/appguide/coupang/menu.png" />
        <img
          className="coupong-search-icon3"
          alt=""
          src="/appguide/coupang/search.png"
        />
        <img
          className="coupong-home-page-icon3"
          alt=""
          src="/appguide/coupang/home.png"
        />
        <img
          className="coupong-user-icon3"
          alt=""
          src="/appguide/coupang/user@2x.png"
        />
        <img
          className="coupong-shopping-cart-icon3"
          alt=""
          src="/appguide/coupang/cart.png"
        />
      </div>
      <div className="coupong-header3">
        <div className="coupong-header-child6" />
        <div className="coupong-cou-parent4" onClick={toMainPage}>
          <div className="coupong-div112">cou</div>
          <div className="coupong-p22">p</div>
          <div className="coupong-o6">o</div>
          <div className="coupong-n6">n</div>
          <div className="coupong-g6">g</div>
        </div>
        <input
          className="coupong-header-child7"
          name="search_bar"
          id="search_bar"
          placeholder="쿠퐁에서 검색하세요!"
          type="text"
        />
        <div className="coupong-rectangle-parent56">
          <div className="coupong-group-child63" />
          <div className="coupong-div133">로그인</div>
          <img
            className="coupong-customer-icon3"
            alt=""
            src="/appguide/coupang/customer@2x.png"
          />
        </div>
        <img
          className="coupong-header-child8"
          alt=""
          src="/appguide/coupang/group-25@2x.png"
        />
      </div>
    </div>
  );
};

export default FruitCategory;
