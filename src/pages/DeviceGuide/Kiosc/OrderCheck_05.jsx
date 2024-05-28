import { useCallback, useEffect } from "react";
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

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("원하는 음식의 카테고리를 누르고 드시고 싶은 메뉴를 눌러보세요. 수량 변경은 메뉴 선택 후 \n 주문내역의 (+)(-)버튼으로 \n 변경할 수 있습니다.","주문한 내역이 맞는지 확인 후 \n 메뉴를 더 추가하고 싶다면 \n [이전]버튼을, 결제하려면 \n [결제하기]버튼을 눌러주세요.", "카드결제를 하시려면 \n [신용카드]를, \n 기프티콘이나 금액권을 \n 사용하시려면 [모바일상품권]을 \n 선택해주세요.")},[])
  
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
