import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import MainHeader from "../../components/main/MainHeader"
import MainFooter from "../../components/main/MainFooter";

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

  const onFindIdClick = useCallback(() => {
    navigate("/findIdPage");
  }, [navigate]);

  return (
    <div className="mainpage-login">
      <main className="mainpage-loginmain">
        <button className="mainpage-loginbutton" onClick={onLoginButtonClick}>
          <div className="mainpage-div86">로그인</div>
        </button>
        <button className="mainpage-find" onClick={onFindIdClick}>아이디·비밀번호 찾기</button>
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
      <MainHeader />
      <MainFooter />
    </div>
  );
};

export default Login;
