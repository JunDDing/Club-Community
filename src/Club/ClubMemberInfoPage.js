import { useEffect, useState } from "react";
import axios from "../etc/utils/apis";
import ClubMember from "./components/ClubMember";

function ClubMemberInfoPage() {
  const [clubMembers, setClubMembers] = useState(null);

  const getClubMemberInfo = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `http://localhost:8080/api/club-member/list`,
      });
      console.log(res.data);
      setClubMembers(res.data);
    } catch (error) {
      console.error(error);
      alert("권한이 없습니다.");
    }
  };

  const handleDelete = async (clubMemberId) => {
    await axios({
      method: "DELETE",
      url: `http://localhost:8080/api/club-member/${clubMemberId}/delete`,
    })
      .then((res) => {
        console.log(res.data);
        alert("탈퇴 되었습니다.");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClubMemberInfo();
  }, []);

  return (
    <div className="ClubMemberInfoPage">
      <ClubMember clubMembers={clubMembers} onDelete={handleDelete} />
    </div>
  );
}

export default ClubMemberInfoPage;
