// import React from 'react';
// import PropTypes from 'prop-types';
// import './BandoPostList.css';

// const BandoPostList = ({ className = "", posts }) => {
//   return (
//     <div className={`bandopostlist ${className}`}>
//       <div className="bandopostlistframe">
//         {posts.map((post, index) => (
//           <div className="bandopostframe" key={index}>
//             <div className="bandouser">
//               <div className="bandodiv5">{post.date}</div>
//               <b className="bandob3">{post.user}</b>
//               <img
//                 className="bandouserimagebox-icon"
//                 alt=""
//                 src="/community/BandoWeb/bandouserimagebox@2x.png"
//               />
//               <div className="bandousernamebox" />
//             </div>
//             <div className="bandopost">
//               <div className="bandopostbackground" />
//               <div className="bandotitlebox1" />
//               <div className="bandotextbox" />
//               <b className="bandob4">{post.title}</b>
//               <div className="bandodiv6">
//                 <p className="bandop222">{post.content}</p>
//               </div>
//               <img
//                 className="bandobodyimage-icon"
//                 alt=""
//                 src="/community/BandoWeb/bandobodyimage@2x.png"
//               />
//               <img
//                 className="bandomingcutemore-2-fill-icon"
//                 alt=""
//                 src="/community/BandoWeb/mingcutemore2fill.svg"
//               />
//               <div className="bandopostunderbar" />
//               <div className="bandocommentlistbox" />
//               <div className="bandodiv7">댓글 2</div>
//               <div className="bandocommentviewbutton" />
//               <img
//                 className="bandosolaralt-arrow-up-line-duoton-icon"
//                 alt=""
//                 src="/community/BandoWeb/solaraltarrowuplineduotone.svg"
//               />
//               <img
//                 className="bandofa-solideye-icon"
//                 alt=""
//                 src="/community/BandoWeb/fasolideye.svg"
//               />
//               <div className="bandoviewcountbox" />
//               <div className="bandodiv8">29</div>
//             </div>
//             <div className="bandolikesharebar">
//               <div className="bandolikesharebarbg" />
//               <img
//                 className="bandoakar-iconsheart"
//                 alt=""
//                 src="/community/BandoWeb/akariconsheart.svg"
//               />
//               <div className="bandodiv9">좋아요</div>
//               <div className="bandodiv10">공유하기</div>
//               <img
//                 className="bandoicon-parkshare"
//                 alt=""
//                 src="/community/BandoWeb/iconparkshare.svg"
//               />
//             </div>
//           </div>
//         ))}
//         <div className="bandousercomment">
//           <div className="bandocommentcontainer" />
//           <img
//             className="bandousercomment-child"
//             alt=""
//             src="/community/BandoWeb/mushroom.png"
//           />
//           <b className="bandob5">노루궁뎅이버섯</b>
//           <div className="bandocommentuserbox" />
//           <div className="bandocommentbodybox" />
//           <div className="bandopostingtimebox" />
//           <div className="bandodiv11">저두요</div>
//           <div className="bandodiv12">2024.05.30 • 🙂 표정짓기</div>
//         </div>
//         <div className="bandousercomment">
//           <div className="bandocommentcontainer" />
//           <img
//             className="bandousercomment-child"
//             alt=""
//             src="/community/BandoWeb/ellipse-2@2x.png"
//           />
//           <b className="bandob5">마라탕후루</b>
//           <div className="bandocommentuserbox" />
//           <div className="bandocommentbodybox" />
//           <div className="bandopostingtimebox" />
//           <div className="bandodiv11">탕탕 후루후루 탕탕 탕 후루루루루</div>
//           <div className="bandodiv12">2024.05.30 • 🙂 표정짓기</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// BandoPostList.propTypes = {
//   className: PropTypes.string,
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default BandoPostList;


import React from 'react';
import PropTypes from 'prop-types';
import './BandoPostList.css';

const BandoPostList = ({ className = "", posts }) => {
  return (
    <div className={`bandopostlist ${className}`}>
      <div className="bandopostlistframe">
        {posts.map((post, index) => (
          <div className="bandopostframe" key={index}>
            <div className="bandouser">
              <div className="bandodiv5">{post.date}</div>
              <b className="bandob3">{post.user}</b>
              <img
                className="bandouserimagebox-icon"
                alt=""
                src="/community/BandoWeb/bandouserimagebox@2x.png"
              />
              <div className="bandousernamebox" />
            </div>
            <div className="bandopost">
              <div className="bandopostbackground" />
              <div className="bandotitlebox1" />
              <div className="bandotextbox" />
              <b className="bandob4">{post.title}</b>
              <div className="bandodiv6">
                <p className="bandop222">{post.content}</p>
              </div>
              {post.imageUrl && (
                <img
                  className="bandobodyimage-icon"
                  alt=""
                  src={post.imageUrl}
                />
              )}
              <img
                className="bandomingcutemore-2-fill-icon"
                alt=""
                src="/community/BandoWeb/mingcutemore2fill.svg"
              />
              <div className="bandopostunderbar" />
              <div className="bandocommentlistbox" />
              <div className="bandodiv7">댓글 2</div>
              <div className="bandocommentviewbutton" />
              <img
                className="bandosolaralt-arrow-up-line-duoton-icon"
                alt=""
                src="/community/BandoWeb/solaraltarrowuplineduotone.svg"
              />
              <img
                className="bandofa-solideye-icon"
                alt=""
                src="/community/BandoWeb/fasolideye.svg"
              />
              <div className="bandoviewcountbox" />
              <div className="bandodiv8">29</div>
            </div>
            <div className="bandolikesharebar">
              <div className="bandolikesharebarbg" />
              <img
                className="bandoakar-iconsheart"
                alt=""
                src="/community/BandoWeb/akariconsheart.svg"
              />
              <div className="bandodiv9">좋아요</div>
              <div className="bandodiv10">공유하기</div>
              <img
                className="bandoicon-parkshare"
                alt=""
                src="/community/BandoWeb/iconparkshare.svg"
              />
            </div>
          </div>
        ))}
        <div className="bandousercomment">
          <div className="bandocommentcontainer" />
          <img
            className="bandousercomment-child"
            alt=""
            src="/community/BandoWeb/mushroom.png"
          />
          <b className="bandob5">노루궁뎅이버섯</b>
          <div className="bandocommentuserbox" />
          <div className="bandocommentbodybox" />
          <div className="bandopostingtimebox" />
          <div className="bandodiv11">저두요</div>
          <div className="bandodiv12">2024.05.30 • 🙂 표정짓기</div>
        </div>
        <div className="bandousercomment">
          <div className="bandocommentcontainer" />
          <img
            className="bandousercomment-child"
            alt=""
            src="/community/BandoWeb/ellipse-2@2x.png"
          />
          <b className="bandob5">마라탕후루</b>
          <div className="bandocommentuserbox" />
          <div className="bandocommentbodybox" />
          <div className="bandopostingtimebox" />
          <div className="bandodiv11">탕탕 후루후루 탕탕 탕 후루루루루</div>
          <div className="bandodiv12">2024.05.30 • 🙂 표정짓기</div>
        </div>
      </div>
    </div>
  );
};

BandoPostList.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BandoPostList;
