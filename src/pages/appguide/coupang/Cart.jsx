import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const onCloseIconClick = useCallback(() => {
    navigate("/maincontents/deleteproduct-13");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/order-14");
  }, [navigate]);

  return (
    <div className="coupong-cart-12">
      <div className="coupong-group-parent1">
        <div className="coupong-rectangle-parent62">
          <div className="coupong-group-child66" />
          <div className="coupong-div173">총 상품 가격</div>
          <div className="coupong-div174">총 배송비</div>
          <div className="coupong-div175">총 결제 예상 금액</div>
          <div className="coupong-div176">원</div>
          <div className="coupong-div177">48,900</div>
          <div className="coupong-div178">48,900</div>
          <div className="coupong-div179">+ 0</div>
          <div className="coupong-div180">원</div>
          <div className="coupong-div181">원</div>
          <div className="coupong-group-child67" />
        </div>
        <div className="coupong-rectangle-parent63">
          <div className="coupong-group-child68" />
          <img
            className="coupong-fluent-emoji-flatcoin-icon"
            alt=""
            src="/appguide/coupang/fluentemojiflatcoin.svg"
          />
          <div className="coupong-div182">캐시적립 혜택</div>
          <div className="coupong-div183">쿠페이 머니 결제 시 1% 적립</div>
          <div className="coupong-group-child69" />
          <div className="coupong-div184">쿠페이 머니 충전하기</div>
        </div>
        <div className="coupong-rectangle-parent64">
          <div className="coupong-group-child70" />
          <div className="coupong-div185">할인쿠폰</div>
          <div className="coupong-div186">그 외 보유 쿠폰 (1)</div>
          <img
            className="coupong-twemojiadmission-tickets-icon"
            alt=""
            src="/appguide/coupang/twemojiadmissiontickets.svg"
          />
          <div className="coupong-group-child71" />
          <div className="coupong-div187">자세히 보기</div>
        </div>
        <div className="coupong-rectangle-parent65">
          <div className="coupong-group-child72" />
          <div className="coupong-group-child73" />
          <div className="coupong-group-child74" />
          <div className="coupong-div188">판매자배송 상품</div>
          <input
            className="coupong-rectangle-input1"
            checked={true}
            id="product_box"
            type="checkbox"
          />
          <div className="coupong-kg-11">[뀰담원] 뀰담원 제주 제철 감귤, 5kg 1박스</div>
          <div className="coupong-div189">금요일 6/28 도착 예정</div>
          <img
            className="coupong-group-child75"
            alt=""
            src="/appguide/coupang/rectangle-46@2x.png"
          />
          <div className="coupong-div190">48,900원</div>
          <div className="coupong-group-child76" />
          <div className="coupong-div191">1</div>
          <div className="coupong-div192">
            상품가격 48,900원 + 배송비 0원 = 총 48,900원
          </div>
          <img
            className="coupong-sort-down-icon"
            alt=""
            src="/appguide/coupang/sort-down@2x.png"
          />
          <img
            className="coupong-close-icon"
            alt=""
            src="/appguide/coupang/close@2x.png"
            onClick={onCloseIconClick}
          />
        </div>
      </div>
      <div className="coupong-cartupper">
        <div className="coupong-cartupper-child" />
        <div className="coupong-rectangle-parent66" onClick={onGroupContainerClick}>
          <div className="coupong-group-child77" />
          <div className="coupong-div193">구매하기(1)</div>
        </div>
        <input
          className="coupong-rectangle-input2"
          checked={true}
          id="payment_check"
          type="checkbox"
        />
        <div className="coupong-div194">전체</div>
        <div className="coupong-div195">합계: 48,900원</div>
      </div>
      <div className="coupong-rectangle-parent67">
        <div className="coupong-group-child78" />
        <div className="coupong-group-child79" />
        <div className="coupong-group-child80" />
        <div className="coupong-div196">장바구니</div>
        <div className="coupong-group-child81" />
        <div className="coupong-div197">일반구매</div>
        <div className="coupong-div198">찜한상품</div>
        <div className="coupong-div199">정기배송</div>
      </div>
    </div>
  );
};

export default Cart;
