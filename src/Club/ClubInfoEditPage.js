import "./css/ClubInfoEditPage.css";
import { useNavigate } from "react-router-dom";
import axios from "../etc/utils/apis";
import { useState } from "react";

function ClubInfoEditPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    clubName: "",
    introduction: "",
    history: "",
    meetingTime: "",
    subMasterEmail: "",
    affairEmail: "",
  });

  const [picture, setPicture] = useState(null);
  const [applicationFile, setApplicationFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleApplicationFileChange = (e) => {
    setApplicationFile(e.target.files[0]);
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
    if (picture) {
      formData.append("mainPicture", picture);
    }
    if (applicationFile) {
      formData.append("applicationFile", applicationFile);
    }

    try {
      const res = await axios({
        method: "PUT",
        url: `http://localhost:8080/api/club/update`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      alert("수정 되었습니다.");
      navigate("/master/club/info");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ClubInfoEditPage">
      <div className="club-info-edit-container">
        <div className="page-description">동아리 정보 수정</div>
        <div className="input-box">
          <label className="labelClubName">동아리 이름</label>
          <input
            type="text"
            name="clubName"
            className="inputClubName"
            value={inputs.clubName}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelIntroduction">소개</label>
          <input
            type="text"
            name="introduction"
            className="inputIntroduction"
            value={inputs.introduction}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelHistory">연혁</label>
          <input
            type="text"
            name="history"
            className="inputHistory"
            value={inputs.history}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelMeetingTime">정기모임 시간</label>
          <input
            type="text"
            name="meetingTime"
            className="inputMeetingTime"
            value={inputs.meetingTime}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelSubMasterEmail">부회장 이메일</label>
          <input
            type="email"
            name="subMasterEmail"
            className="inputSubMasterEmail"
            value={inputs.subMasterEmail}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelAffairEmail">총무 이메일</label>
          <input
            type="email"
            name="affairEmail"
            className="inputAffairEmail"
            value={inputs.affairEmail}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label className="labelMainPicture">사진</label>
          <input
            type="file"
            name="mainPicture"
            onChange={handlePictureChange}
          />
        </div>
        <div className="input-box">
          <label className="labelApplicationFile">가입 신청서</label>
          <input
            type="file"
            name="applicationFile"
            onChange={handleApplicationFileChange}
            placeholder="필수 아님"
          />
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

export default ClubInfoEditPage;
