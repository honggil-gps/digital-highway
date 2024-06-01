import "./BandoSidebar.css";

const BandoSidebar = ({ className = "" }) => {
  return (
    <div className={`bandosidebar ${className}`}>
      <div className="bandosidebarbg" />
      <img
        className="bandoinfoimage-icon"
        alt=""
        src="/community/BandoWeb/bandoinfoimage@2x.png"
      />
      <div className="bandoinfocontainer" />
      <div className="bandotitlebox" />
      <div className="bandomemberbox" />
      <div className="bandoinfobox" />
      <div className="bandowritingstartbutton" />
      <b className="bandob1">글쓰기</b>
      <b className="bandob2">디지털둘레길</b>
      <div className="bandodiv2">멤버 6 • 리더 홍</div>
      <div className="bandodiv3">{`밴드 정보 보기 >`}</div>
      <div className="bandodiv4">
        <p className="bandop">누구나 밴드를 검색해 찾을 수 있고,</p>
        <p className="bandop">밴드소개와 게시글을 볼 수 있습니다.</p>
      </div>
    </div>
  );
};

BandoSidebar.propTypes = {
  className: PropTypes.string,
};

export default BandoSidebar;
