import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/appguide/kakakotaxi/First_01";
import Frame1 from "./pages/appguide/kakakotaxi/SecondPage_02";
import Frame2 from "./pages/appguide/kakakotaxi/PaymentMethod_03";
import Frame3 from "./pages/appguide/kakakotaxi/CardAdd_04";
import Frame4 from "./pages/appguide/kakakotaxi/CardInfo_05";
import Frame6 from "./pages/appguide/kakakotaxi/CardComplete_07";
import Frame7 from "./pages/appguide/kakakotaxi/Home_08";
import Frame91 from "./pages/appguide/kakakotaxi/StartingPointSet_10";
import Frame10 from "./pages/appguide/kakakotaxi/TaxiPick_11";
import Frame11 from "./pages/appguide/kakakotaxi/Reconfirm_12";
import Frame12 from "./pages/appguide/kakakotaxi/Request_13";
import Frame13 from "./pages/appguide/kakakotaxi/Complete_14";

function AppKikio() {
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
      case "/maincontents/kikio":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/second-02":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/paymentmethod-03":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/cardadd":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/cardinfo-05":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/7":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/8":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/10":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/11":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/12":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/13":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/complete-14":
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
      <Route path="/maincontents/kikio" element={<Frame />} />
      <Route path="/maincontents/second-02" element={<Frame1 />} />
      <Route path="/maincontents/paymentmethod-03" element={<Frame2 />} />
      <Route path="/maincontents/cardadd" element={<Frame3 />} />
      <Route path="/maincontents/cardinfo-05" element={<Frame4 />} />
      <Route path="/maincontents/7" element={<Frame6 />} />
      <Route path="/maincontents/8" element={<Frame7 />} />
      <Route path="/maincontents/10" element={<Frame91 />} />
      <Route path="/maincontents/11" element={<Frame10 />} />
      <Route path="/maincontents/12" element={<Frame11 />} />
      <Route path="/maincontents/13" element={<Frame12 />} />
      <Route path="/maincontents/complete-14" element={<Frame13 />} />
    </Routes>
  );
}
export default AppKikio;
