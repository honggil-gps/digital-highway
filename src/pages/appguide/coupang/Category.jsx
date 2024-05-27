import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const navigate = useNavigate();

  const toMainPage = useCallback(() => {
    navigate("/maincontents/main-6")
  }, [navigate])

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/fruitcategory-9");
  }, [navigate]);

  return (
    <div className="coupong-category-8">
      <div className="coupong-frame-container">
        <div className="coupong-rectangle-parent41">
          <div className="coupong-frame-child7" />
          <div className="coupong-div76">쿠퐁이츠 음식배달 배달비 무료</div>
          <div className="coupong-rectangle-parent42">
            <div className="coupong-group-child24" />
            <div className="coupong-group-child25" />
            <div className="coupong-group-child26" />
            <div className="coupong-group-child27" />
            <div className="coupong-group-child28" />
            <div className="coupong-group-child29" />
            <div className="coupong-div77">치킨</div>
            <div className="coupong-div78">버거</div>
            <div className="coupong-div79">찜/탕</div>
            <div className="coupong-div80">한식</div>
            <div className="coupong-div81">샌드위치</div>
            <div className="coupong-div82">분식</div>
            <img
              className="coupong-group-child30"
              alt=""
              src="/appguide/coupang/rectangle-151@2x.png"
            />
            <img
              className="coupong-group-child31"
              alt=""
              src="/appguide/coupang/rectangle-154@2x.png"
            />
            <img
              className="coupong-group-child32"
              alt=""
              src="/appguide/coupang/rectangle-155@2x.png"
            />
            <img
              className="coupong-group-child33"
              alt=""
              src="/appguide/coupang/rectangle-156@2x.png"
            />
            <img
              className="coupong-group-child34"
              alt=""
              src="/appguide/coupang/rectangle-152@2x.png"
            />
            <img
              className="coupong-group-child35"
              alt=""
              src="/appguide/coupang/rectangle-153@2x.png"
            />
          </div>
        </div>
        <div className="coupong-rectangle-parent43">
          <div className="coupong-group-child25" />
          <div className="coupong-group-child26" />
          <div className="coupong-group-child38" />
          <div className="coupong-group-child39" />
          <div className="coupong-group-child40" />
          <div className="coupong-group-child27" />
          <div className="coupong-group-child42" />
          <div className="coupong-group-child28" />
          <div className="coupong-group-child29" />
          <div className="coupong-div83">생활</div>
          <div className="coupong-div84">가구</div>
          <div className="coupong-div85">문구</div>
          <div className="coupong-div86">반려동물</div>
          <div className="coupong-div87">도서</div>
          <div className="coupong-div88">건강</div>
          <div className="coupong-div89">패션</div>
          <div className="coupong-div90">주방</div>
          <div className="coupong-div91">뷰티</div>
          <img
            className="coupong-solardumbbell-large-minimalis-icon"
            alt=""
            src="/appguide/coupang/solardumbbelllargeminimalisticboldduotone.svg"
          />
          <img
            className="coupong-notodog-icon"
            alt=""
            src="/appguide/coupang/notodog.svg"
          />
          <img
            className="coupong-twemojilipstick-icon"
            alt=""
            src="/appguide/coupang/twemojilipstick.svg"
          />
          <img
            className="coupong-fluent-emojikitchen-knife-icon"
            alt=""
            src="/appguide/coupang/fluentemojikitchenknife@2x.png"
          />
          <img
            className="coupong-fluent-emoji-flatwomans-cloth-icon"
            alt=""
            src="/appguide/coupang/fluentemojiflatwomansclothes.svg"
          />
          <div className="coupong-rectangle-parent44" onClick={onGroupContainerClick}>
            <div className="coupong-group-child24" />
            <div className="coupong-div92">식품</div>
            <img
              className="coupong-notopot-of-food-icon"
              alt=""
              src="/appguide/coupang/notopotoffood.svg"
            />
          </div>
          <img
            className="coupong-mdibathroom-tissue-outline-icon"
            alt=""
            src="/appguide/coupang/mdibathroomtissueoutline.svg"
          />
          <img
            className="coupong-emojione-v1couch-and-lamp-icon"
            alt=""
            src="/appguide/coupang/emojionev1couchandlamp.svg"
          />
          <img
            className="coupong-emojione-v1empty-note-pad-icon"
            alt=""
            src="/appguide/coupang/emojionev1emptynotepad.svg"
          />
          <img
            className="coupong-emojionegreen-book-icon"
            alt=""
            src="/appguide/coupang/emojionegreenbook.svg"
          />
        </div>
      </div>
      <div className="coupong-rectangle-parent45">
        <div className="coupong-group-child46" />
        <div className="coupong-menu-container">
          <img
            className="coupong-menu-icon2"
            alt=""
            src="/appguide/coupang/menu@2x.png"
          />
          <img
            className="coupong-menu-icon2"
            alt=""
            src="/appguide/coupang/search@2x.png"
          />
          <img
            className="coupong-menu-icon2"
            alt=""
            src="/appguide/coupang/home-page@2x.png"
          />
          <img
            className="coupong-menu-icon2"
            alt=""
            src="/appguide/coupang/user1@2x.png"
          />
          <img
            className="coupong-menu-icon2"
            alt=""
            src="/appguide/coupang/shopping-cart@2x.png"
          />
        </div>
      </div>
      <div className="coupong-header2">
        <div className="coupong-header-child3" />
        <div className="coupong-cou-parent3" onClick={toMainPage}>
          <div className="coupong-cou5">cou</div>
          <div className="coupong-p21">p</div>
          <div className="coupong-o5">o</div>
          <div className="coupong-n5">n</div>
          <div className="coupong-g5">g</div>
        </div>
        <input
          className="coupong-header-child4"
          name="search_bar"
          id="search_bar"
          placeholder="쿠퐁에서 검색하세요!"
          type="text"
        />
        <div className="coupong-rectangle-parent46">
          <div className="coupong-group-child47" />
          <div className="coupong-div93">로그인</div>
          <img
            className="coupong-customer-icon2"
            alt=""
            src="/appguide/coupang/customer@2x.png"
          />
        </div>
        <img
          className="coupong-header-child5"
          alt=""
          src="/appguide/coupang/group-25@2x.png"
        />
      </div>
    </div>
  );
};

export default Category;
