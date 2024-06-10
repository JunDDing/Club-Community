import "./css/LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const goRegisterPage = () => {
    navigate("/signup");
  };

  const onClickLogin = () => {};

  return (
    <div className="LoginPage">
      <div className="Container">
        <div className="page-description">로그인 페이지</div>
        <div className="input-box">
          <label className="labelId">ID</label>
          <input className="inputId" value={inputId} onChange={handleInputId} />
        </div>
        <div className="input-box">
          <label className="labelPw">PW</label>
          <input
            className="inputPw"
            value={inputPw}
            type="password"
            onChange={handleInputPw}
          />
        </div>
        <div className="login-btn-box">
          <button className="LoginBtn" onClick={onClickLogin}>
            로그인
          </button>
          <button className="goRegisterPageBtn" onClick={goRegisterPage}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
