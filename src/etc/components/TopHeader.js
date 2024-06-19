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

  const goClubApplicationPage = () => {
    navigate("/club/application");
  };

  return (
    <div className="TopHeader">
      <header>
        <button onClick={goAdminPage}>관리자 메뉴</button>
        <button onClick={goClubApplicationPage}>동아리 신청</button>
        <button onClick={goLoginPage}>로그인</button>
      </header>
    </div>
  );
}

export default TopHeader;
