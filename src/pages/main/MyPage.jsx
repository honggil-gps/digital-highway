import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyPage.css";

const MyPage = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="mypage">
      <div className="footer5">
        <div className="box10" />
        <div className="menu5">
          <div className="div58">이용약관</div>
          <div className="div58">오시는길</div>
          <div className="div58">제휴제안</div>
          <div className="div58">개인정보처리방침</div>
          <div className="div58">저작권 보호정책</div>
          <div className="div58">고객센터</div>
        </div>
        <div className="copyright5">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <img className="logo-icon5" alt="" src="main/logo@2x.png" />
        <div className="title5">디지털지름길</div>
      </div>
      <div className="header5">
        <div className="box11" />
        <div className="logo5">
          <div className="div64" onClick={onLogoContainerClick}>디지털지름길</div>
          <img className="image-1-icon5" alt="" src="main/image-1@2x.png" />
        </div>
        <div className="easymode5">
          <div className="rectangle-parent2">
            <div className="group-child2" />
            <div className="div65">내 정보</div>
          </div>
        </div>
        <div className="back5">
          <div className="group-child2" />
          <div className="div66" onClick={onBackContainerClick}>뒤로가기</div>
        </div>
      </div>
      <div className="chatbot2">
        <img className="box-icon2" alt="" src="main/box1.svg" />
        <div className="intro3">
          <span className="intro-txt2">
            <p className="p8">어려운 단어가 있으신가요?</p>
            <p className="p8">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="start2">
          <div className="start-inner" />
          <div className="div67">시작하기</div>
        </div>
        <img className="character-icon2" alt="" src="main/character@2x.png" />
      </div>
      <div className="listbox" />
      <div className="continue">
        <div className="continue-child" />
        <div className="div68">진행 중인 가이드</div>
      </div>
      <div className="storage">
        <div className="storage-child" />
        <div className="div69">보관함</div>
      </div>
      <div className="myinfo">
        <div className="myinfo-child" />
        <div className="div69">나의 정보</div>
      </div>
    </div>
  );
};

export default MyPage;
