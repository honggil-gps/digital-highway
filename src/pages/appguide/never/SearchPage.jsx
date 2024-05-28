import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPage.css";

const SearchPage = () => {
  const navigate = useNavigate();

  const onEpbackIconClick = useCallback(() => {
    navigate("/maincontents/mainpage-02");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/maincontents/searchafter-04");
  }, [navigate]);

  return (
    <div className="never-searchpage-03">
      <div className="never-searchpagebarframe">
        <div className="never-searchpagebar">
          <div className="never-frame1">
            <img
              className="never-epback-icon"
              alt=""
              src="/appguide/never/epback.svg"
              onClick={onEpbackIconClick}
            />
            <input
              className="never-url"
              placeholder="검색어 또는 URL 입력"
              type="text"
            />
          </div>
          <img
            className="never-searchpagebar-child"
            alt=""
            src="/appguide/never/frame-1.svg"
            onClick={onFrameIconClick}
          />
        </div>
      </div>
      <div className="never-searchhistorybox">
        <div className="never-searchhistory">
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
          <div className="never-searchhistory1">
            <img
              className="never-elsearch-alt-icon"
              alt=""
              src="/appguide/never/elsearchalt.svg"
            />
            <div className="never-div1">검색어</div>
            <img className="never-phx-icon" alt="" src="/appguide/never/phx.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
