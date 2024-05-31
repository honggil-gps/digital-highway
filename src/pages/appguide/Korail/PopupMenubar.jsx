// import { memo, useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./PopupMenubar.css";

// const PopupMenubar = memo(({ onClose }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const scrollAnimElements = document.querySelectorAll(
//       "[data-animate-on-scroll]"
//     );
//     const observer = new IntersectionObserver(
//       (entries) => {
//         for (const entry of entries) {
//           if (entry.isIntersecting || entry.intersectionRatio > 0) {
//             const targetElement = entry.target;
//             targetElement.classList.add("animate");
//             observer.unobserve(targetElement);
//           }
//         }
//       },
//       {
//         threshold: 0.15,
//       }
//     );

//     for (let i = 0; i < scrollAnimElements.length; i++) {
//       observer.observe(scrollAnimElements[i]);
//     }

//     return () => {
//       for (let i = 0; i < scrollAnimElements.length; i++) {
//         observer.unobserve(scrollAnimElements[i]);
//       }
//     };
//   }, []);

//   const onMenubarHeaderButton1VectorIconClick = useCallback(() => {
//     navigate("/maincontents/kraillogin-03");
//   }, [navigate]);

//   const onButtonClick = useCallback(() => {
//     navigate("/maincontents/kraillogin-03");
//   }, [navigate]);

//   return (
//     <div className="krail-popupmenubar" data-animate-on-scroll>
//       <div className="krail-menubarlistset">
//         <div className="krail-menubarlist14">
//           <b className="krail-b">회원탈퇴</b>
//           <div className="krail-menubarlistline" />
//         </div>
//         <div className="krail-menubarlist13">
//           <b className="krail-b">영수증 모바일FAX보내기</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist12">
//           <b className="krail-b">레일포인트 쌓기</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist11">
//           <b className="krail-b2">지연확인증 발급</b>
//           <div className="krail-menubarlistline3" />
//         </div>
//         <div className="krail-menubarlist10">
//           <b className="krail-b">지연료 계좌반환 신청</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist9">
//           <b className="krail-b">열차 운행중지 및 지연배상 신청</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist8">
//           <div className="krail-menubarlist8-child" />
//           <b className="krail-ktx">멤버십카드</b>
//         </div>
//         <div className="krail-menubarlist7">
//           <b className="krail-b">알림설정</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist6">
//           <b className="krail-ktx">KTX 동행자 마일리지 적립</b>
//           <div className="krail-menubarlistline8" />
//         </div>
//         <div className="krail-menubarlist5">
//           <b className="krail-b2">마일리지 적립/사용내역</b>
//           <div className="krail-menubarlistline3" />
//         </div>
//         <div className="krail-menubarlist4">
//           <b className="krail-b">승차권 구입이력</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist3">
//           <b className="krail-b">승차권 확인</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist2">
//           <b className="krail-b">장바구니</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//         <div className="krail-menubarlist1">
//           <b className="krail-b">회원정보/쿠폰ㆍ할인증</b>
//           <div className="krail-menubarlistline1" />
//         </div>
//       </div>
//       <div className="krail-menubarlistttitle">
//         <div className="krail-menubarlistttitlebutton">
//           <img
//             className="krail-menubarlistttitlebuttonvector-icon"
//             alt=""
//             src="/appguide/Korail/menubarlistttitlebuttonvector.svg"
//           />
//         </div>
//         <div className="krail-menubarlistttitleline" />
//         <b className="krail-b11">마이페이지</b>
//       </div>
//       <header className="krail-menubarheader">
//         <div className="krail-headersevicebuttonset">
//           <div className="krail-headersevicebutton2">
//             <b className="krail-b12">기업전용 서비스를 시작합니다!</b>
//           </div>
//           <div className="krail-headersevicebutton1">
//             <b className="krail-b13">누르시면 공지사항으로 이동합니다</b>
//           </div>
//         </div>
//         <div className="krail-menubarheaderbuttonset">
//           <img
//             className="krail-menubarheaderbutton3-icon"
//             alt=""
//             src="/appguide/Korail/menubarheaderbutton3.svg"
//           />
//           <img
//             className="krail-menubarheaderbutton2-icon"
//             alt=""
//             src="/appguide/Korail/menubarheaderbutton2@2x.png"
//           />
//           <button className="krail-menubarheaderbutton1">
//             <img
//               className="krail-menubarheaderbutton1vector-icon"
//               alt=""
//               src="/appguide/Korail/menubarheaderbutton1vector.svg"
//               onClick={onMenubarHeaderButton1VectorIconClick}
//             />
//           </button>
//         </div>
//         <button className="krail-button" onClick={onButtonClick}>
//           로그인이 필요합니다 .
//         </button>
//       </header>
//     </div>
//   );
// });

// export default PopupMenubar;






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
    navigate("/maincontents/kraillogin-03");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/maincontents/kraillogin-03");
  }, [navigate]);

  function sendCaption(prev, now ,next){
    const prevCaption = prev.replace(/\n/g, "<br>");
    const nowCaption = now.replace(/\n/g, "<br>");
    const nextCaption = next.replace(/\n/g, "<br>");
    window.parent.postMessage({type:"navigate", caption: nowCaption, preCaption: prevCaption, nextCaption: nextCaption}, "*");
  }
  useEffect(()=>{sendCaption("예매를 위해 \n 회원가입이 필요합니다. \n 먼저 ☰ 버튼을 눌러주세요.", "'로그인이 필요합니다'를 \n 눌러주세요.", "회원가입버튼을 \n 눌러주세요.")},[])
  const handleClickOutside = useCallback((event) => {
    const sidebar = document.querySelector(".krail-popupmenubar");
    if (sidebar && !sidebar.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="krail-popupmenubar" data-animate-on-scroll>
      <div className="krail-menubarlistset">
        <div className="krail-menubarlist14">
          <b className="krail-b">회원탈퇴</b>
          <div className="krail-menubarlistline" />
        </div>
        <div className="krail-menubarlist13">
          <b className="krail-b">영수증 모바일FAX보내기</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist12">
          <b className="krail-b">레일포인트 쌓기</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist11">
          <b className="krail-b2">지연확인증 발급</b>
          <div className="krail-menubarlistline3" />
        </div>
        <div className="krail-menubarlist10">
          <b className="krail-b">지연료 계좌반환 신청</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist9">
          <b className="krail-b">열차 운행중지 및 지연배상 신청</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist8">
          <div className="krail-menubarlist8-child" />
          <b className="krail-ktx">멤버십카드</b>
        </div>
        <div className="krail-menubarlist7">
          <b className="krail-b">알림설정</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist6">
          <b className="krail-ktx">KTX 동행자 마일리지 적립</b>
          <div className="krail-menubarlistline8" />
        </div>
        <div className="krail-menubarlist5">
          <b className="krail-b2">마일리지 적립/사용내역</b>
          <div className="krail-menubarlistline3" />
        </div>
        <div className="krail-menubarlist4">
          <b className="krail-b">승차권 구입이력</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist3">
          <b className="krail-b">승차권 확인</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist2">
          <b className="krail-b">장바구니</b>
          <div className="krail-menubarlistline1" />
        </div>
        <div className="krail-menubarlist1">
          <b className="krail-b">회원정보/쿠폰ㆍ할인증</b>
          <div className="krail-menubarlistline1" />
        </div>
      </div>
      <div className="krail-menubarlistttitle">
        <div className="krail-menubarlistttitlebutton">
          <img
            className="krail-menubarlistttitlebuttonvector-icon"
            alt=""
            src="/appguide/Korail/menubarlistttitlebuttonvector.svg"
          />
        </div>
        <div className="krail-menubarlistttitleline" />
        <b className="krail-b11">마이페이지</b>
      </div>
      <header className="krail-menubarheader">
        <div className="krail-headersevicebuttonset">
          <div className="krail-headersevicebutton2">
            <b className="krail-b12">기업전용 서비스를 시작합니다!</b>
          </div>
          <div className="krail-headersevicebutton1">
            <b className="krail-b13">누르시면 공지사항으로 이동합니다</b>
          </div>
        </div>
        <div className="krail-menubarheaderbuttonset">
          <img
            className="krail-menubarheaderbutton3-icon"
            alt=""
            src="/appguide/Korail/menubarheaderbutton3.svg"
          />
          <img
            className="krail-menubarheaderbutton2-icon"
            alt=""
            src="/appguide/Korail/menubarheaderbutton2@2x.png"
          />
          <button className="krail-menubarheaderbutton1">
            <img
              className="krail-menubarheaderbutton1vector-icon"
              alt=""
              src="/appguide/Korail/menubarheaderbutton1vector.svg"
              onClick={onMenubarHeaderButton1VectorIconClick}
            />
          </button>
        </div>
        <button className="krail-button" onClick={onButtonClick}>
          로그인이 필요합니다 .
        </button>
      </header>
    </div>
  );
});

export default PopupMenubar;
