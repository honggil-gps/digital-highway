import { useCallback } from "react";
import "./Main.css";

const Main = () => {
  const onLoginButtonContainerClick = useCallback(() => {
    // Please sync "Loginpage_02" to the project
  }, []);

  return (
    <div className="gov25-main-01">
      <div className="gov25-mainfooter">
        <img
          className="gov25-footerhome-icon"
          alt=""
          src="/appguide/gov25/footerhome.svg"
        />
        <img
          className="gov25-footerprev-icon"
          alt=""
          src="/appguide/gov25/footerprev.svg"
        />
        <img
          className="gov25-footernext-icon"
          alt=""
          src="/appguide/gov25/footernext.svg"
        />
        <img
          className="gov25-footerreload-icon"
          alt=""
          src="/appguide/gov25/footerreload.svg"
        />
        <img
          className="gov25-footermoreinfo-icon"
          alt=""
          src="/appguide/gov25/footermoreinfo.svg"
        />
      </div>
      <div className="gov25-mainfrequentlyservices">
        <div className="gov25-div">자주찾는 서비스</div>
        <img
          className="gov25-servicemoreinfobutton-icon"
          alt=""
          src="/appguide/gov25/servicemoreinfobutton.svg"
        />
        <div className="gov25-servicesbuttonset">
          <div className="gov25-landbutton">
            <div className="gov25-buttonsetbackground" />
            <div className="gov25-servicesissuebutton">
              <div className="gov25-servicesbuttonsetellipse" />
              <b className="gov25-b">발급</b>
            </div>
            <div className="gov25-div1">
              <p className="gov25-p">토지(임야)</p>
              <p className="gov25-p">대장</p>
            </div>
          </div>
          <div className="gov25-landbutton">
            <div className="gov25-buttonsetbackground" />
            <div className="gov25-servicesissuebutton">
              <div className="gov25-servicesbuttonsetellipse" />
              <b className="gov25-b">발급</b>
            </div>
            <div className="gov25-div1">
              <p className="gov25-p">주민등록초본</p>
              <p className="gov25-p">(초본)</p>
            </div>
          </div>
          <div className="gov25-landbutton">
            <div className="gov25-buttonsetbackground" />
            <div className="gov25-servicesissuebutton">
              <div className="gov25-servicesbuttonsetellipse" />
              <b className="gov25-b">발급</b>
            </div>
            <div className="gov25-div1">
              <p className="gov25-p">자동차</p>
              <p className="gov25-p">등록원부</p>
            </div>
          </div>
          <div className="gov25-landbutton">
            <div className="gov25-buttonsetbackground" />
            <div className="gov25-servicesissuebutton">
              <div className="gov25-servicesbuttonsetellipse" />
              <b className="gov25-b">발급</b>
            </div>
            <div className="gov25-div1">건축물대장</div>
          </div>
          <div className="gov25-landbutton">
            <div className="gov25-buttonsetbackground" />
            <div className="gov25-servicesissuebutton">
              <div className="gov25-servicesbuttonsetellipse" />
              <b className="gov25-b">발급</b>
            </div>
            <div className="gov25-div1">
              <p className="gov25-p">가족관계</p>
              <p className="gov25-p">증명서</p>
            </div>
          </div>
          <div className="gov25-landbutton">
            <div className="gov25-buttonsetbackground" />
            <div className="gov25-servicesissuebutton">
              <div className="gov25-servicesbuttonsetellipse5" />
              <b className="gov25-b">신청</b>
            </div>
            <div className="gov25-div1">여권 재발급</div>
          </div>
        </div>
      </div>
      <div className="gov25-mainloginbox">
        <div className="gov25-div7">
          <p className="gov25-p">내게 필요한 민원/생활/혜택</p>
          <p className="gov25-p">정보를 확인하세요</p>
        </div>
        <b className="gov25-b6">회원가입</b>
        <div className="gov25-idpwbutton">
          <b className="gov25-b7">아이디찾기</b>
          <b className="gov25-b8">비밀번호 찾기</b>
          <div className="gov25-idpwline" />
        </div>
        <div className="gov25-loginbutton" onClick={onLoginButtonContainerClick}>
          <div className="gov25-loginbuttonbackgound" />
          <div className="gov25-div8">로그인</div>
        </div>
      </div>
      <div className="gov25-mainbannerdigitalshortcut">
        <img
          className="gov25-digitalshortcutlogo-icon"
          alt=""
          src="/appguide/gov25/digitalshortcutlogo@2x.png"
        />
        <div className="gov25-bannertext">
          <b className="gov25-b9">디지털지름길</b>
          <div className="gov25-div9">
            <p className="gov25-p">디지털 기기 친숙하게</p>
            <p className="gov25-p">다가가봐요</p>
          </div>
        </div>
      </div>
      <div className="gov25-mainsearchbar">
        <img
          className="gov25-serarchbarserachimage-icon"
          alt=""
          src="/appguide/gov25/serarchbarserachimage.svg"
        />
        <img
          className="gov25-srearchbarmiceimage-icon"
          alt=""
          src="/appguide/gov25/srearchbarmiceimage.svg"
        />
        <div className="gov25-div10">찾으시는 서비스를 입력하세요</div>
      </div>
      <div className="gov25-mainheader">
        <div className="gov25-headergov25">
          <div className="gov25-headergov25menubarbutton">
            <div className="gov25-menubarbuttonline1" />
            <div className="gov25-menubarbuttonline2" />
            <div className="gov25-menubarbuttonline3" />
          </div>
          <div className="gov25-headergov25logotext">
            <div className="gov25-div11">정부25</div>
            <img
              className="gov25-headergov25logo-icon"
              alt=""
              src="/appguide/gov25/headergov25logo@2x.png"
            />
          </div>
          <div className="gov25-headergov25qrmyinfo">
            <img
              className="gov25-headermyinfobutton-icon"
              alt=""
              src="/appguide/gov25/headermyinfobutton.svg"
            />
            <img
              className="gov25-headerqrbutton-icon"
              alt=""
              src="/appguide/gov25/headerqrbutton.svg"
            />
          </div>
        </div>
        <div className="gov25-headerbluetext">
          <b className="gov25-b10">이 누리집은 디지털지름길 체험용 누리집입니다</b>
        </div>
      </div>
    </div>
  );
};

export default Main;
