import { useCallback } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const navigate = useNavigate();

  const onLoading01ContainerClick = useCallback(() => {
    navigate("/mainpage-02");
  }, [navigate]);

  return (
    <div className="loading-01" onClick={onLoading01ContainerClick}>
      <footer className="loadingimage">
        <b className="b82">
          <p className="p15">로딩 중입니다.</p>
          <p className="p15">잠시만 기다려 주십시오</p>
        </b>
        <Box className="loadingimage1" sx={{ width: 120 }}>
          <CircularProgress variant="indeterminate" />
        </Box>
      </footer>
      <main className="lodingcontent">
        <div className="lodingcontentlogo">
          <img
            className="lodingcontentlogoimage-icon"
            alt=""
            src="/Appguide/Korail/lodingcontentlogoimage@2x.png"
          />
        </div>
        <div className="lodingcontenttext">
          <b className="app">철도 승차권 예약 APP</b>
          <h3 className="k-rail-talk">K-RAIL TALK</h3>
        </div>
      </main>
    </div>
  );
};

export default Loading;
