import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSeat.css";

const TrainSeat = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/trainseatselect-11");
  }, [navigate]);

  return (
    <div className="trainseat-10">
      <main className="trainseatmainseatscroll">
        <div className="selectseatbutton">
          <div className="selectseatbutton-inner">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b105">2B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-child">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">2A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="group-parent1">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b105">1B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
            <div className="group-parent">
              <div className="group-parent">
                <div className="group-parent">
                  <img
                    className="group-icon"
                    alt=""
                    src="/Appguide/Korail/group.svg"
                  />
                  <b className="b105">1B</b>
                </div>
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group-235.svg"
                />
              </div>
              <div className="group-parent">
                <div className="group-parent">
                  <div className="group-parent">
                    <img
                      className="group-icon"
                      alt=""
                      src="/Appguide/Korail/group.svg"
                    />
                    <b className="b105">1B</b>
                  </div>
                  <img
                    className="group-icon"
                    alt=""
                    src="/Appguide/Korail/group-235.svg"
                  />
                </div>
                <div className="group-parent">
                  <div className="group-parent">
                    <div className="group-parent">
                      <img
                        className="group-icon"
                        alt=""
                        src="/Appguide/Korail/group.svg"
                      />
                      <b className="b105">1B</b>
                    </div>
                    <img
                      className="group-icon"
                      alt=""
                      src="/Appguide/Korail/group-235.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="selectseatbutton-inner1">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">2D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner2">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">2C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="group-parent16">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="b105">1B</b>
          </div>
          <div className="group-parent17">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="b105">1B</b>
          </div>
          <div className="group-parent16">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="b105">7B</b>
          </div>
          <div className="group-parent17">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">7A</b>
          </div>
          <div className="group-parent20">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="b105">8B</b>
          </div>
          <div className="group-parent21">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">8A</b>
          </div>
          <div className="group-parent22">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="b105">9B</b>
          </div>
          <div className="group-parent23">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">9A</b>
          </div>
          <div className="group-parent24">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="d1">10D</b>
          </div>
          <div className="group-parent25">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="d1">10C</b>
          </div>
          <div className="group-parent26">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="d1">11D</b>
          </div>
          <div className="group-parent27">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="d1">11C</b>
          </div>
          <div className="group-parent28">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="d1">15A</b>
          </div>
          <div className="group-parent29">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">1D</b>
          </div>
          <div className="group-parent30">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">7D</b>
          </div>
          <div className="group-parent31">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">1C</b>
          </div>
          <div className="group-parent32">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">1A</b>
          </div>
          <div className="group-parent33">
            <img
              className="group-icon"
              alt=""
              src="/Appguide/Korail/group-2351.svg"
            />
            <b className="a">4A</b>
          </div>
          <div className="selectseatbutton-inner3">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">4D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner4">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">4C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner5">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">3D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner6">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">3C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner7">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b105">4B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner8">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b105">3B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <button className="group-button" onClick={onGroupButtonClick}>
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a7">3A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </button>
          <div className="selectseatbutton-inner9">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">15D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner10">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">15C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner11">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b117">15B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner12">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">14D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner13">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">14C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner14">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">6D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner15">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">6C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner16">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">5D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner17">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">5C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner18">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b105">6B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner19">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">6A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner20">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b105">5B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner21">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">5A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner22">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b117">11B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner23">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">11A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner24">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b117">10B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner25">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">10A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner26">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b117">13B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner27">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">14A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner28">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="b117">12B</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner29">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">12A</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner30">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">8D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner31">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">8C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner32">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">9D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner33">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">9C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner34">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">12D</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner35">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="d1">13C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="selectseatbutton-inner36">
            <div className="group-parent">
              <div className="group-parent">
                <img
                  className="group-icon"
                  alt=""
                  src="/Appguide/Korail/group.svg"
                />
                <b className="a">7C</b>
              </div>
              <img
                className="group-icon"
                alt=""
                src="/Appguide/Korail/group-235.svg"
              />
            </div>
          </div>
        </div>
        <div className="sideinfotext">
          <b className="b124">창측</b>
          <b className="b125">내측</b>
          <b className="b126">내측</b>
          <b className="b127">창측</b>
        </div>
        <div className="rightwindowimage">
          <div className="rightwindowimage-child" />
          <div className="rightwindowimage-item" />
          <div className="rightwindowimage-inner" />
          <div className="rectangle-div" />
          <div className="rightwindowimage-child1" />
          <div className="rightwindowimage-child2" />
          <div className="rightwindowimage-child3" />
        </div>
        <div className="leftwindowimage">
          <div className="leftwindowimage-child" />
          <div className="leftwindowimage-item" />
          <img
            className="leftwindowimage-inner"
            alt=""
            src="/Appguide/Korail/rectangle-216.svg"
          />
          <div className="leftwindowimage-child1" />
          <div className="leftwindowimage-child2" />
          <div className="leftwindowimage-child3" />
          <div className="leftwindowimage-child4" />
        </div>
        <div className="directionalindicatorimage">
          <img
            className="vector-icon4"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon5"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon6"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon7"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon8"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon9"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon10"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon11"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon12"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon13"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon14"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon15"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon16"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon17"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon18"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon19"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
          <img
            className="vector-icon20"
            alt=""
            src="/Appguide/Korail/vector3.svg"
          />
        </div>
      </main>
      <div className="trainseatmaininfo">
        <div className="maininfoseatstatus">
          <div className="statusreverseseat">
            <b className="b128">역방향</b>
            <img
              className="statusreverseseatimage-icon"
              alt=""
              src="/Appguide/Korail/statusreverseseatimage.svg"
            />
          </div>
          <div className="statusforwardseat">
            <b className="b129">순방향</b>
            <img
              className="statusreverseseatimage-icon"
              alt=""
              src="/Appguide/Korail/statusforwardseatimage.svg"
            />
          </div>
          <div className="statusnotavailableseat">
            <b className="b130">선택 불가</b>
            <img
              className="statusreverseseatimage-icon"
              alt=""
              src="/Appguide/Korail/statusnotavailableseatimage.svg"
            />
          </div>
        </div>
        <img
          className="maininfovrbutton-icon"
          alt=""
          src="/Appguide/Korail/maininfovrbutton@2x.png"
        />
        <div className="maininfocarstatus">
          <div className="maininfocarstatusnextcarbutton">
            <div className="div34">16호차</div>
          </div>
          <div className="maininfocarstatusprevcarbutton">
            <div className="div35">14호차</div>
          </div>
          <div className="maininfocarstatustext">
            <div className="ktx-1621">KTX-산천 162 (일반실)</div>
            <div className="div36">잔여 36석 / 전체 52석</div>
          </div>
        </div>
        <div className="maininfocarselectionbutton">
          <div className="div37">15호차 (36석)</div>
          <img
            className="carselectionbuttonimage-icon"
            alt=""
            src="/Appguide/Korail/carselectionbuttonimage.svg"
          />
        </div>
      </div>
      <header className="trainseatheader">
        <b className="b131">15호차 좌석선택</b>
      </header>
      <footer className="trainseatfooter">
        <b className="b132">0명 좌석 선택 / 총 1명</b>
        <b className="b133">선택 좌석</b>
      </footer>
    </div>
  );
};

export default TrainSeat;
