import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchImage.css";

const SearchImage = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onPharrowLeftThinIconClick = useCallback(() => {
    navigate("/maincontents/searchcafe-06");
  }, [navigate]);

  return (
    <div className="never-searchimage-07">
      <div className="never-searchimagecontainer">
        <div className="never-searchimagetop">
          <div className="never-yousearched2">
            <img
              className="never-octiconx-circle-fill-242"
              alt=""
              src="/appguide/never/octiconxcirclefill24.svg"
            />
            <div className="never-yousearched-child2" />
            <div className="never-div30">검색한단어</div>
            <img
              className="never-yousearched-child3"
              alt=""
              src="/appguide/never/rectangle-61@2x.png"
              onClick={onRectangleImageClick}
            />
          </div>
          <div className="never-tabframe1">
            <div className="never-rectangle-parent6">
              <div className="never-group-child6" />
              <div className="never-div31">블로그</div>
            </div>
            <div className="never-rectangle-parent6">
              <div className="never-group-child6" />
              <div className="never-div32">카페</div>
            </div>
            <div className="never-rectangle-parent6">
              <div className="never-group-child8" />
              <div className="never-div31">이미지</div>
            </div>
          </div>
          <div className="never-relation1">
            <div className="never-div34">옵션</div>
            <div className="never-frame2">
              <div className="never-div35">최근</div>
              <div className="never-div36">고화질</div>
              <div className="never-gif">GIF</div>
            </div>
          </div>
        </div>
        <div className="never-imagecontentsbox">
          <div className="never-contents11">
            <img
              className="never-contents3-child"
              alt=""
              src="/appguide/never/rectangle-27@2x.png"
            />
            <img
              className="never-contents3-child"
              alt=""
              src="/appguide/never/rectangle-28@2x.png"
            />
          </div>
          <div className="never-contents11">
            <img
              className="never-contents3-child"
              alt=""
              src="/appguide/never/rectangle-271@2x.png"
            />
            <img
              className="never-contents3-child"
              alt=""
              src="/appguide/never/rectangle-281@2x.png"
            />
          </div>
          <div className="never-contents11">
            <img
              className="never-contents3-child"
              alt=""
              src="/appguide/never/rectangle-272@2x.png"
            />
            <img
              className="never-contents3-child"
              alt=""
              src="/appguide/never/rectangle-282@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="never-bottombar2">
        <div className="never-rectangle-parent9" onClick={onGroupContainerClick}>
          <div className="never-group-child9" />
          <div className="never-n2">N</div>
        </div>
        <img
          className="never-pharrow-left-thin-icon4"
          alt=""
          src="/appguide/never/pharrowleftthin.svg"
          onClick={onPharrowLeftThinIconClick}
        />
        <img
          className="never-pharrow-left-thin-icon5"
          alt=""
          src="/appguide/never/pharrowleftthin1.svg"
        />
        <img
          className="never-bottombar-inner"
          alt=""
          src="/appguide/never/group-8.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon2"
          alt=""
          src="/appguide/never/materialsymbolslightrefresh.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon2"
          alt=""
          src="/appguide/never/mdilightshare.svg"
        />
        <img
          className="never-material-symbols-lightrefresh-icon2"
          alt=""
          src="/appguide/never/cimenuduolg.svg"
        />
      </div>
    </div>
  );
};

export default SearchImage;
