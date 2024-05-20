import React, { useState, useEffect } from "react";
import "./TypingEffect.css";

function TypingEffect() {
  const [content, setContent] = useState("어디에나 있는 디지털, \n 여러분은 얼마나 알고계신가요?");
  const [displayText, setDisplayText] = useState("");
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (i < content.length) {
        let txt = content[i++];
        setDisplayText(prevText => prevText + (txt === "\n" ? "<br/>" : txt));
      } else {
        clearInterval(interval);
      }
    }, 200);
  
    return () => clearInterval(interval);
  }, [content]);

  return (
    <div className="text_box">
      <span className="text" dangerouslySetInnerHTML={{ __html: displayText }}></span>
      <span className="blink">|</span>
    </div>
  );
}

export default TypingEffect;