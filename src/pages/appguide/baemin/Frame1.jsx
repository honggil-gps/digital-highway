import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame1.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onGroupContainer3Click = useCallback(() => {
    navigate("/maincontents/14");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("이제 음식을 주문해볼까요? \n 1+1족발세트를 시켜봅시다.","바베큐맛 중 사이즈를 고르고 \n 장바구니에 담아보세요.", "장바구니 보기 버튼을 눌러 \n 선택한 주문내역을 확인해보세요")},[])

  return (
    <div className="baeman-div61">
      <div className="baeman-child" />
      <div className="baeman-item" />
      <div className="baeman-div62">[무료배달이벤트] 1+1 족발세트</div>
      <div className="baeman-div63">맛 선택</div>
      <div className="baeman-div64">가격</div>
      <div className="baeman-div65">
        <p className="baeman-p57">34,900</p>
        <p className="baeman-p57">41,900</p>
        <p className="baeman-p57">48,900</p>
      </div>
      <div className="baeman-div66">
        <p className="baeman-p60">+0</p>
        <p className="baeman-p60">+2,000</p>
        <p className="baeman-p60">+2,000</p>
        <p className="baeman-p60">+2,000</p>
        <p className="baeman-p57">+2,500</p>
      </div>
      <div className="baeman-parent">
        <div className="baeman-div67">소</div>
        <div className="baeman-ellipse-div" />
      </div>
      <div className="baeman-group-parent">
        <div className="baeman-container">
          <div className="baeman-div68">중</div>
        </div>
        <input className="baeman-ellipse-input" type="radio" />
      </div>
      <div className="baeman-group">
        <div className="baeman-div67">대</div>
        <div className="baeman-group-child8" />
      </div>
      <div className="baeman-component-27">
        <div className="baeman-div70">기본</div>
        <div className="baeman-component-27-child" />
      </div>
      <div className="baeman-component-28">
        <div className="baeman-div70">간장맛</div>
        <div className="baeman-component-27-child" />
      </div>
      <div className="baeman-component-29">
        <div className="baeman-div70">바베큐맛</div>
        <input className="baeman-component-29-child" type="radio" />
      </div>
      <div className="baeman-component-30">
        <div className="baeman-div70">매운맛</div>
        <div className="baeman-component-27-child" />
      </div>
      <div className="baeman-component-31">
        <div className="baeman-div70">마늘맛</div>
        <div className="baeman-component-27-child" />
      </div>
      <div className="baeman-inner" />
      <div className="baeman-div75">15,000원</div>
      <div className="baeman-div76">배달최소주문금액</div>
      <div className="baeman-rectangle-parent18" onClick={onGroupContainer3Click}>
        <div className="baeman-group-child9" />
        <div className="baeman-div77">장바구니 담기</div>
      </div>
      <img
        className="baeman-image-3-icon"
        alt=""
        src="/appguide/baemin/image-3@2x.png"
      />
    </div>
  );
};

export default Frame11;
