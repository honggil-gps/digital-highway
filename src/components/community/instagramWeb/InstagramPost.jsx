import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InstagramPost.css";

const InstagramPost = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/community/instagramWeb/postpage");
  }, [navigate]);

  return (
    <div className={`instagrampost ${className}`}>
      <img
        className="instagrampost-child"
        alt=""
        src="/community/instagramWeb/rectangle-11@2x.png"
      />
      <div className="instagrampost-item" />
      <div className="instagrampost-inner" />
      <div className="postidframe">
        <img
          className="postidframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-2@2x.png"
        />
        <img
          className="iconamoonmenu-kebab-horizonta"
          alt=""
          src="/community/instagramWeb/iconamoonmenukebabhorizontal.svg"
        />
        <div className="posttitleframe">
          <b className="digital-highway2">Digital_highway</b>
        </div>
        <div className="div6">13시간</div>
      </div>
      <img
        className="heartandcommenticon"
        alt=""
        src="/community/instagramWeb/heartandcommenticon.svg"
      />
      <div className="digital-highway3">Digital_highway</div>
      <div className="orion-world2">
        오리온(@orion_world) 포카칩 스윗치즈맛이 8년 만에 재출시를
        확정했습니다.🧀 2014년 첫 선을 보인 포카칩 스윗치즈맛은 감자의 담백한
        맛에 치즈의 향이 어우러져 출시 당시 많은 이들의 사랑을 받은 바... 
      </div>
      <div className="div7" onClick={onTextClick}>
        댓글 24개 모두 보기
      </div>
      <input className="input2" placeholder="댓글 달기..." type="text" />
      <div className="likegroup">
        <div className="div8">좋아요</div>
        <div className="div9">999</div>
        <div className="div10">개</div>
      </div>
    </div>
  );
};

InstagramPost.propTypes = {
  className: PropTypes.string,
};

export default InstagramPost;
