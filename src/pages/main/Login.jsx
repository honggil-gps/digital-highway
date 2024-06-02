import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userID: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onLoginButtonClick = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:4000/login", formData, {withCredentials:true});
      if (response.status === 200) {
        alert("로그인 성공");
        navigate("/home", { state: { username: formData.userID }});
      }
      console.log(formData)
    } catch (error) {
      alert(error.response.data);
    }
  }, [formData, navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
    }, [navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="mainpage-login">
      <footer className="mainpage-loginfooter">
        <div className="mainpage-copyright7">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="mainpage-footermenutext7">
          <div className="mainpage-div80">고객센터</div>
          <div className="mainpage-div81">저작권 보호정책</div>
          <div className="mainpage-div82">개인정보처리방침</div>
          <div className="mainpage-div83">제휴제안</div>
          <div className="mainpage-div84">오시는길</div>
          <div className="mainpage-div85">이용약관</div>
        </div>
        <div className="mainpage-title9">디지털지름길</div>
        <img className="mainpage-logo-icon7" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="mainpage-loginmain">
        <button className="mainpage-loginbutton" onClick={onLoginButtonClick}>
          <div className="mainpage-div86">로그인</div>
        </button>
        <button className="mainpage-find">아이디·비밀번호 찾기</button>
        <input
        className="mainpage-pwinput pw-box1"
        placeholder="비밀번호"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        className="mainpage-idinput id-box1"
        placeholder="아이디"
        type="text"
        name="userID"
        value={formData.userID}
        onChange={handleChange}
      />
        <div className="mainpage-div87">로그인</div>
      </main>
      <header className="mainpage-loginheader">
        <div className="mainpage-headertitle4" onClick={onLogoContainerClick}>
          <img
            className="mainpage-headertitleimage-icon6"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="mainpage-div89">디지털지름길</div>
        </div>
        <button className="mainpage-headerbackbutton7" onClick={onHeaderBackButtonClick}>
          <div className="mainpage-div90">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default Login;
