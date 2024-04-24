import { useMemo } from "react";
import CreditCard from "./CreditCard";
import "./PaymentMethod.css";

const PaymentMethod = ({ t, propTop, propLeft, propTextAlign }) => {
  const divStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const tStyle = useMemo(() => {
    return {
      left: propLeft,
      textAlign: propTextAlign,
    };
  }, [propLeft, propTextAlign]);

  return (
    <div className="div46" style={divStyle}>
      <CreditCard />
      <b className="t1" style={tStyle}>
        {t}
      </b>
    </div>
  );
};

export default PaymentMethod;
