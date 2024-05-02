import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListHeader from "../../../components/appguide/baemin/ListHeader1";
import "./SortList.css";

const SortList = () => {
  const navigate = useNavigate();

  const onMalwangStoreContainerClick = useCallback(() => {
    navigate("/menulist");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("/storelist");
  }, [navigate]);

  return (
    <div className="sortlist">
      <div className="malwangstore" onClick={onMalwangStoreContainerClick}>
        <div className="storelistframe3" />
        <div className="storename3">말왕족발 부경점</div>
        <div className="starrate3">
          <img
            className="star-icon4"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="div36">5.0</div>
        </div>
        <div className="storeimg3">
          <img
            className="malwang-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-133@2x.png"
          />
          <img
            className="malwnag-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-14@2x.png"
          />
          <img
            className="malwang-3-icon"
            alt=""
            src="/appguide/baemin/rectangle-15@2x.png"
          />
        </div>
      </div>
      <div className="civilstore">
        <div className="storelistframe3" />
        <div className="storename3">시민족발 부경점</div>
        <div className="starrate3">
          <img
            className="star-icon4"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="div36">4.9</div>
        </div>
        <div className="storeimg3">
          <img
            className="malwang-1-icon"
            alt=""
            src="/appguide/baemin/rectangle-134@2x.png"
          />
          <img
            className="malwnag-2-icon"
            alt=""
            src="/appguide/baemin/rectangle-141@2x.png"
          />
          <img
            className="malwang-3-icon"
            alt=""
            src="/appguide/baemin/civilStore.png"
          />
        </div>
      </div>
      <div className="catstore">
        <div className="storelistframe3" />
        <div className="storename3">야웅족발 부경점</div>
        <div className="starrate3">
          <img
            className="star-icon4"
            alt=""
            src="/appguide/baemin/star@2x.png"
          />
          <div className="div36">4.8</div>
        </div>
        <div className="storeimg3">
          <img
            className="malwang-1-icon"
            alt=""
            src="/appguide/baemin/cat3@2x.png"
          />
          <img
            className="malwnag-2-icon"
            alt=""
            src="/appguide/baemin/cat-2.png"
          />
          <img
            className="malwang-3-icon"
            alt=""
            src="/appguide/baemin/cat-3.png"
          />
        </div>
      </div>
      <ListHeader />
    </div>
  );
};

export default SortList;
