import "./css/RegisterPage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    birth: "",
    gender: "MALE",
    department: "컴퓨터소프트웨어공학과",
    code: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickRegister = async () => {
    await axios({
      method: "POST",
      url: `http://localhost:8080/api/member/signup`,
      data: inputs,
    })
      .then((res) => {
        console.log(res);
        alert("회원가입 성공");
        navigate("/");
      })
      .catch((error) => {
        console.error("회원가입 에러 " + error);
        alert("회원가입 실패");
      });
  };

  return (
    <div className="RegisterPage">
      <div className="register-page-container">
        <div className="page-description">회원가입 페이지</div>
        <div className="input-box">
          <label className="labelEmail">이메일</label>
          <input
            type="email"
            name="email"
            className="inputEmail"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelPw">비밀번호</label>
          <input
            type="password"
            name="password"
            className="inputPw"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelName">이름</label>
          <input
            type="text"
            name="name"
            className="inputName"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelBirth">생년월일</label>
          <input
            type="date"
            name="birth"
            className="inputBirth"
            value={inputs.birth}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelGender">성별</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="MALE"
              defaultChecked
              onChange={handleChange}
              className="inputGender"
            />
            남
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              onChange={handleChange}
              className="inputGender"
            />
            여
          </label>
        </div>
        <div className="input-box">
          <label className="labelDepartment">학과</label>
          <select
            name="department"
            value={inputs.department}
            className="inputDepartment"
            onChange={handleChange}
          >
            <option defaultChecked value="컴퓨터소프트웨어공학과">
              컴퓨터소프트웨어공학과
            </option>
            <option value="컴퓨터공학과">컴퓨터공학과</option>
            <option value="전자공학과">전자공학과</option>
            <option value="기계공학과">기계공학과</option>
            <option value="화학공학과">화학공학과</option>
            <option value="신소재공학과">신소재공학과</option>
          </select>
        </div>
        <div className="input-box">
          <label className="labelCode">학번</label>
          <input
            type="text"
            name="code"
            minLength="8"
            maxLength="8"
            className="inputCode"
            value={inputs.code}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelTel">전화번호</label>
          <input
            type="tel"
            name="phoneNumber"
            className="inputTel"
            value={inputs.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="btn-box">
          <button className="RegisterBtn" onClick={onClickRegister}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
