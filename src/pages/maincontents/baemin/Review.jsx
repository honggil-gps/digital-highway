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
      <div className="wrapper3" onClick={onGroupContainerClick}>
        <div className="div175">뒤로가기</div>
      </div>
      <div className="div176">리뷰</div>
      <div className="review-child" />
      <div className="div177">최근 리뷰 15개</div>
      <div className="rectangle-parent22">
        <div className="group-child19" />
        <div className="div178">최신순</div>
      </div>
      <div className="rectangle-parent23">
        <div className="group-child20" />
        <div className="div179">사진리뷰만 보기</div>
      </div>
      <div className="rectangle-parent24">
        <div className="group-child21" />
        <img className="ellipse-icon" alt="" src="/ellipse-8@2x.png" />
        <div className="div180">레몬나르고빚갚으리오</div>
        <div className="star-parent">
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
        </div>
        <div className="div181">
          <p className="p87">빚 안갚고 이것만 시켜먹고 싶어요</p>
          <p className="p87">
            양도 많은데 족발자체가 너무 부드럽고 살살녹습니다
          </p>
        </div>
        <img className="group-child22" alt="" src="/rectangle-50@2x.png" />
        <div className="group-child23" />
        <div className="div182">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="rectangle-parent25">
        <div className="group-child24" />
        <img className="ellipse-icon" alt="" src="/ellipse-9@2x.png" />
        <div className="div180">맛있으면 짖는 개</div>
        <div className="star-parent">
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
        </div>
        <div className="div184">월월우ㅜ어루어루얼얼</div>
        <img className="group-child26" alt="" src="/rectangle-53@2x.png" />
        <div className="group-child27" />
        <div className="div185">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="rectangle-parent26">
        <div className="group-child24" />
        <img className="ellipse-icon" alt="" src="/ellipse-10@2x.png" />
        <div className="div180">냥냥한하루</div>
        <div className="star-parent">
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
          <img className="star-icon8" alt="" src="/star@2x.png" />
        </div>
        <div className="div184">고기가 야들야들하니 부드럽고 맛있어용</div>
        <img className="group-child26" alt="" src="/rectangle-56@2x.png" />
        <div className="group-child27" />
        <div className="div185">마늘보쌈</div>
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
