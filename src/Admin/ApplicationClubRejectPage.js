import "./css/ApplicationClubRejectPage.css";
import TextEditor from "../CKEditor/TextEditor";
import axios from "../etc/utils/apis";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ApplicationClubRejectPage() {
  const navigate = useNavigate();
  const { applicationId } = useParams();
  const [editorData, setEditorData] = useState("");

  const handleReject = async (applicationId) => {
    await axios({
      method: "PUT",
      url: `http://localhost:8080/api/application/club/${applicationId}/reject`,
      data: {
        reason: editorData, // TextEditor에서 입력받은 데이터 사용
      },
    })
      .then((res) => {
        console.log(res.data);
        alert("거절되었습니다.");
        navigate("/admin/application/club/list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="ApplicationClubRejectPage">
      <div>
        <h1 className="reject-reason-heading">거절 사유 작성</h1>
        <TextEditor onChange={setEditorData} />
        <button className="submit" onClick={() => handleReject(applicationId)}>
          제출
        </button>
      </div>
    </div>
  );
}

export default ApplicationClubRejectPage;
