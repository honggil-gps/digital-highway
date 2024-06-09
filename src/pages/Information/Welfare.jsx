import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./information.css";
import Pagination from "../../components/Pagination";

export default function Welfare() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7; // 한 페이지에 표시할 게시글 수
  const [markedPosts, setMarkedPosts] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:4000/informations/welfare');
        setPosts(response.data); // 서버에서 받아온 데이터를 상태로 설정
        const res = await axios.get('http://localhost:4000/myPage/data', { withCredentials: true });
        setBookmarks(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);


  //즐겨찾기함수
  const handleImageClick = async (postId) => {
    console.log(postId);

    // 이미 마크되어 있는 경우 해제하고, 아닌 경우 마크함
    const updatedMarkedPosts = { ...markedPosts };
    updatedMarkedPosts[postId] = !markedPosts[postId];
    setMarkedPosts(updatedMarkedPosts);

    try {
      const category = '복지';
      const response = await axios.put("http://localhost:4000/informations/bookmark", { postId, category }, { withCredentials: true });
      console.log('marking');
      
    } catch (err) {
      console.error(err);
    }
  };

  // 페이지 변경 함수
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 표시할 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //이미 즐겨찾기 되어있는지 확인
  const isBookmarked = (post) => {
    return bookmarks.bookmarks && bookmarks.bookmarks.some(bookmark => bookmark.title === post.title);
  };

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr className='column-container'>
          {bookmarks && (<th className='column'></th>)}
            <th className='column1'>제목</th>
            <th className='column2'>담당부서</th>
            <th className='column3'>지원주기</th>
            <th className='column4'>제공유형</th>
            <th className='column5'>문의처</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(post => (
            <tr className='post-container' key={post._id}>
              {bookmarks && (<td>
                <img 
                  className="post-nomark"
                  src={markedPosts[post._id] || isBookmarked(post) ? "/main/mark.png" : "/main/nomark.png"} 
                  alt="" 
                  onClick={() => handleImageClick(post._id)}
                />
              </td>)}
              <td className='post-title'><a className='link' href={post.link}>{post.title}</a></td>
              <td className='post-department'>{post.department.split(' ')[0]}</td> 
              {/* post.department를 split(' ')를 통해 스페이스바를 기준으로 나누고, 만들어진 배열의 첫 번째[0] 를 표시하도록 함 */}
              <td className='post-support'>{post.support}</td>
              <td className='post-service'>{post.service}</td>
              <td className='post-tel'>{post.tel}</td>
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