import { useState } from "react";
import "./Keypad.css";

const Keypad = ({ setEnteredBarcode }) => {
  const [inputNum, setInputNum] = useState('');

  const addInput = (num) => {
    const newInput = inputNum + num;
    setInputNum(newInput);
    setEnteredBarcode(newInput);
  };

  const deleteInput = () => {
    setInputNum(prevNum => prevNum.slice(0, -1));
  };

  return (
    <div className="kiosc_keypad">
      <input className="kiosc_input" type="text" value={inputNum} readOnly />
      <button className="kiosc_button1" onClick={() => addInput('1')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div24">1</div>
      </button>
      <button className="kiosc_div25" onClick={() => addInput('4')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div26">4</div>
      </button>
      <button className="kiosc_button20" onClick={() => addInput('7')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div27">7</div>
      </button>
      <button className="kiosc_button21" onClick={() => addInput('2')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div28">2</div>
      </button>
      <button className="kiosc_div29" onClick={() => addInput('5')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div30">5</div>
      </button>
      <button className="kiosc_div31" onClick={() => addInput('8')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div32">8</div>
      </button>
      <button className="kiosc_button22" onClick={() => addInput('3')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div33">3</div>
      </button>
      <button className="kiosc_div34" onClick={() => addInput('6')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div35">6</div>
      </button>
      <button className="kiosc_div36" onClick={deleteInput}>
        <div className="kiosc_child17" />
        <img
          className="kiosc_radix-iconsarrow-up"
          alt=""
          src="/DeviceGuide/Kiosc/delete.png"
        />
      </button>
      <button className="kiosc_button23" onClick={() => addInput('0')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div37">0</div>
      </button>
      <button className="kiosc_button24" onClick={() => addInput('9')}>
        <div className="kiosc_child17" />
        <div className="kiosc_div38">9</div>
      </button>
    </div>
  );
};

export default Keypad;
