import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import "./Finish.css";

const Finish = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/DeviceGuide/Kiosc/");
    }, 3000); // 3초 후에 다음 화면으로 이동

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 해제합니다.
  }, [navigate]);

  return (
    <div className="kiosc_finish-08">
      <Reader />
      <main className="kiosc_monitor8">
        <p className="kiosc_p11">
          <span className="kiosc_span2">결제가 완료되었습니다.</span>
          <span className="kiosc_span2">주문번호는 000번입니다.</span>
          <span className="kiosc_span2">주문번호표가 출력될 예정입니다.</span>
        </p>
      </main>
      <img className="kiosc_icon4" alt="" src="/DeviceGuide/Kiosc/box3.png" />
      <div className="kiosc_print">
        <img className="kiosc_receipt" src="/DeviceGuide/Kiosc/receipt.png" alt="" />
      </div>
    </div>
  );
};

export default Finish;
