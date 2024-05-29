import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WritePost.css";

const WritePost = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const [postContent, setPostContent] = useState("");

  const onEpbackClick = useCallback(() => {
    navigate("/sns");
  }, [navigate]);

  const onImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageSrc(reader.result);
    };

    reader.onerror = () => {
      console.error("파일 읽기에 실패했습니다");
    };

    reader.onabort = () => {
      console.warn("파일 읽기가 중단되었습니다");
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/instaWebMain", { state: { imageSrc, postContent } });
  };
  
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
        <button className="writepostbutton" onClick={handleSubmit}>
          <div className="div">공유하기</div>
        </button>
      </div>
      <div className="postcontent">
        <div className="postleftside">
          {imageSrc ? (
            <img
              className="postimageframe-icon"
              alt="미리보기"
              src={imageSrc}
            />
          ) : (
            <img
              className="postimageframe-icon"
              alt=""
              src="/community/instagramWeb/postimageframe1@2x.png"
            />
          )}
        </div>
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
        <button
            className="uploadbutton"
            onClick={() => document.getElementById("imageUpload").click()}
        >        
          <div className="uploadbutton-child" />
          <b className="b1">컴퓨터에서 선택</b>
        </button>
        <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onImageUpload}
        />
        <textarea
          className="posttypingarea"
          placeholder={`문구를 입력하세요..(최대2000자)`}
          maxLength={2000}
          required={true}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
    </div>
  </div>
  );
};

export default WritePost;