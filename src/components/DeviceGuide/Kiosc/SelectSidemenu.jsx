import React, { useState } from "react";
import "./SelectSidemenu.css";
import { useNavigate } from "react-router-dom";

const SelectSidemenu = () => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState(""); // 선택된 메뉴 상태

    const selectSide = (menuName) => {
    setSelectedMenu(menuName); // 선택된 메뉴로 상태 업데이트
    navigate("/DeviceGuide/Kiosc/SelectSide_04", { state: { selectedSide: menuName } });
    };

    return (
        <div className="kiosc_div16">
        <button
            className={`kiosc_button12 ${selectedMenu === "후렌치후라이" ? "active" : ""}`}
            onClick={() => selectSide("후렌치후라이")}
        >
            <div className="kiosc_child10" />
            <img className="kiosc_unnamed-1-icon" alt="" src="/DeviceGuide/Kiosc/side1.png" />
            <p className="kiosc_p32">후렌치 후라이</p>
        </button>
        <button
            className={`kiosc_button13 ${selectedMenu === "치즈스틱" ? "active" : ""}`}
            onClick={() => selectSide("치즈스틱")}
        >
            <img
            className="kiosc_removebg-preview-1-icon"
            alt=""
            src="/DeviceGuide/Kiosc/side2.png"
            />
            <div className="kiosc_div17">
            <p className="kiosc_p33">골든 모짜렐라 치즈스틱</p>
            </div>
            <div className="kiosc_child10" />
        </button>
        <button
            className={`kiosc_button13 ${selectedMenu === "맥윙" ? "active" : ""}`}
            onClick={() => selectSide("맥윙")}
        >
            <div className="kiosc_child10" />
            <img
            className="kiosc_mcdonalds-side-macwings-menu-0-icon"
            alt=""
            src="/DeviceGuide/Kiosc/side3.png"
            />
            <div className="kiosc_div18">맥윙</div>
        </button>
        </div>
    );
};

export default SelectSidemenu;
