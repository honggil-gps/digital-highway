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

function App() {
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
      case "/agreement":
        title = "";
        metaDescription = "";
        break;
      case "/loading-01":
        title = "";
        metaDescription = "";
        break;
      case "/trainschedule-08":
        title = "";
        metaDescription = "";
        break;
      case "/train-seat":
        title = "";
        metaDescription = "";
        break;
      case "/ticketinformation-12":
        title = "";
        metaDescription = "";
        break;
      case "/payment-13":
        title = "";
        metaDescription = "";
        break;
      case "/paymentmethod-14":
        title = "";
        metaDescription = "";
        break;
      case "/my-ticket":
        title = "";
        metaDescription = "";
        break;
      case "/refund-16":
        title = "";
        metaDescription = "";
        break;
      case "/pass-05":
        title = "";
        metaDescription = "";
        break;
      case "/pass-sms":
        title = "";
        metaDescription = "";
        break;
      case "/mainpage-02":
        title = "";
        metaDescription = "";
        break;
      case "/signup-07":
        title = "";
        metaDescription = "";
        break;
      case "/trainselect-09":
        title = "";
        metaDescription = "";
        break;
      case "/trainseatselect-11":
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
      <Route path="/" element={<Kraillogin />} />
      <Route path="/agreement" element={<Agreement />} />
      <Route path="/loading-01" element={<Loading />} />
      <Route path="/trainschedule-08" element={<TrainSchedule />} />
      <Route path="/train-seat" element={<TrainSeat />} />
      <Route path="/ticketinformation-12" element={<TicketInformation />} />
      <Route path="/payment-13" element={<Payment />} />
      <Route path="/paymentmethod-14" element={<PaymentMethod />} />
      <Route path="/my-ticket" element={<MyTicket />} />
      <Route path="/refund-16" element={<Refund />} />
      <Route path="/pass-05" element={<Pass />} />
      <Route path="/pass-sms" element={<PassSms />} />
      <Route path="/mainpage-02" element={<MainPage />} />
      <Route path="/signup-07" element={<Signup />} />
      <Route path="/trainselect-09" element={<TrainSelect />} />
      <Route path="/trainseatselect-11" element={<TrainSeatSelect />} />
    </Routes>
  );
}
export default App;
