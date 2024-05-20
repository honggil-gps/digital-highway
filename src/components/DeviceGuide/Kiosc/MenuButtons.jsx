import { useCallback, useState } from "react";
import "./MenuButtons.css";

const MenuButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='div3']");
    setActiveButton('button25')
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    setActiveButton('button26')
    const anchor = document.querySelector("[data-scroll-to='div']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    setActiveButton('button27')
    const anchor = document.querySelector("[data-scroll-to='div2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton3Click = useCallback(() => {
    setActiveButton('button28')
    const anchor = document.querySelector("[data-scroll-to='div1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="section1">
      <h1 className="w2">W</h1>
      <section className="section2">
        <button className={`button25 ${activeButton === 'button25' ? 'active' : ''}`} onClick={onButtonClick}>
          <p className="p40">추천메뉴</p>
        </button>
        <button className={`button26 ${activeButton === 'button26' ? 'active' : ''}`} onClick={onButton1Click}>
          <p className="p41">버거&세트</p>
        </button>
        <button className={`button27 ${activeButton === 'button27' ? 'active' : ''}`} onClick={onButton2Click}>
          <p className="p42">음료</p>
        </button>
        <button className={`button28 ${activeButton === 'button28' ? 'active' : ''}`} onClick={onButton3Click}>
          <p className="p43">스낵&사이드</p>
        </button>
      </section>
    </section>
  );
};

export default MenuButtons;
