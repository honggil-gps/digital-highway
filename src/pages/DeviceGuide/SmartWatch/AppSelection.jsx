import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AppSelection.css";

const AppSelection = () => {
  const navigate = useNavigate();

  const onAppSelectionList6Click = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/mainsettings-02");
  }, [navigate]);

  return (
    <div className="appselection-01">
      <img
        className="appselectionimage-icon"
        alt=""
        src="/DeviceGuide/SmartWatch/appselectionimage@2x.png"
      />
      <div className="appselectionblurredbackground">
        <div className="appselectionlist">
          <button
            className="appselectionlist6"
            onClick={onAppSelectionList6Click}
          >
            <b className="b47">설정</b>
            <img
              className="settingsiconimage"
              alt=""
              src="/DeviceGuide/SmartWatch/settingsiconimage@2x.png"
            />
          </button>
          <button className="appselectionlist5">
            <b className="b48">스토어</b>
            <img
              className="storeiconimage"
              alt=""
              src="/DeviceGuide/SmartWatch/storeiconimage@2x.png"
            />
          </button>
          <button className="appselectionlist4">
            <b className="b49">인터넷</b>
            <div className="chromeimageset">
              <div className="chromeimagebackground" />
              <img
                className="chromeimage-icon"
                alt=""
                src="/DeviceGuide/SmartWatch/chromeimage@2x.png"
              />
            </div>
          </button>
          <button className="appselectionlist3">
            <b className="b50">카카오톡</b>
            <img
              className="kakaotalkimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/kakaotalkimage@2x.png"
            />
          </button>
          <button className="appselectionlist2">
            <b className="b51">문자</b>
            <img
              className="messageimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/messageimage@2x.png"
            />
          </button>
          <button className="appselectionlist1">
            <b className="b52">전화</b>
            <img
              className="cellimage-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/cellimage@2x.png"
            />
          </button>
        </div>
        <div className="appselectionsearchbar">
          <button className="appselectionsearchbarmorebutto">
            <img
              className="appselectionsearchbarmorebutto-icon"
              alt=""
              src="/DeviceGuide/SmartWatch/appselectionsearchbarmorebuttonvector.svg"
            />
          </button>
          <b className="b53">검색</b>
        </div>
      </div>
    </div>
  );
};

export default AppSelection;
