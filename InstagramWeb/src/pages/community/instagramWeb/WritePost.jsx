import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

const WritePost = () => {
  const navigate = useNavigate();

  const onEpbackClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="writepost">
      <div className="writeposthead">
        <button className="epback" onClick={onEpbackClick}>
          <img
            className="vector-icon"
            alt=""
            src="/community/instagramWeb/vector.svg"
          />
          <img
            className="vector-icon1"
            alt=""
            src="/community/instagramWeb/LeftVector.svg"
          />
        </button>
        <b className="b">새 게시물 만들기</b>
        <button className="writepostbutton">
          <div className="div">공유하기</div>
        </button>
      </div>
      <img
        className="postimageframe-icon"
        alt=""
        src="/community/instagramWeb/postimageframe1@2x.png"
      />
      <div className="postrightside">
        <div className="postidshowframe">
          <img
            className="postidshowframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-21@2x.png"
          />
          <b className="digital-highway">Digital_highway</b>
        </div>
        <img
          className="imojiframe-icon"
          alt=""
          src="/community/instagramWeb/imojiframe.svg"
        />
        <div className="div1">사진을 컴퓨터에서 선택해주세요</div>
        <button className="uploadbutton">
          <div className="uploadbutton-child" />
          <b className="b1">컴퓨터에서 선택</b>
        </button>
        <textarea
          className="posttypingarea"
          placeholder={`문구를 입력하세요..(최대2000자)
a
a
a
a
a
a
a
a
a
a
a
`}
          maxLength={2000}
          required={true}
        />
        <div className="frame" />
        <div className="frame" />
      </div>
    </div>
  );
};

export default WritePost;
