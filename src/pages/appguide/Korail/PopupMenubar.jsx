import { memo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PopupMenubar.css";

const PopupMenubar = memo(({ onClose }) => {
  const navigate = useNavigate();
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

  const onMenubarHeaderButton1VectorIconClick = useCallback(() => {
    navigate("/kraillogin-03");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/kraillogin-03");
  }, [navigate]);

  return (
    <div className="popupmenubar" data-animate-on-scroll>
      <div className="menubarlistset">
        <div className="menubarlist14">
          <b className="b">회원탈퇴</b>
          <div className="menubarlistline" />
        </div>
        <div className="menubarlist13">
          <b className="b">영수증 모바일FAX보내기</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist12">
          <b className="b">레일포인트 쌓기</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist11">
          <b className="b2">지연확인증 발급</b>
          <div className="menubarlistline3" />
        </div>
        <div className="menubarlist10">
          <b className="b">지연료 계좌반환 신청</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist9">
          <b className="b">열차 운행중지 및 지연배상 신청</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist8">
          <div className="menubarlist8-child" />
          <b className="ktx">멤버십카드</b>
        </div>
        <div className="menubarlist7">
          <b className="b">알림설정</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist6">
          <b className="ktx">KTX 동행자 마일리지 적립</b>
          <div className="menubarlistline8" />
        </div>
        <div className="menubarlist5">
          <b className="b2">마일리지 적립/사용내역</b>
          <div className="menubarlistline3" />
        </div>
        <div className="menubarlist4">
          <b className="b">승차권 구입이력</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist3">
          <b className="b">승차권 확인</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist2">
          <b className="b">장바구니</b>
          <div className="menubarlistline1" />
        </div>
        <div className="menubarlist1">
          <b className="b">회원정보/쿠폰ㆍ할인증</b>
          <div className="menubarlistline1" />
        </div>
      </div>
      <div className="menubarlistttitle">
        <div className="menubarlistttitlebutton">
          <img
            className="menubarlistttitlebuttonvector-icon"
            alt=""
            src="/Appguide/Korail/menubarlistttitlebuttonvector.svg"
          />
        </div>
        <div className="menubarlistttitleline" />
        <b className="b11">마이페이지</b>
      </div>
      <header className="menubarheader">
        <div className="headersevicebuttonset">
          <div className="headersevicebutton2">
            <b className="b12">기업전용 서비스를 시작합니다!</b>
          </div>
          <div className="headersevicebutton1">
            <b className="b13">누르시면 공지사항으로 이동합니다</b>
          </div>
        </div>
        <div className="menubarheaderbuttonset">
          <img
            className="menubarheaderbutton3-icon"
            alt=""
            src="/Appguide/Korail/menubarheaderbutton3.svg"
          />
          <img
            className="menubarheaderbutton2-icon"
            alt=""
            src="/Appguide/Korail/menubarheaderbutton2@2x.png"
          />
          <button className="menubarheaderbutton1">
            <img
              className="menubarheaderbutton1vector-icon"
              alt=""
              src="/Appguide/Korail/menubarheaderbutton1vector.svg"
              onClick={onMenubarHeaderButton1VectorIconClick}
            />
          </button>
        </div>
        <button className="button" onClick={onButtonClick}>
          로그인이 필요합니다 .
        </button>
      </header>
    </div>
  );
});

export default PopupMenubar;
