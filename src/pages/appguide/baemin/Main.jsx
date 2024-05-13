import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();// 현재 위치의 정보를 받아옴

  //이전 페이지에서 전달받은 주소 값을 상태에서 추출
  const address = location.state?.address || "주소 정보가 없습니다.";

  const onComponent15ContainerClick = useCallback(() => {
    navigate("/Storelist");
  }, [navigate]);

  return (
    <div className="main">
      <div className="addresstext1">{address}</div> {/*화면에 주소 표시 */}
      <div className="main-child" />
      <img
        className="search-icon1"
        alt=""
        src="/appguide/baemin/search@2x.png"
      />
      <div className="main-item" />
      <div className="main-inner" />
      <div className="div25">메뉴 선택</div>
      <div className="component-15-parent">
        <div className="component-15" onClick={onComponent15ContainerClick}>
          <div className="component-15-child" />
          <div className="div26">족발/보쌈</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-89@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div27">
            <span className="txt3">
              <p className="p50">돈까스/</p>
              <p className="p50">회/일식</p>
            </span>
          </div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-891@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">고기/구이</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-892@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">피자/치킨</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-893@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">양식</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-894@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">중식</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-895@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">분식</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-896@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">카페/디저트</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-897@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">아시안</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-898@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">백반/죽</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-899@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">국수</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-8910@2x.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div26">햄버거</div>
          <img
            className="component-15-item"
            alt=""
            src="/appguide/baemin/rectangle-8911@2x.png"
          />
        </div>
      </div>
      <div className="component-34">
        <img
          className="clipboard-icon"
          alt=""
          src="/appguide/baemin/search1@2x.png"
        />
        <div className="div38">검색</div>
      </div>
      <div className="component-35">
        <img
          className="clipboard-icon"
          alt=""
          src="/appguide/baemin/favorite1@2x.png"
        />
        <div className="div38">찜</div>
      </div>
      <div className="component-36">
        <img
          className="clipboard-icon"
          alt=""
          src="/appguide/baemin/clipboard@2x.png"
        />
        <div className="div38">주문내역</div>
      </div>
      <div className="component-37">
        <img
          className="clipboard-icon"
          alt=""
          src="/appguide/baemin/shopping-cart1@2x.png"
        />
        <div className="div38">장바구니</div>
      </div>
      <div className="component-38">
        <img
          className="clipboard-icon"
          alt=""
          src="/appguide/baemin/customer@2x.png"
        />
        <div className="div38">내 정보</div>
      </div>
    </div>
  );
};

export default Main;
