import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Kraillogin from "./pages/appguide/Korail/Kraillogin";
import Agreement from "./pages/appguide/Korail/Agreement";
import Loading from "./pages/appguide/Korail/Loading";
import TrainSchedule from "./components/appguide/Korail/TrainSchedule";
import TrainSeat from "./components/appguide/Korail/TrainSeat";
import TicketInformation from "./components/appguide/Korail/TicketInformation";
import Payment from "./components/appguide/Korail/Payment";
import PaymentMethod from "./components/appguide/Korail/PaymentMethod";
import MyTicket from "./pages/appguide/Korail/MyTicket";
import Refund from "./components/appguide/Korail/Refund";
import Pass from "./pages/appguide/Korail/Pass";
import PassSms from "./pages/appguide/Korail/PassSms";
import MainPage from "./pages/appguide/Korail/MainPage";
import Signup from "./components/appguide/Korail/Signup";
import TrainSelect from "./components/appguide/Korail/TrainSelect";
import TrainSeatSelect from "./components/appguide/Korail/TrainSeatSelect";

function AppKorail() {
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
      case "/maincontents/loading-01":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/kraillogin-03":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/agreement":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/trainschedule-08":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/train-seat":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/ticketinformation-12":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/payment-13":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/paymentmethod-14":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/my-ticket":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/refund-16":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/pass-05":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/pass-sms":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/mainpage-02":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/signup-07":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/trainselect-09":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/trainseatselect-11":
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
      <Route path="/maincontents/loading-01" element={<Loading />} />
      <Route path="/maincontents/kraillogin-03" element={<Kraillogin />} />
      <Route path="/maincontents/agreement" element={<Agreement />} />
      <Route path="/maincontents/trainschedule-08" element={<TrainSchedule />} />
      <Route path="/maincontents/train-seat" element={<TrainSeat />} />
      <Route path="/maincontents/ticketinformation-12" element={<TicketInformation />} />
      <Route path="/maincontents/payment-13" element={<Payment />} />
      <Route path="/maincontents/paymentmethod-14" element={<PaymentMethod />} />
      <Route path="/maincontents/my-ticket" element={<MyTicket />} />
      <Route path="/maincontents/refund-16" element={<Refund />} />
      <Route path="/maincontents/pass-05" element={<Pass />} />
      <Route path="/maincontents/pass-sms" element={<PassSms />} />
      <Route path="/maincontents/mainpage-02" element={<MainPage />} />
      <Route path="/maincontents/signup-07" element={<Signup />} />
      <Route path="/maincontents/trainselect-09" element={<TrainSelect />} />
      <Route path="/maincontents/trainseatselect-11" element={<TrainSeatSelect />} />
    </Routes>
  );
}
export default AppKorail;
