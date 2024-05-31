import { useEffect } from "react";
import SearchHistory from "./SearchHistory";
import PropTypes from "prop-types";
import "./SearchSidebar1.css";

const SearchSidebar1 = ({ className = "", onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={`outsta-searchsidebar ${className}`} data-animate-on-scroll>
      <div className="outsta-sidebarsearchtext">
        <div className="outsta-div4">최근 검색 항목</div>
        <button className="outsta-allremovebutton">
          <div className="outsta-div5">모두 지우기</div>
        </button>
      </div>
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="248px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="308px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="368px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="428px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="488px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="548px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="608px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="668px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="728px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="788px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="848px"
        searchHistoryLeft="0px"
      />
      <header className="outsta-sidebarheader1">
        <b className="outsta-b9">검색</b>
        <button className="outsta-phx-bold1" onClick={onClose}>
          <img
            className="outsta-vector-icon1"
            alt=""
            src="/community/instagramWeb/Xvector2.svg"
          />
        </button>
        <div className="outsta-searchbar">
          <div className="outsta-searchgroup">
            <div className="outsta-searchgroup-child" />
            <img
              className="outsta-phx-circle-fill-icon"
              alt=""
              src="/community/instagramWeb/phxcirclefill.svg"
            />
            <input className="outsta-input1" placeholder="검색" type="text" />
          </div>
        </div>
      </header>
    </div>
  );
};

SearchSidebar1.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SearchSidebar1;
