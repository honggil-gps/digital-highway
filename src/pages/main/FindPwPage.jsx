import { useCallback } from "react";
import MainFooter from "../../components/main/MainFooter";
import MainHeader from "../../components/main/MainHeader";
import PropTypes from "prop-types";
import "./FindPwPage.css";

const FindPwPage = ({ onClose }) => {
  const onBackContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className="findpwpage">
      <div className="findpw">
        <div className="findpwcontainer" />
        <div className="findpwheader" />
        <b className="findpw-title">비밀번호 찾기</b>
        <div className="findpwguidelinebox" />
        <div className="div1">
          <p className="p2">
            회원정보에 등록한 휴대폰 번호와 입력한 휴대폰 번호가
          </p>
          <p className="p2">동일해야 비밀번호를 찾으실 수 있습니다</p>
        </div>
        <div className="findpwbox" />
        <input
          className="findpwname"
          placeholder="이름을 입력하세요"
          type="text"
        />
        <input
          className="findpwid"
          placeholder="아이디를 입력하세요"
          type="text"
        />
        <input
          className="findpwphone"
          placeholder="휴대폰번호를 입력하세요"
          type="tel"
        />
        <button className="findpwbutton">
          <div className="updatecancelbutton1" />
          <b className="b1">비밀번호 찾기</b>
        </button>
      </div>
      <MainFooter />
      <MainHeader onBackContainerClick={onBackContainerClick} />
    </div>
  );
};

FindPwPage.propTypes = {
  onClose: PropTypes.func,
};

export default FindPwPage;
