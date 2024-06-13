import React, { useCallback, useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import { v4 as uuidv4 } from 'uuid'; // UUID 생성기
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
    console.log("WritingButtonClick called"); // 버튼 클릭 확인 로그
    const formData = new FormData();
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

      const newPost = {
        id: uuidv4(), // 고유한 ID 생성
        postContent,
        image: preview,
        author: "Digital_highway", // 작성자 이름을 실제 값으로 변경
      };

      // 기존 데이터를 배열로 불러오기
      let existingPosts = JSON.parse(localStorage.getItem("postData"));
      if (!Array.isArray(existingPosts)) {
        existingPosts = [];
      }
      existingPosts.unshift(newPost); // 새로운 게시물을 맨 위에 추가
      localStorage.setItem("postData", JSON.stringify(existingPosts));
      console.log("Data saved to localStorage:", existingPosts); // 데이터 저장 확인 로그
      navigate("/community/instagramWeb/");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <div className="outsta-writepost">
      <div className="outsta-writepostbody">
        {preview && (
          <img
            className="outsta-postimageframe-icon1"
            alt="Preview"
            src={preview}
          />
        )}
      </div>
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
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <div className="outsta-div2">사진을 컴퓨터에서 선택해주세요</div>
        <button className="outsta-uploadbutton" onClick={handleChooseFile}>
          <div className="outsta-uploadbutton-child" />
          <b className="outsta-b5">컴퓨터에서 선택</b>
        </button>
        <textarea
          className="outsta-posttypingarea"
          placeholder={`문구를 입력하세요..(최대2000자)`}
          maxLength={2000}
          value={postContent}
          onChange={handlePostContentChange}
          required={true}
        />
        <div className="outsta-posttypingcontainer" />
      </div>
    </div>
  );
};

export default WritePost;
