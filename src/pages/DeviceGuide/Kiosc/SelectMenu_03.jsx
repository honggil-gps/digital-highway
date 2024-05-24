import MenuButtons from "../../../components/DeviceGuide/Kiosc/MenuButtons";
import Menu from "../../../components/DeviceGuide/Kiosc/Menu";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import "./SelectMenu.css";
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom"
import axios from 'axios'

const SelectMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedItem = location.state?.selectedItem;
  const [order, setOrder] = useState({orders:[]})
  const [noOrders, setNoOrders] = useState(false);

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/OrderCheck_05");
  }, [navigate]);

  useEffect(()=>{
    async function getOrder(){
      try{
        const response = await axios.get('http://localhost:4000/devices/kiosc_03', {withCredentials:true})
        // const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}})
        
        const fetchedData = response.data;
        if (!fetchedData || fetchedData.userID === null){
          setNoOrders(true);
        }else{
          setOrder(fetchedData);
        }
        
        // console.log(order)
      }catch(error){
        console.error('데이터 가져오는데 실패함', error);
      }
    }
    getOrder()
  },[])
  // 주문 항목 수량 증가 함수
const increaseEA = async (orderID) => {
  // orders 배열에서 orderID와 일치하는 주문 항목 찾기
  const orderIndex = order.orders.findIndex(orderItem => orderItem._id === orderID);
  console.log(orderIndex)
  // 주문 항목을 찾은 경우 수량 증가
  if (orderIndex !== -1) {
      // orders 배열의 복제본 생성
      const updatedOrders = [...order.orders];

      console.log(updatedOrders)
      
      // 수량 증가
      const increase = updatedOrders[orderIndex].ea += 1;
      
      console.log(increase)
      // 변경된 orders 배열을 업데이트한 order 객체 생성
      const updatedOrder = {
          ...order,
          orders: updatedOrders,
      };
      console.log(updatedOrder)
      // 서버에 업데이트된 주문 정보를 전송
      try {
          await axios.put('http://localhost:4000/devices/kiosc_03', updatedOrder, {withCredentials:true});
          const response = await axios.get('http://localhost:4000/devices/kiosc_03', {withCredentials:true})
          // const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}})
          // 서버 응답 데이터로 order 상태 업데이트
          console.log("주문 업데이트 성공:", response.data);
          setOrder(response.data)
      } catch (error) {
          console.error("주문 업데이트 실패:", error);
      }
  }
};

// 주문 항목 수량 감소 함수
const decreaseEA = async (orderID) => {
  // orders 배열에서 orderID와 일치하는 주문 항목 찾기
  const orderIndex = order.orders.findIndex(orderItem => orderItem._id === orderID);

  // 주문 항목을 찾은 경우 수량 감소
  if (orderIndex !== -1) {
      // orders 배열의 복제본 생성
      const updatedOrders = [...order.orders];
      // 수량 감소 (수량이 1 이상인 경우만)
      if (updatedOrders[orderIndex].ea > 1) {
          updatedOrders[orderIndex].ea -= 1;

          // 변경된 orders 배열을 업데이트한 order 객체 생성
          const updatedOrder = {
              ...order,
              orders: updatedOrders,
          };
          // 서버에 업데이트된 주문 정보를 전송
          try {
            await axios.put('http://localhost:4000/devices/kiosc_03', updatedOrder, {withCredentials:true});
            const response = await axios.get('http://localhost:4000/devices/kiosc_03', {withCredentials:true})
            // const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}})
            // 서버 응답 데이터로 order 상태 업데이트
            console.log("주문 업데이트 성공:", response.data);
            setOrder(response.data)
          } catch (error) {
              console.error("주문 업데이트 실패:", error);
          }
      }else{
        updatedOrders.splice(orderIndex,1);

        const updatedOrder = {
          ...order,
          orders: updatedOrders,
      };
      // 서버에 업데이트된 주문 정보를 전송
      try {
        await axios.put('http://localhost:4000/devices/kiosc_03', updatedOrder, {withCredentials:true});
        const response = await axios.get('http://localhost:4000/devices/kiosc_03', {withCredentials:true})
        // const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}});
        // 서버 응답 데이터로 order 상태 업데이트
        console.log("주문 업데이트 성공:", response.data);
        setOrder(response.data);
    } catch (error) {
        console.error("주문 업데이트 실패:", error);
    }
      }
  }
};
return (
  <div className="kiosc_selectmenu-03">
    <main className="kiosc_monitor3">
      <MenuButtons />
      <Menu />
      <div className="kiosc_div13">
        <p className="kiosc_p25">주문내역</p>
        {noOrders ? (
            <p className="kiosc_p24">장바구니가 비어있습니다.</p>
          ) : (
            <>
              <div className="kiosc_order-list">
                {order.orders.map((list, index) => (
                  <div key={index} className="kiosc_order-item">
                    <p className="kiosc_p25">
                      {list.burger ? list.burger : list.side ? list.side : list.drink}
                    </p>
                    <button className="kiosc_button02" onClick={() => increaseEA(list._id)}>
                      <img src="/DeviceGuide/Kiosc/plusbutton.png" alt="" />
                    </button>
                    <p>{list.ea}</p>
                    <button className="kiosc_button02" onClick={() => decreaseEA(list._id)}>
                      <img src="/DeviceGuide/Kiosc/minusbutton.png" alt="" />
                    </button>
                    <p>{list.ea * list.price}</p>
                  </div>
                ))}
              </div>
              <button className="kiosc_button01" onClick={onButtonClick}>
                <img className="kiosc_child01" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
                <p className="kiosc_div01">주문하기</p>
              </button>
            </>
          )}
        </div>
        <img className="kiosc_icon8" alt="" src="/DeviceGuide/Kiosc/banner.png" />
      </main>
      <Reader />
    </div>
    );
};

export default SelectMenu;
