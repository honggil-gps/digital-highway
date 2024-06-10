import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation, useNavigate } from "react-router-dom";
import BandoMain from "./pages/community/BandoWeb/BandoMain";
import BandoPostPage from "./components/community/BandoWeb/BandoPostPage";

function AppCommunityBando() {
  const action = useNavigationType();
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const [posts, setPosts] = useState([
    {
      id: 1, // ID 추가
      date: "2024-05-31",
      title: "디지털지름길 소속 신규 프로그램 안내",
      content: 
      "[디지털스마트부산 아카데미 제5기 부경대 AI 프로젝트 훈련과정 모집]\n\n" +
      "1. 교육분야 : AI 프로젝트 과정 640시간 집중 교육훈련\n\n" +
      "* AI딥러닝 기반 데이터사이언스 실무 프로젝트\n\n" +
      "2. 제5기 교육훈련 기간\n\n" +
      "● 이론및실무 : 2024.07.05(금)~08.30(금) 09:00 ~ 18:00 [8주] 8시간/1일 320시간 (비대면)\n" +
      "● 프로젝트 : 2024.09.02(월)~12.27(금) 오전반 : 08:30 ~ 12:30 , 오후반 : 14:00 ~ 18:00 [16주] 4시간/1일 320시간 (대면)\n\n" +
      "3. 교육 대상 : 재학생(휴학생 포함) / 졸업생 / 일반인, 자립준비청년\n\n" +
      "4. 모집기간 : 2024. 05. 01(수) ~ 07. 04(목),  홈페이지 인터넷 접수\n\n" +
      "5. 수강신청 : 구글폼( https://forms.gle/eqxF15Lj5oLEPiTx5 ) 통해 신청\n\n" +
      "● 최대 12학점 인정 (2024년도 1학기 자선 6학점, 여름계절학기 6학점, 일부학과 전선 3학점 or 6학점)\n" +
      "● 6개월 교육훈련 후 1개월 취업 집중 상담\n" +
      "● 교육생 교육지원금 월 10만원, 상해보험 가입, 노트북, 교재 및 소프트웨어 지원, 해커톤 지원, 알고리즘 집중 특강 지원, 재학생 현장실습 지원, 졸업생 공공기관 인턴십 지원, 최종 프로젝트기업 멘토링지원 등\n\n" +
      "6. 교육장소 : 국립부경대학교 대연캠퍼스 창의관 첨단교육장\n\n" +
      "7. 문의 : 사업단 전화번호 051-629-7445\n",
      user: "디지털지름길_관리자",
      image: null, // 이미지 URL 필드 추가
    }
  ]);

  const [comments, setComments] = useState({
    1: [
      { user: "디지털마스터", content: "좋은 정보 감사합니다", date: "2024-05-30" },
      { user: "달달팽이", content: "공유할께요!", date: "2024-05-30" },
    ]
  });

  const addPost = (title, content, image) => {
    const newPost = {
      id: posts.length + 1, // 새로운 ID 생성
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      user: "새 유저",  // 예시로 유저명 추가
      image, // 이미지 URL 추가
    };
    setPosts([newPost, ...posts]);
    setComments({ ...comments, [newPost.id]: [] }); // 새로운 포스트에 대한 빈 댓글 목록 추가
    navigate("/community/bandoWeb/");
  };

  const addComment = (postId, newComment) => {
    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), newComment]
    });
  };

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/community/bandoWeb/':
        title = 'Bando Main';
        metaDescription = 'Welcome to the Bando Main Page';
        break;
      case '/community/bandoWeb/postpage':
        title = 'Bando Post Page';
        metaDescription = 'Create a new post on Bando';
        break;
      default:
        console.warn('Unknown path:', pathname);
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/community/bandoWeb/" element={<BandoMain posts={posts} comments={comments} addComment={addComment} />} />
      <Route path="/community/bandoWeb/postpage" element={<BandoPostPage addPost={addPost} />} />
    </Routes>
  );
}

export default AppCommunityBando;