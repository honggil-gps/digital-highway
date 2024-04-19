import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/menulist");
  }, [navigate]);

  return (
    <div className="review">
      <div className="wrapper2" onClick={onGroupContainerClick}>
        <div className="div57">뒤로가기</div>
      </div>
      <div className="div58">리뷰</div>
      <div className="review-child" />
      <div className="div59">최근 리뷰 15개</div>
      <div className="rectangle-parent14">
        <div className="group-child" />
        <div className="div60">최신순</div>
      </div>
      <div className="rectangle-parent15">
        <div className="group-item" />
        <div className="div61">사진리뷰만 보기</div>
      </div>
      <div className="rectangle-parent16">
        <div className="group-inner" />
        <img className="ellipse-icon" alt="" src="/ellipse-8@2x.png" />
        <div className="div62">레몬나르고빚갚으리오</div>
        <div className="star-parent">
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
        </div>
        <div className="div63">
          <p className="p85">빚 안갚고 이것만 시켜먹고 싶어요</p>
          <p className="p85">
            양도 많은데 족발자체가 너무 부드럽고 살살녹습니다
          </p>
        </div>
        <img className="group-child1" alt="" src="/rectangle-50@2x.png" />
        <div className="group-child2" />
        <div className="div64">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="rectangle-parent17">
        <div className="group-child3" />
        <img className="ellipse-icon" alt="" src="/ellipse-9@2x.png" />
        <div className="div62">맛있으면 짖는 개</div>
        <div className="star-parent">
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
        </div>
        <div className="div66">월월우ㅜ어루어루얼얼</div>
        <img className="group-child5" alt="" src="/rectangle-53@2x.png" />
        <div className="group-child6" />
        <div className="div67">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="rectangle-parent18">
        <div className="group-child3" />
        <img className="ellipse-icon" alt="" src="/ellipse-10@2x.png" />
        <div className="div62">냥냥한하루</div>
        <div className="star-parent">
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
          <img className="star-icon2" alt="" src="/star@2x.png" />
        </div>
        <div className="div66">고기가 야들야들하니 부드럽고 맛있어용</div>
        <img className="group-child5" alt="" src="/rectangle-56@2x.png" />
        <div className="group-child6" />
        <div className="div67">마늘보쌈</div>
      </div>
      <img className="slr-camera-icon" alt="" src="/slr-camera@2x.png" />
      <div className="down-arrow-parent">
        <img className="down-arrow-icon" alt="" src="/down-arrow@2x.png" />
        <img className="up-arrow-icon" alt="" src="/up-arrow@2x.png" />
      </div>
    </div>
  );
};

export default Review;
