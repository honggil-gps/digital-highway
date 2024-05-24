import { useNavigate } from "react-router-dom";
import "./SelectDrink.css";
import { useState } from "react";

const SelectDrink = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("");

  const selectDrink = (menuName) => {
    navigate("/DeviceGuide/Kiosc/SelectSide_04", { state: { selectedDrink: menuName } });
    setSelectedMenu(menuName); // 선택된 메뉴를 상태에 업데이트
  };

  return (
    <div className="kiosc_div19">
      <button
        className={`kiosc_button15 ${selectedMenu === "탄산음료" ? "active" : ""}`}
        onClick={() => selectDrink("탄산음료")}
      >
        <div className="kiosc_div20">탄산음료</div>
        <img
          className="kiosc_png-clipart-fizzy-drinks-coca-icon"
          alt=""
          src="/DeviceGuide/Kiosc/drink1.png"
        />
        <div className="kiosc_child13" />
      </button>
      <button
        className={`kiosc_button15 ${selectedMenu === "오렌지주스" ? "active" : ""}`}
        onClick={() => selectDrink("오렌지주스")}
      >
        <div className="kiosc_child13" />
        <div className="kiosc_div21">오렌지주스</div>
        <img className="kiosc_image-3-icon" alt="" src="/DeviceGuide/Kiosc/drink2.png" />
      </button>
      <button
        className={`kiosc_button15 ${selectedMenu === "아메리카노" ? "active" : ""}`}
        onClick={() => selectDrink("아메리카노")}
      >
        <div className="kiosc_child13" />
        <div className="kiosc_div21">아메리카노</div>
        <img className="kiosc_image-2-icon" alt="" src="/DeviceGuide/Kiosc/drink3.png" />
      </button>
    </div>
  );
};

export default SelectDrink;
