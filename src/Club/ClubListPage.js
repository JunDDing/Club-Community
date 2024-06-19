import { useEffect, useState } from "react";
import axios from "../etc/utils/apis";
import ClubList from "./components/ClubList";
import { useNavigate } from "react-router-dom";

function ClubListPage() {
  const navigate = useNavigate();
  const [clubList, setClubList] = useState([]);
  const [isClubMember, setIsClubMember] = useState(false);

  const getClubList = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/club/list`,
      });
      console.log(res.data);
      setClubList(res.data.clubs);
      setIsClubMember(res.data.isClubMember);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const goClubDetailPage = (clubId) => {
    navigate(`/club/detail/${clubId}`);
  };

  const goClubApplicationPage = (clubId) => {
    navigate(`/club/application/${clubId}`);
  };

  useEffect(() => {
    getClubList();
  }, []);

  return (
    <div className="ClubListPage">
      <ClubList
        clubs={clubList}
        isClubMember={isClubMember}
        onApply={goClubApplicationPage}
        onDetail={goClubDetailPage}
      />
    </div>
  );
}

export default ClubListPage;
