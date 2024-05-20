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
      await axios.put('http://localhost:3000/devices/kiosc_03', updatedOrder);
      const response = await axios.get('http://localhost:3000/devices/kiosc_03',{params:{userID:"test"}});
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
        const response = await axios.get('http://localhost:3000/devices/kiosc_03',{params:{userID:"test"}})
        setOrder(response.data);
      }catch(error){
        console.log(error.message)
      }
    }
    getOrder()
  },[])
  return (
    <section className="section">
      {order.orders.map((list,index)=>(
          <div key={index} className="order-check">
        <img className="icon10" alt="" src="/DeviceGuide/Kiosc/set.png"/>
        <div className="orderlist">
          <p className="p35">{list.burger}</p>
          <p className="p36">￦{list.price*list.ea}</p>
          {list.side && (<p className="p37">사이드메뉴: {list.side}</p>)}
          {list.drink && (<p className="p38">음료: {list.drink}</p>)}
          <p className="p39">수량: {list.ea}개</p>
        </div>
        <button className="button18" onClick={()=>cancelOrder(list._id)}>
          <div className="div23">취소</div>
          <div className="child16" />
        </button>
        </div>
      ))}
      <p className="p8">총 결제금액:{order.totalPrice}</p>
    </section>
  );
};

export default OrderListCheck;
