import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="div1">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="parent">
            <div className="div2">인기 메뉴</div>
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">[무료배달이벤트]</p>
                  <p className="p5">1+1 족발세트</p>
                  <p className="p5">소 : 34,900</p>
                  <p className="p5">중 : 41,900</p>
                  <p className="p5">대 : 48,900</p>
                </span>
              </div>
              <img
                className="instance-item"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <div className="rectangle-container">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">마늘보쌈</p>
                  <p className="p5">소 : 29,000원</p>
                  <p className="p5">중 : 36,000원</p>
                  <p className="p5">대 : 43,000원</p>
                </span>
              </div>
              <img
                className="instance-item"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
          </div>
          <div className="instance-parent">
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">여기서만 맛볼수있습니다</p>
                  <p className="p5">{`고기만 `}</p>
                  <p className="p5">소 : 22,000</p>
                  <p className="p5">중 : 30,000</p>
                  <p className="p5">대 : 38,000</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <div className="rectangle-container">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">마늘보쌈</p>
                  <p className="p5">소 : 29,000원</p>
                  <p className="p5">중 : 36,000원</p>
                  <p className="p5">대 : 43,000원</p>
                </span>
              </div>
              <img
                className="instance-item"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <div className="div7">보쌈메뉴</div>
          </div>
          <div className="instance-group">
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">맛집랭킹 1위</p>
                  <p className="p5">냉채족발</p>
                  <p className="p5">소 : 25,000</p>
                  <p className="p5">중 : 32,000</p>
                  <p className="p5">대 : 40,000</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <div className="rectangle-container">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">스트레스 받을때</p>
                  <p className="p5">불족발</p>
                  <p className="p5">소 : 23,000원</p>
                  <p className="p5">중 : 30,000원</p>
                  <p className="p5">대 : 38,000원</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <div className="div10">족발메뉴</div>
          </div>
          <div className="instance-container">
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">사이드 주문 1위</p>
                  <p className="p5">막국수</p>
                  <p className="p5">소 : 10,000</p>
                  <p className="p5">중 : 15,000</p>
                  <p className="p5">대 : 20,000</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <div className="rectangle-container">
              <div className="instance-child" />
              <div className="div3">
                <span className="txt1">
                  <p className="p5">생굴+김치</p>
                  <p className="p5">소 : 10,000원</p>
                  <p className="p5">중 : 15,000원</p>
                  <p className="p5">대 : 20,000원</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled1" />
            </div>
            <img className="icon" alt="" src="/-20240416--950-1@2x.png" />
            <img className="icon1" alt="" src="/-20240416--951-1@2x.png" />
            <div className="div10">사이드메뉴</div>
          </div>
          <img className="icon2" alt="" src="/-20240416--944-1@2x.png" />
          <img className="icon3" alt="" src="/-20240416--947-1@2x.png" />
          <img className="icon4" alt="" src="/-20240416--948-1@2x.png" />
        </div>
        <div className="frame-div">
          <div className="frame-child" />
          <div className="div14">
            <p className="p5">최소주문금액 15,000원</p>
            <p className="p5">한집배달 소요시간 31~41분</p>
          </div>
          <div className="frame-item" />
          <div className="div15">내가 받은 쿠폰 보기</div>
        </div>
      </div>
      <div className="group">
        <div className="div16">말왕족발</div>
        <div className="frame-inner" />
        <div className="div17">찜하기</div>
        <div className="div18">5.0</div>
        <img className="star-icon" alt="" src="/star@2x.png" />
        <div className="div19">리뷰 15개</div>
        <img className="line-icon" alt="" />
        <img className="favorite-icon" alt="" src="/favorite@2x.png" />
      </div>
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <div className="container">
        <div className="div20">43,900원</div>
        <div className="div21" onClick={onText1Click}>
          장바구니 보기
        </div>
        <div className="line-div" />
      </div>
    </div>
  );
};

export default Frame;
