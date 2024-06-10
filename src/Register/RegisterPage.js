import "./css/RegisterPage.css";
import { useState } from "react";

function RegisterPage() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTel, setInputTel] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputTel = (e) => {
    setInputTel(e.target.value);
  };

  return (
    <div className="RegisterPage">
      <div className="Container">
        <div className="page-description">회원가입 페이지</div>
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
        <div className="input-box">
          <label className="labelEmail">이메일</label>
          <input
            className="inputEmail"
            value={inputEmail}
            onChange={handleInputEmail}
          />
        </div>
        <div className="input-box">
          <label className="labelTel">전화번호</label>
          <input
            className="inputTel"
            value={inputTel}
            onChange={handleInputTel}
          />
        </div>
        <div className="btn-box">
          <button className="RegisterBtn">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
