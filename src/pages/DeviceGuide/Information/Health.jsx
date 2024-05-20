import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./information.css"

export default function Health() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:4000/informations/health');
        setPosts(response.data); // 서버에서 받아온 데이터를 상태로 설정
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className='column1'>제목</th>
            <th className='column2'>담당부서</th>
            <th className='column3'>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post._id}>
              <td className='post-title'><a className='link' href={post.link}>{post.title}</a></td>
              <td className='post-department'>{post.department}</td>
              <td className='post-date'>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}