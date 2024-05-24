import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../../components/appguide/baemin/AddressContext";
import "./SetAddress1.css";

const SetAddress1 = () => {
  const { baseAddress, setDetailAddress, detailAddress } = useAddress(); // 전역 주소 상태와 설정 함수 사용
  const navigate = useNavigate();

  // 상세 주소를 기존 주소에 추가하고 다음 페이지로 네비게이트
  const onButtonFrameClick = useCallback(() => {
    if (detailAddress) {
      const fullAddress = `${baseAddress}, ${detailAddress}`; // 기존 주소와 상세 주소 결합
      navigate("/maincontents/main", { state: { address: fullAddress } });
    } else {
      alert("상세 주소를 입력해주세요.");
    }
  }, [navigate, baseAddress, detailAddress]);

  return (
    <div className="baeman-setaddress2">
      <div className="baeman-button2">
        <div className="baeman-buttonframe2" onClick={onButtonFrameClick} />
        <div className="baeman-buttontext2">완료</div>
      </div>
      <input
        className="baeman-setaddress2-child"
        placeholder="상세주소를 입력해주세요"
        type="text"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
      />
      <div className="baeman-addresstext">{baseAddress}</div>
    </div>
  );
};

export default SetAddress1;
