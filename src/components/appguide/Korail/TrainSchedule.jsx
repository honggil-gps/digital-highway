import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSchedule.css";

const TrainSchedule = () => {
  const navigate = useNavigate();

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onFooterButton1Click = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onReservation50300ButtonClick = useCallback(() => {
    navigate("/maincontents/trainselect-09");
  }, [navigate]);

  return (
    <div className="krail-trainschedule-08">
      <footer className="krail-trainschedulefooter">
        <div className="krail-footerbutton41">
          <b className="krail-b83">승차권확인</b>
          <button
            className="krail-footerbutton4image1"
            onClick={onFooterButton4ImageClick}
          />
        </div>
        <div className="krail-footerbutton31">
          <b className="krail-b83">관광상품</b>
          <img
            className="krail-footerbutton3image-icon1"
            alt=""
            src="/appguide/Korail/footerbutton3image@2x.png"
          />
        </div>
        <div className="krail-footerbutton21">
          <img
            className="krail-footerbutton2image-icon1"
            alt=""
            src="/appguide/Korail/footerbutton2image@2x.png"
          />
          <b className="krail-b83">할인ㆍ정기권</b>
        </div>
        <button className="krail-footerbutton11" onClick={onFooterButton1Click}>
          <b className="krail-b86">승차권예매</b>
          <img
            className="krail-footerbutton1image-icon1"
            alt=""
            src="/appguide/Korail/footerbutton1image@2x.png"
          />
        </button>
      </footer>
      <main className="krail-trainschedulemain">
        <div className="krail-trainschedulemainnextdaybutton">
          <div className="krail-div">다음날 (05월 02일) 조회하기</div>
        </div>
        <div className="krail-trainschedulemainseat">
          <div className="krail-trainschedulemaintrainlistsele">
            <div className="krail-trainlist7">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX</p>
                  <p className="krail-ktx-">112</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">20:50</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">21:40</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-reservation69900button">
                <div className="krail-div3">69,900원</div>
                <b className="krail-b87">5%적립</b>
                <img
                  className="krail-mileageimage-icon"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
              </div>
              <div className="krail-reservation49900button">
                <div className="krail-div3">49,900원</div>
                <b className="krail-b87">5%적립</b>
                <img
                  className="krail-mileageimage-icon"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="krail-trainlist6">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX-산천</p>
                  <p className="krail-ktx-">110</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">15:41</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">18:26</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-soldoutbutton">
                <div className="krail-div7">매진</div>
              </div>
              <div className="krail-unassignedsetbutton">
                <div className="krail-div7">자유석</div>
              </div>
            </div>
            <div className="krail-trainlist5">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX</p>
                  <p className="krail-ktx-">108</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">13:37</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">16:22</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-reservationred69900button">
                <div className="krail-div3">69,900원</div>
                <b className="krail-b87">5%적립</b>
                <img
                  className="krail-mileageimage-icon"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
                <img
                  className="krail-hourglassimage-icon"
                  alt=""
                  src="/appguide/Korail/hourglassimage.svg"
                />
              </div>
              <div className="krail-reservation49900button">
                <div className="krail-div3">49,900원</div>
                <b className="krail-b87">5%적립</b>
                <img
                  className="krail-mileageimage-icon"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="krail-trainlist4">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX-산천</p>
                  <p className="krail-ktx-">162</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">10:14</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">12:52</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-soldoutbutton1">
                <div className="krail-div7">매진</div>
              </div>
              <button
                className="krail-reservation50300button"
                onClick={onReservation50300ButtonClick}
              >
                <div className="krail-div16">50,300원</div>
                <b className="krail-b91">5%적립</b>
                <img
                  className="krail-mileageimage-icon4"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
              </button>
            </div>
            <div className="krail-trainlist3">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX</p>
                  <p className="krail-ktx-">104</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">08:16</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">11:00</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-waitseatbutton">
                <div className="krail-div19">입석+좌석</div>
                <div className="krail-div20">예약대기</div>
              </div>
              <div className="krail-soldoutbutton">
                <div className="krail-div7">매진</div>
              </div>
            </div>
            <div className="krail-trainlist2">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX</p>
                  <p className="krail-ktx-">102</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">04:53</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">09:15</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-waitseatbutton">
                <div className="krail-div19">50,300원</div>
                <b className="krail-b92">5%적립</b>
                <img
                  className="krail-mileageimage-icon4"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
              </div>
              <div className="krail-reservation70400button">
                <img
                  className="krail-mileageimage-icon4"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
                <b className="krail-b93">5%적립</b>
                <div className="krail-div25">70,400원</div>
              </div>
            </div>
            <div className="krail-trainlist1">
              <div className="krail-trainlistline" />
              <div className="krail-ktx-112">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">KTX</p>
                  <p className="krail-ktx-">166</p>
                </span>
              </div>
              <div className="krail-div1">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">04:53</p>
                  <p className="krail-ktx-">부산</p>
                </span>
              </div>
              <div className="krail-div2">
                <span className="krail-ktx-112-txt-container">
                  <p className="krail-ktx-">07:29</p>
                  <p className="krail-ktx-">광명</p>
                </span>
              </div>
              <div className="krail-reservation70400button">
                <img
                  className="krail-mileageimage-icon4"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
                <b className="krail-b94">5%적립</b>
                <div className="krail-div25">70,400원</div>
              </div>
              <div className="krail-waitseatbutton">
                <div className="krail-div19">50,300원</div>
                <b className="krail-b92">5%적립</b>
                <img
                  className="krail-mileageimage-icon4"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
              </div>
            </div>
          </div>
          <div className="krail-trainschedulemaintrainlisttitl">
            <b className="krail-b96">열차</b>
            <b className="krail-b97">출발</b>
            <b className="krail-b98">도착</b>
            <b className="krail-b99">일반실</b>
            <b className="krail-b100">특/우등</b>
          </div>
        </div>
        <div className="krail-trainschedulemaindate">
          <div className="krail-schedulemaindatebutton3">
            <div className="krail-div30">직통</div>
            <img
              className="krail-vector-icon1"
              alt=""
              src="/appguide/Korail/vector1.svg"
            />
          </div>
          <div className="krail-schedulemaindatebutton2">
            <div className="krail-div31">일반석</div>
            <img
              className="krail-vector-icon2"
              alt=""
              src="/appguide/Korail/vector2.svg"
            />
          </div>
          <div className="krail-schedulemaindatebutton1">
            <div className="krail-ktx6">KTX</div>
            <img
              className="krail-vector-icon3"
              alt=""
              src="/appguide/Korail/vector2.svg"
            />
          </div>
          <div className="krail-schedulemaindatenextbutton">
            <div className="krail-div32">다음날</div>
          </div>
          <div className="krail-schedulemaindateprevbutton">
            <div className="krail-div32">이전날</div>
          </div>
          <b className="krail-b101">2024년 05월 01일 (목)</b>
        </div>
      </main>
      <header className="krail-trainscheduleheader">
        <div className="krail-trainscheduleheaderdestination">
          <b className="krail-b102">광명</b>
          <img
            className="krail-trainscheduleheaderdestination-icon"
            alt=""
            src="/appguide/Korail/trainscheduleheaderdestinationarrow.svg"
          />
          <b className="krail-b103">{`부산`}</b>
        </div>
        <div className="krail-trainscheduleheaderttitle">
          <button className="krail-trainscheduleheaderttitlereloa">
            <img
              className="krail-trainscheduleheaderttitlereloa-icon"
              alt=""
              src="/appguide/Korail/trainscheduleheaderttitlereloadbuttonvector.svg"
            />
          </button>
          <b className="krail-b104">가는 열차 조회</b>
        </div>
      </header>
    </div>
  );
};

export default TrainSchedule;
