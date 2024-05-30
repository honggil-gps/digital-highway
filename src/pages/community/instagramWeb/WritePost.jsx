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
    <div className="outsta-writepost">
      <div className="outsta-writeposthead">
        <b className="outsta-b4">새 게시물 만들기</b>
        <button className="outsta-writepostbutton" onClick={WritingButtonClick}>
          <div className="outsta-div1">공유하기</div>
        </button>
        <img
          className="outsta-ionarrow-back-icon"
          alt=""
          src="/community/instagramWeb/ionarrowback.svg"
          onClick={onIonarrowBackIconClick}
        />
      </div>
      <img
        className="outsta-postimageframe-icon1"
        alt=""
        src="/community/instagramWeb/postimageframe1@2x.png"
      />
      <div className="outsta-postrightside">
        <div className="outsta-postidshowframe">
          <img
            className="outsta-postidshowframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-22@2x.png"
          />
          <b className="outsta-digital-highway">Digital_highway</b>
        </div>
        <img
          className="outsta-imojiframe-icon"
          alt=""
          src="/community/instagramWeb/imojiframe.svg"
        />
        <div className="outsta-div2">사진을 컴퓨터에서 선택해주세요</div>
        <button className="outsta-uploadbutton">
          <div className="outsta-uploadbutton-child" />
          <b className="outsta-b5">컴퓨터에서 선택</b>
        </button>
        <textarea
          className="outsta-posttypingarea"
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
        <div className="outsta-posttypingcontainer" />
      </div>
    </div>
  );
};

export default WritePost;
