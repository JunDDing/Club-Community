import "./css/LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./utils/OAuth.js";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const goRegisterPage = () => {
    navigate("/register");
  };

  const onClickLogin = async () => {
    await axios({
      method: "POST",
      url: `http://localhost:8080/api/member/login`,
      data: {
        email: inputEmail,
        password: inputPw,
      },
    })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("isAdmin", res.data.isAdmin);
        alert("로그인 성공");
        navigate("/");
      })
      .catch((error) => {
        console.error("로그인 에러 " + error);
        alert("로그인 실패");
      });
  };

  return (
    <div className="LoginPage">
      <div className="Container">
        <div className="page-description">로그인 페이지</div>
        <div className="input-box">
          <label className="labelEmail">이메일</label>
          <input
            type="email"
            className="inputEmail"
            value={inputEmail}
            onChange={handleInputEmail}
          />
        </div>
        <div className="input-box">
          <label className="labelPw">비밀번호</label>
          <input
            type="password"
            className="inputPw"
            value={inputPw}
            onChange={handleInputPw}
          />
        </div>
        <div className="login-btn-box">
          <button className="LoginBtn" onClick={onClickLogin}>
            로그인
          </button>
          <a href={KAKAO_AUTH_URL} className="Kakao-Login-Btn">
            <img
              src={process.env.PUBLIC_URL + "/img/kakao_login_large_wide.png"}
              alt="kakao-login"
            />
          </a>
          <button className="goRegisterPageBtn" onClick={goRegisterPage}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
