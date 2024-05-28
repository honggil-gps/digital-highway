import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchCafe.css";

const SearchCafe = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/maincontents/searchimage-07");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onPharrowLeftThinIconClick = useCallback(() => {
    navigate("/maincontents/searchblog-05");
  }, [navigate]);

  return (
    <div className="never-searchcafe-06">
      <div className="never-searchcafetop">
        <div className="never-yousearched1">
          <img
            className="never-octiconx-circle-fill-241"
            alt=""
            src="/appguide/never/octiconxcirclefill24.svg"
          />
          <div className="never-yousearched-inner" />
          <div className="never-div18">검색한단어</div>
          <img
            className="never-yousearched-child1"
            alt=""
            src="/appguide/never/rectangle-61@2x.png"
            onClick={onRectangleImageClick}
          />
        </div>
        <div className="never-tabframe">
          <div className="never-rectangle-parent2">
            <div className="never-group-child2" />
            <div className="never-div19">블로그</div>
          </div>
          <div className="never-rectangle-parent2">
            <div className="never-group-child3" />
            <div className="never-div20">카페</div>
          </div>
          <div className="never-rectangle-parent4" onClick={onGroupContainer2Click}>
            <div className="never-group-child2" />
            <div className="never-div19">이미지</div>
          </div>
        </div>
        <div className="never-sortingoption">
          <div className="never-sortingoption-child" />
          <div className="never-div22">옵션</div>
          <div className="never-div23">관련도순</div>
          <div className="never-div24">최신순</div>
        </div>
      </div>
      <div className="never-contents1">
        <div className="never-contents1-child" />
        <div className="never-contents1-item" />
        <div className="never-contents1-inner" />
        <div className="never-div25">중구나라</div>
        <div className="never-for">땡큐for여러분</div>
        <div className="never-div26">
          지금 이 순간에도 코로나19 극복을 위해 고군분투하고 계시는 전 세계 모든
          의료진 여러분과 애써주시는 모든분들께 감사하는 마음과 존경심을
          표합니다.
        </div>
        <img
          className="never-contents1-child1"
          alt=""
          src="/appguide/never/rectangle-673@2x.png"
        />
      </div>
      <div className="never-contents2">
        <div className="never-contents1-child" />
        <div className="never-contents1-item" />
        <div className="never-contents1-inner" />
        <div className="never-div25">가솔린매니아</div>
        <div className="never-for">데일리룩 올려요</div>
        <div className="never-div26">
          지난 여름 아이와 함께 놀러갔던 바다 푸르른 녹음이 가득한 잔디밭으로
          가족과 함께 소풍갔던 날···
        </div>
        <img
          className="never-contents1-child1"
          alt=""
          src="/appguide/never/rectangle-674@2x.png"
        />
      </div>
      <div className="never-bottombar1">
        <div className="never-rectangle-parent5" onClick={onGroupContainerClick}>
          <div className="never-group-child5" />
          <div className="never-n1">N</div>
        </div>
        <img
          className="never-pharrow-left-thin-icon2"
          alt=""
          src="/appguide/never/pharrowleftthin.svg"
          onClick={onPharrowLeftThinIconClick}
        />
        <img
          className="never-pharrow-left-thin-icon3"
          alt=""
          src="/appguide/never/pharrowleftthin1.svg"
        />
        <img
          className="never-bottombar-item"
          alt=""
          src="/appguide/never/group-8.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon1"
          alt=""
          src="/appguide/never/materialsymbolslightrefresh.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon1"
          alt=""
          src="/appguide/never/mdilightshare.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon1"
          alt=""
          src="/appguide/never/cimenuduolg.svg"
        />
      </div>
    </div>
  );
};

export default SearchCafe;
