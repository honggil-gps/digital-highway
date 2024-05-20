import { useState } from "react";
import "./Keypad.css";

const Keypad = ({setEnteredBarcode}) => {
  const [inputNum, setInputNum] = useState('');

  const addInput = (num) => {
    const newinput = inputNum + num;
    console.log(newinput)
    setInputNum(newinput);
    setEnteredBarcode(newinput)
    // setInputNum(prevNum => prevNum + num);
    
  }

  const deleteInput = () => {
    setInputNum(prevNum => prevNum.slice(0,-1));
  };

  return (
    <div className="keypad">
      <input className="input" type="text" value={inputNum} readOnly/>
      <button className="button1" onClick={()=>addInput('1')}>
        <div className="child17" />
        <div className="div24">1</div>
      </button>
      <button className="div25" onClick={()=>addInput('4')}>
        <div className="child17" />
        <div className="div26">4</div>
      </button>
      <button className="button20" onClick={()=>addInput('7')}>
        <div className="child17" />
        <div className="div27">7</div>
      </button>
      <button className="button21" onClick={()=>addInput('2')}>
        <div className="child17" />
        <div className="div28">2</div>
      </button>
      <button className="div29" onClick={()=>addInput('5')}>
        <div className="child17" />
        <div className="div30">5</div>
      </button>
      <button className="div31" onClick={()=>addInput('8')}>
        <div className="child17" />
        <div className="div32">8</div>
      </button>
      <button className="button22" onClick={()=>addInput('3')}>
        <div className="child17" />
        <div className="div33">3</div>
      </button>
      <button className="div34" onClick={()=>addInput('6')}>
        <div className="child17" />
        <div className="div35">6</div>
      </button>
      <button className="div36" onClick={deleteInput}>
        <div className="child17" />
        <img
          className="radix-iconsarrow-up"
          alt=""
          src="/DeviceGuide/Kiosc/delete.png"
        />
      </button>
      <button className="button23" onClick={()=>addInput('0')}>
        <div className="child17" />
        <div className="div37">0</div>
      </button>
      <button className="button24" onClick={()=>addInput('9')}>
        <div className="child17" />
        <div className="div38">9</div>
      </button>

    </div>
  );
};

export default Keypad;
