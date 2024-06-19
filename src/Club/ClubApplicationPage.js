import { useState } from "react";
import "./css/ClubApplicationPage.css";
import axios from "../etc/utils/apis";
import { useNavigate } from "react-router-dom";

function ClubApplicationPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    clubType: "CENTRAL",
    professor: {
      prof_name: "",
      prof_department: "",
      prof_phone_number: "",
    },
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("prof_")) {
      setInputs((prevInputs) => ({
        ...prevInputs,
        professor: {
          ...prevInputs.professor,
          [name]: value,
        },
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onClickSubmit = async () => {
    const formData = new FormData();

    // JSON 데이터를 Blob으로 변환하여 FormData에 추가
    const jsonInputs = JSON.stringify(inputs);
    formData.append(
      "data",
      new Blob([jsonInputs], { type: "application/json" })
    );

    // 파일이 있는 경우에만 FormData에 추가
    if (file) {
      formData.append("mainPicture", file);
    }

    try {
      const res = await axios({
        method: "POST",
        url: `http://localhost:8080/api/application/club/create`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      alert("신청되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ClubApplicationPage">
      <div className="club-application-container">
        <div className="page-description">동아리 신청</div>
        <div className="input-box">
          <label className="labelName">동아리 이름</label>
          <input
            type="text"
            name="name"
            className="inputName"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelClubType">동아리 종류</label>
          <label>
            <input
              type="radio"
              name="clubType"
              value="CENTRAL"
              defaultChecked
              onChange={handleChange}
              className="inputClubType"
            />
            중앙
          </label>
          <label>
            <input
              type="radio"
              name="clubType"
              value="DEPARTMENT"
              onChange={handleChange}
              className="inputClubType"
            />
            학과
          </label>
        </div>
        <div className="input-box">
          <label className="labelProfName">지도교수 이름</label>
          <input
            type="text"
            name="prof_name"
            className="inputProfName"
            value={inputs.professor.prof_name}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelProfDepartment">지도교수 학과</label>
          <input
            type="text"
            name="prof_department"
            className="inputProfDepartment"
            value={inputs.professor.prof_department}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelProfPhoneNumber">지도교수 전화번호</label>
          <input
            type="text"
            name="prof_phone_number"
            className="inputProfPhoneNumber"
            value={inputs.professor.prof_phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelProfPhoneNumber">파일</label>
          <input type="file" name="mainPicture" onChange={handleFileChange} />
        </div>
        <div className="btn-box">
          <button className="submit-btn" onClick={onClickSubmit}>
            신청
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClubApplicationPage;
