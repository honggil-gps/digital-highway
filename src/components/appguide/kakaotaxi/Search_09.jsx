import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Search_09.css";

const Frame8 = memo(() => {
  const navigate = useNavigate();

  const onText1Click = useCallback(() => {
    navigate("/maincontents/10");
  }, [navigate]);

  return (
    <div className="kikio-search-09">
      <img
        className="kikio-backframe-icon"
        alt=""
        src="/appguide/kakaotaxi/frame.svg"
      />
      <div className="kikio-startposition">
        <div className="kikio-frame5">
          <div className="kikio-codiconcircle-parent">
            <img
              className="kikio-codiconcircle"
              alt=""
              src="/appguide/kakaotaxi/codiconcircle.svg"
            />
            <div className="kikio-div31">현위치: 언어청각상담센터이음</div>
          </div>
        </div>
      </div>
      <div className="kikio-destination">
        <div className="kikio-frame6">
          <input className="kikio-frame-item" type="text" />
          <img
            className="kikio-zondiconsclose-solid"
            alt=""
            src="/appguide/kakaotaxi/zondiconsclosesolid.svg"
          />
          <div className="kikio-vector-parent">
            <img
              className="kikio-vector-icon2"
              alt=""
              src="/appguide/kakaotaxi/vector2.svg"
            />
            <input className="kikio-input" placeholder="부경대" type="text" />
          </div>
        </div>
      </div>
      <div className="kikio-searchhistory">
        <div className="kikio-frame7">
          <div className="kikio-frame-inner" />
          <div className="kikio-frame-child1" />
          <div className="kikio-frame-child2" />
          <div className="kikio-frame-child3" />
          <div className="kikio-frame-child4" />
          <div className="kikio-frame-child5" />
          <div className="kikio-div32">부경대학교</div>
          <div className="kikio-div33" onClick={onText1Click}>
            부경대학교 대연캠퍼스
          </div>
          <div className="kikio-div34">부경대학교 용당캠퍼스</div>
        </div>
      </div>
    </div>
  );
});

export default Frame8;
