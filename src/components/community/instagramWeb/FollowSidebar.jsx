import { useEffect } from "react";
import "./FollowSidebar.css";
import PropTypes from 'prop-types';

const FollowSidebar = ({ className = "", onClose }) => {
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
      <div className="div5">목록</div>
      <div className="searchhistory">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory1">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory2">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory3">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory4">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory5">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory6">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory7">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory8">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <div className="searchhistory9">
        <div className="searchhistoryframe">
          <img
            className="searchhistoryframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <div className="digital-highway1">Digital_highway</div>
          <button className="xbutton">
            <img
              className="phx-bold-icon1"
              alt=""
              src="/community/instagramWeb/phxbold1.svg"
            />
          </button>
        </div>
      </div>
      <header className="sidebarheader1">
        <button className="phx-bold1">
          <img
            className="vector-icon3"
            alt=""
            src="/community/instagramWeb/Xvector2.svg"
          />
        </button>
        <button className="followinggroup">
          <div className="followinggroup-child" />
          <b className="b7">팔로잉</b>
        </button>
        <button className="followgroup">
          <div className="followinggroup-child" />
          <b className="b7">팔로우</b>
        </button>
        <b className="b9">보기</b>
      </header>
    </div>
  );
};

FollowSidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default FollowSidebar;
