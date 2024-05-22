import { useCallback, useEffect, useState } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./UseGC.css";
import axios from 'axios'

const UseGC = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({orders:[]})

  const onButtonClick = useCallback(() => {
    navigate("/InputBarcode_10");
  }, [navigate]);

  const onButton1Click = useCallback(async() => {
    try{
      await axios.delete('http://localhost:4000/devices/kiosc_03',{data:{userID:"test"}});
      navigate("/Finish_08");
    }catch(err){
      console.log("주문실패함",err)
    }
  }, [navigate]);

  useEffect(()=>{
    async function getOrder(){
      try{
        const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}})
        setOrder(response.data);
      }catch(error){
        console.log(error.message)
      }
    }
    getOrder()
  },[])
  return (
    <div className="usegc-11">
      <Reader />
      <main className="monitor11">
        <p className="p13">
          <span className="span7">모바일 상품권을</span>
          <span className="span7">사용하시겠습니까?</span>
        </p>
        <img
          className="material-symbolsphone-iphone-icon1"
          alt=""
          src="/DeviceGuide/Kiosc/barcode2.png"
        />
        <div className="parent">
          <p className="p14">이용가능금액</p>
          <p className="p15">￦4,900</p>
          <p className="p14">쿠폰 종류</p>
          <p className="p15">교환권</p>
        </div>
        <img className="line2" src="/DeviceGuide/Kiosc/line2.png"/>
        {order.orders && (
        <div className="group">
          <p className="p14">주문금액</p>
          <p className="p15">￦{order.totalPrice}</p>
          <p className="p14">추가결제금액</p>
          <p className="p15">￦{order.totalPrice-4900}</p>
        </div>
        )}
        <button className="button8" onClick={onButtonClick}>
          <img className="child7" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="div11">이전</div>
        </button>
        <button className="button9" onClick={onButton1Click}>
          <img className="child7" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="div12">사용하기</div>
        </button>
      </main>
    </div>
  );
};

export default UseGC;
