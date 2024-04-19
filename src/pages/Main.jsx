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
      <div className="div222">부산 남구 용소로 45(대연동) 303호</div>
      <div className="main-child" />
      <img className="search-icon1" alt="" src="/search@2x.png" />
      <div className="main-item" />
      <div className="main-inner" />
      <div className="div223">메뉴 선택</div>
      <div className="component-15-parent">
        <div className="component-15" onClick={onComponent15ContainerClick}>
          <div className="component-15-child" />
          <div className="div224">족발/보쌈</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div225">
            <p className="p151">돈까스/</p>
            <p className="p151">회/일식</p>
          </div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div224">고기/구이</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div224">피자/치킨</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div228">양식</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div228">중식</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div228">분식</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div231">카페/디저트</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div232">아시안</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div233">백반/죽</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div228">국수</div>
        </div>
        <div className="component-16">
          <div className="component-15-child" />
          <div className="div232">햄버거</div>
        </div>
      </div>
      <div className="component-34">
        <img className="clipboard-icon" alt="" src="/search@2x.png" />
        <div className="div236">검색</div>
      </div>
      <div className="component-35">
        <img className="clipboard-icon" alt="" src="/favorite@2x.png" />
        <div className="div236">찜</div>
      </div>
      <div className="component-36">
        <img className="clipboard-icon" alt="" src="/clipboard@2x.png" />
        <div className="div236">주문내역</div>
      </div>
      <div className="component-37">
        <img className="clipboard-icon" alt="" src="/shopping-cart@2x.png" />
        <div className="div236">장바구니</div>
      </div>
      <div className="component-38">
        <img className="clipboard-icon" alt="" src="/customer@2x.png" />
        <div className="div236">내 정보</div>
      </div>
    </div>
  );
};

export default Main;
