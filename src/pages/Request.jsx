import "./Request.css";

const Request = () => {
  return (
    <div className="request">
      <div className="frame2">
        <div className="frame3">
          <div className="frame-child7" />
          <div className="div124">
            <span className="txt18">
              <p className="p115">부산 남구 용소로 45(대연동)</p>
              <p className="p115">303호</p>
            </span>
          </div>
        </div>
      </div>
      <div className="frame4">
        <div className="frame5">
          <div className="div125">휴대폰번호 인증이 필요합니다</div>
          <div className="rectangle-parent28">
            <button className="rectangle-button" />
            <div className="div126">인증</div>
          </div>
        </div>
      </div>
      <div className="frame6">
        <div className="div125">요청사항</div>
      </div>
      <div className="frame7">
        <div className="div125">가게 사장님께</div>
      </div>
      <input
        className="request-child"
        placeholder="ex)일회용 젓가락이 필요해요"
        type="text"
      />
      <div className="frame8">
        <div className="div125">라이더님께</div>
      </div>
      <div className="frame9">
        <div className="frame10">
          <div className="frame-child8" />
          <div className="div125">위 내용에 모두 동의합니다</div>
        </div>
        <div className="wrapper3">
          <div className="div125">44,900원 결제하기</div>
        </div>
      </div>
      <input
        className="request-item"
        placeholder="ex) 안전하게 와주세요"
        type="text"
      />
      <div className="frame11">
        <div className="frame12">
          <div className="div125">알뜰배달</div>
          <img className="won-icon1" alt="" src="/won@2x.png" />
          <div className="div133">로 받을게요</div>
        </div>
        <div className="div134">30~45분 후 도착</div>
      </div>
    </div>
  );
};

export default Request;
