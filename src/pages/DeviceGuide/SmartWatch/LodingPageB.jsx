// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LodingPageB.css";

// const LodingPageB = () => {
//   const navigate = useNavigate();

//   const onLodingPageB13ContainerClick = useCallback(() => {
//     navigate("/DeviceGuide/SmartWatch/softwareagreea-14");
//   }, [navigate]);

//   return (
//     <div className="lodingpageb-13" onClick={onLodingPageB13ContainerClick}>
//       <b className="galaxy-watch5-manager-container">
//         <p className="galaxy-watch5-manager">Galaxy Watch5 Manager</p>
//         <p className="galaxy-watch5-manager">177MB</p>
//       </b>
//       <div className="lodingpagebprogressimage">
//         <div className="lodingpagebprogressimageellips" />
//         <div className="LPBdiv9">
//           <b>100</b>
//           <span className="span3">%</span>
//         </div>
//       </div>
//       <b className="b18">
//         <p className="p15">워치 연결 시 휴대전화에서 이 소프트웨어를</p>
//         <p className="galaxy-watch5-manager">사용합니다.</p>
//       </b>
//       <b className="b19">소프트웨어 다운로드 중....</b>
//       <div className="lodingpageblogo">
//         <img
//           className="lodingpageblogovector-icon"
//           alt=""
//           src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
//         />
//       </div>
//     </div>
//   );
// };

// export default LodingPageB;



import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageB.css";

const LodingPageB = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 렌더링되면 3초 후에 페이지를 이동하는 타이머 설정
    const timer = setTimeout(() => {
      navigate("/DeviceGuide/SmartWatch/softwareagreea-14");
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머를 제거하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [navigate]); // navigate 함수가 변경될 때마다 useEffect 실행

  // 컨테이너 클릭 이벤트 핸들러
  const onLodingPageB13ContainerClick = () => {
    // 클릭 시에도 페이지 이동이 발생하도록 navigate 함수 호출
    navigate("/DeviceGuide/SmartWatch/softwareagreea-14");
  };

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("[허용]을 눌러주세요.", "다운로드가 완료될 때까지 \n 기다려주세요.", "'모두 동의(선택)'을 체크 후 \n [계속]을 눌러주세요.")},[])

  return (
    <div className="lodingpageb-13" onClick={onLodingPageB13ContainerClick}>
      <b className="galaxy-watch5-manager-container">
        <p className="galaxy-watch5-manager">Galaxy Watch5 Manager</p>
        <p className="galaxy-watch5-manager">177MB</p>
      </b>
      <div className="lodingpagebprogressimage">
        <div className="lodingpagebprogressimageellips" />
        <div className="LPBdiv9">
          <b>100</b>
          <span className="span3">%</span>
        </div>
      </div>
      <b className="b18">
        <p className="p15">워치 연결 시 휴대전화에서 이 소프트웨어를</p>
        <p className="galaxy-watch5-manager">사용합니다.</p>
      </b>
      <b className="b19">소프트웨어 다운로드 중....</b>
      <div className="lodingpageblogo">
        <img
          className="lodingpageblogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default LodingPageB;
