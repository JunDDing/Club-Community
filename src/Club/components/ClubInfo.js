const ClubInfo = ({ club }) => {
  if (!club || !club.master) {
    return <p>Loading...</p>;
  }

  return (
    <div className="club-info">
      <h1>{club.clubName}</h1>
      {club.imgPath ? (
        <img
          src={`${process.env.PUBLIC_URL}/file/${club.imgPath
            .split("/")
            .pop()
            .split("\\")
            .pop()}`}
          alt={`${club.clubName} 이미지`}
          style={{ width: "400px" }}
        />
      ) : (
        <p>이미지 없음</p>
      )}
      <p>
        <strong>소개:</strong> {club.introduction}
      </p>
      <p>
        <strong>모임 시간:</strong> {club.meetingTime}
      </p>
      <p>
        <strong>가입 신청서:</strong> {club.applicationName ?? "없음"}
      </p>
      <h2>동아리장</h2>
      <p>
        <strong>이름:</strong> {club.master.name}
      </p>
      <p>
        <strong>학번:</strong> {club.master.studentCode}
      </p>
      <p>
        <strong>전화번호:</strong> {club.master.phoneNumber}
      </p>

      <h2>부동아리장</h2>
      <p>
        <strong>이름:</strong> {club.subMaster?.name ?? "없음"}
      </p>
      <p>
        <strong>학번:</strong> {club.subMaster?.studentCode ?? "없음"}
      </p>
      <p>
        <strong>전화번호:</strong> {club.subMaster?.phoneNumber ?? "없음"}
      </p>
      <h2>총무</h2>
      <p>
        <strong>이름:</strong> {club.affair?.name ?? "없음"}
      </p>
      <p>
        <strong>학번:</strong> {club.affair?.studentCode ?? "없음"}
      </p>
      <p>
        <strong>전화번호:</strong> {club.affair?.phoneNumber ?? "없음"}
      </p>
    </div>
  );
};

export default ClubInfo;
