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
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
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

      images.forEach((image) => {
        formData.append("images", image);
      });

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
  }, [title, content, tags, images, navigate]);

  const onImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  
    // 이미지 미리보기 설정
    const newImagePreviews = selectedImages.map((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });
  
    Promise.all(newImagePreviews).then((previews) => {
      setImagePreviews(previews);
    });
  };

  const onCancelImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newImagePreviews);
  };
  // image 상태가 업데이트될 때마다 미리보기 업데이트
  useEffect(() => {
    if (images.length > 0) {
      const newImagePreviews = images.map((image) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(image);
        });
      });
  
      Promise.all(newImagePreviews).then((previews) => {
        setImagePreviews(previews);
      });
    } else {
      setImagePreviews([]);
    }
  }, [images]);

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
            multiple
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
      </div>
      <div className="ncafe-image-preview-container">
        <div className="ncafe-image-preview">
          {imagePreviews.map((preview, index) => (
            <div key={index}>
              <img
                src={preview}
                alt={`Image preview ${index + 1}`}
                className="ncafe-preview-image"
              />
              <button className="ncafe-preview-cancel-button" onClick={() => onCancelImage(index)}>취소</button> {/* 이미지 취소 버튼 */}
            </div>
          ))}
        </div>
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
