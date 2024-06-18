import axios from "axios";
import { useEffect } from "react";

// 시스템 관리자 동아리 관리 페이지
function AdminClubMgmtPage() {
  const getApplicationClubList = async () => {
    await axios({
      method: "GET",
      url: `http://localhost:8080/api/application/club/list`,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getApplicationClubList();
  }, []);

  return (
    <div className="AdminClubMgmtPage">
      <div className="cont">신청 동아리 목록</div>
    </div>
  );
}

export default AdminClubMgmtPage;
