import "./MainFooter.css"

const MainFooter = () => {
  return (
    <footer className="mainpage-footer">
        <div className="mainpage-footer-copyright">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="mainpage-footer-footermenutext">
          <div className="mainpage-footer-div">고객센터</div>
          <div className="mainpage-footer-div1">저작권 보호정책</div>
          <div className="mainpage-footer-div2">개인정보처리방침</div>
          <div className="mainpage-footer-div3">제휴제안</div>
          <div className="mainpage-footer-div4">오시는길</div>
          <div className="mainpage-footer-div5">이용약관</div>
        </div>
        <div className="mainpage-footer-title">디지털지름길</div>
        <img className="mainpage-footer-logo-icon" alt="" src="main/logo@2x.png" />
      </footer>
  )
}

export default MainFooter;