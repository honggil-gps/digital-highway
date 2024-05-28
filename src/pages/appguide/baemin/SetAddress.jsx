import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import "./SetAddress.css";

const SetAddress = () => {
  const navigate = useNavigate();
  const { baseAddress, setBaseAddress } = useAddress(); // 전역 주소 상태 사용

  const onButtonFrameClick = useCallback(() => {
    if (baseAddress) {
      navigate("/maincontents/setaddress2", { state: { baseAddress } }); // 주소를 다음 페이지로 전달
    } else {
      alert("주소를 입력해주세요.");
    }
  }, [navigate, baseAddress, setBaseAddress]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("말왕족발을 시켜봅시다", "배달받고 싶은 주소로 \n [부경대학교 창의관]을 \n 입력해주세요", "배달받고 싶은 주소의 \n 상세주소를 [303호]로 \n 입력해주세요.")},[])
  
  return (
    <div className="baeman-setaddress">
      <div className="baeman-div24">
        <span className="baeman-txt2">
          <p className="baeman-p48">배달 받을 주소를</p>
          <p className="baeman-p48">설정해주세요</p>
        </span>
      </div>
      <div className="baeman-component-33">
        <div className="baeman-component-33-child" />
        <img
          className="baeman-search-icon"
          alt=""
          src="/appguide/baemin/search@2x.png"
        />
        <input
          className="baeman-component-33-inner"
          placeholder="배달 받을 주소를 입력하세요"
          type="text"
          value={baseAddress}
          onChange={e => setBaseAddress(e.target.value)}
        /> 
      </div>
      <div className="baeman-button1">
        <div className="baeman-buttonframe1" onClick={onButtonFrameClick} />
        <div className="baeman-buttontext1" onClick={onButtonFrameClick}>완료</div>
      </div>
    </div>
  );
};

export default SetAddress;