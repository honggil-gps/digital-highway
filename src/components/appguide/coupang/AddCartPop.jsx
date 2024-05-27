import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCartPop.css";

const AddCartPop = () => {
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/maincontents/cart-12");
  }, [navigate]);

  return (
    <div className="coupong-addcartpop-11">
      <div className="coupong-addcartpop-11-child" />
      <div className="coupong-div300">장바구니에 상품이 담겼습니다.</div>
      <div className="coupong-div301">함께 비교하면 좋을 상품</div>
      <div className="coupong-div302" onClick={onText2Click}>
        바로가기
      </div>
      <img
        className="coupong-addcartpop-11-item"
        alt=""
        src="/appguide/coupang/ellipse-1@2x.png"
      />
      <img className="coupong-addcartpop-11-inner" alt="" />
      <div className="coupong-addcartpop-11-child1" />
      <div className="coupong-addcartpop-11-child2" />
      <img
        className="coupong-addcartpop-11-child3"
        alt=""
        src="/appguide/coupang/rectangle-39@2x.png"
      />
      <img
        className="coupong-addcartpop-11-child4"
        alt=""
        src="/appguide/coupang/rectangle-40@2x.png"
      />
      <img
        className="coupong-addcartpop-11-child5"
        alt=""
        src="/appguide/coupang/rectangle-41@2x.png"
      />
      <div className="coupong-kg-300g">
        <p className="coupong-uv">눌해랑 꿀 고구마,</p>
        <p className="coupong-uv">10kg(대, 300g이...)</p>
      </div>
      <div className="coupong-uv-container">
        <p className="coupong-uv">식품건조기 UV살균</p>
        <p className="coupong-uv">식기건조 스테인리스...</p>
      </div>
      <div className="coupong-hr">
        <p className="coupong-uv">필립드 파워 블렌더 50</p>
        <p className="coupong-uv">00 시리즈 믹서기, HR...</p>
      </div>
      <div className="coupong-div303">무료배송 • 당일출고</div>
      <div className="coupong-div304">무료배송 • 당일출고</div>
      <div className="coupong-div305">무료배송 • 무료반품</div>
      <div className="coupong-div306">(999+)</div>
      <div className="coupong-div307">(326)</div>
      <div className="coupong-div308">(6,231)</div>
      <div className="coupong-div309">모레(금) 도착 예정</div>
      <div className="coupong-div310">모레(금) 도착 예정</div>
      <div className="coupong-div311">모레(금) 도착 예정</div>
      <div className="coupong-div312">37,200원</div>
      <div className="coupong-div313">199,000원</div>
      <div className="coupong-div314">67,210원</div>
      <img
        className="coupong-star-icon20"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon21"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon22"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon23"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon24"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon25"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon26"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon27"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon28"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon29"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon30"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon31"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon32"
        alt=""
        src="/appguide/coupang/star4@2x.png"
      />
      <img
        className="coupong-star-icon33"
        alt=""
        src="/appguide/coupang/star5@2x.png"
      />
      <img
        className="coupong-star-icon34"
        alt=""
        src="/appguide/coupang/star5@2x.png"
      />
    </div>
  );
};

export default AddCartPop;
