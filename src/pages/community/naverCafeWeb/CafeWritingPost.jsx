import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContentsAndTag from "../../../components/community/naverCafeWeb/ContentsAndTag";
import NaverCafeSidebar from "../../../components/community/naverCafeWeb/NaverCafeSidebar1";
import "./CafeWritingPost.css";

const CafeWritingPost = () => {
  const navigate = useNavigate();

  const onCafeWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/cafewritingpost");
  }, [navigate]);

  const onRectangleImageClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  const onHeadWritingButtonClick = useCallback(() => {
    navigate("/community/naverCafeWeb/");
  }, [navigate]);

  return (
    <div className="cafewritingpost">
      <img
        className="cafewritingpost-child"
        alt=""
        src="/community/naverCafeWeb/bannerimg.png"
        onClick={onRectangleImageClick}
      />
      <div className="cafewritingposthead">
        <b className="b9">카페글작성</b>
        <button
          className="headwritingbutton"
          onClick={onHeadWritingButtonClick}
        >
          <div className="headwritingbutton-child" />
          <b className="b10">등록</b>
        </button>
      </div>
      <div className="writingposttitle">
        <input
          className="input"
          placeholder="제목을 입력해 주세요."
          type="text"
        />
      </div>
      <div className="toolbarframe">
        <button className="picbutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/picline.svg"
          />
          <div className="div23">사진</div>
        </button>
        <button className="videobutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/carbonvideo.svg"
          />
          <div className="div24">동영상</div>
        </button>
        <div className="stickerbutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/lucidesmile.svg"
          />
          <div className="div25">스티커</div>
        </div>
        <div className="filebutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/lucidefolderplus.svg"
          />
          <div className="div26">파일</div>
        </div>
        <div className="linkbutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/lucidelink.svg"
          />
          <div className="div26">링크</div>
        </div>
        <div className="placebutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/phmappinbold.svg"
          />
          <div className="div26">장소</div>
        </div>
        <div className="tablebutton">
          <img
            className="mingcutepic-line-icon"
            alt=""
            src="/community/naverCafeWeb/icontable.svg"
          />
          <div className="div29">표</div>
        </div>
      </div>
      <ContentsAndTag />
      <NaverCafeSidebar onCafeWritingButtonClick={onCafeWritingButtonClick} />
    </div>
  );
};

export default CafeWritingPost;
