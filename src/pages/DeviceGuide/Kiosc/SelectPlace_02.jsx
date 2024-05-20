import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import "./SelectPlace.css";

const SelectPlace = () => {
  const navigate = useNavigate();

  const onDineInClick = useCallback(() => {
    navigate("/SelectMenu_03");
  }, [navigate]);

  const onTakeOutClick = useCallback(() => {
    navigate("/SelectMenu_03");
  }, [navigate]);

  return (
    <div className="selectplace-02">
      <main className="monitor2">
        <Link className="dinein" to="/SelectMenu_03" onClick={onDineInClick}>
          <img
            className="openmojihamburger-icon"
            alt=""
            src="/DeviceGuide/Kiosc/dinein.png"
          />
          <p className="p22">매장에서 식사</p>
        </Link>
        <Link className="takeout" to="/SelectMenu_03" onClick={onTakeOutClick}>
          <img
            className="openmojishopping-bags-icon"
            alt=""
            src="/DeviceGuide/Kiosc/takeout.png"
          />
          <p className="p23">테이크 아웃</p>
        </Link>
      </main>
      <Reader />
    </div>
  );
};

export default SelectPlace;
