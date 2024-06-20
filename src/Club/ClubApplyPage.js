import "./css/ClubApplyPage.css";
import { useEffect, useState } from "react";
import axios from "../etc/utils/apis";
import { useNavigate, useParams } from "react-router-dom";

// 일반 회원 동아리 가입 신청
function ClubApplyPage() {
  const navigate = useNavigate();
  const { clubId } = useParams();

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onClickSubmit = async () => {
    const formData = new FormData();

    // 파일이 있는 경우에만 FormData에 추가
    if (file) {
      formData.append("applicationFile", file);
    }

    try {
      const res = await axios({
        method: "POST",
        url: `http://localhost:8080/api/application/club-member/create/${clubId}`,
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

  const getFileName = async (clubId) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/club/detail/${clubId}`,
      });
      console.log(res.data);
      setFileName(res.data.applicationName);
    } catch (error) {
      console.error(error);
      alert("파일이 존재하지 않습니다.");
    }
  };

  const downloadApplication = async (clubId, fileName) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/club/applicationFile/${clubId}`,
        responseType: "blob", // Blob 형식으로 응답 받기
      });

      // Blob 객체 생성
      const blob = new Blob([res.data], { type: res.headers["content-type"] });
      const url = window.URL.createObjectURL(blob);

      // 링크 생성 및 클릭하여 다운로드
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); // 파일 이름 설정
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
      alert("파일이 존재하지 않습니다.");
    }
  };

  useEffect(() => {
    getFileName(clubId);
  }, [clubId]);

  return (
    <div className="ClubApplyPage">
      <div className="club-application-container">
        <div className="page-description">동아리 신청</div>
        <div className="input-box">
          <label className="labelName">이름</label>
          <input type="text" name="name" className="inputName" />
        </div>
        <div className="input-box">
          <label className="labelName">학과</label>
          <input type="text" name="department" className="inputName" />
        </div>
        <div className="input-box">
          <label className="labelName">학번</label>
          <input type="text" name="code" className="inputName" />
        </div>
        <div className="input-box">
          <label className="labelApplication">가입 신청서</label>
          <input
            type="file"
            name="applicationFile"
            onChange={handleFileChange}
          />
          <button onClick={() => downloadApplication(clubId, fileName)}>
            가입 신청서 다운로드
          </button>
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

export default ClubApplyPage;
