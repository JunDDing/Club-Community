const ClubMember = ({ clubMembers, onDelete }) => {
  const getGenderLabel = (gender) => {
    switch (gender) {
      case "MALE":
        return "남성";
      case "FEMALE":
        return "여성";
      default:
        return gender;
    }
  };
  return (
    <div className="club-member-table">
      <h2>동아리 회원 목록</h2>
      <table border="1">
        <thead>
          <tr>
            <th>이메일</th>
            <th>이름</th>
            <th>성별</th>
            <th>학과</th>
            <th>전화번호</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {(clubMembers || []).map((member) => (
            <tr key={member.clubMemberId}>
              <td>{member.email}</td>
              <td>{member.name}</td>
              <td>{getGenderLabel(member.gender)}</td>
              <td>{member.department}</td>
              <td>{member.phoneNumber}</td>
              <td>
                {
                  <button onClick={() => onDelete(member.clubMemberId)}>
                    탈퇴
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubMember;
