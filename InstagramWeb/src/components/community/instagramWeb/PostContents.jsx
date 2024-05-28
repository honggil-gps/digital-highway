import { useMemo } from "react";
import "./PostContents.css";
import PropTypes from 'prop-types';

const PostContents = ({
  className = "",
  postContentsWidth,
  postContentsHeight,
  postContentsPosition,
  postContentsTop,
  postContentsLeft,
  orionWorldTop,
  orionWorldLeft,
  orionWorldWidth,
  orionWorldHeight,
  ellipseIconTop,
  ellipseIconLeft,
  ellipseIconWidth,
  ellipseIconHeight,
  eyesmagTop,
  eyesmagLeft,
  eyesmagWidth,
}) => {
  const postContentsStyle = useMemo(() => {
    return {
      width: postContentsWidth,
      height: postContentsHeight,
      position: postContentsPosition,
      top: postContentsTop,
      left: postContentsLeft,
    };
  }, [
    postContentsWidth,
    postContentsHeight,
    postContentsPosition,
    postContentsTop,
    postContentsLeft,
  ]);

  const orionWorldStyle = useMemo(() => {
    return {
      top: orionWorldTop,
      left: orionWorldLeft,
      width: orionWorldWidth,
      height: orionWorldHeight,
    };
  }, [orionWorldTop, orionWorldLeft, orionWorldWidth, orionWorldHeight]);

  const ellipseIconStyle = useMemo(() => {
    return {
      top: ellipseIconTop,
      left: ellipseIconLeft,
      width: ellipseIconWidth,
      height: ellipseIconHeight,
    };
  }, [ellipseIconTop, ellipseIconLeft, ellipseIconWidth, ellipseIconHeight]);

  const eyesmagStyle = useMemo(() => {
    return {
      top: eyesmagTop,
      left: eyesmagLeft,
      width: eyesmagWidth,
    };
  }, [eyesmagTop, eyesmagLeft, eyesmagWidth]);

  return (
    <div className={`postcontents ${className}`} style={postContentsStyle}>
      <div className="orion-world" style={orionWorldStyle}>
        오리온(@orion_world) 포카칩 스윗치즈맛이 8년 만에 재출시를
        확정했습니다.🧀 2014년 첫 선을 보인 포카칩 스윗치즈맛은 감자의 담백한
        맛에 치즈의 향이 어우러져 출시 당시 많은 이들의 사랑을 받은 바 있는데요.
        2016년 제품 라인업 재정비로 판매를 종료했으나 꾸준한 소비자들의 재출시
        요청에 따라 다시금 출시된 것.👏🏻 새롭게 돌아오는 제품은 본래 맛과 식감을
        재현하면서도 치즈의 풍미를 업그레이드했다고 합니다. 📸 오리온
      </div>
      <img
        className="postcontents-child"
        alt=""
        src="/community/instagramWeb/ellipse-21@2x.png"
        style={ellipseIconStyle}
      />
      <div className="eyesmag1" style={eyesmagStyle}>
        eyesmag
      </div>
    </div>
  );
};

PostContents.propTypes = {
  className: PropTypes.string,

  /** Style props */
  postContentsWidth: PropTypes.any,
  postContentsHeight: PropTypes.any,
  postContentsPosition: PropTypes.any,
  postContentsTop: PropTypes.any,
  postContentsLeft: PropTypes.any,
  orionWorldTop: PropTypes.any,
  orionWorldLeft: PropTypes.any,
  orionWorldWidth: PropTypes.any,
  orionWorldHeight: PropTypes.any,
  ellipseIconTop: PropTypes.any,
  ellipseIconLeft: PropTypes.any,
  ellipseIconWidth: PropTypes.any,
  ellipseIconHeight: PropTypes.any,
  eyesmagTop: PropTypes.any,
  eyesmagLeft: PropTypes.any,
  eyesmagWidth: PropTypes.any,
};

export default PostContents;
