import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "./BottomFooter";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const onDivClick = useCallback(() => {
    navigate("/paymentmethod");
  }, [navigate]);

  return (
    <div className="frame13">
      <div className="div52">
        <div className="home-filled-parent">
          <img className="home-filled-icon" alt="" src="/home-filled.svg" />
          <div className="div53">홈</div>
        </div>
      </div>
      <BottomFooter bell="/bell@2x.png" prop="이용/알림" />
      <BottomFooter
        bell="/payment.svg"
        prop="결제수단"
        propOverflow="hidden"
        propLeft="unset"
        propWidth="4.688rem"
        onDiv2Click={onDivClick}
      />
    </div>
  );
};

export default Footer;
