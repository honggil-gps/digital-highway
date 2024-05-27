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
    navigate("/DeviceGuide/Kiosc/GiftCard_09");
  }, [navigate]);

  const onButton7Click = useCallback(() => {
    console.log(enteredBarcode)
    console.log(savedBarcode)
    if (enteredBarcode === savedBarcode){
      navigate("/DeviceGuide/Kiosc/UseGC_11");
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

//해당 페이지에서 출력할 캡션 입력
function sendCaption(caption){
  const formattedCaption = caption.replace(/\n/g, "<br>");
  window.parent.postMessage({type:"navigate", caption: formattedCaption}, "*");
}
sendCaption("모바일 상품권의 바코드 아래 \n 적혀있는 번호를 입력해주세요.")
  return (
    <div className="kiosc_inputbarcode-10">
      <Reader />
      <main className="kiosc_monitor10">
        <p className="kiosc_p12">
          <span className="kiosc_span5">바코드 번호를</span>
          <span className="kiosc_span5">입력해주세요</span>
        </p>
        <Keypad setEnteredBarcode={setEnteredBarcode}/>
        <button className="kiosc_button6" onClick={onButton6Click}>
          <img className="kiosc_child4" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div8">이전</div>
        </button>
        <button className="kiosc_button7" onClick={onButton7Click}>
          <img className="kiosc_child4" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div9">계속하기</div>
        </button>
      </main>
      <div className="kiosc_div10">
        <img className="kiosc_icon5" alt="" src="/DeviceGuide/Kiosc/giftbarcode.png" />
        <img className="kiosc_icon6" alt="" src="/DeviceGuide/Kiosc/gifticon.png" />
        <img className="kiosc_child6" alt="" src="/DeviceGuide/Kiosc/rectangle-32@2x.png" />
      </div>
      <div className={`kiosc_error ${showError ? 'show':'hide'}`}>
            <span className="kiosc_span20">유효하지 않은 코드입니다.</span>
            <span className="kiosc_span20">바코드 코드를 다시 한번 확인해주세요.</span>
      </div>
    </div>
  );
};

export default InputBarcode;
