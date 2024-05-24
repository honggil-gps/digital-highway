import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/menulist");
  }, [navigate]);

  return (
    <div className="baeman-review">
      <div className="baeman-wrapper3" onClick={onGroupContainerClick}>
        <div className="baeman-div166">뒤로가기</div>
      </div>
      <div className="baeman-div167">리뷰</div>
      <div className="baeman-review-child" />
      <div className="baeman-div168">최근 리뷰 15개</div>
      <div className="baeman-rectangle-parent38">
        <div className="baeman-group-child24" />
        <div className="baeman-div169">최신순</div>
      </div>
      <div className="baeman-rectangle-parent39">
        <div className="baeman-group-child25" />
        <div className="baeman-div170">사진리뷰만 보기</div>
      </div>
      <div className="baeman-rectangle-parent40">
        <div className="baeman-group-child26" />
        <img
          className="baeman-ellipse-icon"
          alt=""
          src="/appguide/baemin/ellipse-8@2x.png"
        />
        <div className="baeman-div171">레몬나르고빚갚으리오</div>
        <div className="baeman-star-parent">
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
        </div>
        <div className="baeman-div172">
          <p className="baeman-p135">빚 안갚고 이것만 시켜먹고 싶어요</p>
          <p className="baeman-p135">
            양도 많은데 족발자체가 너무 부드럽고 살살녹습니다
          </p>
        </div>
        <img
          className="baeman-group-child27"
          alt=""
          src="/appguide/baemin/rectangle-50@2x.png"
        />
        <div className="baeman-group-child28" />
        <div className="baeman-div173">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="baeman-rectangle-parent41">
        <div className="baeman-group-child29" />
        <img
          className="baeman-ellipse-icon"
          alt=""
          src="/appguide/baemin/ellipse-9@2x.png"
        />
        <div className="baeman-div171">맛있으면 짖는 개</div>
        <div className="baeman-star-parent">
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
        </div>
        <div className="baeman-div175">월월우ㅜ어루어루얼얼</div>
        <img
          className="baeman-group-child31"
          alt=""
          src="/appguide/baemin/rectangle-53@2x.png"
        />
        <div className="baeman-group-child32" />
        <div className="baeman-div176">[무료배달이벤트] 1+1 족발세트</div>
      </div>
      <div className="baeman-rectangle-parent42">
        <div className="baeman-group-child29" />
        <img
          className="baeman-ellipse-icon"
          alt=""
          src="/appguide/baemin/ellipse-10@2x.png"
        />
        <div className="baeman-div171">냥냥한하루</div>
        <div className="baeman-star-parent">
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
          <img
            className="baeman-star-icon8"
            alt=""
            src="/appguide/baemin/star1@2x.png"
          />
        </div>
        <div className="baeman-div175">고기가 야들야들하니 부드럽고 맛있어용</div>
        <img
          className="baeman-group-child31"
          alt=""
          src="/appguide/baemin/rectangle-56@2x.png"
        />
        <div className="baeman-group-child32" />
        <div className="baeman-div176">마늘보쌈</div>
      </div>
      <img
        className="baeman-slr-camera-icon"
        alt=""
        src="/appguide/baemin/slr-camera@2x.png"
      />
      <div className="baeman-down-arrow-parent">
        <img
          className="baeman-down-arrow-icon"
          alt=""
          src="/appguide/baemin/down-arrow@2x.png"
        />
        <img
          className="baeman-up-arrow-icon"
          alt=""
          src="/appguide/baemin/up-arrow@2x.png"
        />
      </div>
    </div>
  );
};

export default Review;
