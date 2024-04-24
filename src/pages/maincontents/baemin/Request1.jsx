import "./Request1.css";

const Request1 = () => {
  return (
    <div className="request">
      <div className="frame3">
        <div className="frame4">
          <div className="frame-child1" />
          <div className="div117">
            <span className="txt12">
              <p className="p60">부산 남구 용소로 45(대연동)</p>
              <p className="p60">303호</p>
            </span>
          </div>
        </div>
      </div>
      <div className="frame5">
        <div className="frame6">
          <div className="div118">휴대폰번호 인증이 필요합니다</div>
          <div className="rectangle-parent15">
            <button className="rectangle-button" />
            <div className="div119">인증</div>
          </div>
        </div>
      </div>
      <div className="frame7">
        <div className="div118">요청사항</div>
      </div>
      <div className="frame8">
        <div className="div118">가게 사장님께</div>
      </div>
      <input
        className="request-child"
        placeholder="ex)일회용 젓가락이 필요해요"
        type="text"
      />
      <div className="frame9">
        <div className="div118">라이더님께</div>
      </div>
      <div className="frame10">
        <div className="frame11">
          <div className="frame-child2" />
          <div className="div118">위 내용에 모두 동의합니다</div>
        </div>
        <div className="wrapper2">
          <div className="div118">44,900원 결제하기</div>
        </div>
      </div>
      <input
        className="request-item"
        placeholder="ex) 안전하게 와주세요"
        type="text"
      />
      <div className="frame12">
        <div className="frame13">
          <div className="div118">알뜰배달</div>
          <img className="won-icon1" alt="" src="/won@2x.png" />
          <div className="div126">로 받을게요</div>
        </div>
        <div className="div127">30~45분 후 도착</div>
      </div>
    </div>
  );
};

export default Request1;
