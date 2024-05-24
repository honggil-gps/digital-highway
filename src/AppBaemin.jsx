import { useEffect } from "react"; 
import { AddressProvider } from "./components/appguide/baemin/AddressContext.jsx";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Start from "./pages/appguide/baemin/Start.jsx";
import Coupon from "./pages/appguide/baemin/Coupon.jsx";
import SetAddress from "./pages/appguide/baemin/SetAddress.jsx";
import SetAddress1 from "./pages/appguide/baemin/SetAddress1.jsx";
import Main from "./pages/appguide/baemin/Main.jsx";
import StoreList from "./pages/appguide/baemin/StoreList.jsx";
import SortList from "./pages/appguide/baemin/SortList.jsx";
import MenuList from "./pages/appguide/baemin/MenuList.jsx";
import Frame11 from "./pages/appguide/baemin/Frame1.jsx";
import Frame from "./pages/appguide/baemin/Frame.jsx";
import Cart from "./pages/appguide/baemin/Cart.jsx";
import Request1 from "./pages/appguide/baemin/Request1.jsx";
import SetPhone from "./pages/appguide/baemin/SetPhone.jsx";
import Order from "./pages/appguide/baemin/Order.jsx";
import UseCoupon from "./pages/appguide/baemin/UseCoupon.jsx";
import Order1 from "./pages/appguide/baemin/Order1.jsx";
import Order2 from "./pages/appguide/baemin/Order2.jsx";
import Review from "./pages/appguide/baemin/Review.jsx";
import End from "./pages/appguide/baemin/End.jsx";
import Frame2 from "./pages/appguide/baemin/Frame2.jsx";

function AppBaemin() {
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
      case "/coupon":
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
      case "/13":
        title = "";
        metaDescription = "";
        break;
      case "/14":
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
    <AddressProvider>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/setaddress" element={<SetAddress />} />
        <Route path="/setaddress2" element={<SetAddress1 />} />
        <Route path="/main" element={<Main />} />
        <Route path="/storelist" element={<StoreList />} />
        <Route path="/sortlist" element={<SortList />} />
        <Route path="/menulist" element={<MenuList />} />
        <Route path="/13" element={<Frame11 />} />
        <Route path="/14" element={<Frame />} />
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
    </AddressProvider>
  );
}
export default AppBaemin