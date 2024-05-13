import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSchedule.css";

const TrainSchedule = () => {
  const navigate = useNavigate();

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const onReservation50300ButtonClick = useCallback(() => {
    navigate("/trainselect-09");
  }, [navigate]);

  return (
    <div className="trainschedule-08">
      <footer className="trainschedulefooter">
        <div className="footerbutton41">
          <b className="b83">승차권확인</b>
          <button
            className="footerbutton4image1"
            onClick={onFooterButton4ImageClick}
          />
        </div>
        <div className="footerbutton31">
          <b className="b83">관광상품</b>
          <img
            className="footerbutton3image-icon1"
            alt=""
            src="/Appguide/Korail/footerbutton3image@2x.png"
          />
        </div>
        <div className="footerbutton21">
          <img
            className="footerbutton2image-icon1"
            alt=""
            src="/Appguide/Korail/footerbutton2image@2x.png"
          />
          <b className="b83">할인ㆍ정기권</b>
        </div>
        <button className="footerbutton11" onClick={onFooterButton1Click}>
          <b className="b86">승차권예매</b>
          <img
            className="footerbutton1image-icon1"
            alt=""
            src="/Appguide/Korail/footerbutton1image@2x.png"
          />
        </button>
      </footer>
      <main className="trainschedulemain">
        <div className="trainschedulemainnextdaybutton">
          <div className="div">다음날 (05월 04일) 조회하기</div>
        </div>
        <div className="trainschedulemainseat">
          <div className="trainschedulemaintrainlistsele">
            <div className="trainlist7">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX</p>
                  <p className="ktx-">112</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">20:50</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">21:40</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="reservation69900button">
                <div className="div3">69,900원</div>
                <b className="b87">5%적립</b>
                <img
                  className="mileageimage-icon"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
              </div>
              <div className="reservation49900button">
                <div className="div3">49,900원</div>
                <b className="b87">5%적립</b>
                <img
                  className="mileageimage-icon"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="trainlist6">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX-산천</p>
                  <p className="ktx-">110</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">15:41</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">18:26</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="soldoutbutton">
                <div className="div7">매진</div>
              </div>
              <div className="unassignedsetbutton">
                <div className="div7">자유석</div>
              </div>
            </div>
            <div className="trainlist5">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX</p>
                  <p className="ktx-">108</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">13:37</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">16:22</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="reservationred69900button">
                <div className="div3">69,900원</div>
                <b className="b87">5%적립</b>
                <img
                  className="mileageimage-icon"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
                <img
                  className="hourglassimage-icon"
                  alt=""
                  src="/Appguide/Korail/hourglassimage.svg"
                />
              </div>
              <div className="reservation49900button">
                <div className="div3">49,900원</div>
                <b className="b87">5%적립</b>
                <img
                  className="mileageimage-icon"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="trainlist4">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX-산천</p>
                  <p className="ktx-">162</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">10:14</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">12:52</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="soldoutbutton1">
                <div className="div7">매진</div>
              </div>
              <button
                className="reservation50300button"
                onClick={onReservation50300ButtonClick}
              >
                <div className="div16">50,300원</div>
                <b className="b91">5%적립</b>
                <img
                  className="mileageimage-icon4"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
              </button>
            </div>
            <div className="trainlist3">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX</p>
                  <p className="ktx-">104</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">08:16</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">11:00</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="waitseatbutton">
                <div className="div19">입석+좌석</div>
                <div className="div20">예약대기</div>
              </div>
              <div className="soldoutbutton">
                <div className="div7">매진</div>
              </div>
            </div>
            <div className="trainlist2">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX</p>
                  <p className="ktx-">102</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">04:53</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">09:15</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="waitseatbutton">
                <div className="div19">50,300원</div>
                <b className="b92">5%적립</b>
                <img
                  className="mileageimage-icon4"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
              </div>
              <div className="reservation70400button">
                <img
                  className="mileageimage-icon4"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
                <b className="b93">5%적립</b>
                <div className="div25">70,400원</div>
              </div>
            </div>
            <div className="trainlist1">
              <div className="trainlistline" />
              <div className="ktx-112">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">KTX</p>
                  <p className="ktx-">166</p>
                </span>
              </div>
              <div className="div1">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">04:53</p>
                  <p className="ktx-">구포</p>
                </span>
              </div>
              <div className="div2">
                <span className="ktx-112-txt-container">
                  <p className="ktx-">07:29</p>
                  <p className="ktx-">광명</p>
                </span>
              </div>
              <div className="reservation70400button">
                <img
                  className="mileageimage-icon4"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
                <b className="b94">5%적립</b>
                <div className="div25">70,400원</div>
              </div>
              <div className="waitseatbutton">
                <div className="div19">50,300원</div>
                <b className="b92">5%적립</b>
                <img
                  className="mileageimage-icon4"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
              </div>
            </div>
          </div>
          <div className="trainschedulemaintrainlisttitl">
            <b className="b96">열차</b>
            <b className="b97">출발</b>
            <b className="b98">도착</b>
            <b className="b99">일반실</b>
            <b className="b100">특/우등</b>
          </div>
        </div>
        <div className="trainschedulemaindate">
          <div className="schedulemaindatebutton3">
            <div className="div30">직통</div>
            <img
              className="vector-icon1"
              alt=""
              src="/Appguide/Korail/vector1.svg"
            />
          </div>
          <div className="schedulemaindatebutton2">
            <div className="div31">일반석</div>
            <img
              className="vector-icon2"
              alt=""
              src="/Appguide/Korail/vector2.svg"
            />
          </div>
          <div className="schedulemaindatebutton1">
            <div className="ktx6">KTX</div>
            <img
              className="vector-icon3"
              alt=""
              src="/Appguide/Korail/vector2.svg"
            />
          </div>
          <div className="schedulemaindatenextbutton">
            <div className="div32">다음날</div>
          </div>
          <div className="schedulemaindateprevbutton">
            <div className="div32">이전날</div>
          </div>
          <b className="b101">2024년 05월 03일 (토)</b>
        </div>
      </main>
      <header className="trainscheduleheader">
        <div className="trainscheduleheaderdestination">
          <b className="b102">광명</b>
          <img
            className="trainscheduleheaderdestination-icon"
            alt=""
            src="/Appguide/Korail/trainscheduleheaderdestinationarrow.svg"
          />
          <b className="b103">{`구포 `}</b>
        </div>
        <div className="trainscheduleheaderttitle">
          <button className="trainscheduleheaderttitlereloa">
            <img
              className="trainscheduleheaderttitlereloa-icon"
              alt=""
              src="/Appguide/Korail/trainscheduleheaderttitlereloadbuttonvector.svg"
            />
          </button>
          <b className="b104">가는 열차 조회</b>
        </div>
      </header>
    </div>
  );
};

export default TrainSchedule;
