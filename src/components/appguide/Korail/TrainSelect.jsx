import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSelect.css";

const TrainSelect = () => {
  const navigate = useNavigate();

  const onReservation50300ButtonContainerClick = useCallback(() => {
    navigate("/trainschedule-08");
  }, [navigate]);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/my-ticket");
  }, [navigate]);

  const onFooterButton1ContainerClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  const onTrainSelectFooterReservationBuClick = useCallback(() => {
    navigate("/ticketinformation-12");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/train-seat");
  }, [navigate]);

  const onTrainSelectFooterTrainInfoPrevClick = useCallback(() => {
    navigate("/trainschedule-08");
  }, [navigate]);

  const onTrainSelectFooterTrainInfoPrevIconClick = useCallback(() => {
    navigate("/trainschedule-08");
  }, [navigate]);

  return (
    <div className="trainselect-09">
      <main className="trainselectmain">
        <div className="trainselectmainnextdaybutton">
          <div className="div134">다음날 (05월 04일) 조회하기</div>
        </div>
        <div className="trainselectmainseat">
          <div className="trainselectmaintrainlistselect">
            <div className="trainlist71">
              <div className="trainlistline7" />
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX</p>
                  <p className="ktx11">112</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">20:50</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">21:40</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="reservation69900button1">
                <div className="div137">69,900원</div>
                <b className="b328">5%적립</b>
                <img
                  className="mileageimage-icon9"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
              </div>
              <div className="reservation49900button2">
                <div className="div137">49,900원</div>
                <b className="b328">5%적립</b>
                <img
                  className="mileageimage-icon9"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="trainlist61">
              <div className="trainlistline7" />
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX-산천</p>
                  <p className="ktx11">110</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">15:41</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">18:26</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="soldoutbutton3">
                <div className="div141">매진</div>
              </div>
              <div className="unassignedsetbutton1">
                <div className="div141">자유석</div>
              </div>
            </div>
            <div className="trainlist51">
              <div className="trainlistline7" />
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX</p>
                  <p className="ktx11">108</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">13:37</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">16:22</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="reservationred69900button1">
                <div className="div137">69,900원</div>
                <b className="b328">5%적립</b>
                <img
                  className="mileageimage-icon9"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
                <img
                  className="hourglassimage-icon1"
                  alt=""
                  src="/Appguide/Korail/hourglassimage.svg"
                />
              </div>
              <div className="reservation49900button2">
                <div className="div137">49,900원</div>
                <b className="b328">5%적립</b>
                <img
                  className="mileageimage-icon9"
                  alt=""
                  src="/Appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="trainlist41">
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX-산천</p>
                  <p className="ktx11">162</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">10:14</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">12:52</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="soldoutbutton4">
                <div className="div141">매진</div>
              </div>
              <div
                className="reservation50300button3"
                onClick={onReservation50300ButtonContainerClick}
              >
                <div className="div150">50,300원</div>
                <b className="b332">5%적립</b>
                <img
                  className="mileageimage-icon13"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
              </div>
            </div>
            <div className="trainlist31">
              <div className="trainlistline7" />
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX</p>
                  <p className="ktx11">104</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">08:16</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">11:00</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="waitseatbutton1">
                <div className="div150">입석+좌석</div>
                <div className="div154">예약대기</div>
              </div>
              <div className="soldoutbutton3">
                <div className="div141">매진</div>
              </div>
            </div>
            <div className="trainlist21">
              <div className="trainlistline7" />
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX</p>
                  <p className="ktx11">102</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">04:53</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">09:15</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="waitseatbutton1">
                <div className="div150">50,300원</div>
                <b className="b332">5%적립</b>
                <img
                  className="mileageimage-icon13"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
              </div>
              <div className="reservation70400button2">
                <img
                  className="mileageimage-icon13"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
                <b className="b334">5%적립</b>
                <div className="div159">70,400원</div>
              </div>
            </div>
            <div className="trainlist11">
              <div className="trainlistline7" />
              <div className="ktx-1121">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">KTX</p>
                  <p className="ktx11">166</p>
                </span>
              </div>
              <div className="div135">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">04:53</p>
                  <p className="ktx11">구포</p>
                </span>
              </div>
              <div className="div136">
                <span className="ktx-112-txt-container1">
                  <p className="ktx11">07:29</p>
                  <p className="ktx11">광명</p>
                </span>
              </div>
              <div className="reservation70400button2">
                <img
                  className="mileageimage-icon13"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
                <b className="b335">5%적립</b>
                <div className="div159">70,400원</div>
              </div>
              <div className="waitseatbutton1">
                <div className="div150">50,300원</div>
                <b className="b332">5%적립</b>
                <img
                  className="mileageimage-icon13"
                  alt=""
                  src="/Appguide/Korail/mileageimage1.svg"
                />
              </div>
            </div>
          </div>
          <div className="trainselectmaintrainlisttitle">
            <b className="b337">열차</b>
            <b className="b338">출발</b>
            <b className="b339">도착</b>
            <b className="b340">일반실</b>
            <b className="b341">특/우등</b>
          </div>
        </div>
        <div className="trainselectmaindate">
          <div className="schedulemaindatebutton31">
            <div className="div164">직통</div>
            <img
              className="vector-icon24"
              alt=""
              src="/Appguide/Korail/vector1.svg"
            />
          </div>
          <div className="schedulemaindatebutton21">
            <div className="div165">일반석</div>
            <img
              className="vector-icon25"
              alt=""
              src="/Appguide/Korail/vector2.svg"
            />
          </div>
          <div className="schedulemaindatebutton11">
            <div className="ktx16">KTX</div>
            <img
              className="vector-icon26"
              alt=""
              src="/Appguide/Korail/vector2.svg"
            />
          </div>
          <div className="schedulemaindatenextbutton1">
            <div className="div166">다음날</div>
          </div>
          <div className="schedulemaindateprevbutton1">
            <div className="div166">이전날</div>
          </div>
          <b className="b342">2024년 05월 03일 (토)</b>
        </div>
      </main>
      <header className="trainselectheader">
        <div className="trainscheduleheaderdestination1">
          <b className="b343">광명</b>
          <img
            className="trainscheduleheaderdestination-icon1"
            alt=""
            src="/Appguide/Korail/trainscheduleheaderdestinationarrow.svg"
          />
          <b className="b344">{`구포 `}</b>
        </div>
        <div className="trainselectttitle">
          <img
            className="trainselectheaderttitlereloadb-icon"
            alt=""
            src="/Appguide/Korail/trainscheduleheaderttitlereloadbutton.svg"
          />
          <b className="b345">가는 열차 조회</b>
        </div>
      </header>
      <footer className="trainselectfooter">
        <div className="trainselectfooterbuttonset">
          <div className="footerbutton45">
            <b className="b346">승차권확인</b>
            <button
              className="footerbutton4image5"
              onClick={onFooterButton4ImageClick}
            />
          </div>
          <div className="footerbutton35">
            <b className="b346">관광상품</b>
            <img
              className="footerbutton3image-icon5"
              alt=""
              src="/Appguide/Korail/footerbutton3image@2x.png"
            />
          </div>
          <div className="footerbutton25">
            <img
              className="footerbutton2image-icon5"
              alt=""
              src="/Appguide/Korail/footerbutton2image@2x.png"
            />
            <b className="b346">할인ㆍ정기권</b>
          </div>
          <div
            className="footerbutton15"
            onClick={onFooterButton1ContainerClick}
          >
            <b className="b346">승차권예매</b>
            <img
              className="footerbutton1image-icon5"
              alt=""
              src="/Appguide/Korail/footerbutton1image@2x.png"
            />
          </div>
        </div>
        <button
          className="trainselectfooterreservationbu"
          onClick={onTrainSelectFooterReservationBuClick}
        >
          <b className="b350">예매</b>
        </button>
        <div className="trainselectfootertraininfo">
          <div className="trainselectfootertraininfocont">
            <div className="trainselectfootertraininfocont1">
              <button className="footertraininfocontentbutton3">
                <button className="button6" onClick={onButtonClick}>
                  좌석선택
                </button>
              </button>
              <button className="footertraininfocontentbutton2">
                <b className="b351">운임요금</b>
              </button>
              <button className="footertraininfocontentbutton1">
                <b className="b351">열차시각</b>
              </button>
            </div>
            <div className="trainselectfootertraininfocont2">
              <b className="b353">일반실</b>
              <b className="b354">2시간 38분 소요</b>
            </div>
          </div>
          <button
            className="trainselectfootertraininfoprev"
            onClick={onTrainSelectFooterTrainInfoPrevClick}
          >
            <img
              className="trainselectfootertraininfoprev-icon"
              alt=""
              src="/Appguide/Korail/trainselectfootertraininfoprevbuttonvector.svg"
              onClick={onTrainSelectFooterTrainInfoPrevIconClick}
            />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TrainSelect;
