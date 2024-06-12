// import React, { useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import "./BandoPostPage.css";

// const BandoPostPage = ({ addPost }) => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
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
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(file);
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleImagePreviewToggle = () => {
//     setShowImagePreview((prevShowImagePreview) => !prevShowImagePreview);
//   };

//   const handleSubmit = () => {
//     if (title && content) {
//       addPost(title, content, imagePreview);
//       navigate("/community/bandoWeb");
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
//           className={`bando-image-preview-button ${image ? "active" : ""}`}
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
//           style={{ display: "none" }}
//           onChange={handleImageChange}
//         />
//         {showImagePreview && imagePreview && (
//           <div className="bando-image-preview-overlay" onClick={handleImagePreviewToggle}>
//             <img src={imagePreview} alt="Preview" className="bando-image-preview" />
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



import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BandoPostPage.css";

const BandoPostPage = ({ addPost }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState(false);

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
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagePreviewToggle = () => {
    setShowImagePreview((prevShowImagePreview) => !prevShowImagePreview);
  };

  const handleSubmit = () => {
    if (title && content) {
      addPost(title, content, imagePreview);
      navigate("/community/bandoWeb");
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
          올리기
        </div>
        <div
          className={`bando-image-preview-button ${image ? "active" : ""}`}
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
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        {showImagePreview && imagePreview && (
          <div className="bando-image-preview-overlay" onClick={handleImagePreviewToggle}>
            <img src={imagePreview} alt="Preview" className="bando-image-preview" />
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
        <b className="bando-b">글쓰기</b>
        <div className="bando-writeboxtitle" />
      </div>
    </div>
  );
};

BandoPostPage.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default BandoPostPage;
