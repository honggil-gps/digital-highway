import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListHeader from "../../../components/appguide/baemin/ListHeader1";
import "./SortList.css";

const SortList = () => {
  const navigate = useNavigate();

  const onMalwangStoreContainerClick = useCallback(() => {
    navigate("/maincontents/menulist");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/maincontents/storelist");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("선택한 메뉴의 가게들이 \n 기본순으로 정렬된 화면입니다. \n 정렬을 눌러 별점 높은순으로 \n 살펴보세요", "말왕족발을 선택해주세요.", "선택한 가게의 화면입니다. \n [리뷰]를 눌러 다른 사람들이 \n 남긴 음식평을 보거나, \n [쿠폰받기]를 눌러 \n 주문 시 할인받을 수 있는 \n 쿠폰을 받아보세요.")},[])

  return (
    <div className="baeman-sortlist">
      <div className="baeman-malwangstore" onClick={onMalwangStoreContainerClick}>
        <div className="baeman-storelistframe3" />
        <div className="baeman-storename3">말왕족발 부경점</div>
        <div className="baeman-starrate3">
          <img
            className="baeman-star-icon4"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div36">5.0</div>
        </div>
        <div className="baeman-storeimg3">
          <img
            className="baeman-malwang-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-133@2x.png"
          />
          <img
            className="baeman-malwnag-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-14@2x.png"
          />
          <img
            className="baeman-malwang-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-15@2x.png"
          />
        </div>
      </div>
      <div className="baeman-civilstore">
        <div className="baeman-storelistframe3" />
        <div className="baeman-storename3">시민족발 부경점</div>
        <div className="baeman-starrate3">
          <img
            className="baeman-star-icon4"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div36">4.9</div>
        </div>
        <div className="baeman-storeimg3">
          <img
            className="baeman-malwang-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-134@2x.png"
          />
          <img
            className="baeman-malwnag-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-141@2x.png"
          />
          <img
            className="baeman-malwang-3-icon"
            alt=""
            src="/appguide/baemin/civilStore.png"
          />
        </div>
      </div>
      <div className="baeman-catstore">
        <div className="baeman-storelistframe3" />
        <div className="baeman-storename3">야웅족발 부경점</div>
        <div className="baeman-starrate3">
          <img
            className="baeman-star-icon4"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="baeman-div36">4.8</div>
        </div>
        <div className="baeman-storeimg3">
          <img
            className="baeman-malwang-1-icon"
            alt=""
            src="/appguide/baemin/cat3@2x.png"
          />
          <img
            className="baeman-malwnag-2-icon"
            alt=""
            src="/appguide/baemin/cat-2.png"
          />
          <img
            className="baeman-malwang-3-icon"
            alt=""
            src="/appguide/baemin/cat-3.png"
          />
        </div>
      </div>
      <ListHeader />
    </div>
  );
};

export default SortList;
