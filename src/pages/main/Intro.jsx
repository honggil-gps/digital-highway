import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypingEffect from "../../components/TypingEffect";
import "./Intro.css";

const Intro = () => {
  const navigate = useNavigate();

  const onIntroContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMindmapClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="mainpage-intro" onClick={onIntroContainerClick}>
      <footer className="mainpage-footer">
        <div className="mainpage-copyright">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="mainpage-footermenutext">
          <div className="mainpage-div">고객센터</div>
          <div className="mainpage-div1">저작권 보호정책</div>
          <div className="mainpage-div2">개인정보처리방침</div>
          <div className="mainpage-div3">제휴제안</div>
          <div className="mainpage-div4">오시는길</div>
          <div className="mainpage-div5">이용약관</div>
        </div>
        <div className="mainpage-title">디지털지름길</div>
        <img className="mainpage-logo-icon" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="mainpage-mindmap" onClick={onMindmapClick}>
        <img className="mainpage-mindmap-child" alt="" src="main/vector-3.svg" />
        <img className="mainpage-mindmap-item" alt="" src="main/vector-4.svg" />
        <div className="mainpage-wrapper">
          <b className="mainpage-b">디지털</b>
        </div>
        <div className="mainpage-container">
          <b className="mainpage-b">인공지능</b>
        </div>
        <div className="mainpage-frame">
          <b className="mainpage-b">서비스</b>
        </div>
        <div className="mainpage-frame-div">
          <b className="mainpage-b">시스템</b>
        </div>
        <div className="mainpage-wrapper1">
          <b className="mainpage-b">기업</b>
        </div>
        <div className="mainpage-wrapper2">
          <b className="mainpage-b">상태</b>
        </div>
        <div className="mainpage-wrapper3">
          <b className="mainpage-b">사회</b>
        </div>
        <div className="mainpage-wrapper4">
          <b className="mainpage-b">고객</b>
        </div>
        <div className="mainpage-wrapper5">
          <b className="mainpage-b">전략</b>
        </div>
        <div className="mainpage-wrapper6">
          <b className="mainpage-b">지능</b>
        </div>
        <div className="mainpage-wrapper7">
          <b className="mainpage-b">대표</b>
        </div>
        <div className="mainpage-wrapper8">
          <b className="mainpage-b">분석</b>
        </div>
        <div className="mainpage-wrapper9">
          <b className="mainpage-b">사업</b>
        </div>
        <div className="mainpage-wrapper10">
          <b className="mainpage-b">기능</b>
        </div>
        <div className="mainpage-wrapper11">
          <b className="mainpage-b">성장</b>
        </div>
        <div className="mainpage-wrapper12">
          <b className="mainpage-b">환경</b>
        </div>
        <div className="mainpage-wrapper13">
          <b className="mainpage-b">투자</b>
        </div>
        <div className="mainpage-wrapper14">
          <b className="mainpage-b">지원</b>
        </div>
        <div className="mainpage-wrapper15">
          <b className="mainpage-b">운영</b>
        </div>
        <div className="mainpage-wrapper16">
          <b className="mainpage-b">강화</b>
        </div>
        <div className="mainpage-wrapper17">
          <b className="mainpage-b">ai</b>
        </div>
        <div className="mainpage-wrapper18">
          <b className="mainpage-b">경험</b>
        </div>
        <div className="mainpage-wrapper19">
          <b className="mainpage-b">치과</b>
        </div>
        <div className="mainpage-wrapper20">
          <b className="mainpage-b">교육</b>
        </div>
        <div className="mainpage-wrapper21">
          <b className="mainpage-b">글로벌</b>
        </div>
        <div className="mainpage-wrapper22">
          <b className="mainpage-b">산업</b>
        </div>
        <div className="mainpage-wrapper23">
          <b className="mainpage-b">정보</b>
        </div>
        <div className="mainpage-wrapper24">
          <b className="mainpage-b">치료</b>
        </div>
        <div className="mainpage-wrapper25">
          <b className="mainpage-b">계획</b>
        </div>
        <div className="mainpage-wrapper26">
          <b className="mainpage-b">연구</b>
        </div>
        <div className="mainpage-wrapper27">
          <b className="mainpage-b">시장</b>
        </div>
      </main>
      <TypingEffect />
      <header className="mainpage-header">
        <div className="mainpage-headertitle">
          <img className="mainpage-headertitleimage-icon" alt="" src="main/image-1@2x.png" />
          <div className="mainpage-div6">디지털지름길</div>
        </div>
      </header>
    </div>
  );
};

export default Intro;
