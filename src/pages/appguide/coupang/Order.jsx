import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/maincontents/delivery-15");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/completeorder-18");
  }, [navigate]);

  return (
    <div className="coupong-order-14">
      <div className="coupong-group-parent2">
        <div className="coupong-rectangle-parent68">
          <div className="coupong-group-child86" />
          <div className="coupong-div206">배송 요청사항</div>
          <div className="coupong-div207">문 앞</div>
        </div>
        <div className="coupong-rectangle-parent69" onClick={onGroupContainer1Click}>
          <div className="coupong-group-child87" />
          <div className="coupong-div208">배송지</div>
          <div className="coupong-div209">|</div>
          <div className="coupong-div210">침착맨</div>
          <div className="coupong-group-child88" />
          <div className="coupong-group-child89" />
          <div className="coupong-group-child90" />
          <div className="coupong-div211">기본배송지</div>
          <div className="coupong-div212">라켓프레시 가능</div>
          <div className="coupong-div213">라켓와우 가능</div>
          <div className="coupong-div214">부산광역시 남구 용소로 45(대연동) 303호</div>
          <div className="coupong-div215">휴대폰 : 010-1234-5678</div>
        </div>
        <div className="coupong-rectangle-parent70">
          <div className="coupong-group-child91" />
          <div className="coupong-group-child92" />
          <div className="coupong-div206">결제수단</div>
          <div className="coupong-group-child93" />
          <div className="coupong-div207">부경은행365첵첵... / 123*, 일시불</div>
          <div className="coupong-ellipse-div" />
          <div className="coupong-payment-method">
            <input
              className="coupong-group-child94"
              checked={true}
              id="credit_card"
              type="radio"
            />
            <label className="coupong-card-name" htmlFor="group-child94">부경은행365첵첵...</label>
          </div>
          <div className="coupong-div218">쿠페이 머니 결제시</div>
          <img
            className="coupong-fluent-emoji-flatcoin-icon1"
            alt=""
            src="/appguide/coupang/fluentemojiflatcoin1.svg"
          />
          <div className="coupong-div219">최대1%적립</div>
        </div>
        <div className="coupong-rectangle-parent71">
          <div className="coupong-frame-child22" />
          <div className="coupong-frame-child23" />
          <div className="coupong-frame-child24" />
          <div className="coupong-div220">배송 1건 중 1</div>
          <div className="coupong-frame-child25" />
          <div className="coupong-div221">화요일 4/23 도착 예정</div>
          <div className="coupong-div222">최종 결제 금액</div>
          <div className="coupong-frame-child26" />
          <div className="coupong-kg-12">[뀰담원] 뀰담원 제주 제철 감귤, 5kg 1박스</div>
          <div className="coupong-div223">수량 1개 / 무료배송</div>
          <div className="coupong-div224">총 상품 가격</div>
          <div className="coupong-div225">48,900원</div>
          <div className="coupong-div226">0원</div>
          <div className="coupong-div227">원</div>
          <div className="coupong-div228">-</div>
          <div className="coupong-div229">배송비</div>
          <div className="coupong-div230">쿠퐁캐시</div>
          <div className="coupong-frame-child27" />
          <div className="coupong-div231">0</div>
          <div className="coupong-div232">잔여 : 0원</div>
          <div className="coupong-frame-child28" />
          <div className="coupong-div233">전액사용</div>
          <div className="coupong-div234">원</div>
          <div className="coupong-div235">총 결제 금액</div>
          <div className="coupong-div236">
            구매조건 확인 및 결제대행 서비스 약관 동의
          </div>
          <div className="coupong-div237">개인정보 제3자 제공 동의</div>
          <div className="coupong-div238">
            <p className="coupong-p48">
              ⁕ 개별 판매자가 등록한 마켓플레이스(오픈마켓) 상품에 대한 광고,
              상품주문, 배송
            </p>
            <p className="coupong-p48">
              및 환불의 의무와 책임은 각 판매자가 부담하고, 이에 대하여 쿠퐁은
              통신판매중개
            </p>
            <p className="coupong-p48">
              자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.
            </p>
          </div>
          <div className="coupong-div239">
            <p className="coupong-p48">
              위 주문 내용을 확인 하였으며, 회원 본인은 개인정보 이용 및 제공(해
            </p>
            <p className="coupong-p48">외직구의 경우 국외제공) 및 결제에 동의합니다.</p>
          </div>
          <div className="coupong-div240">보기</div>
          <div className="coupong-div241">보기</div>
          <div className="coupong-div242">48,900</div>
          <div className="coupong-frame-child29" />
          <img className="coupong-frame-child30" alt="" />
          <div className="coupong-rectangle-parent72" onClick={onGroupContainerClick}>
            <div className="coupong-group-child95" />
            <div className="coupong-div243">결제하기</div>
          </div>
        </div>
      </div>
      <div className="coupong-div244">주문/결제</div>
    </div>
  );
};

export default Order;
