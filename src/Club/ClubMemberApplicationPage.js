import { useEffect, useState } from "react";
import axios from "../etc/utils/apis";
import ClubMemberApplication from "./components/ClubMemberApplication";

function ClubMemberApplicationPage() {
  const [applications, setApplications] = useState(null);

  const getClubMemberApplication = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/application/club-member/list`,
      });
      console.log(res.data);
      setApplications(res.data);
    } catch (error) {
      console.error(error);
      alert("권한이 없습니다.");
    }
  };

  const handleDownload = async (applicationId, fileName) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/application/club-member/file/${applicationId}`,
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
    }
  };

  const handleApprove = async (applicationId) => {
    await axios({
      method: "PUT",
      url: `http://localhost:8080/api/application/club-member/${applicationId}/approve`,
    })
      .then((res) => {
        console.log(res.data);
        alert("승인되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReject = async (applicationId) => {
    await axios({
      method: "PUT",
      url: `http://localhost:8080/api/application/club-member/${applicationId}/reject`,
    })
      .then((res) => {
        console.log(res.data);
        alert("거절되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClubMemberApplication();
  }, []);

  return (
    <div className="ClubMemberApplicationPage">
      <ClubMemberApplication
        applications={applications}
        onDownload={handleDownload}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}

export default ClubMemberApplicationPage;
