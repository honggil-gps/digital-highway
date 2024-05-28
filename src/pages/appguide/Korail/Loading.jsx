// import { useCallback } from "react";
// import { LinearProgress, Box, CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import "./Loading.css";

// const Loading = () => {
//   const navigate = useNavigate();

//   const onLoading01ContainerClick = useCallback(() => {
//     navigate("/maincontents/mainpage-02");
//   }, [navigate]);

//   return (
//     <div className="krail-loading-01" onClick={onLoading01ContainerClick}>
//       <footer className="krail-loadingimage">
//         <b className="krail-b82">
//           <p className="krail-p15">로딩 중입니다.</p>
//           <p className="krail-p15">잠시만 기다려 주십시오</p>
//         </b>
//         <Box className="krail-loadingimage1" sx={{ width: 120 }}>
//           <CircularProgress variant="indeterminate" />
//         </Box>
//       </footer>
//       <main className="krail-lodingcontent">
//         <div className="krail-lodingcontentlogo">
//           <img
//             className="krail-lodingcontentlogoimage-icon"
//             alt=""
//             src="/appguide/Korail/lodingcontentlogoimage@2x.png"
//           />
//         </div>
//         <div className="krail-lodingcontenttext">
//           <b className="krail-app">철도 승차권 예약 APP</b>
//           <h3 className="krail-k-rail-talk">K-RAIL TALK</h3>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Loading;



import { useEffect, useCallback } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 컴포넌트가 렌더링되면 3초 후에 페이지를 이동하는 타이머 설정
    const timer = setTimeout(() => {
      navigate("/maincontents/mainpage-02");
    }, 3000);

    // 컴포넌트가 언마운트되면 타이머를 제거하여 메모리 누수 방지
    return () => clearTimeout(timer);
  }, [navigate]); // navigate 함수가 변경될 때마다 useEffect 실행

  // 컨테이너 클릭 이벤트 핸들러
  const onLoading01ContainerClick = useCallback(() => {
    // 클릭 시에도 페이지 이동이 발생하도록 navigate 함수 호출
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  return (
    <div className="krail-loading-01" onClick={onLoading01ContainerClick}>
      <footer className="krail-loadingimage">
        <b className="krail-b82">
          <p className="krail-p15">로딩 중입니다.</p>
          <p className="krail-p15">잠시만 기다려 주십시오</p>
        </b>
        <Box className="krail-loadingimage1" sx={{ width: 120 }}>
          <CircularProgress variant="indeterminate" />
        </Box>
      </footer>
      <main className="krail-lodingcontent">
        <div className="krail-lodingcontentlogo">
          <img
            className="krail-lodingcontentlogoimage-icon"
            alt=""
            src="/appguide/Korail/lodingcontentlogoimage@2x.png"
          />
        </div>
        <div className="krail-lodingcontenttext">
          <b className="krail-app">철도 승차권 예약 APP</b>
          <h3 className="krail-k-rail-talk">K-RAIL TALK</h3>
        </div>
      </main>
    </div>
  );
};

export default Loading;
