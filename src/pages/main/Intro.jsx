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
    <div className="intro" onClick={onIntroContainerClick}>
      <footer className="footer">
        <div className="copyright">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext">
          <div className="div">고객센터</div>
          <div className="div1">저작권 보호정책</div>
          <div className="div2">개인정보처리방침</div>
          <div className="div3">제휴제안</div>
          <div className="div4">오시는길</div>
          <div className="div5">이용약관</div>
        </div>
        <div className="title">디지털지름길</div>
        <img className="logo-icon" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="mindmap" onClick={onMindmapClick}>
        <img className="mindmap-child" alt="" src="main/vector-3.svg" />
        <img className="mindmap-item" alt="" src="main/vector-4.svg" />
        <div className="wrapper">
          <b className="b">디지털</b>
        </div>
        <div className="container">
          <b className="b">인공지능</b>
        </div>
        <div className="frame">
          <b className="b">서비스</b>
        </div>
        <div className="frame-div">
          <b className="b">시스템</b>
        </div>
        <div className="wrapper1">
          <b className="b">기업</b>
        </div>
        <div className="wrapper2">
          <b className="b">상태</b>
        </div>
        <div className="wrapper3">
          <b className="b">사회</b>
        </div>
        <div className="wrapper4">
          <b className="b">고객</b>
        </div>
        <div className="wrapper5">
          <b className="b">전략</b>
        </div>
        <div className="wrapper6">
          <b className="b">지능</b>
        </div>
        <div className="wrapper7">
          <b className="b">대표</b>
        </div>
        <div className="wrapper8">
          <b className="b">분석</b>
        </div>
        <div className="wrapper9">
          <b className="b">사업</b>
        </div>
        <div className="wrapper10">
          <b className="b">기능</b>
        </div>
        <div className="wrapper11">
          <b className="b">성장</b>
        </div>
        <div className="wrapper12">
          <b className="b">환경</b>
        </div>
        <div className="wrapper13">
          <b className="b">투자</b>
        </div>
        <div className="wrapper14">
          <b className="b">지원</b>
        </div>
        <div className="wrapper15">
          <b className="b">운영</b>
        </div>
        <div className="wrapper16">
          <b className="b">강화</b>
        </div>
        <div className="wrapper17">
          <b className="b">ai</b>
        </div>
        <div className="wrapper18">
          <b className="b">경험</b>
        </div>
        <div className="wrapper19">
          <b className="b">치과</b>
        </div>
        <div className="wrapper20">
          <b className="b">교육</b>
        </div>
        <div className="wrapper21">
          <b className="b">글로벌</b>
        </div>
        <div className="wrapper22">
          <b className="b">산업</b>
        </div>
        <div className="wrapper23">
          <b className="b">정보</b>
        </div>
        <div className="wrapper24">
          <b className="b">치료</b>
        </div>
        <div className="wrapper25">
          <b className="b">계획</b>
        </div>
        <div className="wrapper26">
          <b className="b">연구</b>
        </div>
        <div className="wrapper27">
          <b className="b">시장</b>
        </div>
      </main>
      <TypingEffect />
      <header className="header">
        <div className="headertitle">
          <img className="headertitleimage-icon" alt="" src="main/image-1@2x.png" />
          <div className="div6">디지털지름길</div>
        </div>
      </header>
    </div>
  );
};

export default Intro;
