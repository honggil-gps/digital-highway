import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../../../components/appguide/baemin/FrameComponent";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="div78">
      <div className="inner1">
        <div className="rectangle-parent19">
          <div className="frame-item" />
          <div className="div79">
            <p className="p65">최소주문금액 15,000원</p>
            <p className="p65">한집배달 소요시간 31~41분</p>
          </div>
          <div className="frame-inner" />
          <div className="div80">내가 받은 쿠폰 보기</div>
        </div>
      </div>
      <div className="menulist2">
        <div className="instance-parent1">
          <div className="rectangle-parent20">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">마늘보쌈</p>
                <p className="p65">소 : 29,000원</p>
                <p className="p65">중 : 36,000원</p>
                <p className="p65">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/rectangle-156@2x.png"
            />
          </div>
          <div className="rectangle-parent21">
            <div className="instance-child11" onClick={onRectangleClick} />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">[무료배달이벤트]</p>
                <p className="p65">1+1 족발세트</p>
                <p className="p65">소 : 34,900</p>
                <p className="p65">중 : 41,900</p>
                <p className="p65">대 : 48,900</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/menuPopular.png"
            />
          </div>
          <div className="div81">인기 메뉴</div>
        </div>
        <div className="instance-parent2">
          <div className="rectangle-parent21">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">여기서만 맛볼수있습니다</p>
                <p className="p65">{`고기만 `}</p>
                <p className="p65">소 : 22,000</p>
                <p className="p65">중 : 30,000</p>
                <p className="p65">대 : 38,000</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/onlyMeat.png"
            />
          </div>
          <div className="rectangle-parent20">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">마늘보쌈</p>
                <p className="p65">소 : 29,000원</p>
                <p className="p65">중 : 36,000원</p>
                <p className="p65">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/rectangle-156@2x.png"
            />
          </div>
          <div className="div81">보쌈메뉴</div>
        </div>
        <div className="instance-parent3">
          <div className="rectangle-parent21">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">맛집랭킹 1위</p>
                <p className="p65">냉채족발</p>
                <p className="p65">소 : 25,000</p>
                <p className="p65">중 : 32,000</p>
                <p className="p65">대 : 40,000</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/coldMeat.png"
            />
          </div>
          <div className="rectangle-parent20">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">스트레스 받을때</p>
                <p className="p65">불족발</p>
                <p className="p65">소 : 23,000원</p>
                <p className="p65">중 : 30,000원</p>
                <p className="p65">대 : 38,000원</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/hotMeat.png"
            />
          </div>
          <div className="div83">족발메뉴</div>
        </div>
        <div className="instance-parent4">
          <div className="rectangle-parent21">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">사이드 주문 1위</p>
                <p className="p65">막국수</p>
                <p className="p65">소 : 10,000</p>
                <p className="p65">중 : 15,000</p>
                <p className="p65">대 : 20,000</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/sideMenu.png"
            />
          </div>
          <div className="rectangle-parent20">
            <div className="instance-child10" />
            <div className="menucaption9">
              <span className="menucaption-txt9">
                <p className="p65">생굴+김치</p>
                <p className="p65">소 : 10,000원</p>
                <p className="p65">중 : 15,000원</p>
                <p className="p65">대 : 20,000원</p>
              </span>
            </div>
            <img
              className="garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/sideMenu2.png"
            />
          </div>
          <div className="div81">사이드메뉴</div>
        </div>
      </div>
      <FrameComponent1 />
      <img
        className="image-4-icon"
        alt=""
        src="/appguide/baemin/image-4@2x.png"
      />
      <div className="parent1">
        <div className="div85">43,900원</div>
        <div className="div86" onClick={onText1Click}>
          장바구니 보기
        </div>
        <div className="line-div" />
      </div>
    </div>
  );
};

export default Frame;
