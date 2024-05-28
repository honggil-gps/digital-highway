import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import "./SelectPlace.css";

const SelectPlace = () => {
  const navigate = useNavigate();

  const onDineInClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/SelectMenu_03");
  }, [navigate]);

  const onTakeOutClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/SelectMenu_03");
  }, [navigate]);
  
  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("키오스크 사용법을 배워봅시다 \n 주문하시려면 화면을 눌러주세요", "매장에서 드시고 가시려면 \n [매장에서 식사], \n 가져가시려면 [테이크아웃]을 \n 눌러주세요", "원하는 음식의 카테고리를 누르고 드시고 싶은 메뉴를 눌러보세요. 수량 변경은 메뉴 선택 후 \n 주문내역의 (+)(-)버튼으로 \n 변경할 수 있습니다.")},[])
  

  return (
    <div className="kiosc_selectplace-02">
      <main className="kiosc_monitor2">
        <Link className="kiosc_dinein" to="/DeviceGuide/Kiosc/SelectMenu_03" onClick={onDineInClick}>
          <img
            className="kiosc_openmojihamburger-icon"
            alt=""
            src="/DeviceGuide/Kiosc/dinein.png"
          />
          <p className="kiosc_p22">매장에서 식사</p>
        </Link>
        <Link className="kiosc_takeout" to="/DeviceGuide/Kiosc/SelectMenu_03" onClick={onTakeOutClick}>
          <img
            className="kiosc_openmojishopping-bags-icon"
            alt=""
            src="/DeviceGuide/Kiosc/takeout.png"
          />
          <p className="kiosc_p23">테이크 아웃</p>
        </Link>
      </main>
      <Reader />
    </div>
  );
};

export default SelectPlace;
