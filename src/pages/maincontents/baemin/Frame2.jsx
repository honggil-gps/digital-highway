import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../../../components/baemin/GroupComponent1";
import "./Frame2.css";

const Frame2 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="div189">
      <div className="frame14">
        <img className="image-1-icon1" alt="" src="/image-4@2x.png" />
        <div className="frame15">
          <div className="frame-child4" />
          <div className="frame-child5" />
          <div className="div190">말왕족발</div>
          <div className="div191">5.0</div>
          <img className="star-icon23" alt="" src="/star@2x.png" />
          <div className="div192">리뷰 15개</div>
          <img className="frame-child6" alt="" />
          <div className="div193">
            <p className="p89">최소주문금액 15,000원</p>
            <p className="p89">한집배달 소요시간 31~41분</p>
          </div>
          <div className="wrapper4">
            <div className="div194">내가 받은 쿠폰 보기</div>
          </div>
          <div className="beforelike">
            <div className="beforelike-child" />
            <div className="div195">찜하기</div>
            <img
              className="ant-designheart-outlined-icon"
              alt=""
              src="/antdesignheartoutlined.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="parent4">
          <div className="div196">인기 메뉴</div>
          <div className="rectangle-parent27">
            <div className="instance-child14" onClick={onRectangleClick} />
            <div className="div197">
              <span className="txt14">
                <p className="p89">[무료배달이벤트]</p>
                <p className="p89">1+1 족발세트</p>
                <p className="p89">소 : 34,900</p>
                <p className="p89">중 : 41,900</p>
                <p className="p89">대 : 48,900</p>
              </span>
            </div>
            <img
              className="instance-child15"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent28">
            <div className="beforelike-child" />
            <div className="div197">
              <span className="txt14">
                <p className="p89">마늘보쌈</p>
                <p className="p89">소 : 29,000원</p>
                <p className="p89">중 : 36,000원</p>
                <p className="p89">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="instance-child15"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
        </div>
        <div className="instance-parent1">
          <div className="rectangle-parent27">
            <div className="beforelike-child" />
            <div className="div197">
              <span className="txt14">
                <p className="p89">여기서만 맛볼수있습니다</p>
                <p className="p89">{`고기만 `}</p>
                <p className="p89">소 : 22,000</p>
                <p className="p89">중 : 30,000</p>
                <p className="p89">대 : 38,000</p>
              </span>
            </div>
            <img
              className="instance-child15"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent28">
            <div className="beforelike-child" />
            <div className="div197">
              <span className="txt14">
                <p className="p89">마늘보쌈</p>
                <p className="p89">소 : 29,000원</p>
                <p className="p89">중 : 36,000원</p>
                <p className="p89">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="instance-child15"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="div196">보쌈메뉴</div>
        </div>
        <div className="instance-parent2">
          <GroupComponent
            rectangle15="/rectangle-15@2x.png"
            rectangleIcon
            propTop="3.063rem"
            propLeft="0rem"
          />
          <GroupComponent
            rectangle15="/rectangle-15@2x.png"
            rectangleIcon
            propTop="13.375rem"
            propLeft="0rem"
          />
          <div className="div202">족발메뉴</div>
        </div>
        <div className="instance-parent3">
          <div className="rectangle-parent27">
            <div className="beforelike-child" />
            <div className="div197">
              <span className="txt14">
                <p className="p89">사이드 주문 1위</p>
                <p className="p89">막국수</p>
                <p className="p89">소 : 10,000</p>
                <p className="p89">중 : 15,000</p>
                <p className="p89">대 : 20,000</p>
              </span>
            </div>
            <img
              className="instance-child23"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent28">
            <div className="beforelike-child" />
            <div className="div197">
              <span className="txt14">
                <p className="p89">생굴+김치</p>
                <p className="p89">소 : 10,000원</p>
                <p className="p89">중 : 15,000원</p>
                <p className="p89">대 : 20,000원</p>
              </span>
            </div>
            <img
              className="instance-child23"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <img className="icon5" alt="" src="/-20240416--950-1@2x.png" />
          <img className="icon6" alt="" src="/-20240416--951-1@2x.png" />
          <div className="div196">사이드메뉴</div>
        </div>
        <img className="icon7" alt="" src="/-20240416--944-1@2x.png" />
        <img className="icon8" alt="" src="/-20240416--947-1@2x.png" />
        <img className="icon9" alt="" src="/-20240416--948-1@2x.png" />
      </div>
    </div>
  );
};

export default Frame2;
