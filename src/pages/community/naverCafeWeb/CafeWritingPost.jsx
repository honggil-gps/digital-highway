import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ContentsAndTag from "../../../components/community/naverCafeWeb/ContentsAndTag";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafeWritingPost.css";

const CafeWritingPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onHeadWritingButtonClick = useCallback(async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("mainText", content);
      formData.append("tags", tags);

      if (image) {
        formData.append("images", image);
      }

      const response = await axios.post("http://localhost:4000/community/addPost", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        navigate("/community/naverCafeWeb/");
      }
    } catch (error) {
      console.error("포스트 생성 중 오류가 발생했습니다!", error);
    }
  }, [title, content, tags, image, navigate]);

  const onImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // 이미지 미리보기 설정
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  const onCancelImage = () => {
    setImage(null);
    setImagePreview(null);
    document.getElementById("imageInput").value = null; // input 파일 선택 초기화
  };

  // image 상태가 업데이트될 때마다 미리보기 업데이트
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);

  return (
    <div className="ncafe-cafewritingpost">
      <img
        className="ncafe-cafewritingpost-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
        onClick={onRectangleImageClick}
      />
      <div className="ncafe-cafewritingposthead">
        <b className="ncafe-b9">카페글작성</b>
        <button
          className="ncafe-headwritingbutton"
          onClick={onHeadWritingButtonClick}
        >
          <div className="ncafe-headwritingbutton-child" />
          <b className="ncafe-b10">등록</b>
        </button>
      </div>
      <div className="ncafe-writingposttitle">
        <input
          className="ncafe-input"
          placeholder="제목을 입력해 주세요."
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
      </div>
      <div className="ncafe-toolbarframe">
        <button className="ncafe-picbutton" onClick={() => document.getElementById('imageInput').click()}>
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/picline.svg"
          />
          <div className="ncafe-div23">사진</div>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={onImageChange}
            style={{ display: 'none' }}
          />
        </button>
        <button className="ncafe-videobutton">
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/carbonvideo.svg"
          />
          <div className="ncafe-div24">동영상</div>
        </button>
        <div className="ncafe-stickerbutton">
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/lucidesmile.svg"
          />
          <div className="ncafe-div25">스티커</div>
        </div>
        <div className="ncafe-filebutton">
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/lucidefolderplus.svg"
          />
          <div className="ncafe-div26">파일</div>
        </div>
        <div className="ncafe-linkbutton">
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/lucidelink.svg"
          />
          <div className="ncafe-div26">링크</div>
        </div>
        <div className="ncafe-placebutton">
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/phmappinbold.svg"
          />
          <div className="ncafe-div26">장소</div>
        </div>
        <div className="ncafe-tablebutton">
          <img
            className="ncafe-mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/icontable.svg"
          />
          <div className="ncafe-div29">표</div>
        </div>
        {/* <button className="ncafe-imagepreviewbutton" onClick={onImagePreviewClick}>
          <b>이미지확인</b>
        </button> */}
      </div>
      <div className="ncafe-image-preview">
        {imagePreview && (
          <div>
            <img
              src={imagePreview}
              alt="Image preview"
              className="ncafe-preview-image"
            />
            <button className="ncafe-preview-cancel-button" onClick={onCancelImage}>취소</button>
          </div>
        )}
      </div>
      <ContentsAndTag
        content={content}
        setContent={setContent}
        tags={tags}
        setTags={setTags}
      />
      <NaverCafeSidebar
        onCafeWritingButtonClick={onCafeWritingButtonClick}
      />
    </div>
  );
};

export default CafeWritingPost;
