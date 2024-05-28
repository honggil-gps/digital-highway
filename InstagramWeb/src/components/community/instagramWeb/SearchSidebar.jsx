import { useEffect } from "react";
import SearchHistory from "./SearchHistory";
import PropTypes from "prop-types";
import "./SearchSidebar.css";

const SearchSidebar = ({ className = "", onClose }) => {
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
    <div className={`searchsidebar ${className}`} data-animate-on-scroll>
      <div className="div2">최근 검색 항목</div>
      <button className="allremovebutton">
        <div className="div3">모두 지우기</div>
      </button>
      <SearchHistory />
      <SearchHistory xButtonTop="309px" />
      <SearchHistory xButtonTop="369px" />
      <SearchHistory xButtonTop="429px" />
      <SearchHistory xButtonTop="489px" />
      <SearchHistory xButtonTop="549px" />
      <SearchHistory xButtonTop="609px" />
      <SearchHistory xButtonTop="669px" />
      <SearchHistory xButtonTop="729px" />
      <SearchHistory xButtonTop="789px" />
      <header className="sidebarheader">
        <b className="b2">검색</b>
        <button className="phx-bold">
          <img
            className="vector-icon2"
            alt=""
            src="/community/instagramWeb/Xvector2.svg"
          />
        </button>
        <div className="searchbar">
          <div className="searchgruop">
            <div className="searchgruop-child" />
            <img
              className="phx-circle-fill-icon"
              alt=""
              src="/community/instagramWeb/phxcirclefill.svg"
            />
            <input className="input" placeholder="검색" type="text" />
          </div>
        </div>
      </header>
    </div>
  );
};

SearchSidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default SearchSidebar;
