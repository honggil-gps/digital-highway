import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame11.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="reconfirm">
      <iframe className="reconfirm-child" />
      <div className="reconfirm-item" />
      <button className="button6" onClick={onButtonClick}>
        <div className="child7" />
        <div className="div32">호출하기</div>
      </button>
      <div className="div33">출발-도착</div>
      <div className="rectangle-parent2">
        <div className="group-child" />
        <img className="phx-icon" alt="" src="/phx.svg" />
        <div className="parent6">
          <div className="div34">뚜레쥬르 부산동아..</div>
          <img className="chevron-right-icon1" alt="" src="/chevronright.svg" />
          <div className="div34">국립부경대학 대..</div>
        </div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-item" />
        <div className="div36">본인탑승</div>
        <div className="div37">예상</div>
        <div className="div38">14,200원</div>
      </div>
      <div className="rectangle-parent4">
        <div className="frame-child4" />
        <img className="rectangle-icon" alt="" src="/rectangle-48@2x.png" />
        <div className="div39">롯데카드</div>
      </div>
      <div className="rectangle-parent5">
        <img className="frame-child5" alt="" src="/rectangle-49@2x.png" />
        <div className="div34">일반호출</div>
      </div>
    </div>
  );
};

export default Frame11;
