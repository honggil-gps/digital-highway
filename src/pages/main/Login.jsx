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
        navigate("/home");
      }
      console.log(formData)
    } catch (error) {
      alert(error.response.data);
    }
  }, [formData, navigate]);

  const onHeaderBackButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="login">
      <footer className="loginfooter">
        <div className="copyright7">
          COPYRIGHT ©2024 디지털스마트부산아카데미.ALL RIGHTS RESERVED.
        </div>
        <div className="footermenutext7">
          <div className="div80">고객센터</div>
          <div className="div81">저작권 보호정책</div>
          <div className="div82">개인정보처리방침</div>
          <div className="div83">제휴제안</div>
          <div className="div84">오시는길</div>
          <div className="div85">이용약관</div>
        </div>
        <div className="title9">디지털지름길</div>
        <img className="logo-icon7" alt="" src="main/logo@2x.png" />
      </footer>
      <main className="loginmain">
        <button className="loginbutton" onClick={onLoginButtonClick}>
          <div className="div86">로그인</div>
        </button>
        <button className="find">아이디·비밀번호 찾기</button>
        <input
        className="pwinput pw-box1"
        placeholder="비밀번호"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        className="idinput id-box1"
        placeholder="아이디"
        type="text"
        name="userID"
        value={formData.userID}
        onChange={handleChange}
      />
        <div className="div87">로그인</div>
      </main>
      <header className="loginheader">
        <div className="headertitle4">
          <img
            className="headertitleimage-icon6"
            alt=""
            src="main/image-1@2x.png"
          />
          <div className="div89">디지털지름길</div>
        </div>
        <button className="headerbackbutton7" onClick={onHeaderBackButtonClick}>
          <div className="div90">뒤로가기</div>
        </button>
      </header>
    </div>
  );
};

export default Login;
