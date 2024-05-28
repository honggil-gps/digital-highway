import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingleOrSet.css";
import axios from 'axios'

const SingleOrSet = ({onClose, selectedItem}) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([])

  const onButtonClick = useCallback(async () => {
    let itemprice = 0;
    switch(selectedItem){
      case "베이컨토마토디럭스":
        itemprice = 5800;
        break;
      case "햄버거":
        itemprice = 2500;
        break;
      case "슈비버거":
        itemprice = 5800;
        break;
      case "에그불고기버거":
        itemprice = 3900;
        break;
      default:
        itemprice = 0;
        break;
    }
    try {
      // 첫 번째 요청: 주문을 게시하기
      const response = await axios.post('http://localhost:4000/devices/kiosc_03', {
        orders: [{
          burger: selectedItem + '[단품]',
          ea: 1,
          price: itemprice
        }]
      }, {
        withCredentials: true // withCredentials 옵션을 설정 객체의 루트에 추가
      });

      // 두 번째 요청: 주문 목록 가져오기
      const orderListResponse = await axios.get('http://localhost:4000/devices/kiosc_03', {
        withCredentials: true // withCredentials 옵션을 설정 객체의 루트에 추가
      });
      
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
    console.log(selectedItem);
    navigate("/DeviceGuide/Kiosc/SelectSide_04", { state: { selectedItem: selectedItem } });
  }, [navigate, selectedItem]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("원하는 음식의 카테고리를 누르고 드시고 싶은 메뉴를 눌러보세요. 수량 변경은 메뉴 선택 후 \n 주문내역의 (+)(-)버튼으로 \n 변경할 수 있습니다.","햄버거만 드시려면 [단품], \n 음료와 사이드메뉴도 함께 \n 드시려면 [세트]를 눌러주세요.","주문한 내역이 맞는지 확인 후 \n 메뉴를 더 추가하고 싶다면 \n [이전]버튼을, 결제하려면 \n [결제하기]버튼을 눌러주세요.")},[])
  

  return (
    <div className="kiosc_div14">
      <p className="kiosc_p27">원하시는 구성을 선택해주세요</p>
      <button className="kiosc_button10" autoFocus={true} onClick={onButtonClick}>
        <img className="kiosc_image-4-icon" alt="" src="/DeviceGuide/Kiosc/single.png" />
        <p className="kiosc_p28">단품</p>
      </button>
      <button className="kiosc_button11" autoFocus={true} onClick={onButton1Click}>
        <img
          className="kiosc_e-20231502-34524-removebg-prev-icon"
          alt=""
          src="/DeviceGuide/Kiosc/set.png"
        />
        <p className="kiosc_p29">세트</p>
      </button>
      <button className="kiosc_close-btn" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default SingleOrSet;
