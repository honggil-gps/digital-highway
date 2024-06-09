import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BandoMain.css";

const BandoMain = ({ posts }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const onTextClick = useCallback(() => {
    navigate("/community/bandoWeb/postpage");
  }, [navigate]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // 댓글 등록 로직을 추가하세요
    console.log(comment);
    setComment("");
  };

  return (
    <div className="bandomain">
      <div className="bandosidebarsection">
        <div className="bandosidebar1">
          <div className="bandosidebarbg1" />
          <img
            className="bandoinfoimage-icon1"
            alt=""
            src="/community/BandoWeb/bandoinfoimage@2x.png"
          />
          <div className="bandoinfocontainer1" />
          <div className="bandotitlebox2" />
          <div className="bandomemberbox1" />
          <div className="bandoinfobox1" />
          <div className="bandowritingstartbutton1" onClick={onTextClick} />
          <b className="bandob7" onClick={onTextClick}>
            글쓰기
          </b>
          <b className="bandob8">디지털둘레길</b>
          <div className="bandodiv15">멤버 6 • 리더 홍</div>
          <div className="bandodiv16">{`밴드 정보 보기 >`}</div>
          <div className="bandodiv17">
            <p className="bandop5">누구나 밴드를 검색해 찾을 수 있고,</p>
            <p className="bandop5">밴드소개와 게시글을 볼 수 있습니다.</p>
          </div>
        </div>
      </div>
      <div className="bandobodysection">
        <div className="bandopostlisttest">
          <div className="bandopostlistframe1">
            {posts.map((post, index) => (
              <div key={index} className="bandopostframe1">
                <div className="bandouser1">
                  <div className="bandodiv18">{post.date}</div>
                  <b className="bandob9">{post.user}</b>
                  <img
                    className="bandouserimagebox-icon1"
                    alt=""
                    src="/community/BandoWeb/bandouserimagebox@2x.png"
                  />
                  <div className="bandousernamebox1" />
                </div>
                <div className="bandopost1">
                  <div className="bandopostbackground1" />
                  <div className="bandotitlebox3" />
                  <div className="bandotextbox1" />
                  <b className="bandob10">{post.title}</b>
                  <div className="bandodiv19">
                    <p className="bandop5">{post.content}</p>
                  </div>
                  <img
                    className="bandobodyimage-icon1"
                    alt=""
                    src="/community/BandoWeb/bandobodyimage@222x.png"
                  />
                  <img
                    className="mingcutemore-2-fill-icon1"
                    alt=""
                    src="/community/BandoWeb/mingcutemore2fill.svg"
                  />
                  <div className="bandopostunderbar1" />
                  <div className="bandocommentlistbox1" />
                  <div className="bandodiv20">댓글 2</div>
                  <div className="bandocommentviewbutton1" />
                  <img
                    className="solaralt-arrow-up-line-duoton-icon1"
                    alt=""
                    src="/community/BandoWeb/solaraltarrowuplineduotone.svg"
                  />
                  <img
                    className="fa-solideye-icon1"
                    alt=""
                    src="/community/BandoWeb/fasolideye.svg"
                  />
                  <div className="bandoviewcountbox1" />
                  <div className="bandodiv21">29</div>
                </div>
                <div className="bandolikesharebar1">
                  <div className="bandolikesharebarbg1" />
                  <img
                    className="akar-iconsheart1"
                    alt=""
                    src="/community/BandoWeb/akariconsheart.svg"
                  />
                  <div className="bandodiv22">좋아요</div>
                  <div className="bandodiv23">공유하기</div>
                  <img
                    className="icon-parkshare1"
                    alt=""
                    src="/community/BandoWeb/iconparkshare.svg"
                  />
                </div>
              </div>
            ))}
            <div className="bandousercomment2">
              <div className="bandocommentcontainer2" />
              <img
                className="bandousercomment-inner"
                alt=""
                src="/community/BandoWeb/mushroom.png"
              />
              <b className="bandob11">디지털마스터</b>
              <div className="bandocommentuserbox2" />
              <div className="bandocommentbodybox2" />
              <div className="bandopostingtimebox2" />
              <div className="bandodiv24">좋은 정보 감사합니다</div>
              <div className="bandodiv25">2024.05.30 • 🙂 표정짓기</div>
            </div>
            <div className="bandousercomment2">
              <div className="bandocommentcontainer2" />
              <img
                className="bandousercomment-inner"
                alt=""
                src="/community/BandoWeb/ellipse-2@2x.png"
              />
              <b className="bandob11">달달팽이</b>
              <div className="bandocommentuserbox2" />
              <div className="bandocommentbodybox2" />
              <div className="bandopostingtimebox2" />
              <div className="bandodiv24">공유할께요!</div>
              <div className="bandodiv25">2024.05.30 • 🙂 표정짓기</div>
            </div>
            <div className="bandocomment-input-container">
              <img
                className="bandouserimage"
                alt=""
                src="/community/BandoWeb/bandouserimagebox@2x.png"
              />
              <input
                type="text"
                value={comment}
                onChange={handleCommentChange}
                className="bandocomment-input"
                placeholder="댓글을 남겨주세요."
              />
              <button
                onClick={handleCommentSubmit}
                className={`bandosend-button ${comment.trim() ? "active" : ""}`}
              >
                보내기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandoMain;
