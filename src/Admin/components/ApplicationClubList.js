import "../css/ApplicationClubList.css";

const ApplicationClubList = ({ data, onApprove, onReject }) => {
  const getStatusLabel = (status) => {
    switch (status) {
      case "PENDING":
        return "검토";
      case "ACCEPT":
        return "승인";
      case "REJECT":
        return "거절";
      default:
        return status;
    }
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>동아리 이름</th>
          <th>신청자 이름</th>
          <th>지도교수 이름</th>
          <th>지도교수 전공</th>
          <th>지도교수 연락처</th>
          <th>신청 현황</th>
          <th className="reject-reason">거절 사유</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        {data.map((clubApplication) => (
          <tr key={clubApplication.id}>
            <td>{clubApplication.name}</td>
            <td>{clubApplication.applierName}</td>
            <td>{clubApplication.professor.prof_name}</td>
            <td>{clubApplication.professor.prof_department}</td>
            <td>{clubApplication.professor.prof_phone_number}</td>
            <td>{getStatusLabel(clubApplication.applyStatus)}</td>
            <td>{clubApplication.rejectReason || "N/A"}</td>
            <td>
              {clubApplication.applyStatus === "PENDING" && (
                <>
                  <button onClick={() => onApprove(clubApplication.id)}>
                    승인
                  </button>
                  <button onClick={() => onReject(clubApplication.id)}>
                    거절
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicationClubList;
