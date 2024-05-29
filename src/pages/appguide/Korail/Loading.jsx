import { useCallback, useEffect } from "react";
import { LinearProgress, Box, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const navigate = useNavigate();

  const onLoading01ContainerClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("열차표를 예매해봅시다 \n 로딩을 기다려주세요", "예매를 위해 \n 회원가입이 필요합니다. \n 먼저 ☰ 버튼을 눌러주세요.")},[])

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
