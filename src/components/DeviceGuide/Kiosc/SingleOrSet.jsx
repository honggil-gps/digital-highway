import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleOrSet.css";
import axios from 'axios'

const SingleOrSet = ({onClose, selectedItem}) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([])

  const onButtonClick = useCallback(async () => {
    let itemprice = 0
      switch(selectedItem){
        case "베이컨토마토디럭스":
          itemprice = 5800;
          break
        case "햄버거":
          itemprice = 2500;
          break
        case "슈비버거":
          itemprice = 5800;
          break
        case "에그불고기버거":
          itemprice = 3900;
          break
        default:
          itemprice = 0;
          break
      }
    try {
      // 첫 번째 요청: 주문을 게시하기
      const response = await axios.post('http://localhost:4000/devices/kiosc_03', {
        userID:"test",
        orders:[{
          burger:selectedItem+'[단품]',
          ea:1,
          price:itemprice
        }]
      });
      // 두 번째 요청: 주문 목록 가져오기
      const orderListResponse = await axios.get('http://localhost:4000/devices/kiosc_03');
      
      setOrder(orderListResponse.data);
      
      onClose(); // 주문이 완료된 후 onClose()를 호출합니다.

      navigate(0);
      
      // 요청이 성공적으로 처리된 경우 추가 작업 수행
      console.log(orderListResponse.data);
      
    } catch (error) {
      // 오류 처리: 요청 실패 시 경고 메시지 또는 오류 로그를 남길 수 있습니다.
      console.error("요청 실패:", error);
    }
  }, [selectedItem, onClose, navigate]);

  const onButton1Click = useCallback(() => {
    console.log(selectedItem)
    navigate("/SelectSide_04", {state:{selectedItem:selectedItem}});
  }, [navigate, selectedItem]);

  return (
    <div className="div14">
      <p className="p27">원하시는 구성을 선택해주세요</p>
      <button className="button10" autoFocus={true} onClick={onButtonClick}>
        <img className="image-4-icon" alt="" src="/DeviceGuide/Kiosc/single.png" />
        <p className="p28">단품</p>
      </button>
      <button className="button11" autoFocus={true} onClick={onButton1Click}>
        <img
          className="e-20231502-34524-removebg-prev-icon"
          alt=""
          src="/DeviceGuide/Kiosc/set.png"
        />
        <p className="p29">세트</p>
      </button>
    </div>
  );
};

export default SingleOrSet;
