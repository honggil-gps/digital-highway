import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBlog.css";

const SearchBlog = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onCafeTabContainerClick = useCallback(() => {
    navigate("/maincontents/searchcafe-06");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onPharrowLeftThinIconClick = useCallback(() => {
    navigate("/maincontents/searchafter-04");
  }, [navigate]);

  return (
    <div className="never-searchblog-05">
      <div className="never-searchblogcontainer">
        <div className="never-searchblogtop">
          <div className="never-yousearched3">
            <img
              className="never-octiconx-circle-fill-243"
              alt=""
              src="/appguide/never/octiconxcirclefill24.svg"
            />
            <div className="never-yousearched-child4" />
            <div className="never-div65">검색한단어</div>
            <img
              className="never-yousearched-child5"
              alt=""
              src="/appguide/never/rectangle-61@2x.png"
              onClick={onRectangleImageClick}
            />
          </div>
          <div className="never-tabframe2">
            <div className="never-blogtab">
              <div className="never-blogtab-child" />
              <div className="never-div66">블로그</div>
            </div>
            <div className="never-cafetab" onClick={onCafeTabContainerClick}>
              <div className="never-cafetab-child" />
              <div className="never-div67">카페</div>
            </div>
            <div className="never-blogtab">
              <div className="never-cafetab-child" />
              <div className="never-div66">이미지</div>
            </div>
          </div>
          <div className="never-sortingoption1">
            <div className="never-sortingoption-item" />
            <div className="never-div69">옵션</div>
            <div className="never-div70">관련도순</div>
            <div className="never-div71">최신순</div>
          </div>
        </div>
        <div className="never-contentsframe">
          <div className="never-contents12">
            <div className="never-contents1-child4" />
            <div className="never-contents1-child5" />
            <div className="never-contents1-child6" />
            <div className="never-div72">유명한 블로그</div>
            <div className="never-div73">스벅커피 한잔해</div>
            <div className="never-div74">
              조금이라도 빨리 평범한 일상으로 돌아갈 수 있도록 다 함께 사회적
              거리를 유지하고 저희 임페리얼 덴져러스 울트라 길드 또한 많은
              의료진들의 노력이 헛되지 않고 코로나19가 종식하는
            </div>
            <img
              className="never-contents1-child7"
              alt=""
              src="/appguide/never/rectangle-675@2x.png"
            />
          </div>
          <div className="never-contents12">
            <div className="never-contents1-child4" />
            <div className="never-contents1-child5" />
            <div className="never-contents1-child6" />
            <div className="never-div72">배낭메고 여행이나갈까</div>
            <div className="never-div73">감성캠핑 추천</div>
            <div className="never-div74">
              언제든지 동물을 만날 수 있고, 자연물을 가지고 감성캠핑도 즐길 수
              있고 자연에서 얻은 도구로 놀 수 있는 키친놀이터도 인기장소랍니다.
            </div>
            <img
              className="never-contents1-child7"
              alt=""
              src="/appguide/never/rectangle-676@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="never-bottombar3">
        <div className="never-rectangle-parent20" onClick={onGroupContainerClick}>
          <div className="never-group-child20" />
          <div className="never-n3">N</div>
        </div>
        <img
          className="never-pharrow-left-thin-icon6"
          alt=""
          src="/appguide/never/pharrowleftthin.svg"
          onClick={onPharrowLeftThinIconClick}
        />
        <img
          className="never-pharrow-left-thin-icon7"
          alt=""
          src="/appguide/never/pharrowleftthin1.svg"
        />
        <img className="never-group-icon" alt="" src="/appguide/never/group-8.svg" />
        <img
          className="never-material-symbols-lightrefresh-icon3"
          alt=""
          src="/appguide/never/materialsymbolslightrefresh.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon3"
          alt=""
          src="/appguide/never/mdilightshare.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon3"
          alt=""
          src="/appguide/never/cimenuduolg.svg"
        />
      </div>
    </div>
  );
};

export default SearchBlog;
