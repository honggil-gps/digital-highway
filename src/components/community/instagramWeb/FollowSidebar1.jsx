import { useEffect } from "react";
import SearchHistory from "./SearchHistory";
import PropTypes from "prop-types";
import "./FollowSidebar1.css";

const FollowSidebar1 = ({ className = "", onClose }) => {
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
    <div className={`followsidebar ${className}`} data-animate-on-scroll>
      <div className="sidebarlisttext">
        <div className="div3">목록</div>
      </div>
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="243px"
        searchHistoryLeft="-1px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="303px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="363px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="423px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="483px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="543px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="603px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="663px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="723px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="783px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="843px"
        searchHistoryLeft="0px"
      />
      <SearchHistory
        searchHistoryPosition="absolute"
        xButtonTop="903px"
        searchHistoryLeft="0px"
      />
      <header className="sidebarheader">
        <button className="phx-bold">
          <img
            className="vector-icon"
            alt=""
            src="/community/instagramWeb/Xvector2.svg"
          />
        </button>
        <button className="followinggroup">
          <div className="followinggroup-child" />
          <b className="b6">팔로잉</b>
        </button>
        <button className="followgroup">
          <div className="followinggroup-child" />
          <b className="b6">팔로우</b>
        </button>
        <b className="b8">보기</b>
      </header>
    </div>
  );
};

FollowSidebar1.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default FollowSidebar1;
