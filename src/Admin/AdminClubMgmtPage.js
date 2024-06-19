import axios from "../etc/utils/apis.js";
import { useEffect, useState } from "react";
import ApplicationClubList from "./components/ApplicationClubList";
import { useNavigate } from "react-router-dom";

// 시스템 관리자 동아리 관리 페이지
function AdminClubMgmtPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // 등록 신청한 동아리 리스트

  // 등록 신청한 동아리 조회
  const getApplicationClubList = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/application/club/list`,
      });
      setData(res.data);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleApprove = async (applicationId) => {
    await axios({
      method: "PUT",
      url: `http://localhost:8080/api/application/club/${applicationId}/approve`,
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

  const goRejectPage = (applicationId) => {
    navigate(`/admin/application/club/reject/${applicationId}`);
  };

  useEffect(() => {
    getApplicationClubList();
  }, []);

  return (
    <div className="AdminClubMgmtPage">
      <div className="admin-mgmt-container">
        <h2>동아리 신청 목록</h2>
        {data.length > 0 ? (
          <ApplicationClubList
            data={data}
            onApprove={handleApprove}
            onReject={goRejectPage}
          />
        ) : (
          <h2>신청한 동아리가 없거나 권한이 없습니다.</h2>
        )}
      </div>
    </div>
  );
}

export default AdminClubMgmtPage;
