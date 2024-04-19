import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame3.css";

const Frame3 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="div38">
      <div className="frame">
        <img className="image-1-icon" alt="" src="/image-4@2x.png" />
        <div className="frame1">
          <div className="frame-child3" />
          <div className="frame-child4" />
          <div className="div39">말왕족발</div>
          <div className="div40">5.0</div>
          <img className="star-icon1" alt="" src="/star@2x.png" />
          <div className="div41">리뷰 15개</div>
          <img className="frame-child5" alt="" />
          <div className="div42">
            <p className="p46">최소주문금액 15,000원</p>
            <p className="p46">한집배달 소요시간 31~41분</p>
          </div>
          <div className="wrapper1">
            <div className="div43">내가 받은 쿠폰 보기</div>
          </div>
          <div className="beforelike1">
            <div className="beforelike-item" />
            <div className="div44">찜하기</div>
            <img
              className="ant-designheart-outlined-icon1"
              alt=""
              src="/antdesignheartoutlined.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="parent1">
          <div className="div45">인기 메뉴</div>
          <div className="rectangle-parent6">
            <div className="instance-child12" onClick={onRectangleClick} />
            <div className="div46">
              <span className="txt9">
                <p className="p46">[무료배달이벤트]</p>
                <p className="p46">1+1 족발세트</p>
                <p className="p46">소 : 34,900</p>
                <p className="p46">중 : 41,900</p>
                <p className="p46">대 : 48,900</p>
              </span>
            </div>
            <img
              className="instance-child13"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent7">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">마늘보쌈</p>
                <p className="p46">소 : 29,000원</p>
                <p className="p46">중 : 36,000원</p>
                <p className="p46">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="instance-child13"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
        </div>
        <div className="instance-parent1">
          <div className="rectangle-parent6">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">여기서만 맛볼수있습니다</p>
                <p className="p46">{`고기만 `}</p>
                <p className="p46">소 : 22,000</p>
                <p className="p46">중 : 30,000</p>
                <p className="p46">대 : 38,000</p>
              </span>
            </div>
            <img
              className="instance-child13"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent7">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">마늘보쌈</p>
                <p className="p46">소 : 29,000원</p>
                <p className="p46">중 : 36,000원</p>
                <p className="p46">대 : 43,000원</p>
              </span>
            </div>
            <img
              className="instance-child13"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="div45">보쌈메뉴</div>
        </div>
        <div className="instance-parent2">
          <div className="rectangle-parent6">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">맛집랭킹 1위</p>
                <p className="p46">냉채족발</p>
                <p className="p46">소 : 25,000</p>
                <p className="p46">중 : 32,000</p>
                <p className="p46">대 : 40,000</p>
              </span>
            </div>
            <img
              className="instance-child13"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent7">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">스트레스 받을때</p>
                <p className="p46">불족발</p>
                <p className="p46">소 : 23,000원</p>
                <p className="p46">중 : 30,000원</p>
                <p className="p46">대 : 38,000원</p>
              </span>
            </div>
            <img
              className="instance-child13"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="div53">족발메뉴</div>
        </div>
        <div className="instance-parent3">
          <div className="rectangle-parent6">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">사이드 주문 1위</p>
                <p className="p46">막국수</p>
                <p className="p46">소 : 10,000</p>
                <p className="p46">중 : 15,000</p>
                <p className="p46">대 : 20,000</p>
              </span>
            </div>
            <img
              className="instance-child25"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <div className="rectangle-parent7">
            <div className="beforelike-item" />
            <div className="div46">
              <span className="txt9">
                <p className="p46">생굴+김치</p>
                <p className="p46">소 : 10,000원</p>
                <p className="p46">중 : 15,000원</p>
                <p className="p46">대 : 20,000원</p>
              </span>
            </div>
            <img
              className="instance-child25"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className="ant-designheart-filled9" />
          </div>
          <img className="icon5" alt="" src="/-20240416--950-1@2x.png" />
          <img className="icon6" alt="" src="/-20240416--951-1@2x.png" />
          <div className="div45">사이드메뉴</div>
        </div>
        <img className="icon7" alt="" src="/-20240416--944-1@2x.png" />
        <img className="icon8" alt="" src="/-20240416--947-1@2x.png" />
        <img className="icon9" alt="" src="/-20240416--948-1@2x.png" />
      </div>
    </div>
  );
};

export default Frame3;
