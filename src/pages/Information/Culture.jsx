import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./information.css";
import Pagination from '../../components/Pagination'; // Pagination 컴포넌트를 임포트

export default function Culture() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7; // 한 페이지에 표시할 게시글 수
  const [markedPosts, setMarkedPosts] = useState({});

  const handleImageClick = async(postId) => {
    console.log(postId)

    //즐겨찾기 시 색칠된 이미지로 바꿈
    setMarkedPosts(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));

    try{
      const category = '문화';
      await axios.put("http://localhost:4000/informations/bookmark",{postId, category},{withCredentials:true});
      console.log('marking')
    }catch(err){
      console.error(err)
    }


  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:4000/informations/culture');
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
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr className='column-container'>
            <th className='column1'>제목</th>
            <th className='column2'>담당부서</th>
            <th className='column3'>작성일</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(post => (
            <tr className='post-container' key={post._id}>
              <td><img className="post-nomark"src={markedPosts[post._id] ? "../../../public/main/mark.png":"../../../public/main/nomark.png"} alt="" onClick={()=> handleImageClick(post._id)}/></td>
              <td className='post-title'><a className='link' href={post.link}>{post.title}</a></td>
              <td className='post-department'>{post.department}</td>
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
