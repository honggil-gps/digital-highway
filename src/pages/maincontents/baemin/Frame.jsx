import { useCallback } from "react";
import GroupComponent from "../../../components/baemin/GroupComponent1";
import FrameComponent from "../../../components/baemin/FrameComponent";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

const Frame = () => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="div">
      <div className="frame-parent">
        <div className="frame-group">
          <div className="parent">
            <div className="div1">인기 메뉴</div>
            <div className="rectangle-parent">
              <div className="instance-child" />
              <div className="div2">
                <span className="txt">
                  <p className="p">[무료배달이벤트]</p>
                  <p className="p">1+1 족발세트</p>
                  <p className="p">소 : 34,900</p>
                  <p className="p">중 : 41,900</p>
                  <p className="p">대 : 48,900</p>
                </span>
              </div>
              <img
                className="instance-item"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled" />
            </div>
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div2">
                <span className="txt">
                  <p className="p">마늘보쌈</p>
                  <p className="p">소 : 29,000원</p>
                  <p className="p">중 : 36,000원</p>
                  <p className="p">대 : 43,000원</p>
                </span>
              </div>
              <img
                className="instance-item"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled" />
            </div>
          </div>
          <div className="instance-parent">
            <div className="rectangle-parent">
              <div className="instance-child" />
              <div className="div2">
                <span className="txt">
                  <p className="p">여기서만 맛볼수있습니다</p>
                  <p className="p">{`고기만 `}</p>
                  <p className="p">소 : 22,000</p>
                  <p className="p">중 : 30,000</p>
                  <p className="p">대 : 38,000</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled" />
            </div>
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div2">
                <span className="txt">
                  <p className="p">마늘보쌈</p>
                  <p className="p">소 : 29,000원</p>
                  <p className="p">중 : 36,000원</p>
                  <p className="p">대 : 43,000원</p>
                </span>
              </div>
              <img
                className="instance-item"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled" />
            </div>
            <div className="div6">보쌈메뉴</div>
          </div>
          <div className="instance-group">
            <GroupComponent
              rectangle15="/rectangle-15@2x.png"
              rectangleIcon={false}
            />
            <GroupComponent
              rectangle15="/rectangle-15@2x.png"
              rectangleIcon={false}
              propTop="13.375rem"
              propLeft="0rem"
            />
            <div className="div7">족발메뉴</div>
          </div>
          <div className="instance-container">
            <div className="rectangle-parent">
              <div className="instance-child" />
              <div className="div2">
                <span className="txt">
                  <p className="p">사이드 주문 1위</p>
                  <p className="p">막국수</p>
                  <p className="p">소 : 10,000</p>
                  <p className="p">중 : 15,000</p>
                  <p className="p">대 : 20,000</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled" />
            </div>
            <div className="rectangle-group">
              <div className="instance-child" />
              <div className="div2">
                <span className="txt">
                  <p className="p">생굴+김치</p>
                  <p className="p">소 : 10,000원</p>
                  <p className="p">중 : 15,000원</p>
                  <p className="p">대 : 20,000원</p>
                </span>
              </div>
              <img
                className="instance-child1"
                alt=""
                src="/rectangle-15@2x.png"
              />
              <div className="ant-designheart-filled" />
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
          <div className="div11">
            <p className="p">최소주문금액 15,000원</p>
            <p className="p">한집배달 소요시간 31~41분</p>
          </div>
          <div className="frame-item" />
          <div className="div12">내가 받은 쿠폰 보기</div>
        </div>
      </div>
      <FrameComponent />
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <div className="group">
        <div className="div13">43,900원</div>
        <div className="div14" onClick={onText1Click}>
          장바구니 보기
        </div>
        <div className="frame-inner" />
      </div>
    </div>
  );
};

export default Frame;
