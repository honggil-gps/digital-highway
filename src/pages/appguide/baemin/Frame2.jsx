import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame2.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/maincontents/review");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/13");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("선택한 가게의 화면입니다. [리뷰]를 누르면 다른 사람들의 리뷰를 볼 수 있고 [쿠폰받기]를 누르면 주문 시 적용할 수 있는 할인쿠폰을 받을 수도 있습니다.","이제 음식을 주문해볼까요? \n 1+1족발세트를 시켜봅시다.","바베큐맛 중 사이즈를 고르고 \n 장바구니에 담아보세요.")},[])

  return (
    <div className="baeman-div180">
      <div className="baeman-storemainheader1">
        <div className="baeman-frame12">
          <div className="baeman-frame-child5" />
          <div className="baeman-frame-child6" />
          <div className="baeman-div181">말왕족발</div>
          <div className="baeman-div182">5.0</div>
          <img
            className="baeman-star-icon23"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div183" onClick={onText2Click}>
            리뷰 15개
          </div>
          <div className="baeman-favorite-box" />
          <div className="baeman-favorite-desc">찜하기</div>
          <img
            className="baeman-favorite-logo"
            alt=""
            src="/appguide/baemin/favorite@2x.png"
          />
          <img className="baeman-frame-child7" alt="" />
          <div className="baeman-div184">
            <p className="baeman-p137">최소주문금액 15,000원</p>
            <p className="baeman-p137">한집배달 소요시간 31~41분</p>
          </div>
          <div className="baeman-frame-child8" />
        </div>
        <img
          className="baeman-image-1-icon1"
          alt=""
          src="/appguide/baemin/image-4@2x.png"
        />
      </div>
      <div className="baeman-coupnstatus">내가 받은 쿠폰 보기</div>
      <div className="baeman-menulist3">
        <div className="baeman-instance-parent5">
          <div className="baeman-rectangle-parent43">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">마늘보쌈</p>
                <p className="baeman-p137">소 : 29,000원</p>
                <p className="baeman-p137">중 : 36,000원</p>
                <p className="baeman-p137">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/rectangle-156@2x.png"
            />
          </div>
          <div className="baeman-rectangle-parent44">
            <div className="baeman-instance-child19" onClick={onRectangleClick} />
            <div className="baeman-menucaption17" onClick={onRectangleClick}>
              <span className="baeman-menucaption-txt17" onClick={onRectangleClick}>
                <p className="baeman-p137">[무료배달이벤트]</p>
                <p className="baeman-p137">1+1 족발세트</p>
                <p className="baeman-p137">소 : 34,900</p>
                <p className="baeman-p137">중 : 41,900</p>
                <p className="baeman-p137">대 : 48,900</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/menuPopular.png"
              onClick={onRectangleClick}
            />
          </div>
          <div className="baeman-div185">인기 메뉴</div>
        </div>
        <div className="baeman-instance-parent6">
          <div className="baeman-rectangle-parent44">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">여기서만 맛볼수있습니다</p>
                <p className="baeman-p137">{`고기만 `}</p>
                <p className="baeman-p137">소 : 22,000</p>
                <p className="baeman-p137">중 : 30,000</p>
                <p className="baeman-p137">대 : 38,000</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/onlyMeat.png"
            />
          </div>
          <div className="baeman-rectangle-parent43">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">마늘보쌈</p>
                <p className="baeman-p137">소 : 29,000원</p>
                <p className="baeman-p137">중 : 36,000원</p>
                <p className="baeman-p137">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/rectangle-156@2x.png"
            />
          </div>
          <div className="baeman-div185">보쌈메뉴</div>
        </div>
        <div className="baeman-instance-parent7">
          <div className="baeman-rectangle-parent44">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">맛집랭킹 1위</p>
                <p className="baeman-p137">냉채족발</p>
                <p className="baeman-p137">소 : 25,000</p>
                <p className="baeman-p137">중 : 32,000</p>
                <p className="baeman-p137">대 : 40,000</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/coldMeat.png"
            />
          </div>
          <div className="baeman-rectangle-parent43">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">스트레스 받을때</p>
                <p className="baeman-p137">불족발</p>
                <p className="baeman-p137">소 : 23,000원</p>
                <p className="baeman-p137">중 : 30,000원</p>
                <p className="baeman-p137">대 : 38,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/hotMeat.png"
            />
          </div>
          <div className="baeman-div187">족발메뉴</div>
        </div>
        <div className="baeman-instance-parent8">
          <div className="baeman-rectangle-parent44">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">사이드 주문 1위</p>
                <p className="baeman-p137">막국수</p>
                <p className="baeman-p137">소 : 10,000</p>
                <p className="baeman-p137">중 : 15,000</p>
                <p className="baeman-p137">대 : 20,000</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/sideMenu.png"
            />
          </div>
          <div className="baeman-rectangle-parent43">
            <div className="baeman-instance-child18" />
            <div className="baeman-menucaption17">
              <span className="baeman-menucaption-txt17">
                <p className="baeman-p137">생굴+김치</p>
                <p className="baeman-p137">소 : 10,000원</p>
                <p className="baeman-p137">중 : 15,000원</p>
                <p className="baeman-p137">대 : 20,000원</p>
              </span>
            </div>
            <img
              className="baeman-garlicmeat-icon4"
              alt=""
              src="/appguide/baemin/sideMenu2.png"
            />
          </div>
          <div className="baeman-div185">사이드메뉴</div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
