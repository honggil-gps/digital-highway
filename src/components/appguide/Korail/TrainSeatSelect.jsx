import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSeatSelect.css";

const TrainSeatSelect = () => {
  const navigate = useNavigate();

  const onTrainSeatSelectFooterButtonClick = useCallback(() => {
    navigate("/maincontents/trainselect-09", {state:{back:3}});
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("창측 3A 좌석을 선택합니다.", "[선택 완료]를 클릭합니다.", "좌석을 지정했으니 이제 \n 예매 버튼을 눌러주세요.")},[])

  return (
    <div className="krail-trainseatselect-11">
      <div className="krail-trainseatselectmainseatscroll">
        <div className="krail-selectseatbutton1">
          <div className="krail-selectseatbutton-inner37">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b355">2B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner38">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">2A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-group-parent108">
            <div className="krail-group-frame">
              {/* <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b355">1B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              /> */}
            </div>
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                {/* <div className="krail-group-frame">
                  <img
                    className="krail-group-icon43"
                    alt=""
                    src="/appguide/Korail/group.svg"
                  />
                  <b className="krail-b355">1B</b>
                </div>
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group-235.svg"
                /> */}
              </div>
              <div className="krail-group-frame">
                <div className="krail-group-frame">
                  {/* <div className="krail-group-frame">
                    <img
                      className="krail-group-icon43"
                      alt=""
                      src="/appguide/Korail/group.svg"
                    />
                    <b className="krail-b355">1B</b>
                  </div>
                  <img
                    className="krail-group-icon43"
                    alt=""
                    src="/appguide/Korail/group-235.svg"
                  /> */}
                </div>
                <div className="krail-group-frame">
                  <div className="krail-group-frame">
                    <div className="krail-group-frame">
                      <img
                        className="krail-group-icon43"
                        alt=""
                        src="/appguide/Korail/group.svg"
                      />
                      <b className="krail-b355">1B</b>
                    </div>
                    <img
                      className="krail-group-icon43"
                      alt=""
                      src="/appguide/Korail/group-235.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="krail-selectseatbutton-inner39">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">2D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner40">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">2C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-group-parent123">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b355">1B</b>
          </div>
          <div className="krail-group-parent124">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b355">1B</b>
          </div>
          <div className="krail-group-parent123">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b355">7B</b>
          </div>
          <div className="krail-group-parent124">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">7A</b>
          </div>
          <div className="krail-group-parent127">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b355">8B</b>
          </div>
          <div className="krail-group-parent128">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">8A</b>
          </div>
          <div className="krail-group-parent129">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b355">9B</b>
          </div>
          <div className="krail-group-parent130">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">9A</b>
          </div>
          <div className="krail-group-parent131">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d15">10D</b>
          </div>
          <div className="krail-group-parent132">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d15">10C</b>
          </div>
          <div className="krail-group-parent133">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d15">11D</b>
          </div>
          <div className="krail-group-parent134">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d15">11C</b>
          </div>
          <div className="krail-group-parent135">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d15">15A</b>
          </div>
          <div className="krail-group-parent136">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">1D</b>
          </div>
          <div className="krail-group-parent137">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">7D</b>
          </div>
          <div className="krail-group-parent138">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">1C</b>
          </div>
          <div className="krail-group-parent139">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">1A</b>
          </div>
          <div className="krail-group-parent140">
            <img
              className="krail-group-icon43"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a18">4A</b>
          </div>
          <div className="krail-selectseatbutton-inner41">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">4D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner42">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">4C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner43">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">3D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner44">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">3C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner45">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b355">4B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner46">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b355">3B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner47">
            <div className="krail-group-frame">
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-2352.svg"
              />
              <b className="krail-a18">3A</b>
            </div>
          </div>
          <div className="krail-selectseatbutton-inner48">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">15D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner49">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">15C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner50">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b367">15B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner51">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">14D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner52">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">14C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner53">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">6D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner54">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">6C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner55">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">5D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner56">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">5C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner57">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b355">6B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner58">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">6A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner59">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b355">5B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner60">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">5A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner61">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b367">11B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner62">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">11A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner63">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b367">10B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner64">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">10A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner65">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b367">13B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner66">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">14A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner67">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b367">12B</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner68">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">12A</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner69">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">8D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner70">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">8C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner71">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">9D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner72">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">9C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner73">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">12D</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner74">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d15">13C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner75">
            <div className="krail-group-frame">
              <div className="krail-group-frame">
                <img
                  className="krail-group-icon43"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a18">7C</b>
              </div>
              <img
                className="krail-group-icon43"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
        </div>
        <div className="krail-sideinfotext1">
          <b className="krail-b374">창측</b>
          <b className="krail-b375">내측</b>
          <b className="krail-b376">내측</b>
          <b className="krail-b377">창측</b>
        </div>
        <div className="krail-rightwindowimage1">
          <div className="krail-rightwindowimage-child4" />
          <div className="krail-rightwindowimage-child5" />
          <div className="krail-rightwindowimage-child6" />
          <div className="krail-rightwindowimage-child7" />
          <div className="krail-rightwindowimage-child8" />
          <div className="krail-rightwindowimage-child9" />
          <div className="krail-rightwindowimage-child10" />
        </div>
        <div className="krail-leftwindowimage1">
          <div className="krail-leftwindowimage-child5" />
          <div className="krail-leftwindowimage-child6" />
          <img
            className="krail-rectangle-icon"
            alt=""
            src="/appguide/Korail/rectangle-216.svg"
          />
          <div className="krail-leftwindowimage-child7" />
          <div className="krail-leftwindowimage-child8" />
          <div className="krail-leftwindowimage-child9" />
          <div className="krail-leftwindowimage-child10" />
        </div>
        <img
          className="krail-directionalindicatorimage-icon"
          alt=""
          src="/appguide/Korail/directionalindicatorimage.svg"
        />
      </div>
      <main className="krail-trainseatselectmaininfo">
        <div className="krail-maininfoseatstatus1">
          <div className="krail-statusreverseseat1">
            <b className="krail-b378">역방향</b>
            <img
              className="krail-statusreverseseatimage-icon1"
              alt=""
              src="/appguide/Korail/statusreverseseatimage.svg"
            />
          </div>
          <div className="krail-statusforwardseat1">
            <b className="krail-b379">순방향</b>
            <img
              className="krail-statusreverseseatimage-icon1"
              alt=""
              src="/appguide/Korail/statusforwardseatimage.svg"
            />
          </div>
          <div className="krail-statusnotavailableseat1">
            <b className="krail-b380">선택 불가</b>
            <img
              className="krail-statusreverseseatimage-icon1"
              alt=""
              src="/appguide/Korail/statusnotavailableseatimage.svg"
            />
          </div>
        </div>
        <div className="krail-maininfovrbutton">
          <img
            className="krail-maininfovrbuttonimage-icon"
            alt=""
            src="/appguide/Korail/maininfovrbutton@2x.png"
          />
        </div>
        <div className="krail-maininfocarstatus1">
          <div className="krail-maininfocarstatusnextcarbutton1">
            <div className="krail-div168">16호차</div>
          </div>
          <div className="krail-maininfocarstatusprevcarbutton1">
            <div className="krail-div168">14호차</div>
          </div>
          <div className="krail-maininfocarstatustext1">
            <div className="krail-ktx-1626">KTX-산천 162 (일반실)</div>
            <div className="krail-div170">잔여 36석 / 전체 52석</div>
          </div>
        </div>
        <div className="krail-maininfocarselectionbutton1">
          <div className="krail-div171">15호차 (36석)</div>
          <img
            className="krail-carselectionbuttonimage-icon1"
            alt=""
            src="/appguide/Korail/carselectionbuttonimage.svg"
          />
        </div>
      </main>
      <footer className="krail-trainseatselectfooter">
        <button
          className="krail-trainseatselectfooterbutton"
          onClick={onTrainSeatSelectFooterButtonClick}
        >
          <b className="krail-b381">선택 완료</b>
        </button>
        <div className="krail-trainseatselectfooterinfo">
          <b className="krail-a32">15 호차 3A</b>
          <b className="krail-b382">1명 좌석 선택 / 총 1명</b>
          <b className="krail-b383">선택 좌석</b>
        </div>
      </footer>
      <header className="krail-trainseatselectheader">
        <b className="krail-b384">15호차 좌석선택</b>
      </header>
    </div>
  );
};

export default TrainSeatSelect;
