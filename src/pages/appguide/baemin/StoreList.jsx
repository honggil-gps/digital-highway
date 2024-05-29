import { useEffect } from "react";
import ListHeader from "../../../components/appguide/baemin/ListHeader1";
import "./StoreList.css";

const StoreList = () => {

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("배달앱의 메인화면입니다. 여기서는 원하는 메뉴를 선택하거나 검색할 수 있습니다. 족발/보쌈을 선택해주세요.","선택한 메뉴의 가게들이 \n 기본순으로 정렬된 화면입니다. \n 정렬을 눌러 별점 높은순으로 \n 살펴보세요", "말왕족발을 선택해주세요.")},[])
  
  return (
    <div className="baeman-storelist">
      <div className="baeman-baekgyongstore">
        <div className="baeman-storelistframe3" />
        <div className="baeman-storename3">백경족발 부경점</div>
        <div className="baeman-starrate3">
          <img
            className="baeman-star-icon21"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div188">4.5</div>
        </div>
        <div className="baeman-storeimg3">
          <img
            className="baeman-baekgyong-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-132@2x.png"
          />
          <img
            className="baeman-baekgyong-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-142@2x.png"
          />
          <img
            className="baeman-baekgyong-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-152@2x.png"
          />
        </div>
      </div>
      <div className="baeman-pugyongstore">
        <div className="baeman-storelistframe3" />
        <div className="baeman-storename3">뿌공족발 부경점</div>
        <div className="baeman-starrate3">
          <img
            className="baeman-star-icon21"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div188">4.7</div>
        </div>
        <div className="baeman-storeimg3">
          <img
            className="baeman-baekgyong-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-131@2x.png"
          />
          <img
            className="baeman-baekgyong-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-141@2x.png"
          />
          <img
            className="baeman-baekgyong-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-151@2x.png"
          />
        </div>
      </div>
      <div className="baeman-mimistore">
        <div className="baeman-storelistframe3" />
        <div className="baeman-storename3">미미족발 부경점</div>
        <div className="baeman-starrate3">
          <img
            className="baeman-star-icon21"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div188">4.7</div>
        </div>
        <div className="baeman-storeimg3">
          <img
            className="baeman-baekgyong-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-13@2x.png"
          />
          <img
            className="baeman-baekgyong-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-14@2x.png"
          />
          <img
            className="baeman-baekgyong-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-15@2x.png"
          />
        </div>
      </div>
      <ListHeader />
    </div>
  );
};

export default StoreList;
