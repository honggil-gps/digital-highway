import { useState, useCallback } from "react";
import AddCartPop from "../../../components/appguide/coupang/AddCartPop";
import PortalPopup from "../../../components/appguide/coupang/PortalPopup";
import "./Product.css";

const Product = () => {
  const [isAddCartPop11Open, setAddCartPop11Open] = useState(false);

  const openAddCartPop11 = useCallback(() => {
    setAddCartPop11Open(true);
  }, []);

  const closeAddCartPop11 = useCallback(() => {
    setAddCartPop11Open(false);
  }, []);

  return (
    <>
      <div className="coupong-product-10">
        <div className="coupong-frame-parent2">
          <div className="coupong-rectangle-parent57">
            <div className="coupong-frame-child9" />
            <div className="coupong-div134">
              <p className="coupong-p23">믿고 먹는 제주 특산품</p>
              <p className="coupong-p23">뀰담원 감귤농장</p>
            </div>
            <div className="coupong-div135">제주 카라향 하우스 감귤</div>
            <div className="coupong-div136">
              <p className="coupong-p23">*일반 감귤 사이즈가 큽니다</p>
              <p className="coupong-p23">사이즈 확인 부탁드립니다*</p>
            </div>
            <div className="coupong-div137">**씨가 나올수 있습니다**</div>
            <div className="coupong-div138">
              <p className="coupong-p23">*구매하신 사이즈 소진 시</p>
              <p className="coupong-p23">상위 사이즈로 출고될 수 있습니다*</p>
            </div>
            <div className="coupong-div139">
              서귀포 카라향 하우스 감귤이 맛있는 이유!
            </div>
            <div className="coupong-div140">
              <p className="coupong-p23">뀰담원 감귤농장 4월~5월</p>
              <p className="coupong-p23">제철 카라향 하우스 감귤</p>
              <p className="coupong-p23">새콤 달콤 깊고 진한 제철 감귤의 맛!</p>
            </div>
            <div className="coupong-div141">
              <p className="coupong-p23">하우스 시설재배로 귤 나무의</p>
              <p className="coupong-p23">물 흡수량을 조절해 당도가 높은</p>
              <p className="coupong-p23">고품질 당도 선별 감귤 품종입니다!</p>
            </div>
            <div className="coupong-div142">
              <p className="coupong-p23">*깊고 진한 감귤 본연의 풍부한 맛!</p>
              <p className="coupong-p23">*제주 해풍으로 키운 신선한 감귤</p>
              <p className="coupong-p23">*당도 선별로 균일한 맛과 편차 없는</p>
              <p className="coupong-p23">최고의 상품성</p>
              <p className="coupong-p23">*프리미엄 감귤로 선물 추천!</p>
            </div>
            <div className="coupong-div143">
              <p className="coupong-p23">믿고 먹는 뀰담원 제철 감귤</p>
              <p className="coupong-p23">맛 보장 안심 책임 발송!</p>
            </div>
            <div className="coupong-frame-child10" />
            <div className="coupong-div144">
              <p className="coupong-p23">요즘 금귤이죠. 아이가 너무 좋아해</p>
              <p className="coupong-p23">
                어쩔수없이 구매는 하는데 평들이 너무 안좋아 진짜 다 뒤지다가
                발견했어요.
              </p>
            </div>
            <div className="coupong-div145">작년에 이어서 또 구매했어요^^</div>
            <div className="coupong-div146">
              <p className="coupong-p23">맛은 있어요. 근데 귤 모양이 이상해요</p>
              <p className="coupong-p23">설국향이라는 종류가 원래 이런가요?</p>
            </div>
            <div className="coupong-div147">2024.03.05</div>
            <div className="coupong-div148">2024.02.15</div>
            <div className="coupong-div149">2024.01.11</div>
            <div className="coupong-div150">상품리뷰</div>
            <div className="coupong-div151">오둥이</div>
            <div className="coupong-div152">장원영</div>
            <div className="coupong-div153">카페인중독</div>
            <img
              className="coupong-star-icon"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon1"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon2"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon3"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon4"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon5"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon6"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon7"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon8"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon9"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon10"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon11"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon12"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <img
              className="coupong-star-icon13"
              alt=""
              src="/appguide/coupang/star@2x.png"
            />
            <div className="coupong-frame-child11" />
            <div className="coupong-frame-child12" />
            <div className="coupong-frame-child13" />
            <div className="coupong-frame-child14" />
            <div className="coupong-frame-child15" />
            <div className="coupong-div154">리뷰 전체보기</div>
            <div className="coupong-frame-child16" />
            <div className="coupong-frame-child17" />
            <div className="coupong-div155">상품문의</div>
            <div className="coupong-div156">이 제품과 비슷한 상품</div>
            <div className="coupong-div157">더 보기</div>
            <div className="coupong-div158">더 보기</div>
            <img
              className="coupong-star-icon14"
              alt=""
              src="/appguide/coupang/star1@2x.png"
            />
          </div>
          <div className="coupong-rectangle-parent58">
            <div className="coupong-frame-child18" />
            <div className="coupong-div159">상품정보</div>
            <div className="coupong-div160">개당 중량</div>
            <div className="coupong-div161">품종</div>
            <div className="coupong-div162">총 수량</div>
            <div className="coupong-div163">쿠팡상품번호</div>
            <div className="coupong-kg1">1kg</div>
            <div className="coupong-div164">감귤</div>
            <div className="coupong-div165">1개</div>
            <div className="coupong-div166">157062 - 1928245</div>
          </div>
          <div className="coupong-rectangle-parent59">
            <div className="coupong-frame-child19" />
            <div className="coupong-kg-1">
              <p className="coupong-p23">[뀰담원] 뀰담원 제주 제철 감귤, 5kg</p>
              <p className="coupong-p23">1박스</p>
            </div>
            <div className="coupong-div167">19%</div>
            <div className="coupong-div168">48,900원</div>
            <div className="coupong-div169">60,000원</div>
            <div className="coupong-div170">무료배송</div>
            <div className="coupong-g-978">(100g당 978원)</div>
            <div className="coupong-frame-child20" />
          </div>
          <div className="coupong-group-container">
            <div className="coupong-rectangle-parent60">
              <div className="coupong-group-child64" />
              <img
                className="coupong-star-icon15"
                alt=""
                src="/appguide/coupang/star2@2x.png"
              />
              <img
                className="coupong-star-icon16"
                alt=""
                src="/appguide/coupang/star2@2x.png"
              />
              <img
                className="coupong-star-icon17"
                alt=""
                src="/appguide/coupang/star2@2x.png"
              />
              <img
                className="coupong-star-icon18"
                alt=""
                src="/appguide/coupang/star2@2x.png"
              />
              <img
                className="coupong-star-icon19"
                alt=""
                src="/appguide/coupang/star3@2x.png"
              />
            </div>
            <div className="coupong-frame-child21" />
            <img
              className="coupong-kakaotalk-20240416-200629025-1-icon"
              alt=""
              src="/appguide/coupang/kakaotalk-20240416-200629025-1@2x.png"
            />
          </div>
        </div>
        <div className="coupong-productupper">
          <div className="coupong-productupper-child" />
          <div className="coupong-productupper-item" />
          <div className="coupong-div171">바로구매</div>
          <div className="coupong-rectangle-parent61" onClick={openAddCartPop11}>
            <div className="coupong-group-child65" />
            <div className="coupong-div172">장바구니</div>
          </div>
        </div>
        <div className="coupong-g-parent">
          <div className="coupong-g7">g</div>
          <div className="coupong-o7">o</div>
          <div className="coupong-p47">p</div>
          <div className="coupong-n7">n</div>
          <div className="coupong-cou7">cou</div>
        </div>
      </div>
      {isAddCartPop11Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddCartPop11}
        >
          <AddCartPop onClose={closeAddCartPop11} />
        </PortalPopup>
      )}
    </>
  );
};

export default Product;
