import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./information.css";
import Pagination from '../../components/Pagination'; // Pagination 컴포넌트를 임포트

export default function Career() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7; // 한 페이지에 표시할 게시글 수

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:4000/informations/career');
        setPosts(response.data); // 서버에서 받아온 데이터를 상태로 설정
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);

  // 페이지 변경 함수
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 표시할 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // currentPosts 변수 선언

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className='column1'>제목</th>
            <th className='column2'>언론사</th>
            <th className='column3'>작성일</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(post => (
            <tr key={post._id}>
              <td className='post-title'><a className='link' href={post.link}>{post.title}</a></td>
              <td className='post-press'>{post.press}</td>
              <td className='post-date'>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}
