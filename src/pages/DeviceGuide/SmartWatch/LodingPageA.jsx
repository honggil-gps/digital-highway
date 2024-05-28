// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LodingPageA.css";

// const LodingPageA = () => {
//   const navigate = useNavigate();

//   const onLodingPageA07ContainerClick = useCallback(() => {
//     navigate("/DeviceGuide/SmartWatch/installationpermissiona-08");
//   }, [navigate]);

//   return (
//     <div className="lodingpagea-07" onClick={onLodingPageA07ContainerClick}>
//       <button className="lodingpageacanclebutton">
//         <div className="div">취소</div>
//       </button>
//       <div className="lodingpagealine" />
//       <div className="div1">설치중...</div>
//       <b className="galaxy-wearable">
//         <p className="galaxy">Galaxy</p>
//         <p className="galaxy">Wearable</p>
//       </b>
//     </div>
//   );
// };

// export default LodingPageA;


import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LodingPageA.css";

const LodingPageA = () => {
  const navigate = useNavigate();
  const [autoRedirect, setAutoRedirect] = useState(true); // 자동으로 페이지 이동하는지 여부를 추적하는 상태

  const onLodingPageA07ContainerClick = useCallback(() => {
    navigate("/DeviceGuide/SmartWatch/installationpermissiona-08");
    setAutoRedirect(false); // 클릭으로 수동으로 페이지 이동할 경우 자동 이동 중지
  }, [navigate]);

  useEffect(() => {
    if (autoRedirect) { // autoRedirect 상태가 true일 때만 타이머 설정
      const timer = setTimeout(() => {
        navigate("/DeviceGuide/SmartWatch/installationpermissiona-08");
      }, 3000);
      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 제거하여 메모리 누수 방지
    }
  }, [autoRedirect, navigate]); // autoRedirect 상태와 navigate 함수가 변경될 때마다 useEffect 실행

  return (
    <div className="lodingpagea-07" onClick={onLodingPageA07ContainerClick}>
      <button className="lodingpageacanclebutton">
        <div className="div">취소</div>
      </button>
      <div className="lodingpagealine" />
      <div className="div1">설치중...</div>
      <b className="galaxy-wearable">
        <p className="galaxy">Galaxy</p>
        <p className="galaxy">Wearable</p>
      </b>
    </div>
  );
};

export default LodingPageA;