// import React, { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import axios from "axios";
// import "./BandoPostPage.css";

// const BandoPostPage = ({ addPost }) => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [showImagePreview, setShowImagePreview] = useState(false);

//   const onBandoPopupCloseIconClick = useCallback(() => {
//     navigate("/community/bandoWeb");
//   }, [navigate]);

//   const onImageUploadClick = useCallback(() => {
//     const inputElement = document.getElementById("imageUploadInput");
//     if (inputElement) {
//       inputElement.click();
//     }
//   }, []);

//   const handleImageChange = (e) => {
//     const selectedImages = Array.from(e.target.files);
//     setImages((prevImages) => [...prevImages, ...selectedImages]);

//     // 이미지 미리보기 설정
//     const newImagePreviews = selectedImages.map((image) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(image);
//       return new Promise((resolve) => {
//         reader.onloadend = () => {
//           resolve(reader.result);
//         };
//       });
//     });

//     Promise.all(newImagePreviews).then((previews) => {
//       setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
//     });
//   };

//   const handleCancelImage = (index) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//     setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
//   };

//   const handleImagePreviewToggle = () => {
//     setShowImagePreview((prevShowImagePreview) => !prevShowImagePreview);
//   };

//   const handleSubmit = async () => {
//     if (title && content) {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("mainText", content);
//       images.forEach((image) => {
//         formData.append("images", image);
//       });

//       try {
//         await axios.post("http://localhost:4000/community/addPost", formData, {
//           withCredentials: true,
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });
//         navigate("/community/bandoWeb");
//       } catch (error) {
//         console.error("포스트 생성 중 오류가 발생했습니다!", error);
//       }
//     }
//   };

//   const isFormFilled = title && content;

//   return (
//     <div className="bando-postpage">
//       <div className="bando-popupbackground" />
//       <div className="bando-postbody">
//         <div className="bando-popupcontainer" />
//         <div className="bando-popupunderbar" />
//         <div className="bando-textinputsettingbox" />
//         <div className="bando-fontstylesettingbox" />
//         <textarea
//           className="bando-writingbodybox"
//           placeholder="새로운 소식을 남겨보세요. 공개밴드에 남긴 글은 누구나 볼 수 있습니다."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <textarea
//           className="bando-writingtitlebox"
//           placeholder="제목을 작성하세요"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <div
//           className="bando-textsubmitbutton"
//           onClick={handleSubmit}
//           style={{
//             backgroundColor: isFormFilled ? "#444A61" : "#ccc",
//             cursor: isFormFilled ? "pointer" : "default",
//           }}
//         >
//           올리기
//         </div>
//         <div
//           className={`bando-image-preview-button ${images.length > 0 ? "active" : ""}`}
//           onClick={handleImagePreviewToggle}
//         >
//           이미지 확인
//         </div>
//         <img
//           className="ant-designsetting-outlined-icon"
//           alt=""
//           src="/community/BandoWeb/antdesignsettingoutlined.svg"
//         />
//         <div className="bando-div1">글쓰기설정</div>
//         <img
//           className="tablertext-size-icon"
//           alt=""
//           src="/community/BandoWeb/tablertextsize.svg"
//         />
//         <img
//           className="carbontext-bold-icon"
//           alt=""
//           src="/community/BandoWeb/carbontextbold.svg"
//         />
//         <img
//           className="tableritalic-icon"
//           alt=""
//           src="/community/BandoWeb/tableritalic.svg"
//         />
//         <img
//           className="mingcuteunderline-line-icon"
//           alt=""
//           src="/community/BandoWeb/mingcuteunderlineline.svg"
//         />
//         <img
//           className="tablerstrikethrough-icon"
//           alt=""
//           src="/community/BandoWeb/tablerstrikethrough.svg"
//         />
//         <img
//           className="ioncolor-fill-icon"
//           alt=""
//           src="/community/BandoWeb/ioncolorfill.svg"
//         />
//         <img
//           className="hugeiconsimage-01"
//           alt=""
//           src="/community/BandoWeb/hugeiconsimage01.svg"
//           onClick={onImageUploadClick}
//         />
//         <input
//           id="imageUploadInput"
//           type="file"
//           accept="image/*"
//           multiple
//           style={{ display: "none" }}
//           onChange={handleImageChange}
//         />
//         {showImagePreview && imagePreviews.length > 0 && (
//           <div className="bando-image-preview-overlay" onClick={handleImagePreviewToggle}>
//             {imagePreviews.map((preview, index) => (
//               <div key={index} className="bando-image-preview-wrapper">
//                 <img src={preview} alt={`Preview ${index + 1}`} className="bando-image-preview" />
//                 <button className="cancel-button" onClick={() => handleCancelImage(index)}>
//                   취소
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//         <img
//           className="fluentemoji-16-regular-icon"
//           alt=""
//           src="/community/BandoWeb/fluentemoji16regular.svg"
//         />
//         <img
//           className="lets-iconsvideo-light"
//           alt=""
//           src="/community/BandoWeb/letsiconsvideolight.svg"
//         />
//         <img
//           className="rilive-line-icon"
//           alt=""
//           src="/community/BandoWeb/riliveline.svg"
//         />
//         <img
//           className="pepicons-pencilline-y"
//           alt=""
//           src="/community/BandoWeb/pepiconspencilliney.svg"
//         />
//         <img
//           className="phchart-bar-light-icon"
//           alt=""
//           src="/community/BandoWeb/phchartbarlight@2x.png"
//         />
//         <img
//           className="ant-designpaper-clip-outlined-icon"
//           alt=""
//           src="/community/BandoWeb/antdesignpaperclipoutlined.svg"
//         />
//         <img
//           className="uilcalender-icon"
//           alt=""
//           src="/community/BandoWeb/uilcalender.svg"
//         />
//         <img
//           className="solarchecklist-minimalistic-l-icon"
//           alt=""
//           src="/community/BandoWeb/solarchecklistminimalisticlinear.svg"
//         />
//         <img
//           className="midocument-check-icon"
//           alt=""
//           src="/community/BandoWeb/midocumentcheck.svg"
//         />
//         <img
//           className="mdiuser-check-outline-icon"
//           alt=""
//           src="/community/BandoWeb/mdiusercheckoutline.svg"
//         />
//         <img
//           className="material-symbolsquiz-outline-icon"
//           alt=""
//           src="/community/BandoWeb/materialsymbolsquizoutline.svg"
//         />
//         <img
//           className="mdiform-select-icon"
//           alt=""
//           src="/community/BandoWeb/mdiformselect.svg"
//         />
//         <img
//           className="jammore-horizontal-icon"
//           alt=""
//           src="/community/BandoWeb/jammorehorizontal.svg"
//         />
//       </div>
//       <div className="bando-posttitle">
//         <div className="bando-popupbackground" />
//         <img
//           className="bando-popupcloseicon"
//           alt=""
//           src="/community/BandoWeb/bandopopupcloseicon.svg"
//           onClick={onBandoPopupCloseIconClick}
//         />
//         <div
//           className="bando-popupclosebutton"
//           onClick={onBandoPopupCloseIconClick}
//           role="button"
//           tabIndex={0}
//           onKeyPress={(e) => {
//             if (e.key === "Enter" || e.key === " ") {
//               onBandoPopupCloseIconClick();
//             }
//           }}
//         />
//         <b className="bando-b">글쓰기</b>
//         <div className="bando-writeboxtitle" />
//       </div>
//     </div>
//   );
// };

// BandoPostPage.propTypes = {
//   addPost: PropTypes.func.isRequired,
// };

// export default BandoPostPage;





import React, { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./BandoPostPage.css";

const BandoPostPage = ({ addPost }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    if (location.state && location.state.post) {
      const { post } = location.state;
      setTitle(post.title);
      setContent(post.mainText);
      setImages(post.images || []);
      setImagePreviews(post.images ? post.images.map(image => URL.createObjectURL(image)) : []);
      setIsEditing(true);
      setPostId(post._id);
    }
  }, [location.state]);

  const onBandoPopupCloseIconClick = useCallback(() => {
    navigate("/community/bandoWeb");
  }, [navigate]);

  const onImageUploadClick = useCallback(() => {
    const inputElement = document.getElementById("imageUploadInput");
    if (inputElement) {
      inputElement.click();
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);

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
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
    });
  };

  const handleCancelImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleImagePreviewToggle = () => {
    setShowImagePreview((prevShowImagePreview) => !prevShowImagePreview);
  };

  const handleSubmit = async () => {
    if (title && content) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("mainText", content);
      images.forEach((image) => {
        formData.append("images", image);
      });

      try {
        if (isEditing) {
          await axios.put(`http://localhost:4000/community/${postId}/updatePost`, formData, {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } else {
          await axios.post("http://localhost:4000/community/addPost", formData, {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        }
        navigate("/community/bandoWeb");
      } catch (error) {
        console.error("포스트 처리 중 오류가 발생했습니다!", error);
      }
    }
  };

  const isFormFilled = title && content;

  return (
    <div className="bando-postpage">
      <div className="bando-popupbackground" />
      <div className="bando-postbody">
        <div className="bando-popupcontainer" />
        <div className="bando-popupunderbar" />
        <div className="bando-textinputsettingbox" />
        <div className="bando-fontstylesettingbox" />
        <textarea
          className="bando-writingbodybox"
          placeholder="새로운 소식을 남겨보세요. 공개밴드에 남긴 글은 누구나 볼 수 있습니다."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <textarea
          className="bando-writingtitlebox"
          placeholder="제목을 작성하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          className="bando-textsubmitbutton"
          onClick={handleSubmit}
          style={{
            backgroundColor: isFormFilled ? "#444A61" : "#ccc",
            cursor: isFormFilled ? "pointer" : "default",
          }}
        >
          {isEditing ? "수정하기" : "올리기"}
        </div>
        <div
          className={`bando-image-preview-button ${images.length > 0 ? "active" : ""}`}
          onClick={handleImagePreviewToggle}
        >
          이미지 확인
        </div>
        <img
          className="ant-designsetting-outlined-icon"
          alt=""
          src="/community/BandoWeb/antdesignsettingoutlined.svg"
        />
        <div className="bando-div1">글쓰기설정</div>
        <img
          className="tablertext-size-icon"
          alt=""
          src="/community/BandoWeb/tablertextsize.svg"
        />
        <img
          className="carbontext-bold-icon"
          alt=""
          src="/community/BandoWeb/carbontextbold.svg"
        />
        <img
          className="tableritalic-icon"
          alt=""
          src="/community/BandoWeb/tableritalic.svg"
        />
        <img
          className="mingcuteunderline-line-icon"
          alt=""
          src="/community/BandoWeb/mingcuteunderlineline.svg"
        />
        <img
          className="tablerstrikethrough-icon"
          alt=""
          src="/community/BandoWeb/tablerstrikethrough.svg"
        />
        <img
          className="ioncolor-fill-icon"
          alt=""
          src="/community/BandoWeb/ioncolorfill.svg"
        />
        <img
          className="hugeiconsimage-01"
          alt=""
          src="/community/BandoWeb/hugeiconsimage01.svg"
          onClick={onImageUploadClick}
        />
        <input
          id="imageUploadInput"
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        {showImagePreview && imagePreviews.length > 0 && (
          <div className="bando-image-preview-overlay" onClick={handleImagePreviewToggle}>
            {imagePreviews.map((preview, index) => (
              <div key={index} className="bando-image-preview-wrapper">
                <img src={preview} alt={`Preview ${index + 1}`} className="bando-image-preview" />
                <button className="cancel-button" onClick={() => handleCancelImage(index)}>
                  취소
                </button>
              </div>
            ))}
          </div>
        )}
        <img
          className="fluentemoji-16-regular-icon"
          alt=""
          src="/community/BandoWeb/fluentemoji16regular.svg"
        />
        <img
          className="lets-iconsvideo-light"
          alt=""
          src="/community/BandoWeb/letsiconsvideolight.svg"
        />
        <img
          className="rilive-line-icon"
          alt=""
          src="/community/BandoWeb/riliveline.svg"
        />
        <img
          className="pepicons-pencilline-y"
          alt=""
          src="/community/BandoWeb/pepiconspencilliney.svg"
        />
        <img
          className="phchart-bar-light-icon"
          alt=""
          src="/community/BandoWeb/phchartbarlight@2x.png"
        />
        <img
          className="ant-designpaper-clip-outlined-icon"
          alt=""
          src="/community/BandoWeb/antdesignpaperclipoutlined.svg"
        />
        <img
          className="uilcalender-icon"
          alt=""
          src="/community/BandoWeb/uilcalender.svg"
        />
        <img
          className="solarchecklist-minimalistic-l-icon"
          alt=""
          src="/community/BandoWeb/solarchecklistminimalisticlinear.svg"
        />
        <img
          className="midocument-check-icon"
          alt=""
          src="/community/BandoWeb/midocumentcheck.svg"
        />
        <img
          className="mdiuser-check-outline-icon"
          alt=""
          src="/community/BandoWeb/mdiusercheckoutline.svg"
        />
        <img
          className="material-symbolsquiz-outline-icon"
          alt=""
          src="/community/BandoWeb/materialsymbolsquizoutline.svg"
        />
        <img
          className="mdiform-select-icon"
          alt=""
          src="/community/BandoWeb/mdiformselect.svg"
        />
        <img
          className="jammore-horizontal-icon"
          alt=""
          src="/community/BandoWeb/jammorehorizontal.svg"
        />
      </div>
      <div className="bando-posttitle">
        <div className="bando-popupbackground" />
        <img
          className="bando-popupcloseicon"
          alt=""
          src="/community/BandoWeb/bandopopupcloseicon.svg"
          onClick={onBandoPopupCloseIconClick}
        />
        <div
          className="bando-popupclosebutton"
          onClick={onBandoPopupCloseIconClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onBandoPopupCloseIconClick();
            }
          }}
        />
        <b className="bando-b">{isEditing ? "글 수정" : "글쓰기"}</b>
        <div className="bando-writeboxtitle" />
      </div>
    </div>
  );
};

BandoPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default BandoPostPage;
