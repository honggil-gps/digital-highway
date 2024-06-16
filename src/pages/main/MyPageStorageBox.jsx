import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useChatBot} from "../../context/ChatBotContext";  //ChatBot Context
import ChatBot from "../../components/ChatBot";           //ChatBot Component
import MainHeader from "../../components/main/MainHeader";
import MainFooter from "../../components/main/MainFooter";
import "./MyPageStorageBox.css";
import axios from 'axios'

const MyPageStorageBox = () => {
  const navigate = useNavigate();
  const {isChatBotActive, activateChatBot, chatBotStyle} = useChatBot(); // Chatbot functions
  const [marks, setMarks] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const onMyPageMenuButton3Click = useCallback(() => {
    navigate("/mypageguidelist");
  }, [navigate]);

  const onMyPageMenuButton1Click = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onStartButtonClick = () => {
    console.log('Start button clicked');
    try {
      activateChatBot();
    } catch (error) {
      console.error('Error activating ChatBot:', error);
    }
  };
  //작성한 글, 댓글 클릭하면 커뮤니티 글로 다시 넘어가게 하려고 했는데.. iframe안에서 안보여서 일단 주석처리요..
  // const onPostClick = useCallback((id)=> {
  //   navigate("/community/naverCafeWeb/cafepostview", { state: { id } })
  // },[navigate]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:4000/myPage/data',{withCredentials:true});  
        setMarks(response.data.mark); // 서버에서 받아온 데이터를 상태로 설정
        setPosts(response.data.posts);
        setComments(response.data.comments);
        console.log(response.data.comments)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();
  }, []);

  return (
    <div className="mainpage-mypagestoragebox">
      <main className="mainpage-storageboxmain">
        <div className="mainpage-storageboxmaincontentset">
          <div className="mainpage-storageboxmaincontent2">
            <div className="mainpage-storageboxmaincontent2info2">
              <div className="mainpage-storageboxmaincontent2box2">
              {comments && comments.map((list,index)=>(
                  <div className="mainpage-storageboxmaincontent2box2a" key={index} /*onClick={()=>{onPostClick(list.post)}}*/>
                  <b className="mainpage-b36">{list.postTitle}</b>
                  <div className="mainpage-b33">{list.commentContent}</div>
                  <div className="mainpage-div139">작성일자: {list.createdAt.slice(0,10)}</div>
                </div>
              ))}
              </div>
              <div className="mainpage-div141">작성한 댓글</div>
            </div>
            <div className="mainpage-storageboxmaincontent2info1">
              <div className="mainpage-storageboxmaincontent2box1">
              {posts && posts.map((list,index)=>(
                  <div className="mainpage-div1" key={index} /*onClick={()=>{onPostClick(list._id)}}*/>
                    <b className="mainpage-b3">{list.title}</b>
                    <div className="mainpage-div14">{list.mainText}</div>
                  </div>
              ))}
                {/* <div className="mainpage-div142">글을 작성해 보세요!</div> */}
              </div>
              <div className="mainpage-div143">작성한 글</div>
            </div>
            <div className="mainpage-storageboxmaincontent2title">
              <div className="mainpage-div144">네이버카페 / 인스타그램 / 밴드</div>
              <div className="mainpage-div145">커뮤니티</div>
            </div>
          </div>
          <div className="mainpage-storageboxmaincontent1">
          <div className="mainpage-storageboxmaincontent1info">
              {marks.bookmarks && marks.bookmarks.map((list,index)=>(
                  <div className="mainpage-div146" key={index}>
                    <b className="mainpage-b38">{list.category}</b>
                    <div className="mainpage-div147"><a className="mainpage-link" href={list.link}>{list.title}</a></div>
                  </div>
                
              ))}
              </div>
            <div className="mainpage-storageboxmaincontent1title">
              <div className="mainpage-div148">스크랩한 글 모음입니다</div>
              <div className="mainpage-div149">정보제공</div>
            </div>
          </div>
        </div>
        <div className="mainpage-scrollbackground" />
        <div className="mainpage-storageboxmainbuttonset">
          <button
            className="mainpage-mypagemenubutton31"
            onClick={onMyPageMenuButton3Click}
          >
            <div className="mainpage-div150">진행 중인 가이드</div>
          </button>
          <button className="mainpage-mypagemenubutton21">
            <div className="mainpage-div151">보관함</div>
          </button>
          <button
            className="mainpage-mypagemenubutton11"
            onClick={onMyPageMenuButton1Click}
          >
            <div className="mainpage-div152">나의 정보</div>
          </button>
        </div>
      </main>
      <section className="mainpage-chatbot8">
        <div className="mainpage-box-icon8"/>
        <div className="mainpage-intro9">
          <span className="mainpage-intro-txt8">
            <p className="mainpage-p24">어려운 단어가 있으신가요?</p>
            <p className="mainpage-p24">이제 제가 도와드릴게요</p>
          </span>
        </div>
        <div className="mainpage-start8" onClick={onStartButtonClick}>
          <div className="mainpage-start-child5">
            <div className="mainpage-div162">시작하기</div>
          </div>
        </div>
        <img className="mainpage-character-icon8" alt="" src="main/no_jaggle.png" />
        {isChatBotActive && (<div className="mainpage-chatbot-container"><ChatBot /></div>)}
      </section>
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default MyPageStorageBox;
