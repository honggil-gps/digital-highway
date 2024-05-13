import ListHeader from "../../../components/appguide/baemin/ListHeader1";
import "./StoreList.css";

const StoreList = () => {
  return (
    <div className="storelist">
      <div className="baekgyongstore">
        <div className="storelistframe3" />
        <div className="storename3">백경족발 부경점</div>
        <div className="starrate3">
          <img
            className="star-icon21"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="div188">4.5</div>
        </div>
        <div className="storeimg3">
          <img
            className="baekgyong-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-132@2x.png"
          />
          <img
            className="baekgyong-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-142@2x.png"
          />
          <img
            className="baekgyong-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-152@2x.png"
          />
        </div>
      </div>
      <div className="pugyongstore">
        <div className="storelistframe3" />
        <div className="storename3">뿌공족발 부경점</div>
        <div className="starrate3">
          <img
            className="star-icon21"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="div188">4.7</div>
        </div>
        <div className="storeimg3">
          <img
            className="baekgyong-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-131@2x.png"
          />
          <img
            className="baekgyong-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-141@2x.png"
          />
          <img
            className="baekgyong-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-151@2x.png"
          />
        </div>
      </div>
      <div className="mimistore">
        <div className="storelistframe3" />
        <div className="storename3">미미족발 부경점</div>
        <div className="starrate3">
          <img
            className="star-icon21"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="div188">4.7</div>
        </div>
        <div className="storeimg3">
          <img
            className="baekgyong-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-13@2x.png"
          />
          <img
            className="baekgyong-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-14@2x.png"
          />
          <img
            className="baekgyong-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-15@2x.png"
          />
        </div>
      </div>
      <ListHeader />
    </div>
  );
};

export default StoreList;
