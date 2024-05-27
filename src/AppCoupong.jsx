import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Start from "./pages/appguide/coupang/Start";
import BeforeLogin from "./pages/appguide/coupang/BeforeLogin";
import Login from "./pages/appguide/coupang/Login";
import Join from "./pages/appguide/coupang/Join";
import CheckBox from "./pages/appguide/coupang/CheckBox";
import Main from "./pages/appguide/coupang/Main";
import Category from "./pages/appguide/coupang/Category";
import FruitCategory from "./pages/appguide/coupang/FruitCategory";
import Product from "./pages/appguide/coupang/Product";
import Cart from "./pages/appguide/coupang/Cart";
import DeleteProduct from "./pages/appguide/coupang/DeleteProduct";
import Order from "./pages/appguide/coupang/Order";
import Delivery from "./pages/appguide/coupang/Delivery";
import AddAddress from "./pages/appguide/coupang/AddAddress";
import DeliveryAddress from "./pages/appguide/coupang/DeliveryAddress";
import CompleteOrder from "./pages/appguide/coupang/CompleteOrder";
import End from "./pages/appguide/coupang/End";
import Certificate from "./pages/appguide/coupang/Certificate";

function AppCoupong() {
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
      case "/maincontents/coupong":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/beforelogin-2":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/login-3":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/join-4":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/checkbox":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/main-6":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/category-8":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/fruitcategory-9":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/product-10":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/cart-12":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/deleteproduct-13":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/order-14":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/delivery-15":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/addaddress-16":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/deliveryaddress-17":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/completeorder-18":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/end-19":
        title = "";
        metaDescription = "";
        break;
      case "/maincontents/certificate-7":
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
      <Route path="/maincontents/coupong" element={<Start />} />
      <Route path="/maincontents/beforelogin-2" element={<BeforeLogin />} />
      <Route path="/maincontents/login-3" element={<Login />} />
      <Route path="/maincontents/join-4" element={<Join />} />
      <Route path="/maincontents/checkbox" element={<CheckBox />} />
      <Route path="/maincontents/main-6" element={<Main />} />
      <Route path="/maincontents/category-8" element={<Category />} />
      <Route path="/maincontents/fruitcategory-9" element={<FruitCategory />} />
      <Route path="/maincontents/product-10" element={<Product />} />
      <Route path="/maincontents/cart-12" element={<Cart />} />
      <Route path="/maincontents/deleteproduct-13" element={<DeleteProduct />} />
      <Route path="/maincontents/order-14" element={<Order />} />
      <Route path="/maincontents/delivery-15" element={<Delivery />} />
      <Route path="/maincontents/addaddress-16" element={<AddAddress />} />
      <Route path="/maincontents/deliveryaddress-17" element={<DeliveryAddress />} />
      <Route path="/maincontents/completeorder-18" element={<CompleteOrder />} />
      <Route path="/maincontents/end-19" element={<End />} />
      <Route path="/maincontents/certificate-7" element={<Certificate />} />
    </Routes>
  );
}
export default AppCoupong;
