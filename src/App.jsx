import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Start from "./pages/maincontents/baemin/Start";
import Frame from "./pages/maincontents/baemin/Frame";
import SetAddress from "./pages/maincontents/baemin/SetAddress";
import SetAddress1 from "./pages/maincontents/baemin/SetAddress1";
import Main from "./pages/maincontents/baemin/Main";
import StoreList from "./pages/maincontents/baemin/StoreList";
import SortList from "./pages/maincontents/baemin/SortList";
import MenuList from "./pages/maincontents/baemin/MenuList";
import Coupon from "./pages/maincontents/baemin/Coupon";
import Frame1 from "./pages/maincontents/baemin/Frame1";
import Cart from "./pages/maincontents/baemin/Cart";
import Request1 from "./pages/maincontents/baemin/Request1";
import SetPhone from "./pages/maincontents/baemin/SetPhone";
import Order from "./pages/maincontents/baemin/Order";
import UseCoupon from "./pages/maincontents/baemin/UseCoupon";
import Order1 from "./pages/maincontents/baemin/Order1";
import Order2 from "./pages/maincontents/baemin/Order2";
import Review from "./pages/maincontents/baemin/Review";
import End from "./pages/maincontents/baemin/End";
import Frame2 from "./pages/maincontents/baemin/Frame2";

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
      case "/14":
        title = "";
        metaDescription = "";
        break;
      case "/setaddress":
        title = "";
        metaDescription = "";
        break;
      case "/setaddress2":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
      case "/storelist":
        title = "";
        metaDescription = "";
        break;
      case "/sortlist":
        title = "";
        metaDescription = "";
        break;
      case "/menulist":
        title = "";
        metaDescription = "";
        break;
      case "/coupon":
        title = "";
        metaDescription = "";
        break;
      case "/13":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/request":
        title = "";
        metaDescription = "";
        break;
      case "/setphone":
        title = "";
        metaDescription = "";
        break;
      case "/order":
        title = "";
        metaDescription = "";
        break;
      case "/usecoupon":
        title = "";
        metaDescription = "";
        break;
      case "/order3":
        title = "";
        metaDescription = "";
        break;
      case "/order4":
        title = "";
        metaDescription = "";
        break;
      case "/review":
        title = "";
        metaDescription = "";
        break;
      case "/end":
        title = "";
        metaDescription = "";
        break;
      case "/11":
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
      <Route path="/" element={<Start />} />
      <Route path="/14" element={<Frame />} />
      <Route path="/setaddress" element={<SetAddress />} />
      <Route path="/setaddress2" element={<SetAddress1 />} />
      <Route path="/main" element={<Main />} />
      <Route path="/storelist" element={<StoreList />} />
      <Route path="/sortlist" element={<SortList />} />
      <Route path="/menulist" element={<MenuList />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/13" element={<Frame1 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/request" element={<Request1 />} />
      <Route path="/setphone" element={<SetPhone />} />
      <Route path="/order" element={<Order />} />
      <Route path="/usecoupon" element={<UseCoupon />} />
      <Route path="/order3" element={<Order1 />} />
      <Route path="/order4" element={<Order2 />} />
      <Route path="/review" element={<Review />} />
      <Route path="/end" element={<End />} />
      <Route path="/11" element={<Frame2 />} />
    </Routes>
  );
}
export default App;
