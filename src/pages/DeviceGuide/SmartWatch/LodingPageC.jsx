import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageC.css";

const LodingPageC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 렌더링되면 3초 후에 페이지를 이동하는 타이머 설정
    const timer = setTimeout(() => {
      navigate("/DeviceGuide/SmartWatch/googlelogin-18");
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머를 제거하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [navigate]); // navigate 함수가 변경될 때마다 useEffect 실행

  // 컨테이너 클릭 이벤트 핸들러
  const onLodingPageC17ContainerClick = () => {
    // 클릭 시에도 페이지 이동이 발생하도록 navigate 함수 호출
    navigate("/DeviceGuide/SmartWatch/googlelogin-18");
  };

  return (
    <div className="lodingpagec-17" onClick={onLodingPageC17ContainerClick}>
      <div className="lodingpagecprogressimage">
        <div className="lodingpagecprogressimageellips" />
        <div className="div11">
          <b>100</b>
          <span className="span11">%</span>
        </div>
      </div>
      <b className="b62">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
      <b className="b63">워치를 준비하는 중....</b>
      <div className="lodingpageclogo">
        <img
          className="lodingpageclogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default LodingPageC;

