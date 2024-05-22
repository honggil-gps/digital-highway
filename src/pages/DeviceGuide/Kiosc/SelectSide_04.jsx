import { useCallback, useState, useEffect } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import SelectSidemenu from "../../../components/DeviceGuide/Kiosc/SelectSidemenu";
import SelectDrink from "../../../components/DeviceGuide/Kiosc/SelectDrink";
import { useLocation, useNavigate } from "react-router-dom";
import "./SelectSide.css";
import axios from 'axios'

const SelectSide = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // `selectedItem`, `selectedSide`, `selectedDrink` 상태
    const [selectedItem] = useState(location.state?.selectedItem);
    const [selectedSide, setSelectedSide] = useState(location.state?.selectedSide);
    const [selectedDrink, setSelectedDrink] = useState(location.state?.selectedDrink);
    
    // `itemprice` 상태
    const [itemprice] = useState(() => {
        // `selectedItem`에 따라 `itemprice`를 초기화
        switch (selectedItem) {
            case "베이컨토마토디럭스":
                return 7700;
            case "햄버거":
                return 4500;
            case "슈비버거":
                return 7800;
            case "에그불고기버거":
                return 6000;
            case "맥치킨":
                return 5000;
            case "슈슈버거":
                return 6000;
            case "1955버거":
                return 7500;
            case "더블불고기버거":
                return 6000;
            default:
                return 0;
        }
    });
    
    // 사이드 메뉴 선택 시 `selectedSide`를 업데이트
    useEffect(() => {
        if (location.state?.selectedSide) {
            setSelectedSide(location.state.selectedSide);
        }
        if (location.state?.selectedDrink) {
            setSelectedDrink(location.state.selectedDrink);
        }
    }, [location.state]);

    // `onButton6Click`과 `onButton7Click` 함수
    const onButton6Click = useCallback(() => {
        navigate("/SelectMenu_03");
    }, [navigate]);

    const onButton7Click = useCallback(async() => {
<<<<<<< HEAD
      try{
        const response = await axios.post('http://localhost:4000/devices/kiosc_03', {
          userID:"test",
          orders:[{
=======
        try{
        const response = await axios.post('http://localhost:4000/devices/kiosc_03', {
            userID:"test",
            orders:[{
>>>>>>> Develop
            burger:selectedItem+'[세트]',
            side:selectedSide,
            drink:selectedDrink,
            ea:1,
            price:itemprice
            }]
        });
        }catch(error){
        console.log(error)
        }
        navigate("/SelectMenu_03")
        // console.log(selectedItem);
        // console.log(selectedSide);
        // console.log(selectedDrink);
        // navigate("/SelectMenu_03", { state: { selectedItem: selectedItem + '[세트]' } });
    }, [navigate, selectedItem, selectedSide, selectedDrink]);

    return (
        <div className="selectside-04">
            <Reader />
            <main className="monitor4">
                <img className="icon" alt="" src="/DeviceGuide/Kiosc/banner.png" />
                <img className="icon1" alt="" src="/DeviceGuide/Kiosc/set.png" />
                <h3 className="h3">다양한 메뉴와 함께 즐겨보세요</h3>
                <p className="p2">{selectedItem}세트</p>
                <p className="p3">￦{itemprice}</p>
                <p className="p4">사이드메뉴를 선택해주세요</p>
                <p className="p5">음료를 선택해주세요</p>
                <SelectSidemenu />
                <SelectDrink />
                <button className="button" autoFocus={true} onClick={onButton6Click}>
                    <img className="child" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
                    <div className="div">이전</div>
                </button>
                <button className="button123" onClick={onButton7Click}>
                    <img className="child" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
                    <div className="div1">장바구니에 추가</div>
                </button>
            </main>
        </div>
    );
};

export default SelectSide;
