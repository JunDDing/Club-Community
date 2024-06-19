const ClubList = ({ clubs, isClubMember, onApply, onDetail }) => {
  return (
    <div className="club-list-table">
      <h2>동아리 목록</h2>
      <table border="1">
        <thead>
          <tr>
            <th>동아리 이름</th>
            <th style={{ width: "800px" }}>동아리 소개</th>
            <th>동아리 회장</th>
            <th>가입 신청서</th>
            <th>가입/조회</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club) => (
            <tr key={club.clubId}>
              <td>{club.clubName}</td>
              <td>{club.clubIntroduction}</td>
              <td>{club.clubMasterName}</td>
              <td>{club.hasApplicationForm ? "있음" : "없음"}</td>
              <td>
                {isClubMember === false && (
                  <button onClick={() => onApply(club.clubId)}>가입</button>
                )}
                <button onClick={() => onDetail(club.clubId)}>조회</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubList;
