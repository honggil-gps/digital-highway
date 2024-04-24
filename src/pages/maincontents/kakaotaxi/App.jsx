import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame91 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";
import Frame11 from "./pages/Frame11";
import Frame12 from "./pages/Frame12";
import Frame13 from "./pages/Frame13";

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
      case "/second":
        title = "";
        metaDescription = "";
        break;
      case "/paymentmethod":
        title = "";
        metaDescription = "";
        break;
      case "/cardadd":
        title = "";
        metaDescription = "";
        break;
      case "/cardinfo":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/8":
        title = "";
        metaDescription = "";
        break;
      case "/10":
        title = "";
        metaDescription = "";
        break;
      case "/11":
        title = "";
        metaDescription = "";
        break;
      case "/12":
        title = "";
        metaDescription = "";
        break;
      case "/13":
        title = "";
        metaDescription = "";
        break;
      case "/complete":
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
      <Route path="/" element={<Frame />} />
      <Route path="/second" element={<Frame1 />} />
      <Route path="/paymentmethod" element={<Frame2 />} />
      <Route path="/cardadd" element={<Frame3 />} />
      <Route path="/cardinfo" element={<Frame4 />} />
      <Route path="/7" element={<Frame6 />} />
      <Route path="/8" element={<Frame7 />} />
      <Route path="/10" element={<Frame91 />} />
      <Route path="/11" element={<Frame10 />} />
      <Route path="/12" element={<Frame11 />} />
      <Route path="/13" element={<Frame12 />} />
      <Route path="/complete" element={<Frame13 />} />
    </Routes>
  );
}
export default App;
