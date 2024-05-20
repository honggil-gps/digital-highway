import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/DeviceGuide/Kiosc/Main_01";
import SelectSide from "./pages/DeviceGuide/Kiosc/SelectSide_04";
import SelectPayment from "./pages/DeviceGuide/Kiosc/SelectPayment_06";
import OrderCheck from "./pages/DeviceGuide/Kiosc/OrderCheck_05";
import GiftCard from "./pages/DeviceGuide/Kiosc/GiftCard_09";
import Finish from "./pages/DeviceGuide/Kiosc/Finish_08";
import InputBarcode from "./pages/DeviceGuide/Kiosc/InputBarcode_10";
import UseGC from "./pages/DeviceGuide/Kiosc/UseGC_11";
import SelectPlace from "./pages/DeviceGuide/Kiosc/SelectPlace_02";
import SelectMenu from "./pages/DeviceGuide/Kiosc/SelectMenu_03";
import Card from "./pages/DeviceGuide/Kiosc/Card_07";

function Appkiosc() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/SelectSide_04":
        title = "";
        metaDescription = "";
        break;
      case "/SelectPayment_06":
        title = "";
        metaDescription = "";
        break;
      case "/OrderCheck_05":
        title = "";
        metaDescription = "";
        break;
      case "/GiftCard_09":
        title = "";
        metaDescription = "";
        break;
      case "/Finish_08":
        title = "";
        metaDescription = "";
        break;
      case "/InputBarcode_10":
        title = "";
        metaDescription = "";
        break;
      case "/UseGC_11":
        title = "";
        metaDescription = "";
        break;
      case "/SelectPlace_02":
        title = "";
        metaDescription = "";
        break;
      case "/SelectMenu_03":
        title = "";
        metaDescription = "";
        break;
      case "/Card_07":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/SelectSide_04" element={<SelectSide />} />
      <Route path="/SelectPayment_06" element={<SelectPayment />} />
      <Route path="/OrderCheck_05" element={<OrderCheck />} />
      <Route path="/GiftCard_09" element={<GiftCard />} />
      <Route path="/Finish_08" element={<Finish />} />
      <Route path="/InputBarcode_10" element={<InputBarcode />} />
      <Route path="/UseGC_11" element={<UseGC />} />
      <Route path="/SelectPlace_02" element={<SelectPlace />} />
      <Route path="/SelectMenu_03" element={<SelectMenu />} />
      <Route path="/Card_07" element={<Card />} />
    </Routes>
  );
}
export default Appkiosc;
