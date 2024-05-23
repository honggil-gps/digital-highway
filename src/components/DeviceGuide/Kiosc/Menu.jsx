import { useState, useCallback } from "react";
import SingleOrSet from "./SingleOrSet";
import PortalPopup from "./PortalPopup";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    navigate("/DeviceGuide/Kiosc/SelectSide_04", {state:{selectedItem:menu}});
  },[navigate, selectedItem]);

  const SelectSide = useCallback(async (menu) => {
    let itemprice = 0;
    switch (menu) {
      case "후렌치후라이":
        itemprice = 3000;
        break;
      case "치즈스틱":
        itemprice = 2500;
        break;
      case "맥윙":
        itemprice = 3400;
        break;
      case "애플파이":
        itemprice = 3400;
        break;
      default:
        itemprice = 0;
        break;
    }
  
    setSelectedItem(menu);
  
    try {
      const response = await axios.post('http://localhost:4000/devices/kiosc_03', {
        userID: "test",
        orders: [{
          side: menu,
          ea: 1,
          price: itemprice
        }]
      });
      navigate(0);
    } catch (error) {
      console.log(error);
    }
    
  }, [navigate, setSelectedItem]);

  const SelectDrink = useCallback(async (menu) => {
    let itemprice = 0;
    switch (menu) {
      case "탄산음료":
        itemprice = 1700;
        break;
      case "오렌지주스":
        itemprice = 2200;
        break;
      case "아메리카노":
        itemprice = 2600;
        break;
      default:
        itemprice = 0;
        break;
    }
  
    setSelectedItem(menu);
  
    try {
      const response = await axios.post('http://localhost:4000/devices/kiosc_03', {
        userID: "test",
        orders: [{
          drink: menu,
          ea: 1,
          price: itemprice
        }]
      });
      navigate(0);
    } catch (error) {
      console.log(error);
    }
    
  }, [navigate, setSelectedItem]);

  return (
    <>
      <section className="kiosc_section3">
        <img className="kiosc_icon11" alt="" src="/@2x.png" />
        <p className="kiosc_p44">메뉴</p>
        <img className="kiosc_line1" src="/DeviceGuide/Kiosc/line1.png"/>
        <div className="kiosc_menuframe">
          <div className="kiosc_menu">
            <div className="kiosc_div39" data-scroll-to="div3">
              <ul className="kiosc_ul" onClick={()=>openComponent("베이컨토마토디럭스")}>
                <img
                  className="kiosc_zpph5soiydoswqrblac-en9rwdppzi-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger1.png"
                />
                <p className="kiosc_p45">베이컨토마토디럭스</p>
                <p className="kiosc_kcal">542kcal</p>
                <p className="kiosc_p46">￦5,800</p>
              </ul>
              <ul className="kiosc_ul1" onClick={()=>openComponent("햄버거")}>
                <img
                  className="kiosc_fvj4a6klki3ofoh8qdlz-ik7lau7mw-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger3.png"
                />
                <p className="kiosc_p47">햄버거</p>
                <p className="kiosc_kcal1">259kcal</p>
                <p className="kiosc_p48">￦2,500</p>
              </ul>
              <ul className="kiosc_ul2" onClick={()=>openComponent("슈비버거")}>
                <img
                  className="kiosc_gtsjfh-czvksa2qe7kf7ejf2vrhjqz-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger2.png"
                />
                <p className="kiosc_p49">￦5,800</p>
                <p className="kiosc_kcal2">548kcal</p>
                <p className="kiosc_p50">슈비버거</p>
              </ul>
              <ul className="kiosc_ul3" onClick={()=>openComponent("에그불고기버거")}>
                <img
                  className="kiosc_gi9yxjm4c7a-5wawetfoncpnjkxwrj-icon"
                  alt=""
                  src="/DeviceGuide/Kiosc/burger4.png"
                />
                <p className="kiosc_p51">에그불고기버거</p>
                <p className="kiosc_kcal3">467kcal</p>
                <p className="kiosc_p52">￦3,900</p>
              </ul>
            </div>
              <div className="kiosc_div40" data-scroll-to="div">
                <ul className="kiosc_ul4" onClick={()=>SelectSet("맥치킨")}>
                  <p className="kiosc_kcal4">847kcal</p>
                  <p className="kiosc_p53">￦5,000</p>
                  <p className="kiosc_p54">맥치킨 세트</p>
                  <img
                    className="kiosc_b-removebg-preview-1-icon"
                    alt=""
                    src="/DeviceGuide/Kiosc/set1.png"
                  />
                </ul>
                <ul className="kiosc_ul5" onClick={()=>SelectSet("슈슈버거")}>
                  <p className="kiosc_kcal5">732kcal</p>
                  <p className="kiosc_p55">￦6,000</p>
                  <p className="kiosc_p56">슈슈버거 세트</p>
                  <img
                    className="kiosc_b-removebg-preview-1-icon"
                    alt=""
                    src="/DeviceGuide/Kiosc/set3.png"
                  />
                </ul>
                <ul className="kiosc_ul6" onClick={()=>SelectSet("1955버거")}>
                  <p className="kiosc_p57">￦7,500</p>
                  <p className="kiosc_p58">1955버거 세트</p>
                  <img
                    className="kiosc_b-removebg-preview-1-icon"
                    alt=""
                    src="/DeviceGuide/Kiosc/set2.png"
                  />
                <p className="kiosc_kcal6">894kcal</p>
                </ul>
                <ul className="kiosc_ul7" onClick={()=>SelectSet("더블불고기버거")}>
                  <p className="kiosc_kcal7">959kcal</p>
                  <p className="kiosc_p59">￦6,000</p>
                  <p className="kiosc_p60">더블불고기버거 세트</p>
                  <img
                    className="kiosc_b-removebg-preview-1-icon"
                    alt=""
                    src="/DeviceGuide/Kiosc/set4.png"
                  />
                </ul>
              </div>
              <div className="kiosc_div40" data-scroll-to="div1">
                <button className="kiosc_button29" onClick={()=>SelectSide("후렌치후라이")}>
                  <img
                    className="kiosc_unnamed-1-icon1"
                    alt=""
                    src="/DeviceGuide/Kiosc/side1.png"
                  />
                  <p className="kiosc_kcal8">324kcal</p>
                  <p className="kiosc_p61">￦3,000</p>
                  <p className="kiosc_p62">후렌치 후라이</p>
                </button>
                <button className="kiosc_button30" onClick={()=>SelectSide("맥윙")}>
                  <img
                    className="kiosc_mcdonalds-side-macwings-menu-0-icon1"
                    alt=""
                    src="/DeviceGuide/Kiosc/side3.png"
                  />
                  <p className="kiosc_kcal9">197kcal</p>
                  <p className="kiosc_p63">￦3,400</p>
                  <p className="kiosc_p64">맥윙</p>
                </button>
                <button className="kiosc_button31" onClick={()=>SelectSide("애플파이")}>
                  <img
                    className="kiosc_icon12"
                    alt=""
                    src="/DeviceGuide/Kiosc/side4.png"
                  />
                  <p className="kiosc_kcal10">467kcal</p>
                  <p className="kiosc_p65">￦3,400</p>
                  <p className="kiosc_p66">애플파이</p>
                </button>
                <button className="kiosc_button32" onClick={()=>SelectSide("치즈스틱")}>
                  <img
                    className="kiosc_removebg-preview-1-icon3"
                    alt=""
                    src="/DeviceGuide/Kiosc/side2.png"
                  />
                  <p className="kiosc_kcal11">165kcal</p>
                  <p className="kiosc_p67">￦2,500</p>
                  <p className="kiosc_p68">골든 모짜렐라 치즈스틱</p>
                </button>
              </div>
              <div className="kiosc_div40" data-scroll-to="div2">
                <ul className="kiosc_ul8" onClick={()=>SelectDrink("탄산음료")}>
                  <p className="kiosc_kcal12">133kcal</p>
                  <p className="kiosc_p69">￦1,700</p>
                  <p className="kiosc_p70">탄산음료</p>
                  <img
                    className="kiosc_png-clipart-fizzy-drinks-coca-icon1"
                    alt=""
                    src="/DeviceGuide/Kiosc/drink1.png"
                  />
                </ul>
                <ul className="kiosc_ul9" onClick={()=>SelectDrink("오렌지주스")}>
                  <p className="kiosc_kcal13">236kcal</p>
                  <p className="kiosc_p71">￦2,200</p>
                  <p className="kiosc_p72">오렌지주스</p>
                  <img className="kiosc_image-3-icon1" alt="" src="/DeviceGuide/Kiosc/drink2.png" />
                </ul>
                <ul className="kiosc_ul10" onClick={()=>SelectDrink("아메리카노")}>
                  <p className="kiosc_kcal14">12kcal</p>
                  <p className="kiosc_p73">￦2,600</p>
                  <p className="kiosc_p74">아메리카노</p>
                  <img className="kiosc_image-2-icon1" alt="" src="/DeviceGuide/Kiosc/drink3.png" />
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
