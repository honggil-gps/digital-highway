import { useState, useCallback } from "react";
import SingleOrSet from "./SingleOrSet";
import PortalPopup from "./PortalPopup";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [isComponentOpen, setComponentOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const openComponent = useCallback((menu) => {
    setComponentOpen(true);
    setSelectedItem(menu)
  }, []);

  const closeComponent = useCallback(() => {
    setComponentOpen(false);
  }, []);

  const SelectSet = useCallback((menu)=>{
    setSelectedItem(menu);
    console.log(selectedItem)
    navigate("/SelectSide_04", {state:{selectedItem:menu}});
  },[navigate, selectedItem]);

  return (
    <>
      <section className="section3">
        <img className="icon11" alt="" src="/@2x.png" />
        <p className="p44">메뉴</p>
        <img className="line1" src="/DeviceGuide/Kiosc/line1.png"/>
        <div className="menuframe">
          <div className="menu">
            <div className="div39" data-scroll-to="div3">
              <ul className="ul" onClick={()=>openComponent("베이컨토마토디럭스")}>
                <img
                  className="zpph5soiydoswqrblac-en9rwdppzi-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger1.png"
                />
                <p className="p45">베이컨토마토디럭스</p>
                <p className="kcal">542kcal</p>
                <p className="p46">￦5,800</p>
              </ul>
              <ul className="ul1" onClick={()=>openComponent("햄버거")}>
                <img
                  className="fvj4a6klki3ofoh8qdlz-ik7lau7mw-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger3.png"
                />
                <p className="p47">햄버거</p>
                <p className="kcal1">259kcal</p>
                <p className="p48">￦2,500</p>
              </ul>
              <ul className="ul2" onClick={()=>openComponent("슈비버거")}>
                <img
                  className="gtsjfh-czvksa2qe7kf7ejf2vrhjqz-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger2.png"
                />
                <p className="p49">￦5,800</p>
                <p className="kcal2">548kcal</p>
                <p className="p50">슈비버거</p>
              </ul>
              <ul className="ul3" onClick={()=>openComponent("에그불고기버거")}>
                <img
                  className="gi9yxjm4c7a-5wawetfoncpnjkxwrj-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger4.png"
                />
                <p className="p51">에그불고기버거</p>
                <p className="kcal3">467kcal</p>
                <p className="p52">￦3,900</p>
              </ul>
            </div>
            <div className="div40" data-scroll-to="div">
              <ul className="ul4" onClick={()=>SelectSet("맥치킨")}>
                <p className="kcal4">847kcal</p>
                <p className="p53">￦5,000</p>
                <p className="p54">맥치킨 세트</p>
                <img
                  className="b-removebg-preview-1-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/set1.png"
                />
              </ul>
              <ul className="ul5" onClick={()=>SelectSet("슈슈버거")}>
                <p className="kcal5">732kcal</p>
                <p className="p55">￦6,000</p>
                <p className="p56">슈슈버거 세트</p>
                <img
                  className="b-removebg-preview-1-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/set3.png"
                />
              </ul>
              <ul className="ul6" onClick={()=>SelectSet("1955버거")}>
                <p className="p57">￦7,500</p>
                <p className="p58">1955버거 세트</p>
                <img
                  className="b-removebg-preview-1-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/set2.png"
                />
                <p className="kcal6">894kcal</p>
              </ul>
              <ul className="ul7" onClick={()=>SelectSet("더블불고기버거")}>
                <p className="kcal7">959kcal</p>
                <p className="p59">￦6,000</p>
                <p className="p60">더블불고기버거 세트</p>
                <img
                  className="b-removebg-preview-1-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/set4.png"
                />
              </ul>
            </div>
            <div className="div40" data-scroll-to="div1">
              <button className="button29">
                <img
                  className="unnamed-1-icon1"
                  alt=""
                  src="/DeviceGuide/Kiosc/side1.png"
                />
                <p className="kcal8">324kcal</p>
                <p className="p61">￦3,000</p>
                <p className="p62">후렌치 후라이</p>
              </button>
              <button className="button30">
                <img
                  className="mcdonalds-side-macwings-menu-0-icon1"
                  alt=""
                  src="/DeviceGuide/Kiosc/side3.png"
                />
                <p className="kcal9">197kcal</p>
                <p className="p63">￦3,400</p>
                <p className="p64">맥윙</p>
              </button>
              <button className="button31">
                <img
                  className="icon12"
                  alt=""
                  src="/DeviceGuide/Kiosc/side4.png"
                />
                <p className="kcal10">467kcal</p>
                <p className="p65">￦3,400</p>
                <p className="p66">애플파이</p>
              </button>
              <button className="button32">
                <img
                  className="removebg-preview-1-icon3"
                  alt=""
                  src="/DeviceGuide/Kiosc/side2.png"
                />
                <p className="kcal11">165kcal</p>
                <p className="p67">￦2,500</p>
                <p className="p68">골든 모짜렐라 치즈스틱</p>
              </button>
            </div>
            <div className="div40" data-scroll-to="div2">
              <ul className="ul8">
                <p className="kcal12">133kcal</p>
                <p className="p69">￦1,700</p>
                <p className="p70">탄산음료</p>
                <img
                  className="png-clipart-fizzy-drinks-coca-icon1"
                  alt=""
                  src="/DeviceGuide/Kiosc/drink1.png"
                />
              </ul>
              <ul className="ul9">
                <p className="kcal13">236kcal</p>
                <p className="p71">￦2,200</p>
                <p className="p72">오렌지주스</p>
                <img className="image-3-icon1" alt="" src="/DeviceGuide/Kiosc/drink2.png" />
              </ul>
              <ul className="ul10">
                <p className="kcal14">12kcal</p>
                <p className="p73">￦2,600</p>
                <p className="p74">아메리카노</p>
                <img className="image-2-icon1" alt="" src="/DeviceGuide/Kiosc/drink3.png" />
              </ul>
            </div>
          </div>
        </div>
      </section>
      {isComponentOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeComponent}
          // selectedItem={selectedItem}
        >
          <SingleOrSet onClose={closeComponent} selectedItem={selectedItem}/>
        </PortalPopup>
      )}
    </>
  );
};

export default Menu;
