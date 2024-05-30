import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

const WritePost = () => {
  const navigate = useNavigate();

  const onIonarrowBackIconClick = useCallback(() => {
    navigate("/community/instagramWeb/");
  }, [navigate]);

  const WritingButtonClick = useCallback(() => {
    navigate("/community/instagramWeb/");
  }, [navigate]);

  return (
    <div className="writepost">
      <div className="writeposthead">
        <b className="b4">새 게시물 만들기</b>
        <button className="writepostbutton" onClick={WritingButtonClick}>
          <div className="div1">공유하기</div>
        </button>
        <img
          className="ionarrow-back-icon"
          alt=""
          src="/community/instagramWeb/ionarrowback.svg"
          onClick={onIonarrowBackIconClick}
        />
      </div>
      <img
        className="postimageframe-icon1"
        alt=""
        src="/community/instagramWeb/postimageframe1@2x.png"
      />
      <div className="postrightside">
        <div className="postidshowframe">
          <img
            className="postidshowframe-child"
            alt=""
            src="/community/ellipse-22@2x.png"
          />
          <b className="digital-highway">Digital_highway</b>
        </div>
        <img
          className="imojiframe-icon"
          alt=""
          src="/community/instagramWeb/imojiframe.svg"
        />
        <div className="div2">사진을 컴퓨터에서 선택해주세요</div>
        <button className="uploadbutton">
          <div className="uploadbutton-child" />
          <b className="b5">컴퓨터에서 선택</b>
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
        <div className="posttypingcontainer" />
      </div>
    </div>
  );
};

export default WritePost;
