import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  const onComponent15ContainerClick = useCallback(() => {
    navigate("/storelist");
  }, [navigate]);

  return (
    <div className="main">
      <div className="div203">부산 남구 용소로 45(대연동) 303호</div>
      <div className="main-child" />
      <img className="search-icon2" alt="" src="baemin/search@2x.png" />
      <div className="main-item" />
      <div className="main-inner" />
      <div className="div204">메뉴 선택</div>
      <div className="component-15-parent">
        <div className="component-15" onClick={onComponent15ContainerClick}>
          <div className="component-15-child" />
          <div className="div205">족발/보쌈</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/18.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">
            <span className="txt21">
              <p className="p123">돈까스/</p>
              <p className="p123">회/일식</p>
            </span>
          </div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/19.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">고기/구이</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/20.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">피자/치킨</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/21.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">양식</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/22.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">중식</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/23.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">분식</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/24.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">카페/디저트</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/25.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">아시안</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/26.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">백반/죽</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/27.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">국수</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/28.png"
          />
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div205">햄버거</div>
          <img
            className="component-15-item"
            alt=""
            src="baemin/29.png"
          />
        </div>
      </div>
      <div className="component-34">
        <img className="clipboard-icon" alt="" src="baemin/search@2x.png" />
        <div className="div217">검색</div>
      </div>
      <div className="component-35">
        <img className="clipboard-icon" alt="" src="baemin/favorite@2x.png" />
        <div className="div217">찜</div>
      </div>
      <div className="component-36">
        <img className="clipboard-icon" alt="" src="baemin/clipboard@2x.png" />
        <div className="div217">주문내역</div>
      </div>
      <div className="component-37">
        <img className="clipboard-icon" alt="" src="baemin/shopping-cart@2x.png" />
        <div className="div217">장바구니</div>
      </div>
      <div className="component-38">
        <img className="clipboard-icon" alt="" src="baemin/customer@2x.png" />
        <div className="div217">내 정보</div>
      </div>
    </div>
  );
};

export default Main;
