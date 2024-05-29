// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LodingPageE.css";

// const LodingPageE = () => {
//   const navigate = useNavigate();

//   const onLodingPageE25ContainerClick = useCallback(() => {
//     navigate("/DeviceGuide/SmartWatch/setupcomplete-26");
//   }, [navigate]);

//   return (
//     <div className="lodingpagee-25" onClick={onLodingPageE25ContainerClick}>
//       <button className="lodingpageebutton">
//         <b className="b83">팁과 사용 설명서</b>
//       </button>
//       <b className="b84">
//         <p className="p71">{`데이터를 전송하는 동안 워치에 어떤 기능이 있는지 `}</p>
//         <p className="p72">알아보세요.</p>
//       </b>
//       <div className="lodingpageeprogressimage">
//         <div className="lodingpageeprogressimage-child" />
//         <div className="div14">
//           <b>100</b>
//           <span className="span13">%</span>
//         </div>
//       </div>
//       <b className="b85">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
//       <b className="b86">완료 중...</b>
//       <div className="lodingpageelogo">
//         <img
//           className="lodingpageelogovector-icon"
//           alt=""
//           src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
//         />
//       </div>
//     </div>
//   );
// };

// export default LodingPageE;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageE.css";

const LodingPageE = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 렌더링되면 3초 후에 페이지를 이동하는 타이머 설정
    const timer = setTimeout(() => {
      navigate("/DeviceGuide/SmartWatch/setupcomplete-26");
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머를 제거하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [navigate]); // navigate 함수가 변경될 때마다 useEffect 실행

  // 컨테이너 클릭 이벤트 핸들러
  const onLodingPageE25ContainerClick = () => {
    // 클릭 시에도 페이지 이동이 발생하도록 navigate 함수 호출
    navigate("/DeviceGuide/SmartWatch/setupcomplete-26");
  };

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("앱 권한 동의사항입니다. \n [동의]를 눌러주세요.", "작업이 완료될 때까지 \n 기다려주세요.", "스마트워치 연동이 \n 완료되었습니다.")},[])

  return (
    <div className="lodingpagee-25" onClick={onLodingPageE25ContainerClick}>
      <button className="lodingpageebutton">
        <b className="b83">팁과 사용 설명서</b>
      </button>
      <b className="b84">
        <p className="p71">{`데이터를 전송하는 동안 워치에 어떤 기능이 있는지 `}</p>
        <p className="p72">알아보세요.</p>
      </b>
      <div className="lodingpageeprogressimage">
        <div className="lodingpageeprogressimage-child" />
        <div className="div14">
          <b>100</b>
          <span className="span13">%</span>
        </div>
      </div>
      <b className="b85">이 작업은 몇 분 정도 걸릴 수 있습니다.</b>
      <b className="b86">완료 중...</b>
      <div className="lodingpageelogo">
        <img
          className="lodingpageelogovector-icon"
          alt=""
          src="/DeviceGuide/SmartWatch/matchingnumberwatchlogovector.svg"
        />
      </div>
    </div>
  );
};

export default LodingPageE;
