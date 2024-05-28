import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchAfter.css";

const SearchAfter = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/searchblog-05");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onPharrowLeftThinIconClick = useCallback(() => {
    navigate("/maincontents/searchpage-03");
  }, [navigate]);

  return (
    <div className="never-searchafter-04">
      <div className="never-searchafterpagetop">
        <div className="never-yousearched">
          <img
            className="never-octiconx-circle-fill-24"
            alt=""
            src="/appguide/never/octiconxcirclefill24.svg"
          />
          <div className="never-yousearched-child" />
          <input className="never-input" type="text" />
          <img
            className="never-yousearched-item"
            alt=""
            src="/appguide/never/rectangle-61@2x.png"
            onClick={onRectangleImageClick}
          />
        </div>
        <div className="never-blogandcafetab">
          <div className="never-rectangle-group" onClick={onGroupContainerClick}>
            <div className="never-group-item" />
            <div className="never-div9">블로그</div>
          </div>
          <div className="never-rectangle-container">
            <div className="never-group-item" />
            <div className="never-div10">카페</div>
          </div>
          <div className="never-rectangle-container">
            <div className="never-group-item" />
            <div className="never-div9">이미지</div>
          </div>
        </div>
        <div className="never-relation">
          <div className="never-relation-child" />
          <div className="never-div12">연관</div>
          <div className="never-html">html</div>
          <div className="never-css">css</div>
          <div className="never-javascript">javascript</div>
        </div>
      </div>
      <div className="never-searchafterbox1">
        <div className="never-searchafterbox1-child" />
        <div className="never-searchafterbox1-item" />
        <div className="never-searchafterbox1-inner" />
        <div className="never-div13">광고</div>
        <div className="never-no1">니모에디터 웹에디터 NO.1 간편한 웹에디터</div>
        <div className="never-c-java">
          HTML5기반, 웹표준, 모바일환경, Non Active-X, 오피스호환성 지원
        </div>
        <img
          className="never-rectangle-icon"
          alt=""
          src="/appguide/never/rectangle-67@2x.png"
        />
      </div>
      <div className="never-searchafterbox2">
        <div className="never-searchafterbox1-child" />
        <div className="never-searchafterbox1-item" />
        <div className="never-searchafterbox1-inner" />
        <div className="never-div14">파워링크 광고</div>
        <div className="never-div15">하이브리드 솔루션 기업용 대용량 파일 업로더</div>
        <div className="never-c-java">
          DEXT5 차세대 프리미엄 솔루션, Non-Active-X, 파일전송솔루션
        </div>
        <img
          className="never-rectangle-icon"
          alt=""
          src="/appguide/never/rectangle-671@2x.png"
        />
      </div>
      <div className="never-searchafterbox3">
        <div className="never-searchafterbox1-child" />
        <div className="never-searchafterbox1-item" />
        <div className="never-searchafterbox1-inner" />
        <div className="never-div16">광고</div>
        <div className="never-div17">기초 올인원 코딩 스타터 부트캠프 1위</div>
        <div className="never-c-java">
          C언어, JAVA, 파이썬, 개발 언어 총집합, 실무자로 LEVEL UP!
        </div>
        <img
          className="never-rectangle-icon"
          alt=""
          src="/appguide/never/rectangle-672@2x.png"
        />
      </div>
      <div className="never-bottombar">
        <div className="never-rectangle-parent1" onClick={onGroupContainer2Click}>
          <div className="never-group-child1" />
          <div className="never-n">N</div>
        </div>
        <img
          className="never-pharrow-left-thin-icon"
          alt=""
          src="/appguide/never/pharrowleftthin.svg"
          onClick={onPharrowLeftThinIconClick}
        />
        <img
          className="never-pharrow-left-thin-icon1"
          alt=""
          src="/appguide/never/pharrowleftthin1.svg"
        />
        <img
          className="never-bottombar-child"
          alt=""
          src="/appguide/never/group-8.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon"
          alt=""
          src="/appguide/never/materialsymbolslightrefresh.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon"
          alt=""
          src="/appguide/never/mdilightshare.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon"
          alt=""
          src="/appguide/never/cimenuduolg.svg"
        />
      </div>
    </div>
  );
};

export default SearchAfter;
