// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LodingPageD.css";

// const LodingPageD = () => {
//   const navigate = useNavigate();

//   const onLodingPageD23ContainerClick = useCallback(() => {
//     navigate("/DeviceGuide/SmartWatch/preinstallapppermission-24");
//   }, [navigate]);

//   return (
//     <div className="lodingpaged-23" onClick={onLodingPageD23ContainerClick}>
//       <div className="lodingpagedprogressiamge">
//         <div className="lodingpagedprogressiamgeellips" />
//         <div className="div13">
//           <b>100</b>
//           <span className="span12">%</span>
//         </div>
//       </div>
//       <b className="b77">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
//       <b className="LPDb78">
//         <p className="LPDp67">워치를 앱 정보를</p>
//         <p className="LPDp67">가져오는 중....</p>
//       </b>
//       <div className="lodingpagedlogo">
//         <div className="lodingpagedlogoellipse4" />
//         <div className="lodingpagedlogoellipse3" />
//         <div className="lodingpagedlogoellipse2" />
//         <div className="lodingpagedlogoellipse1" />
//       </div>
//     </div>
//   );
// };

// export default LodingPageD;


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageD.css";

const LodingPageD = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 렌더링되면 3초 후에 페이지를 이동하는 타이머 설정
    const timer = setTimeout(() => {
      navigate("/DeviceGuide/SmartWatch/preinstallapppermission-24");
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머를 제거하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [navigate]); // navigate 함수가 변경될 때마다 useEffect 실행

  // 컨테이너 클릭 이벤트 핸들러
  const onLodingPageD23ContainerClick = () => {
    // 클릭 시에도 페이지 이동이 발생하도록 navigate 함수 호출
    navigate("/DeviceGuide/SmartWatch/preinstallapppermission-24");
  };

  return (
    <div className="lodingpaged-23" onClick={onLodingPageD23ContainerClick}>
      <div className="lodingpagedprogressiamge">
        <div className="lodingpagedprogressiamgeellips" />
        <div className="div13">
          <b>100</b>
          <span className="span12">%</span>
        </div>
      </div>
      <b className="b77">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
      <b className="LPDb78">
        <p className="LPDp67">워치를 앱 정보를</p>
        <p className="LPDp67">가져오는 중....</p>
      </b>
      <div className="lodingpagedlogo">
        <div className="lodingpagedlogoellipse4" />
        <div className="lodingpagedlogoellipse3" />
        <div className="lodingpagedlogoellipse2" />
        <div className="lodingpagedlogoellipse1" />
      </div>
    </div>
  );
};

export default LodingPageD;
