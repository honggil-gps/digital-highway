import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainSeat.css";

const TrainSeat = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/maincontents/trainseatselect-11");
  }, [navigate]);

  return (
    <div className="krail-trainseat-10">
      <main className="krail-trainseatmainseatscroll">
        <div className="krail-selectseatbutton">
          <div className="krail-selectseatbutton-inner">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b105">2B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-child">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">2A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-group-parent1">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b105">1B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <div className="krail-group-parent">
                  <img
                    className="krail-group-icon"
                    alt=""
                    src="/appguide/Korail/group.svg"
                  />
                  <b className="krail-b105">1B</b>
                </div>
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group-235.svg"
                />
              </div>
              <div className="krail-group-parent">
                <div className="krail-group-parent">
                  <div className="krail-group-parent">
                    <img
                      className="krail-group-icon"
                      alt=""
                      src="/appguide/Korail/group.svg"
                    />
                    <b className="krail-b105">1B</b>
                  </div>
                  <img
                    className="krail-group-icon"
                    alt=""
                    src="/appguide/Korail/group-235.svg"
                  />
                </div>
                <div className="krail-group-parent">
                  <div className="krail-group-parent">
                    <div className="krail-group-parent">
                      <img
                        className="krail-group-icon"
                        alt=""
                        src="/appguide/Korail/group.svg"
                      />
                      <b className="krail-b105">1B</b>
                    </div>
                    <img
                      className="krail-group-icon"
                      alt=""
                      src="/appguide/Korail/group-235.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="krail-selectseatbutton-inner1">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">2D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner2">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">2C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-group-parent16">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b105">1B</b>
          </div>
          <div className="krail-group-parent17">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b105">1B</b>
          </div>
          <div className="krail-group-parent16">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b105">7B</b>
          </div>
          <div className="krail-group-parent17">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">7A</b>
          </div>
          <div className="krail-group-parent20">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b105">8B</b>
          </div>
          <div className="krail-group-parent21">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">8A</b>
          </div>
          <div className="krail-group-parent22">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-b105">9B</b>
          </div>
          <div className="krail-group-parent23">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">9A</b>
          </div>
          <div className="krail-group-parent24">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d1">10D</b>
          </div>
          <div className="krail-group-parent25">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d1">10C</b>
          </div>
          <div className="krail-group-parent26">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d1">11D</b>
          </div>
          <div className="krail-group-parent27">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d1">11C</b>
          </div>
          <div className="krail-group-parent28">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-d1">15A</b>
          </div>
          <div className="krail-group-parent29">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">1D</b>
          </div>
          <div className="krail-group-parent30">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">7D</b>
          </div>
          <div className="krail-group-parent31">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">1C</b>
          </div>
          <div className="krail-group-parent32">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">1A</b>
          </div>
          <div className="krail-group-parent33">
            <img
              className="krail-group-icon"
              alt=""
              src="/appguide/Korail/group-2351.svg"
            />
            <b className="krail-a">4A</b>
          </div>
          <div className="krail-selectseatbutton-inner3">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">4D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner4">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">4C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner5">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">3D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner6">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">3C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner7">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b105">4B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner8">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b105">3B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <button className="krail-group-button" onClick={onGroupButtonClick}>
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a7">3A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </button>
          <div className="krail-selectseatbutton-inner9">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">15D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner10">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">15C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner11">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b117">15B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner12">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">14D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner13">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">14C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner14">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">6D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner15">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">6C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner16">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">5D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner17">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">5C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner18">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b105">6B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner19">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">6A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner20">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b105">5B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner21">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">5A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner22">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b117">11B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner23">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">11A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner24">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b117">10B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner25">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">10A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner26">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b117">13B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner27">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">14A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner28">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-b117">12B</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner29">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">12A</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner30">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">8D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner31">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">8C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner32">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">9D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner33">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">9C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner34">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">12D</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner35">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-d1">13C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
          <div className="krail-selectseatbutton-inner36">
            <div className="krail-group-parent">
              <div className="krail-group-parent">
                <img
                  className="krail-group-icon"
                  alt=""
                  src="/appguide/Korail/group.svg"
                />
                <b className="krail-a">7C</b>
              </div>
              <img
                className="krail-group-icon"
                alt=""
                src="/appguide/Korail/group-235.svg"
              />
            </div>
          </div>
        </div>
        <div className="krail-sideinfotext">
          <b className="krail-b124">창측</b>
          <b className="krail-b125">내측</b>
          <b className="krail-b126">내측</b>
          <b className="krail-b127">창측</b>
        </div>
        <div className="krail-rightwindowimage">
          <div className="krail-rightwindowimage-child" />
          <div className="krail-rightwindowimage-item" />
          <div className="krail-rightwindowimage-inner" />
          <div className="krail-rectangle-div" />
          <div className="krail-rightwindowimage-child1" />
          <div className="krail-rightwindowimage-child2" />
          <div className="krail-rightwindowimage-child3" />
        </div>
        <div className="krail-leftwindowimage">
          <div className="krail-leftwindowimage-child" />
          <div className="krail-leftwindowimage-item" />
          <img
            className="krail-leftwindowimage-inner"
            alt=""
            src="/appguide/Korail/rectangle-216.svg"
          />
          <div className="krail-leftwindowimage-child1" />
          <div className="krail-leftwindowimage-child2" />
          <div className="krail-leftwindowimage-child3" />
          <div className="krail-leftwindowimage-child4" />
        </div>
        <div className="krail-directionalindicatorimage">
          <img
            className="krail-vector-icon4"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon5"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon6"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon7"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon8"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon9"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon10"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon11"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon12"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon13"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon14"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon15"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon16"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon17"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon18"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon19"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
          <img
            className="krail-vector-icon20"
            alt=""
            src="/appguide/Korail/vector3.svg"
          />
        </div>
      </main>
      <div className="krail-trainseatmaininfo">
        <div className="krail-maininfoseatstatus">
          <div className="krail-statusreverseseat">
            <b className="krail-b128">역방향</b>
            <img
              className="krail-statusreverseseatimage-icon"
              alt=""
              src="/appguide/Korail/statusreverseseatimage.svg"
            />
          </div>
          <div className="krail-statusforwardseat">
            <b className="krail-b129">순방향</b>
            <img
              className="krail-statusreverseseatimage-icon"
              alt=""
              src="/appguide/Korail/statusforwardseatimage.svg"
            />
          </div>
          <div className="krail-statusnotavailableseat">
            <b className="krail-b130">선택 불가</b>
            <img
              className="krail-statusreverseseatimage-icon"
              alt=""
              src="/appguide/Korail/statusnotavailableseatimage.svg"
            />
          </div>
        </div>
        <img
          className="krail-maininfovrbutton-icon"
          alt=""
          src="/appguide/Korail/maininfovrbutton@2x.png"
        />
        <div className="krail-maininfocarstatus">
          <div className="krail-maininfocarstatusnextcarbutton">
            <div className="krail-div34">16호차</div>
          </div>
          <div className="krail-maininfocarstatusprevcarbutton">
            <div className="krail-div35">14호차</div>
          </div>
          <div className="krail-maininfocarstatustext">
            <div className="krail-ktx-1621">KTX-산천 162 (일반실)</div>
            <div className="krail-div36">잔여 36석 / 전체 52석</div>
          </div>
        </div>
        <div className="krail-maininfocarselectionbutton">
          <div className="krail-div37">15호차 (36석)</div>
          <img
            className="krail-carselectionbuttonimage-icon"
            alt=""
            src="/appguide/Korail/carselectionbuttonimage.svg"
          />
        </div>
      </div>
      <header className="krail-trainseatheader">
        <b className="krail-b131">15호차 좌석선택</b>
      </header>
      <footer className="krail-trainseatfooter">
        <b className="krail-b132">0명 좌석 선택 / 총 1명</b>
        <b className="krail-b133">선택 좌석</b>
      </footer>
    </div>
  );
};

export default TrainSeat;
