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
        <div className="div166">뒤로가기</div>
      </div>
      <div className="div167">리뷰</div>
      <div className="review-child" />
      <div className="div168">최근 리뷰 15개</div>
      <div className="rectangle-parent38">
        <div className="group-child24" />
        <div className="div169">최신순</div>
      </div>
      <div className="rectangle-parent39">
        <div className="group-child25" />
        <div className="div170">사진리뷰만 보기</div>
      </div>
      <div className="rectangle-parent40">
        <div className="group-child26" />
        <img
          className="ellipse-icon"
          alt=""
          src="/appguide/baemin/ellipse-8@2x.png"
        />
        <div className="div171">레몬나르고빚갚으리오</div>
        <div className="star-parent">
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
        </div>
        <div className="div172">
          <p className="p135">빚 안갚고 이것만 시켜먹고 싶어요</p>
          <p className="p135">
            양도 많은데 족발자체가 너무 부드럽고 살살녹습니다
          </p>
        </div>
        <img
          className="group-child27"
          alt=""
          src="/appguide/baemin/rectangle-50@2x.png"
        />
        <div className="group-child28" />
        <div className="div173">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="rectangle-parent41">
        <div className="group-child29" />
        <img
          className="ellipse-icon"
          alt=""
          src="/appguide/baemin/ellipse-9@2x.png"
        />
        <div className="div171">맛있으면 짖는 개</div>
        <div className="star-parent">
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
        </div>
        <div className="div175">월월우ㅜ어루어루얼얼</div>
        <img
          className="group-child31"
          alt=""
          src="/appguide/baemin/rectangle-53@2x.png"
        />
        <div className="group-child32" />
        <div className="div176">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="rectangle-parent42">
        <div className="group-child29" />
        <img
          className="ellipse-icon"
          alt=""
          src="/appguide/baemin/ellipse-10@2x.png"
        />
        <div className="div171">냥냥한하루</div>
        <div className="star-parent">
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
        </div>
        <div className="div175">고기가 야들야들하니 부드럽고 맛있어용</div>
        <img
          className="group-child31"
          alt=""
          src="/appguide/baemin/rectangle-56@2x.png"
        />
        <div className="group-child32" />
        <div className="div176">마늘보쌈</div>
      </div>
      <img
        className="slr-camera-icon"
        alt=""
        src="/appguide/baemin/slr-camera@2x.png"
      />
      <div className="down-arrow-parent">
        <img
          className="down-arrow-icon"
          alt=""
          src="/appguide/baemin/down-arrow@2x.png"
        />
        <img
          className="up-arrow-icon"
          alt=""
          src="/appguide/baemin/up-arrow@2x.png"
        />
      </div>
    </div>
  );
};

export default Review;
