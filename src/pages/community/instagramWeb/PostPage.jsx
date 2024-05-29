import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PostContents from "../../../components/community/instagramWeb/PostContents";
import CommentComponent from "../../../components/community/instagramWeb/CommentComponent";
import "./PostPage.css";

const PostPage = () => {
  const navigate = useNavigate();

  const onPhxBoldIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="postpage">
      <img
        className="postimageframe-icon1"
        alt=""
        src="/community/instagramWeb/postimageframe@2x.png"
      />
      <div className="rightarea">
        <div className="idframe">
          <img
            className="idframe-child"
            alt=""
            src="/community/instagramWeb/ellipse-2@2x.png"
          />
          <b className="eyesmag">eyesmag</b>
          <img
            className="phx-bold-icon"
            alt=""
            src="/community/instagramWeb/phxbold.svg"
            onClick={onPhxBoldIconClick}
          />
        </div>
        <div className="postandcomment">
          <PostContents
            postContentsWidth="29.375rem"
            postContentsHeight="11.75rem"
            postContentsPosition="absolute"
            postContentsTop="1rem"
            postContentsLeft="1rem"
            orionWorldTop="0.313rem"
            orionWorldLeft="7.875rem"
            orionWorldWidth="21.5rem"
            orionWorldHeight="10.375rem"
            ellipseIconTop="0rem"
            ellipseIconLeft="0rem"
            ellipseIconWidth="2rem"
            ellipseIconHeight="2rem"
            eyesmagTop="0.313rem"
            eyesmagLeft="3rem"
            eyesmagWidth="4.625rem"
          />
          <CommentComponent />
          <CommentComponent propTop="15.5rem" propOverflow="hidden" />
          <CommentComponent propTop="18.25rem" propOverflow="hidden" />
          <CommentComponent propTop="21rem" propOverflow="hidden" />
          <CommentComponent propTop="23.75rem" propOverflow="hidden" />
          <CommentComponent propTop="26.5rem" propOverflow="hidden" />
          <CommentComponent propTop="29.25rem" propOverflow="hidden" />
          <CommentComponent propTop="32rem" propOverflow="hidden" />
          <CommentComponent propTop="34.75rem" propOverflow="hidden" />
          <CommentComponent propTop="37.5rem" propOverflow="hidden" />
          <CommentComponent propTop="40.25rem" propOverflow="hidden" />
          <CommentComponent propTop="43rem" propOverflow="hidden" />
          <CommentComponent propTop="45.75rem" propOverflow="unset" />
        </div>
        <div className="postpagecommentframe">
          <div className="emojiarea">
            <img
              className="tablermood-smile-icon"
              alt=""
              src="/community/instagramWeb/tablermoodsmile.svg"
            />
          </div>
          <div className="commentgroup">
            <div className="commentgroup-child" />
            <input className="input1" placeholder="댓글 달기..." type="text" />
          </div>
          <button className="commentwritebutton">
            <div className="commentwritebutton-child" />
            <b className="b3">게시</b>
          </button>
        </div>
        <div className="heartviewfreame">
          <div className="postpageheartframe">
            <button className="postpageheart">
              <img
                className="tablermood-smile-icon"
                alt=""
                src="/community/instagramWeb/phheart.svg"
              />
              <div className="postpageheart-child" />
            </button>
            <button className="postpagecomment">
              <img
                className="iconamooncomment-light"
                alt=""
                src="/community/instagramWeb/iconamooncommentlight.svg"
              />
              <div className="postpageheart-child" />
            </button>
            <button className="postpageshare">
              <img
                className="tablermood-smile-icon"
                alt=""
                src="/community/instagramWeb/f7paperplane.svg"
              />
              <div className="postpageheart-child" />
            </button>
          </div>
          <div className="postpagelikeframe">
            <b className="b4">좋아요</b>
            <b className="b5">999</b>
            <b className="b6">개</b>
          </div>
          <div className="div4">시간</div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
