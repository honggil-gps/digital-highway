import React, { useState } from "react";
import "./SelectSidemenu.css";
import { useNavigate } from "react-router-dom";

const SelectSidemenu = () => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState(""); // 선택된 메뉴 상태

    const selectSide = (menuName) => {
    setSelectedMenu(menuName); // 선택된 메뉴로 상태 업데이트
    navigate("/SelectSide_04", { state: { selectedSide: menuName } });
    };

    return (
        <div className="div16">
        <button
            className={`button12 ${selectedMenu === "후렌치후라이" ? "active" : ""}`}
            onClick={() => selectSide("후렌치후라이")}
        >
            <div className="child10" />
            <img className="unnamed-1-icon" alt="" src="/DeviceGuide/Kiosc/side1.png" />
            <p className="p32">후렌치 후라이</p>
        </button>
        <button
            className={`button13 ${selectedMenu === "치즈스틱" ? "active" : ""}`}
            onClick={() => selectSide("치즈스틱")}
        >
            <img
            className="removebg-preview-1-icon"
            alt=""
            src="/DeviceGuide/Kiosc/side2.png"
            />
            <div className="div17">
            <p className="p33">골든 모짜렐라 치즈스틱</p>
            </div>
            <div className="child10" />
        </button>
        <button
            className={`button13 ${selectedMenu === "맥윙" ? "active" : ""}`}
            onClick={() => selectSide("맥윙")}
        >
            <div className="child10" />
            <img
            className="mcdonalds-side-macwings-menu-0-icon"
            alt=""
            src="/DeviceGuide/Kiosc/side3.png"
            />
            <div className="div18">맥윙</div>
        </button>
        </div>
    );
};

export default SelectSidemenu;
