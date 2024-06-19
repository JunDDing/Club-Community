const ClubMemberApplication = ({
  applications,
  onDownload,
  onApprove,
  onReject,
}) => {
  return (
    <div className="application-table">
      <h2>가입 신청 목록</h2>
      <table border="1">
        <thead>
          <tr>
            <th>신청자 이름</th>
            <th>전화번호</th>
            <th>학과</th>
            <th>신청서</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {(applications || []).map((application) => (
            <tr key={application.applicationId}>
              <td>{application.applierName}</td>
              <td>{application.applierPhoneNumber}</td>
              <td>{application.applierDepartment}</td>
              <td
                onClick={() =>
                  onDownload(application.applicationId, application.fileName)
                }
              >
                {application.fileName}
              </td>
              <td>
                <button onClick={() => onApprove(application.applicationId)}>
                  승인
                </button>
                <button onClick={() => onReject(application.applicationId)}>
                  거절
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubMemberApplication;
