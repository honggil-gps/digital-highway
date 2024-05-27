import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const onMenuIconClick = useCallback(() => {
    navigate("/maincontents/category-8");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/maincontents/login-3");
  }, [navigate]);

  return (
    <div className="coupong-main-6">
      <div className="coupong-frame-group">
        <div className="coupong-frame-div">
          <img
            className="coupong-frame-child3"
            alt=""
            src="/appguide/coupang/rectangle-103@2x.png"
          />
          <img
            className="coupong-frame-child4"
            alt=""
            src="/appguide/coupang/rectangle-104@2x.png"
          />
          <img
            className="coupong-frame-child5"
            alt=""
            src="/appguide/coupang/rectangle-105@2x.png"
          />
          <img
            className="coupong-frame-child6"
            alt=""
            src="/appguide/coupang/ad1.png"
          />
        </div>
        <div className="coupong-instance-container">
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/category1.png"
            />
            <div className="coupong-div51">자주산상품</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1291@2x.png"
            />
            <div className="coupong-div51">쿠퐁플레이</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-129@2x.png"
            />
            <div className="coupong-div51">라켓프레시</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1292@2x.png"
            />
            <div className="coupong-div51">쿠퐁라이브</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1293@2x.png"
            />
            <div className="coupong-div55">쿠퐁이츠</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1294@2x.png"
            />
            <div className="coupong-div55">골드박스</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1295@2x.png"
            />
            <div className="coupong-div51">지금할인중</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1296@2x.png"
            />
            <div className="coupong-div55">라켓직구</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1297@2x.png"
            />
            <div className="coupong-div55">라켓배송</div>
          </div>
          <div className="coupong-rectangle-parent24">
            <div className="coupong-instance-child28" />
            <img
              className="coupong-instance-child29"
              alt=""
              src="/appguide/coupang/rectangle-1298@2x.png"
            />
            <div className="coupong-div51">라켓럭셔리</div>
          </div>
        </div>
        <div className="coupong-rectangle-parent34">
          <div className="coupong-group-child21" />
          <div className="coupong-div61">이 상품 놓치지 마세요!</div>
          <div className="coupong-div62">더보기</div>
          <img
            className="coupong-fluent-emojiclutch-bag-icon1"
            alt=""
            src="/appguide/coupang/fluentemojiclutchbag.svg"
          />
          <div className="coupong-instance-parent1">
            <div className="coupong-rectangle-parent35">
              <div className="coupong-instance-child28" />
              <img
                className="coupong-instance-child49"
                alt=""
                src="/appguide/coupang/meat.png"
              />
              <div className="coupong-div63">
                <p className="coupong-p16">모어미트 캐나다산</p>
                <p className="coupong-p16">보리먹인 암퇘지 삼겹살</p>
              </div>
              <div className="coupong-div64">25% 23,900원</div>
              <div className="coupong-div65">17,990원</div>
              <div className="coupong-instance-child50" />
            </div>
            <div className="coupong-rectangle-parent35">
              <div className="coupong-instance-child28" />
              <img
                className="coupong-instance-child49"
                alt=""
                src="/appguide/coupang/rectangle-1361@2x.png"
              />
              <div className="coupong-div63">
                <p className="coupong-p16">감감 후렌치 바게트 빵</p>
                <p className="coupong-p16">(냉동), 300g, 1개</p>
              </div>
              <div className="coupong-div67">라켓프레시</div>
              <div className="coupong-div68">3,000원</div>
              <div className="coupong-instance-child53" />
            </div>
            <div className="coupong-rectangle-parent35">
              <div className="coupong-instance-child28" />
              <img
                className="coupong-instance-child49"
                alt=""
                src="/appguide/coupang/rectangle-136@2x.png"
              />
              <div className="coupong-div63">
                <p className="coupong-p16">제스피 썬골드키위 점보, 750g, 1개</p>
              </div>
              <div className="coupong-div67">라켓프레시</div>
              <div className="coupong-div65">17,990원</div>
              <div className="coupong-instance-child53" />
            </div>
            <div className="coupong-rectangle-parent35">
              <div className="coupong-instance-child28" />
              <img
                className="coupong-instance-child49"
                alt=""
                src="/appguide/coupang/rectangle-1362@2x.png"
              />
              <div className="coupong-div63">
                G6 3in1 커피믹스 수출용, 16g, 50개입, 1개
              </div>
              <div className="coupong-div64">42% 18,800원</div>
              <div className="coupong-div65">10,900원</div>
              <div className="coupong-instance-child50" />
            </div>
          </div>
        </div>
      </div>
      <div className="coupong-rectangle-parent39">
        <div className="coupong-group-child22" />
        <div className="coupong-menu-group">
          <img
            className="coupong-menu-icon1"
            alt=""
            src="/appguide/coupang/menu@2x.png"
            onClick={onMenuIconClick}
          />
          <img
            className="coupong-search-icon1"
            alt=""
            src="/appguide/coupang/search@2x.png"
          />
          <img
            className="coupong-search-icon1"
            alt=""
            src="/appguide/coupang/home-page@2x.png"
          />
          <img
            className="coupong-search-icon1"
            alt=""
            src="/appguide/coupang/user1@2x.png"
          />
          <img
            className="coupong-search-icon1"
            alt=""
            src="/appguide/coupang/shopping-cart@2x.png"
          />
        </div>
      </div>
      <div className="coupong-header1">
        <div className="coupong-header-child1" />
        <div className="coupong-cou-parent2">
          <div className="coupong-cou4">cou</div>
          <div className="coupong-p20">p</div>
          <div className="coupong-o4">o</div>
          <div className="coupong-n4">n</div>
          <div className="coupong-g4">g</div>
        </div>
        <input
          className="coupong-header-child2"
          name="search_bar"
          id="search_bar"
          placeholder="쿠퐁에서 검색하세요!"
          type="text"
        />
        <div className="coupong-rectangle-parent40" onClick={onGroupContainer1Click}>
          <div className="coupong-group-child23" />
          <div className="coupong-div75">로그인</div>
          <img
            className="coupong-customer-icon1"
            alt=""
            src="/appguide/coupang/customer@2x.png"
          />
        </div>
        <img
          className="coupong-group-icon"
          alt=""
          src="/appguide/coupang/group-25@2x.png"
        />
      </div>
    </div>
  );
};

export default Main;
