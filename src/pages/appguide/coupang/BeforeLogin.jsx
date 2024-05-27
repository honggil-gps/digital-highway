import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BeforeLogin.css";

const BeforeLogin = () => {
  const navigate = useNavigate();

  const toMainPage = useCallback(() => {
    navigate("/maincontents/beforelogin-2")
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/login-3");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/maincontents/login-3");
  }, [navigate]);

  return (
    <div className="coupong-beforelogin-2">
            <div className="coupong-header">
        <div className="coupong-header-child" />
        <div className="coupong-cou-group" onClick={toMainPage}>
          <div className="coupong-cou1">cou</div>
          <div className="coupong-p5">p</div>
          <div className="coupong-o1">o</div>
          <div className="coupong-n1">n</div>
          <div className="coupong-g1">g</div>
        </div>
        <input
          className="coupong-header-item"
          name="search_bar"
          id="search_bar"
          placeholder="쿠퐁에서 검색하세요!"
          type="text"
        />
        <div className="coupong-rectangle-parent14" onClick={onGroupContainer1Click}>
          <div className="coupong-group-child1" />
          <div className="coupong-div27">로그인</div>
          <img
            className="coupong-customer-icon"
            alt=""
            src="/appguide/coupang/customer@2x.png"
          />
        </div>
        <img
          className="coupong-header-inner"
          alt=""
          src="/appguide/coupang/group-25@2x.png"
        />
      </div>
      <div className="coupong-frame-parent">
      <div className="coupong-frame-wrapper">
          <div className="coupong-component-parent">
            <img
              className="coupong-frame-item"
              alt=""
              src="/appguide/coupang/ad1.png"
            />
            <img
              className="coupong-frame-item"
              alt=""
              src="/appguide/coupang/rectangle-103@2x.png"
            />
            <img
              className="coupong-frame-item"
              alt=""
              src="/appguide/coupang/rectangle-104@2x.png"
            />
            <img
              className="coupong-frame-item"
              alt=""
              src="/appguide/coupang/rectangle-105@2x.png"
            />
          </div>
        </div>
        <div className="coupong-group-div">
          <div className="coupong-group-item" />
          <div className="coupong-div25">로그인하시고, 다양한 혜택을 만나보세요!</div>
          <div className="coupong-rectangle-parent13" onClick={onGroupContainerClick}>
            <div className="coupong-group-inner" />
            <div className="coupong-div26">로그인 바로가기</div>
          </div>
        </div>
        <div className="coupong-instance-group">
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/category1.png"
            />
            <div className="coupong-div15">자주산상품</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1291@2x.png"
            />
            <div className="coupong-div15">쿠퐁플레이</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-129@2x.png"
            />
            <div className="coupong-div15">라켓프레시</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1292@2x.png"
            />
            <div className="coupong-div15">쿠퐁라이브</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1293@2x.png"
            />
            <div className="coupong-div19">쿠퐁이츠</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1294@2x.png"
            />
            <div className="coupong-div19">골드박스</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1295@2x.png"
            />
            <div className="coupong-div15">지금할인중</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1296@2x.png"
            />
            <div className="coupong-div19">라켓직구</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1297@2x.png"
            />
            <div className="coupong-div19">라켓배송</div>
          </div>
          <div className="coupong-rectangle-parent3">
            <div className="coupong-instance-child" />
            <img
              className="coupong-instance-child9"
              alt=""
              src="/appguide/coupang/rectangle-1298@2x.png"
            />
            <div className="coupong-div15">라켓럭셔리</div>
          </div>
        </div>
        <div className="coupong-rectangle-group">
          <div className="coupong-div13">이 상품 놓치지 마세요!</div>
            <div className="coupong-div14">더보기</div>
            <img
              className="coupong-fluent-emojiclutch-bag-icon"
              alt=""
              src="/appguide/coupang/fluentemojiclutchbag.svg"
            />
          <div className="coupong-frame-child" />
          <div className="coupong-instance-parent">
            <div className="coupong-rectangle-container">
              <div className="coupong-instance-child" />
              <img
                className="coupong-instance-item"
                alt=""
                src="/appguide/coupang/meat.png"
              />
              <div className="coupong-div1">
                <p className="coupong-p1">모어미트 캐나다산</p>
                <p className="coupong-p1">보리먹인 암퇘지 삼겹살</p>
              </div>
              <div className="coupong-div2">25% 23,900원</div>
              <div className="coupong-div3">17,990원</div>
              <div className="coupong-instance-inner" />
            </div>
            <div className="coupong-rectangle-container">
              <div className="coupong-instance-child" />
              <img
                className="coupong-instance-item"
                alt=""
                src="/appguide/coupang/rectangle-1361@2x.png"
              />
              <div className="coupong-div1">
                <p className="coupong-p1">감감 후렌치 바게트 빵</p>
                <p className="coupong-p1">(냉동), 300g, 1개</p>
              </div>
              <div className="coupong-div5">라켓프레시</div>
              <div className="coupong-div6">3,000원</div>
              <div className="coupong-line-div" />
            </div>
            <div className="coupong-rectangle-container">
              <div className="coupong-instance-child" />
              <img
                className="coupong-instance-item"
                alt=""
                src="/appguide/coupang/rectangle-136@2x.png"
              />
              <div className="coupong-div1">
                <p className="coupong-p1">제스피 썬골드키위 점보, 750g, 1개</p>
              </div>
              <div className="coupong-div5">라켓프레시</div>
              <div className="coupong-div3">17,990원</div>
              <div className="coupong-line-div" />
            </div>
            <div className="coupong-rectangle-container">
              <div className="coupong-instance-child" />
              <img
                className="coupong-instance-item"
                alt=""
                src="/appguide/coupang/rectangle-1362@2x.png"
              />
              <div className="coupong-div1">
                G6 3in1 커피믹스 수출용, 16g, 50개입, 1개
              </div>
              <div className="coupong-div2">42% 18,800원</div>
              <div className="coupong-div3">10,900원</div>
              <div className="coupong-instance-inner" />
            </div>
          </div>
          <div className="coupong-div13">이 상품 놓치지 마세요!</div>
          <div className="coupong-div14">더보기</div>
          <img
            className="coupong-fluent-emojiclutch-bag-icon"
            alt=""
            src="/appguide/coupang/fluentemojiclutchbag.svg"
          />
        </div>
      </div>
      <div className="coupong-rectangle-parent15">
        <div className="coupong-group-child2" />
        <div className="coupong-menu-parent">
          <img className="coupong-menu-icon" alt="" src="/appguide/coupang/menu.png" />
          <img
            className="coupong-menu-icon"
            alt=""
            src="/appguide/coupang/search.png"
          />
          <img className="coupong-menu-icon" alt="" src="/appguide/coupang/home.png" />
          <img
            className="coupong-menu-icon"
            alt=""
            src="/appguide/coupang/user@2x.png"
          />
          <img className="coupong-menu-icon" alt="" src="/appguide/coupang/cart.png" />
        </div>
      </div>
    </div>
  );
};

export default BeforeLogin;
