import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../../../components/appguide/baemin/FrameComponent";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/13");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/maincontents/cart");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("바베큐맛 중 사이즈를 고르고 \n 장바구니에 담아보세요.", "장바구니 보기 버튼을 눌러 \n 선택한 주문내역을 확인해보세요", "알뜰배달은 저렴한 대신 느리고, \n 한집배달은 바로 배달오는 대신 \n 배달팁이 더 추가됩니다. \n 알뜰 배달을 선택해보세요.")},[])

  return (
    <div className="baeman-div78">
      <div className="baeman-inner1">
        <div className="baeman-rectangle-parent19">
          <div className="baeman-frame-item" />
          <div className="baeman-div79">
            <p className="baeman-p65">최소주문금액 15,000원</p>
            <p className="baeman-p65">한집배달 소요시간 31~41분</p>
          </div>
          <div className="baeman-frame-inner" />
          <div className="baeman-div80">내가 받은 쿠폰 보기</div>
        </div>
      </div>
      <div className="baeman-menulist2">
        <div className="baeman-instance-parent1">
          <div className="baeman-rectangle-parent20">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">마늘보쌈</p>
                <p className="baeman-p65">소 : 29,000원</p>
                <p className="baeman-p65">중 : 36,000원</p>
                <p className="baeman-p65">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/rectangle-156@2x.png"
            />
          </div>
          <div className="baeman-rectangle-parent21">
            <div className="baeman-instance-child11" onClick={onRectangleClick} />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">[무료배달이벤트]</p>
                <p className="baeman-p65">1+1 족발세트</p>
                <p className="baeman-p65">소 : 34,900</p>
                <p className="baeman-p65">중 : 41,900</p>
                <p className="baeman-p65">대 : 48,900</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/menuPopular.png"
            />
          </div>
          <div className="baeman-div81">인기 메뉴</div>
        </div>
        <div className="baeman-instance-parent2">
          <div className="baeman-rectangle-parent21">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">여기서만 맛볼수있습니다</p>
                <p className="baeman-p65">{`고기만 `}</p>
                <p className="baeman-p65">소 : 22,000</p>
                <p className="baeman-p65">중 : 30,000</p>
                <p className="baeman-p65">대 : 38,000</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/onlyMeat.png"
            />
          </div>
          <div className="baeman-rectangle-parent20">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">마늘보쌈</p>
                <p className="baeman-p65">소 : 29,000원</p>
                <p className="baeman-p65">중 : 36,000원</p>
                <p className="baeman-p65">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/rectangle-156@2x.png"
            />
          </div>
          <div className="baeman-div81">보쌈메뉴</div>
        </div>
        <div className="baeman-instance-parent3">
          <div className="baeman-rectangle-parent21">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">맛집랭킹 1위</p>
                <p className="baeman-p65">냉채족발</p>
                <p className="baeman-p65">소 : 25,000</p>
                <p className="baeman-p65">중 : 32,000</p>
                <p className="baeman-p65">대 : 40,000</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/coldMeat.png"
            />
          </div>
          <div className="baeman-rectangle-parent20">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">스트레스 받을때</p>
                <p className="baeman-p65">불족발</p>
                <p className="baeman-p65">소 : 23,000원</p>
                <p className="baeman-p65">중 : 30,000원</p>
                <p className="baeman-p65">대 : 38,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/hotMeat.png"
            />
          </div>
          <div className="baeman-div83">족발메뉴</div>
        </div>
        <div className="baeman-instance-parent4">
          <div className="baeman-rectangle-parent21">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">사이드 주문 1위</p>
                <p className="baeman-p65">막국수</p>
                <p className="baeman-p65">소 : 10,000</p>
                <p className="baeman-p65">중 : 15,000</p>
                <p className="baeman-p65">대 : 20,000</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/sideMenu.png"
            />
          </div>
          <div className="baeman-rectangle-parent20">
            <div className="baeman-instance-child10" />
            <div className="baeman-menucaption9">
              <span className="baeman-menucaption-txt9">
                <p className="baeman-p65">생굴+김치</p>
                <p className="baeman-p65">소 : 10,000원</p>
                <p className="baeman-p65">중 : 15,000원</p>
                <p className="baeman-p65">대 : 20,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon2"
              alt=""
              src="/appguide/baemin/sideMenu2.png"
            />
          </div>
          <div className="baeman-div81">사이드메뉴</div>
        </div>
      </div>
      <FrameComponent1 />
      <img
        className="baeman-image-4-icon"
        alt=""
        src="/appguide/baemin/image-4@2x.png"
      />
      <div className="baeman-parent1">
        <div className="baeman-div85">43,900원</div>
        <div className="baeman-div86" onClick={onText1Click}>
          장바구니 보기
        </div>
        <div className="baeman-line-div" />
      </div>
    </div>
  );
};

export default Frame;
