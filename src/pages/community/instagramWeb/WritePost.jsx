import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./WritePost.css";

const WritePost = () => {
  const [postContent, setPostContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const onIonarrowBackIconClick = useCallback(() => {
    navigate("/community/instagramWeb/");
  }, [navigate]);

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };
  
  const handleChooseFile = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    
    // Set the preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };  
  
  const WritingButtonClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("writer", writer);
    formData.append("postContent", postContent);
    if (selectedFile) {
      formData.append("images", selectedFile);
    }

    try {
      // const response = await axios.post("http://localhost:4000/sns/upload", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // console.log('Upload response:', response.data); // 응답 데이터 확인
      navigate("/community/instagramWeb/");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };
  
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
      {preview && (
        <img
          className="outsta-postimageframe-icon1"
          alt="Preview"
          src={preview}
        />
      )}
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
        <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} ref={fileInputRef}/>
        <div className="outsta-div2">사진을 컴퓨터에서 선택해주세요</div>
        <button className="outsta-uploadbutton" onClick={handleChooseFile}>
          <div className="outsta-uploadbutton-child" />
          <b className="outsta-b5">컴퓨터에서 선택</b>
        </button>
        <div className="outsta-posttypingcontainer" />
          <textarea
            className="outsta-posttypingarea"
            placeholder={`문구를 입력하세요..(최대2000자)`}
            maxLength={2000}
            required={true}
            value={postContent}
            onChange={handlePostContentChange}
          />
      </div>
    </div>
  );
};

export default WritePost;
