import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Start from "./pages/Start";
import Frame3 from "./pages/Frame3";
import End from "./pages/End";
import Review from "./pages/Review";
import Order from "./pages/Order";
import Order1 from "./pages/Order1";
import UseCoupon from "./pages/UseCoupon";
import Order2 from "./pages/Order2";
import SetPhone from "./pages/SetPhone";
import Request from "./pages/Request";
import Cart from "./pages/Cart";
import Frame4 from "./pages/Frame4";
import Coupon from "./pages/Coupon";
import MenuList from "./pages/MenuList";
import SortList from "./pages/SortList";
import StoreList from "./pages/StoreList";
import Main from "./pages/Main";
import SetAddress from "./pages/SetAddress";
import SetAddress1 from "./pages/SetAddress1";

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
      case "/start":
        title = "";
        metaDescription = "";
        break;
      case "/11":
        title = "";
        metaDescription = "";
        break;
      case "/end":
        title = "";
        metaDescription = "";
        break;
      case "/review":
        title = "";
        metaDescription = "";
        break;
      case "/order4":
        title = "";
        metaDescription = "";
        break;
      case "/order3":
        title = "";
        metaDescription = "";
        break;
      case "/usecoupon":
        title = "";
        metaDescription = "";
        break;
      case "/order":
        title = "";
        metaDescription = "";
        break;
      case "/setphone":
        title = "";
        metaDescription = "";
        break;
      case "/request":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/13":
        title = "";
        metaDescription = "";
        break;
      case "/coupon":
        title = "";
        metaDescription = "";
        break;
      case "/menulist":
        title = "";
        metaDescription = "";
        break;
      case "/sortlist":
        title = "";
        metaDescription = "";
        break;
      case "/storelist":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
      case "/setaddress2":
        title = "";
        metaDescription = "";
        break;
      case "/setaddress":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/start" element={<Start />} />
      <Route path="/11" element={<Frame3 />} />
      <Route path="/end" element={<End />} />
      <Route path="/review" element={<Review />} />
      <Route path="/order4" element={<Order />} />
      <Route path="/order3" element={<Order1 />} />
      <Route path="/usecoupon" element={<UseCoupon />} />
      <Route path="/order" element={<Order2 />} />
      <Route path="/setphone" element={<SetPhone />} />
      <Route path="/request" element={<Request />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/13" element={<Frame4 />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/menulist" element={<MenuList />} />
      <Route path="/sortlist" element={<SortList />} />
      <Route path="/storelist" element={<StoreList />} />
      <Route path="/main" element={<Main />} />
      <Route path="/setaddress2" element={<SetAddress />} />
      <Route path="/setaddress" element={<SetAddress1 />} />
    </Routes>
  );
}
export default App;
