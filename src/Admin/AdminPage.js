// import TextEditor from "../CKEditor/TextEditor";
import "./css/AdminPage.css";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  const goApplicationClubListPage = () => {
    navigate("/admin/application/club/list");
  };

  return (
    <div className="AdminPage">
      <div className="admin-page">관리자 페이지</div>
      <div className="admin-page-btn">
        <button
          className="club-application-list-btn"
          onClick={goApplicationClubListPage}
        >
          동아리 신청 목록 조회
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
