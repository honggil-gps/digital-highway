import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderListCheck.css";
import axios from 'axios'

const OrderListCheck = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({orders:[]})

  const cancelOrder = async(orderID) => {
    const orderIndex = order.orders.findIndex(orderItem => orderItem._id === orderID)
    const updatedOrders = [...order.orders];
    updatedOrders.splice(orderIndex,1);
    const updatedOrder = {
      ...order,
      orders: updatedOrders,
    };
    // 서버에 업데이트된 주문 정보를 전송
    try {
      await axios.put('http://localhost:4000/devices/kiosc_03', updatedOrder);
      const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}});
      // 서버 응답 데이터로 order 상태 업데이트
      console.log("주문 업데이트 성공:", response.data);
      setOrder(response.data);
  } catch (error) {
      console.error("주문 업데이트 실패:", error);
  }
  }

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

  const MenuImage = (menuItem) => {
    if (menuItem.includes("[단품]")){
      return "/DeviceGuide/Kiosc/burger2.png"
    }else if(menuItem.includes("[세트]")){
      return "/DeviceGuide/Kiosc/set.png"
    }else{
      switch (menuItem){
        case "후렌치후라이":
          return "/DeviceGuide/Kiosc/side1.png"
        case "치즈스틱":
          return "/DeviceGuide/Kiosc/side2.png"
        case "맥윙":
          return "/DeviceGuide/Kiosc/side3.png"
        case "애플파이":
          return "/DeviceGuide/Kiosc/side4.png"
        case "탄산음료":
          return "/DeviceGuide/Kiosc/drink1.png"
        case "오렌지주스":
          return "/DeviceGuide/Kiosc/drink2.png"
        case "아메리카노":
          return "/DeviceGuide/Kiosc/drink3.png"
      }
    } 
  }

  const ImageSize = (menuItem) =>{
    if (menuItem.includes("[단품]")){
      return {marginBottom:"10px",width:"80px", height:"80px"}
    }else if(menuItem.includes("[세트]")){
      return {margin:"1px 0", width:"100px", height:"auto"}
    }else{
      switch (menuItem){
        case "후렌치후라이":
          return {margin:"10px 0",width:"80px", height:"80px"}
        case "치즈스틱":
          return {margin:"10px 0",width:"90px", height:"auto"}
        case "맥윙":
          return {margin: "15px 0", width:"100px", height:"auto"}
        case "애플파이":
          return {width:"auto", height:"100px"}
        case "탄산음료":
          return {marginBottom:"10px",width:"auto", height:"100px"}
        case "오렌지주스":
          return {margin:"17px 10px", width:"auto", height:"70px"}
        case "아메리카노":
          return {margin:"12px 0",width:"auto", height:"90px"}
      }
    }
  }
  return (
    <>
      <section className="section">
        {order.orders.map((list,index)=>(
            <div key={index} className="order-check">
          <img className="icon10" alt="" style={ImageSize(list.burger || list.side || list.drink)} src={MenuImage(list.burger || list.side || list.drink)}/>
          <div className="orderlist">
            {list.burger && <p className="p35">{list.burger}</p>}
            {list.side && (<p className="p37">사이드: {list.side}</p>)}
            {list.drink && (<p className="p38">음료: {list.drink}</p>)}
            <p className="p39">수량: {list.ea}개</p>
            <p className="p36">￦{list.price*list.ea}</p>
          </div>
          <button className="button18" onClick={()=>cancelOrder(list._id)}>
            <div className="div23">취소</div>
            <div className="child16" />
          </button>
          </div>
        ))}
      </section>
      <p className="p8">총 결제금액 : {order.totalPrice}</p>
    </>
  );
};

export default OrderListCheck;
