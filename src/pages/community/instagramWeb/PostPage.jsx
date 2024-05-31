import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CommentComponent from "../../../../src/components/community/instagramWeb/CommentComponent";
import "./PostPage.css";

const PostPage = () => {
  const navigate = useNavigate();

  const onPhxBoldIconClick = useCallback(() => {
    navigate("/community/instagramWeb/");
  }, [navigate]);

  return (
    <div className="outsta-postpage">
      <img
        className="outsta-postimageframe-icon"
        alt=""
        src="/community/instagramWeb/postimageframe@2x.png"
      />
      <div className="outsta-rightarea">
        <div className="outsta-idframe">
          <img
            className="outsta-idframe-child"
            alt=""
            src="/community/instagramWeb/PostPagePicCircle.png"
          />
          <b className="outsta-eyesmag1">eyesmag</b>
          <img
            className="outsta-phx-bold-icon"
            alt=""
            src="/community/instagramWeb/phxbold.svg"
            onClick={onPhxBoldIconClick}
          />
        </div>
        <div className="outsta-postandcomment">
          <div className="outsta-postcontentscomponent">
            <div className="outsta-orion-world1">{`오리온(@orion_world) 포카칩 스윗치즈맛이 8년 만에 재출시를 확정했습니다.🧀 2014년 첫 선을 보인 포카칩 스윗치즈맛은 감자의 담백한 맛에 치즈의 향이 어우러져 출시 당시 많은 이들의 사랑을 받은 바 있는데요. 2016년 제품 라인업 재정비로 판매를 종료했으나 `}</div>
            <img
              className="outsta-postcontentscomponent-child"
              alt=""
              src="/community/instagramWeb/ellipse-21@2x.png"
            />
            <div className="outsta-eyesmag2">eyesmag</div>
          </div>
          <CommentComponent />
          <CommentComponent propTop="16rem" />
          <CommentComponent propTop="18.75rem" />
          <CommentComponent propTop="21.5rem" />
          <CommentComponent propTop="24.25rem" />
          <CommentComponent propTop="27rem" />
          <CommentComponent propTop="29.75rem" />
          <CommentComponent propTop="32.5rem" />
          <CommentComponent propTop="35.25rem" />
          <CommentComponent propTop="38rem" />
          <CommentComponent propTop="40.75rem" />
          <CommentComponent propTop="43.5rem" />
          <CommentComponent propTop="46.25rem" />
        </div>
        <div className="outsta-postpagecommentframe">
          <div className="outsta-emojiarea">
            <img
              className="outsta-tablermood-smile-icon"
              alt=""
              src="/community/instagramWeb/tablermoodsmile.svg"
            />
          </div>
          <div className="outsta-commentgroup">
            <div className="outsta-commentgroup-child" />
            <input className="input" placeholder="댓글 달기..." type="text" />
          </div>
          <button className="outsta-commentwritebutton">
            <div className="outsta-commentwritebutton-child" />
            <b className="outsta-b">게시</b>
          </button>
        </div>
        <div className="outsta-heartviewfreame">
          <img
            className="outsta-postpageheartframe-icon"
            alt=""
            src="/community/instagramWeb/postpageheartframe.svg"
          />
          <div className="outsta-postpagelikeframe">
            <b className="outsta-b1">좋아요</b>
            <b className="outsta-b2">999</b>
            <b className="outsta-b3">개</b>
            <div className="outsta-div">시간</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
