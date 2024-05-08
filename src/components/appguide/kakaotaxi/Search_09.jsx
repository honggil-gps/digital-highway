import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Search_09.css";

const Frame8 = memo(() => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  return (
    <div className="search-09">
      <img
        className="backframe-icon"
        alt=""
        src="/appguide/kakaotaxi/frame.svg"
      />
      <div className="startposition">
        <div className="frame5">
          <div className="codiconcircle-parent">
            <img
              className="codiconcircle"
              alt=""
              src="/appguide/kakaotaxi/codiconcircle.svg"
            />
            <div className="div31">현위치: 언어청각상담센터이음</div>
          </div>
        </div>
      </div>
      <div className="destination">
        <div className="frame6">
          <input className="frame-item" type="text" />
          <img
            className="zondiconsclose-solid"
            alt=""
            src="/appguide/kakaotaxi/zondiconsclosesolid.svg"
          />
          <div className="vector-parent">
            <img
              className="vector-icon2"
              alt=""
              src="/appguide/kakaotaxi/vector2.svg"
            />
            <input className="input" placeholder="부경대" type="text" />
          </div>
        </div>
      </div>
      <div className="searchhistory">
        <div className="frame7">
          <div className="frame-inner" />
          <div className="frame-child1" />
          <div className="frame-child2" />
          <div className="frame-child3" />
          <div className="frame-child4" />
          <div className="frame-child5" />
          <div className="div32">부경대학교</div>
          <div className="div33" onClick={onText1Click}>
            부경대학교 대연캠퍼스
          </div>
          <div className="div34">부경대학교 용당캠퍼스</div>
        </div>
      </div>
    </div>
  );
});

export default Frame8;
