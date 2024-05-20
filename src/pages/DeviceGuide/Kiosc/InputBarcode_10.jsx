import { useCallback, useState, useEffect } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import Keypad from "../../../components/DeviceGuide/Kiosc/Keypad";
import { useNavigate } from "react-router-dom";
import "./InputBarcode.css";

const InputBarcode = () => {
  const navigate = useNavigate();
  const [enteredBarcode, setEnteredBarcode] = useState('');
  const [showError, setShowError] = useState(false);

  const savedBarcode = "40181700982"

  const onButton6Click = useCallback(() => {
    navigate("/GiftCard_09");
  }, [navigate]);

  const onButton7Click = useCallback(() => {
    console.log(enteredBarcode)
    console.log(savedBarcode)
    if (enteredBarcode === savedBarcode){
      navigate("/UseGC_11");
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000); // 3초 후에 showError 상태를 false로 변경하여 메시지를 숨깁니다.
    }
  }, [navigate, enteredBarcode, savedBarcode]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timer); // 컴포넌트가 unmount 되거나 상태가 변경될 때 타이머를 클리어합니다.
    }
  }, [showError]);


  return (
    <div className="inputbarcode-10">
      <Reader />
      <main className="monitor10">
        <p className="p12">
          <span className="span5">바코드 번호를</span>
          <span className="span5">입력해주세요</span>
        </p>
        <Keypad setEnteredBarcode={setEnteredBarcode}/>
        <button className="button6" onClick={onButton6Click}>
          <img className="child4" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="div8">이전</div>
        </button>
        <button className="button7" onClick={onButton7Click}>
          <img className="child4" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="div9">계속하기</div>
        </button>
      </main>
      <div className="div10">
        <img className="icon5" alt="" src="/DeviceGuide/Kiosc/giftbarcode.png" />
        <img className="icon6" alt="" src="/DeviceGuide/Kiosc/gifticon.png" />
        <img className="child6" alt="" src="/DeviceGuide/Kiosc/rectangle-32@2x.png" />
      </div>
      <div className={`error ${showError ? 'show':'hide'}`}>
            <span className="span20">유효하지 않은 코드입니다.</span>
            <span className="span20">바코드 코드를 다시 한번 확인해주세요.</span>
      </div>
    </div>
  );
};

export default InputBarcode;
