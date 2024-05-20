import { useCallback } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import OrderListCheck from "../../../components/DeviceGuide/Kiosc/OrderListCheck";
import { useNavigate } from "react-router-dom";
import "./OrderCheck.css";

const OrderCheck = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/SelectMenu_03");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/SelectPayment_06");
  }, [navigate]);

  return (
    <div className="ordercheck-05">
      <Reader />
      <main className="monitor5">
        <p className="p7">주문내역</p>
        <h1 className="w">W</h1>
        <img className="icon2" alt="" src="/DeviceGuide/Kiosc/line1.png" />
        <OrderListCheck />
        <button className="button2" onClick={onButton1Click}>
          <img className="rectangle-icon" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="div4">이전</div>
        </button>
        <button className="button3" onClick={onButton2Click}>
          <img className="rectangle-icon" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="div5">결제하기</div>
        </button>
      </main>
    </div>
  );
};

export default OrderCheck;
