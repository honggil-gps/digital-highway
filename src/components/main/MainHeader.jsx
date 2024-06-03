import { useNavigate } from "react-router-dom";
import "./MainHeader.css";
import { useCallback, useState, useEffect } from "react";
import axios from 'axios'

const MainHeader = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    async function getUsername(){
      try{
        const response = await axios.get('http://localhost:4000/community/myPage',{withCredentials:true});
        setUser(props.user);
        console.log(user)
      }catch(error){
        setUser(null)
      }
    }
    getUsername();
  },[props.user]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="mainpage-homeheader">
        {user && (<button
          className="mainpage-headermyinfobutton5"
          onClick={onHeaderMyinfoButtonClick}
        >
          <div className="mainpage-div116">내 정보</div>
        </button>)}
        <div className="mainpage-headertitle6">
          <img
            className="mainpage-headertitleimage-icon8"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div117">디지털지름길</div>
        </div>
        <button className="mainpage-headerbackbutton9" onClick={onHeaderBackButtonClick}>
          <div className="mainpage-div118">뒤로가기</div>
        </button>
      </header>
  )
}

export default MainHeader;