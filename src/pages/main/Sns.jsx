import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Sns.css";

const Sns = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <div className="sns1">
      <div className="sns2">
        <div className="header11">
          <div className="box22" />
          <div className="logo11">
            <div className="div144" onClick={onLogoContainerClick}>디지털지름길</div>
            <img className="image-1-icon11" alt="" src="main/image-1@2x.png" />
          </div>
          <div className="easymode11">
            <div className="rectangle-parent8">
              <div className="group-child8" />
              <div className="div145">내 정보</div>
            </div>
          </div>
          <div className="back11" onClick={onBackContainerClick}>
            <div className="group-child8" />
            <div className="div146">뒤로가기</div>
          </div>
        </div>
        <div className="body8">
          <div className="chatbot8">
            <img className="box-icon8" alt="" src="main/box.svg" />
            <div className="intro9">
              <span className="intro-txt8">
                <p className="p26">어려운 단어가 있으신가요?</p>
                <p className="p26">이제 제가 도와드릴게요</p>
              </span>
            </div>
            <div className="start8">
              <div className="start-child6" />
              <div className="div147">시작하기</div>
            </div>
            <img className="character-icon8" alt="" src="main/character@2x.png" />
          </div>
          <div className="layout" />
          <div className="menu15">
            <div className="menu-child14" />
            <div className="div148">네이버밴드</div>
            <div className="menu-child15" />
            <div className="div149">인스타그램</div>
            <div className="menu-child16" />
            <div className="div150">네이버카페</div>
          </div>
        </div>
        <div className="footer11">
          <div className="box23" />
          <div className="menu16">
            <div className="div151">이용약관</div>
            <div className="div151">오시는길</div>
            <div className="div151">제휴제안</div>
            <div className="div151">개인정보처리방침</div>
            <div className="div151">저작권 보호정책</div>
            <div className="div151">고객센터</div>
          </div>
          <div className="copyright11">
            COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
          </div>
          <img className="logo-icon11" alt="" src="main/logo@2x.png" />
          <div className="title14">디지털지름길</div>
        </div>
      </div>
    </div>
  );
};

export default Sns;
