import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const navigate = useNavigate();

  const onGroupCheckboxClick = useCallback(() => {
    navigate("/maincontents/checkbox");
  }, [navigate]);

  return (
    <div className="coupong-join-4">
      <div className="coupong-rectangle-parent20">
        <div className="coupong-group-child9" />
        <input
          className="coupong-group-input"
          checked={true}
          id="agreement_box"
          type="checkbox"
          onClick={onGroupCheckboxClick}
        />
        <div className="coupong-div34">모두 확인하였으며 동의합니다.</div>
        <div className="coupong-div35">
          <p className="coupong-p7">
            전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
          </p>
          <p className="coupong-p7">개별적으로 동의를 선택 하실 수 있습니다.</p>
          <p className="coupong-p7">
            선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이
            가능합니다.
          </p>
        </div>
      </div>
      <div className="coupong-rectangle-parent21">
        <div className="coupong-group-child10" />
        <div className="coupong-div36">회원정보를 입력해주세요</div>
        <input
          className="coupong-group-child11"
          name="join-email"
          id="join-email"
          placeholder="아이디(이메일)"
          type="text"
        />
        <input
          className="coupong-group-child12"
          name="join-pw"
          id="join-pw"
          placeholder="비밀번호"
          type="text"
        />
        <input
          className="coupong-group-child13"
          name="join-name"
          id="join-name"
          placeholder="이름"
          type="text"
        />
        <input
          className="coupong-group-child14"
          name="join-phone"
          id="join-phone"
          placeholder="휴대폰번호"
          type="text"
        />
        <div className="coupong-group-child15" />
        <div className="coupong-group-child16" />
        <div className="coupong-group-child17" />
        <div className="coupong-group-child18" />
        <img
          className="coupong-fontistoemail-icon"
          alt=""
          src="/appguide/coupang/fontistoemail.svg"
        />
        <img
          className="coupong-solarkey-outline-icon"
          alt=""
          src="/appguide/coupang/solarkeyoutline.svg"
        />
        <img
          className="coupong-uiwuser-icon"
          alt=""
          src="/appguide/coupang/uiwuser.svg"
        />
        <img
          className="coupong-mdicellphone-icon"
          alt=""
          src="/appguide/coupang/mdicellphone.svg"
        />
      </div>
      <div className="coupong-cou-parent1">
        <div className="coupong-cou3">cou</div>
        <div className="coupong-p10">p</div>
        <div className="coupong-o3">o</div>
        <div className="coupong-n3">n</div>
        <div className="coupong-g3">g</div>
      </div>
      <div className="coupong-div37">회원가입</div>
    </div>
  );
};

export default Join;
