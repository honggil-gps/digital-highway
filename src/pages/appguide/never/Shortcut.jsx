import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Shortcut.css";

const Shortcut = () => {
  const navigate = useNavigate();

  const onPhxLightIconClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/maincontents/login-09");
  }, [navigate]);

  return (
    <div className="never-shortcut-08">
      <div className="never-shortcuttop">
        <div className="never-shortcutbutton">
          <div className="never-div37">바로가기</div>
        </div>
        <div className="never-closebutton">
          <img
            className="never-epsetting-icon"
            alt=""
            src="/appguide/never/epsetting.svg"
          />
          <img
            className="never-phx-light-icon"
            alt=""
            src="/appguide/never/phxlight.svg"
            onClick={onPhxLightIconClick}
          />
        </div>
      </div>
      <div className="never-contentsbox">
        <div className="never-loginandmailbox">
          <div className="never-loginbutton" onClick={onLoginButtonContainerClick}>
            <div className="never-div38">로그인하세요</div>
          </div>
          <div className="never-frame3">
            <div className="never-frame4">
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div39">메일</div>
              </div>
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div39">카페</div>
              </div>
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div41">블로그</div>
              </div>
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div39">쇼핑</div>
              </div>
            </div>
            <div className="never-frame4">
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div39">페이</div>
              </div>
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div39">증권</div>
              </div>
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-keep">Keep</div>
              </div>
              <div className="never-rectangle-parent10">
                <div className="never-group-child10" />
                <div className="never-div39">톡톡</div>
              </div>
            </div>
          </div>
        </div>
        <div className="never-adbox1">
          <img
            className="never-downy-icon"
            alt=""
            src="/appguide/never/downy@2x.png"
          />
          <div className="never-fullservicebox">
            <div className="never-fullservice">
              <div className="never-div37">전체서비스</div>
            </div>
            <img
              className="never-fullservicebox-child"
              alt=""
              src="/appguide/never/rectangle-66@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortcut;
