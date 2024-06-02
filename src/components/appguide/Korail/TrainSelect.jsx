import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TrainSelect.css";

const TrainSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { back } = location.state || {};

  const onReservation50300ButtonContainerClick = useCallback(() => {
    navigate("/maincontents/trainschedule-08");
  }, [navigate]);

  const onFooterButton4ImageClick = useCallback(() => {
    navigate("/maincontents/my-ticket");
  }, [navigate]);

  const onFooterButton1ContainerClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onTrainSelectFooterReservationBuClick = useCallback(() => {
    navigate("/maincontents/ticketinformation-12");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/maincontents/train-seat");
  }, [navigate]);

  const onTrainSelectFooterTrainInfoPrevClick = useCallback(() => {
    navigate("/maincontents/trainschedule-08");
  }, [navigate]);

  const onTrainSelectFooterTrainInfoPrevIconClick = useCallback(() => {
    navigate("/maincontents/trainschedule-08");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{
    console.log(back)
    if (back === 3){
      sendCaption("[선택 완료]를 클릭합니다.", "좌석을 지정했으니 이제 \n 예매 버튼을 눌러주세요.", "예매 정보가 맞는지 확인 후 \n [결제하기]를 눌러주세요.")
    }
    else{sendCaption("10:14분에 출발하는 \n KTX-산천162 일반석 \n 열차 버튼을 선택하세요.", "[좌석선택]을 클릭하여 \n 좌석을 선택해봅시다.", "창측 3A 좌석을 선택합니다.")
}},[back])

  return (
    <div className="krail-trainselect-09">
      <main className="krail-trainselectmain">
        <div className="krail-trainselectmainnextdaybutton">
          <div className="krail-div134">다음날 (05월 04일) 조회하기</div>
        </div>
        <div className="krail-trainselectmainseat">
          <div className="krail-trainselectmaintrainlistselect">
            <div className="krail-trainlist71">
              <div className="krail-trainlistline7" />
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX</p>
                  <p className="krail-ktx11">112</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">20:50</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">21:40</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-reservation69900button1">
                <div className="krail-div137">69,900원</div>
                <b className="krail-b328">5%적립</b>
                <img
                  className="krail-mileageimage-icon9"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
              </div>
              <div className="krail-reservation49900button2">
                <div className="krail-div137">49,900원</div>
                <b className="krail-b328">5%적립</b>
                <img
                  className="krail-mileageimage-icon9"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="krail-trainlist61">
              <div className="krail-trainlistline7" />
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX-산천</p>
                  <p className="krail-ktx11">110</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">15:41</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">18:26</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-soldoutbutton3">
                <div className="krail-div141">매진</div>
              </div>
              <div className="krail-unassignedsetbutton1">
                <div className="krail-div141">자유석</div>
              </div>
            </div>
            <div className="krail-trainlist51">
              <div className="krail-trainlistline7" />
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX</p>
                  <p className="krail-ktx11">108</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">13:37</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">16:22</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-reservationred69900button1">
                <div className="krail-div137">69,900원</div>
                <b className="krail-b328">5%적립</b>
                <img
                  className="krail-mileageimage-icon9"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
                <img
                  className="krail-hourglassimage-icon1"
                  alt=""
                  src="/appguide/Korail/hourglassimage.svg"
                />
              </div>
              <div className="krail-reservation49900button2">
                <div className="krail-div137">49,900원</div>
                <b className="krail-b328">5%적립</b>
                <img
                  className="krail-mileageimage-icon9"
                  alt=""
                  src="/appguide/Korail/mileageimage.svg"
                />
              </div>
            </div>
            <div className="krail-trainlist41">
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX-산천</p>
                  <p className="krail-ktx11">162</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">10:14</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">12:52</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-soldoutbutton4">
                <div className="krail-div141">매진</div>
              </div>
              <div
                className="krail-reservation50300button3"
                onClick={onReservation50300ButtonContainerClick}
              >
                <div className="krail-div150">50,300원</div>
                <b className="krail-b332">5%적립</b>
                <img
                  className="krail-mileageimage-icon13"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
              </div>
            </div>
            <div className="krail-trainlist31">
              <div className="krail-trainlistline7" />
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX</p>
                  <p className="krail-ktx11">104</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">08:16</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">11:00</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-waitseatbutton1">
                <div className="krail-div150">입석+좌석</div>
                <div className="krail-div154">예약대기</div>
              </div>
              <div className="krail-soldoutbutton3">
                <div className="krail-div141">매진</div>
              </div>
            </div>
            <div className="krail-trainlist21">
              <div className="krail-trainlistline7" />
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX</p>
                  <p className="krail-ktx11">102</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">04:53</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">09:15</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-waitseatbutton1">
                <div className="krail-div150">50,300원</div>
                <b className="krail-b332">5%적립</b>
                <img
                  className="krail-mileageimage-icon13"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
              </div>
              <div className="krail-reservation70400button2">
                <img
                  className="krail-mileageimage-icon13"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
                <b className="krail-b334">5%적립</b>
                <div className="krail-div159">70,400원</div>
              </div>
            </div>
            <div className="krail-trainlist11">
              <div className="krail-trainlistline7" />
              <div className="krail-ktx-1121">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">KTX</p>
                  <p className="krail-ktx11">166</p>
                </span>
              </div>
              <div className="krail-div135">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">04:53</p>
                  <p className="krail-ktx11">부산</p>
                </span>
              </div>
              <div className="krail-div136">
                <span className="krail-ktx-112-txt-container1">
                  <p className="krail-ktx11">07:29</p>
                  <p className="krail-ktx11">광명</p>
                </span>
              </div>
              <div className="krail-reservation70400button2">
                <img
                  className="krail-mileageimage-icon13"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
                <b className="krail-b335">5%적립</b>
                <div className="krail-div159">70,400원</div>
              </div>
              <div className="krail-waitseatbutton1">
                <div className="krail-div150">50,300원</div>
                <b className="krail-b332">5%적립</b>
                <img
                  className="krail-mileageimage-icon13"
                  alt=""
                  src="/appguide/Korail/mileageimage1.svg"
                />
              </div>
            </div>
          </div>
          <div className="krail-trainselectmaintrainlisttitle">
            <b className="krail-b337">열차</b>
            <b className="krail-b338">출발</b>
            <b className="krail-b339">도착</b>
            <b className="krail-b340">일반실</b>
            <b className="krail-b341">특/우등</b>
          </div>
        </div>
        <div className="krail-trainselectmaindate">
          <div className="krail-schedulemaindatebutton31">
            <div className="krail-div164">직통</div>
            <img
              className="krail-vector-icon24"
              alt=""
              src="/appguide/Korail/vector1.svg"
            />
          </div>
          <div className="krail-schedulemaindatebutton21">
            <div className="krail-div165">일반석</div>
            <img
              className="krail-vector-icon25"
              alt=""
              src="/appguide/Korail/vector2.svg"
            />
          </div>
          <div className="krail-schedulemaindatebutton11">
            <div className="krail-ktx16">KTX</div>
            <img
              className="krail-vector-icon26"
              alt=""
              src="/appguide/Korail/vector2.svg"
            />
          </div>
          <div className="krail-schedulemaindatenextbutton1">
            <div className="krail-div166">다음날</div>
          </div>
          <div className="krail-schedulemaindateprevbutton1">
            <div className="krail-div166">이전날</div>
          </div>
          <b className="krail-b342">2024년 05월 03일 (토)</b>
        </div>
      </main>
      <header className="krail-trainselectheader">
        <div className="krail-trainscheduleheaderdestination1">
          <b className="krail-b343">광명</b>
          <img
            className="krail-trainscheduleheaderdestination-icon1"
            alt=""
            src="/appguide/Korail/trainscheduleheaderdestinationarrow.svg"
          />
          <b className="krail-b344">{`부산`}</b>
        </div>
        <div className="krail-trainselectttitle">
          <img
            className="krail-trainselectheaderttitlereloadb-icon"
            alt=""
            src="/appguide/Korail/trainscheduleheaderttitlereloadbutton.svg"
          />
          <b className="krail-b345">가는 열차 조회</b>
        </div>
      </header>
      <footer className="krail-trainselectfooter">
        <div className="krail-trainselectfooterbuttonset">
          <div className="krail-footerbutton45">
            <b className="krail-b346">승차권확인</b>
            <button
              className="krail-footerbutton4image5"
              onClick={onFooterButton4ImageClick}
            />
          </div>
          <div className="krail-footerbutton35">
            <b className="krail-b346">관광상품</b>
            <img
              className="krail-footerbutton3image-icon5"
              alt=""
              src="/appguide/Korail/footerbutton3image@2x.png"
            />
          </div>
          <div className="krail-footerbutton25">
            <img
              className="krail-footerbutton2image-icon5"
              alt=""
              src="/appguide/Korail/footerbutton2image@2x.png"
            />
            <b className="krail-b346">할인ㆍ정기권</b>
          </div>
          <div
            className="krail-footerbutton15"
            onClick={onFooterButton1ContainerClick}
          >
            <b className="krail-b346">승차권예매</b>
            <img
              className="krail-footerbutton1image-icon5"
              alt=""
              src="/appguide/Korail/footerbutton1image@2x.png"
            />
          </div>
        </div>
        <button
          className="krail-trainselectfooterreservationbu"
          onClick={onTrainSelectFooterReservationBuClick}
        >
          <b className="krail-b350">예매</b>
        </button>
        <div className="krail-trainselectfootertraininfo">
          <div className="krail-trainselectfootertraininfocont">
            <div className="krail-trainselectfootertraininfocont1">
              <button className="krail-footertraininfocontentbutton3">
                <button className="krail-button6" onClick={onButtonClick}>
                  좌석선택
                </button>
              </button>
              <button className="krail-footertraininfocontentbutton2">
                <b className="krail-b351">운임요금</b>
              </button>
              <button className="krail-footertraininfocontentbutton1">
                <b className="krail-b351">열차시각</b>
              </button>
            </div>
            <div className="krail-trainselectfootertraininfocont2">
              <b className="krail-b353">일반실</b>
              <b className="krail-b354">2시간 38분 소요</b>
            </div>
          </div>
          <button
            className="krail-trainselectfootertraininfoprev"
            onClick={onTrainSelectFooterTrainInfoPrevClick}
          >
            <img
              className="krail-trainselectfootertraininfoprev-icon"
              alt=""
              src="/appguide/Korail/trainselectfootertraininfoprevbuttonvector.svg"
              onClick={onTrainSelectFooterTrainInfoPrevIconClick}
            />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TrainSelect;
