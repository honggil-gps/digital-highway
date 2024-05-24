import { useCallback } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import OrderListCheck from "../../../components/DeviceGuide/Kiosc/OrderListCheck";
import { useNavigate } from "react-router-dom";
import "./OrderCheck.css";

const OrderCheck = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/SelectMenu_03");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/SelectPayment_06");
  }, [navigate]);

  return (
    <div className="kiosc_ordercheck-05">
      <Reader />
      <main className="kiosc_monitor5">
        <p className="kiosc_p7">주문내역</p>
        <h1 className="kiosc_w">W</h1>
        <img className="kiosc_icon2" alt="" src="/DeviceGuide/Kiosc/line1.png" />
        <OrderListCheck />
        <button className="kiosc_button2" onClick={onButton1Click}>
          <img className="kiosc_rectangle-icon" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div4">이전</div>
        </button>
        <button className="kiosc_button3" onClick={onButton2Click}>
          <img className="kiosc_rectangle-icon" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div5">결제하기</div>
        </button>
      </main>
    </div>
  );
};

export default OrderCheck;
