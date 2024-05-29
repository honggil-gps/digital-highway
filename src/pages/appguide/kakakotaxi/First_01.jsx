import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./First_01.css";

const Frame = () => {
  const navigate = useNavigate();

  const onFirst01ContainerClick = useCallback(() => {
    navigate("/maincontents/second-02");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/maincontents/second-02");
  }, [navigate]);

  function sendCaption(now ,next){
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("택시 앱 첫 화면입니다. \n [카카오계정으로 시작하기]를 \n 눌러주세요.", "택시를 이용하려면 \n 선불결제와 후불결제가 있습니다. \n 저희는 카드를 등록해서 \n 택시를 이용해보겠습니다. \n [추가정보입력]을 눌러주세요.")},[])

  return (
    <div className="kikio-first-01" onClick={onFirst01ContainerClick}>
      <div className="kikio-frame">
        <div className="kikio-frame1">
          <div className="kikio-div">
            <p className="kikio-p">{`안녕하세요 `}</p>
            <p className="kikio-p">키키오 택시입니다</p>
          </div>
          <img
            className="kikio-fa6-solidt-icon"
            alt=""
            src="/appguide/kakaotaxi/kikio.png"
          />
        </div>
      </div>
      <button className="kikio-button">
        <div className="kikio-child" onClick={onRectangleClick} />
        <div className="kikio-div1">키키오계정으로 시작하기</div>
      </button>
    </div>
  );
};

export default Frame;
