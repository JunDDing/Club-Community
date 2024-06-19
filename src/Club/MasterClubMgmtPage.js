import { useEffect, useState } from "react";
import ClubInfo from "./components/ClubInfo";
import axios from "../etc/utils/apis";
import { useNavigate } from "react-router-dom";

function ClubInfoPage() {
  const navigate = useNavigate();
  const [club, setClub] = useState(null);

  const getClubInfo = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/club/dashboard`,
      });
      console.log(res.data);
      setClub(res.data);
    } catch (error) {
      console.error(error);
      alert("권한이 없습니다.");
    }
  };

  const goClubInfoEditPage = () => {
    navigate("/master/club/info/edit");
  };
  const goClubMemberInfoPage = () => {
    navigate("/master/club/info/member");
  };
  const goClubMemberApplicationPage = () => {
    navigate("/master/club/info/application");
  };

  useEffect(() => {
    getClubInfo();
  }, []);

  return (
    <div className="ClubInfoPage">
      <ClubInfo club={club} />
      <button onClick={goClubInfoEditPage}>수정</button>
      <button onClick={goClubMemberInfoPage}>동아리 회원 조회</button>
      <button onClick={goClubMemberApplicationPage}>
        동아리 가입 신청 조회
      </button>
    </div>
  );
}

export default ClubInfoPage;
