import { useCallback, useState } from "react";
import "./MenuButtons.css";

const MenuButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='div3']");
    setActiveButton('kiosc_button25');
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    setActiveButton('kiosc_button26');
    const anchor = document.querySelector("[data-scroll-to='div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    setActiveButton('kiosc_button27');
    const anchor = document.querySelector("[data-scroll-to='div2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  const onButton3Click = useCallback(() => {
    setActiveButton('kiosc_button28');
    const anchor = document.querySelector("[data-scroll-to='div1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="kiosc_section1">
      <h1 className="kiosc_w2">W</h1>
      <section className="kiosc_section2">
        <button className={`kiosc_button25 ${activeButton === 'kiosc_button25' ? 'active' : ''}`} onClick={onButtonClick}>
          <p className="kiosc_p40">추천메뉴</p>
        </button>
        <button className={`kiosc_button26 ${activeButton === 'kiosc_button26' ? 'active' : ''}`} onClick={onButton1Click}>
          <p className="kiosc_p41">버거&세트</p>
        </button>
        <button className={`kiosc_button27 ${activeButton === 'kiosc_button27' ? 'active' : ''}`} onClick={onButton2Click}>
          <p className="kiosc_p42">음료</p>
        </button>
        <button className={`kiosc_button28 ${activeButton === 'kiosc_button28' ? 'active' : ''}`} onClick={onButton3Click}>
          <p className="kiosc_p43">스낵&사이드</p>
        </button>
      </section>
    </section>
  );
};

export default MenuButtons;
