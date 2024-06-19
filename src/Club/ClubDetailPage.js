import { useEffect, useState } from "react";
import axios from "../etc/utils/apis";
import ClubInfo from "./components/ClubInfo";
import { useParams } from "react-router-dom";

function ClubDetailPage() {
  const [club, setClub] = useState(null);
  const { clubId } = useParams();

  const getClubDetail = async (clubId) => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/club/detail/${clubId}`,
      });
      console.log(res.data);
      setClub(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClubDetail(clubId);
  }, [clubId]);

  return (
    <div className="ClubDetailPage">
      <ClubInfo club={club} />
    </div>
  );
}

export default ClubDetailPage;
