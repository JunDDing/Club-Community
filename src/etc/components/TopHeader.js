import { useNavigate } from "react-router-dom";
import "../css/TopHeader.css";

function TopHeader() {
  const navigate = useNavigate();

  const goLoginPage = () => {
    navigate("/login");
  };

  const goAdminPage = () => {
    navigate("/admin");
  };

  const goMasterClubInfoPage = () => {
    navigate("/master/club/info");
  };

  const goClubApplicationPage = () => {
    navigate("/club/application");
  };

  return (
    <div className="TopHeader">
      <header>
        {sessionStorage.getItem("isAdmin") === "true" && (
          <button onClick={goAdminPage}>시스템 관리자 메뉴</button>
        )}
        {/* 마스터 회원(동아리 회장)만 가능 */}
        <button onClick={goMasterClubInfoPage}>동아리 관리</button>
        <button onClick={goClubApplicationPage}>동아리 신청</button>
        <button onClick={goLoginPage}>로그인</button>
      </header>
    </div>
  );
}

export default TopHeader;
