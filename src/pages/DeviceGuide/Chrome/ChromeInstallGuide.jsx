import "./ChromeInstallGuide.css";

const ChromeInstallGuide = () => {
  return (
    <div className="chrome-chromeinstallguide-">
      <div className="chrome-button">
        <img
          className="chrome-rectangle3-icon"
          alt=""
          src="/DeviceGuide/Chrome/rectangle3.svg"
        />
        <b className="chrome-b">이전</b>
        <img
          className="chrome-rectangle2-icon"
          alt=""
          src="/DeviceGuide/Chrome/rectangle3.svg"
        />
        <b className="chrome-b1">홈</b>
        <img
          className="chrome-rectangle1-icon"
          alt=""
          src="/DeviceGuide/Chrome/rectangle3.svg"
        />
        <b className="chrome-b2">다음</b>
      </div>
      <div className="chrome-image-21-wrapper">
        <img
          className="chrome-image-21-icon"
          alt=""
          src="/DeviceGuide/Chrome/image-21@2x.png"
        />
      </div>
      <div className="chrome-image-2-parent">
        <img
          className="chrome-image-2-icon"
          alt=""
          src="/DeviceGuide/Chrome/image-2@2x.png"
        />
        <div className="chrome-rectangle-parent">
          <div className="chrome-group-child" />
          <div className="chrome-edge">
            바탕화면에 보이는 Edge 브라우저를 클릭하여 여세요
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeInstallGuide;
