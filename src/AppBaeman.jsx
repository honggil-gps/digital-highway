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

function AppBaeman() {
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
      case "/maincontents/baeman":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/coupon":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/setaddress":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/setaddress2":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/main":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/storelist":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/sortlist":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/menulist":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/13":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/14":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/cart":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/request":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/setphone":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/order":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/usecoupon":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/order3":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/order4":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/review":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/end":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/11":
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
        <Route path="/maincontents/baeman" element={<Start />} />
        <Route path="/maincontents/coupon" element={<Coupon />} />
        <Route path="/maincontents/setaddress" element={<SetAddress />} />
        <Route path="/maincontents/setaddress2" element={<SetAddress1 />} />
        <Route path="/maincontents/main" element={<Main />} />
        <Route path="/maincontents/storelist" element={<StoreList />} />
        <Route path="/maincontents/sortlist" element={<SortList />} />
        <Route path="/maincontents/menulist" element={<MenuList />} />
        <Route path="/maincontents/13" element={<Frame11 />} />
        <Route path="/maincontents/14" element={<Frame />} />
        <Route path="/maincontents/cart" element={<Cart />} />
        <Route path="/maincontents/request" element={<Request1 />} />
        <Route path="/maincontents/setphone" element={<SetPhone />} />
        <Route path="/maincontents/order" element={<Order />} />
        <Route path="/maincontents/usecoupon" element={<UseCoupon />} />
        <Route path="/maincontents/order3" element={<Order1 />} />
        <Route path="/maincontents/order4" element={<Order2 />} />
        <Route path="/maincontents/review" element={<Review />} />
        <Route path="/maincontents/end" element={<End />} />
        <Route path="/maincontents/11" element={<Frame2 />} />
      </Routes>
    </AddressProvider>
  );
}
export default AppBaeman