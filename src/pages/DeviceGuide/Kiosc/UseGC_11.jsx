import { useCallback, useEffect, useState } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./UseGC.css";
import axios from 'axios'

const UseGC = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({orders:[]})

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/InputBarcode_10");
  }, [navigate]);

  const onButton1Click = useCallback(async() => {
    try{
      await axios.delete('http://localhost:4000/devices/kiosc_03', {withCredentials:true});
      // await axios.delete('http://localhost:4000/devices/kiosc_03',{data:{userID:"test"}});
      navigate("/DeviceGuide/Kiosc/Finish_08");
    }catch(err){
      console.log("주문실패함",err)
    }
  }, [navigate]);

  useEffect(()=>{
    async function getOrder(){
      try{
        const response = await axios.get('http://localhost:4000/devices/kiosc_03',{withCredentials:true})
        // const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}})
        setOrder(response.data);
      }catch(error){
        console.log(error.message)
      }
    }
    getOrder()
  },[])

  const additionalPayment = order.totalPrice - 4900;
  const remainingAmount = additionalPayment < 0 ? -additionalPayment : 0;

  //해당 페이지에서 출력할 캡션 입력
  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  sendCaption("모바일 상품권의 바코드 아래 \n 적혀있는 번호를 입력해주세요.", "사용하실 모바일 상품권이 맞는지, \n 남은 금액이나 추가결제금액이 \n 있다면 확인 후 [사용하기]를 \n눌러주세요.", "주문이 완료되었습니다. \n 출력된 주문번호표를 가지고 \n 음식이 나올 때까지 기다려주세요.")
  return (
    <div className="kiosc_usegc-11">
      <Reader />
      <main className="kiosc_monitor11">
        <p className="kiosc_p13">
          <span className="kiosc_span7">모바일 상품권을</span>
          <span className="kiosc_span7">사용하시겠습니까?</span>
        </p>
        <img
          className="kiosc_material-symbolsphone-iphone-icon1"
          alt=""
          src="/DeviceGuide/Kiosc/barcode2.png"
        />
        <div className="kiosc_parent">
          <p className="kiosc_p14">이용가능금액</p>
          <p className="kiosc_p15">￦4,900</p>
          <p className="kiosc_p14">쿠폰 종류</p>
          <p className="kiosc_p15">교환권</p>
        </div>
        <img className="kiosc_line2" src="/DeviceGuide/Kiosc/line2.png"/>
        {order.orders && (
          <div className="kiosc_group">
            <p className="kiosc_p14">주문금액</p>
            <p className="kiosc_p15">￦{order.totalPrice}</p>
            {additionalPayment > 0 && (
              <>
                <p className="kiosc_p14">추가결제금액</p>
                <p className="kiosc_p15">￦{additionalPayment}</p>
              </>
            )}
            {additionalPayment < 0 && (
              <>
                <p className="kiosc_p14">남은금액</p>
                <p className="kiosc_p15">￦{remainingAmount}</p>
              </>
            )}
          </div>
        )}
        <button className="kiosc_button8" onClick={onButtonClick}>
          <img className="kiosc_child7" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div11">이전</div>
        </button>
        <button className="kiosc_button9" onClick={onButton1Click}>
          <img className="kiosc_child7" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div12">사용하기</div>
        </button>
      </main>
    </div>
  );
  
};

export default UseGC;
