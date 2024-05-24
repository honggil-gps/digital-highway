import { useCallback } from "react";
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
