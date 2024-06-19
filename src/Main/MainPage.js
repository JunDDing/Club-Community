import "./css/MainPage.css";
import TopHeader from "../etc/components/TopHeader";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  const goClubListPage = () => {
    navigate("/club/list");
  };
  return (
    <div className="MainPage">
      <TopHeader />
      <div className="Header">
        <button onClick={goClubListPage} className="club-search">
          동아리 조회
        </button>
        <button className="club-event">동아리 행사</button>
        <button className="club-video">동영상</button>
        <button className="club-photo">사진</button>
      </div>
      <div className="club-noticeboard">
        <div className="club-event-notice-box">
          동아리 행사공지
          <div className="club-event-notice">박스</div>
        </div>
        <div className="club-recruit-board-box">
          부원 모집 게시판
          <div className="club-recruit-board">박스</div>
        </div>
      </div>
      <div className="activity-photos">
        <span className="activity-photos-text">활동사진(최신순)</span>
        <div className="activity-photos-box">
          <img
            className="activity-photo"
            alt="활동사진1"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
          <img
            className="activity-photo"
            alt="활동사진2"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
          <img
            className="activity-photo"
            alt="활동사진3"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
        </div>
      </div>
      <div className="activity-videos">
        <span className="activity-videos-text">활동영상(최신순)</span>
        <div className="activity-videos-box">
          <img
            className="activity-video"
            alt="활동영상1"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
          <img
            className="activity-video"
            alt="활동영상2"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
          <img
            className="activity-video"
            alt="활동영상3"
            src={process.env.PUBLIC_URL + "/logo192.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
