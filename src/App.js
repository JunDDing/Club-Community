import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Main/MainPage";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";
import LoginHandler from "./Login/components/LoginHandler";
import AdminPage from "./Admin/AdminPage";
import AdminClubMgmtPage from "./Admin/AdminClubMgmtPage";
import ClubApplicationPage from "./Club/ClubApplicationPage";
import ApplicationClubRejectPage from "./Admin/ApplicationClubRejectPage";
import MasterClubMgmtPage from "./Club/MasterClubMgmtPage";
import ClubInfoEditPage from "./Club/ClubInfoEditPage";
import ClubMemberInfoPage from "./Club/ClubMemberInfoPage";
import ClubMemberApplicationPage from "./Club/ClubMemberApplicationPage";
import ClubListPage from "./Club/ClubListPage";
import ClubDetailPage from "./Club/ClubDetailPage";
import ClubApplyPage from "./Club/ClubApplyPage";

function App() {
  const links = [
    { path: "", element: <MainPage /> },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/api/callback",
      element: <LoginHandler />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/admin/application/club/list",
      element: <AdminClubMgmtPage />,
    },
    {
      path: "/club/application",
      element: <ClubApplicationPage />,
    },
    {
      path: "/admin/application/club/reject/:applicationId",
      element: <ApplicationClubRejectPage />,
    },
    {
      path: "/master/club/info",
      element: <MasterClubMgmtPage />,
    },
    {
      path: "/master/club/info/edit",
      element: <ClubInfoEditPage />,
    },
    {
      path: "/master/club/info/member",
      element: <ClubMemberInfoPage />,
    },
    {
      path: "/master/club/info/application",
      element: <ClubMemberApplicationPage />,
    },
    {
      path: "/club/list",
      element: <ClubListPage />,
    },
    {
      path: "/club/detail/:clubId",
      element: <ClubDetailPage />,
    },
    {
      path: "/club/application/:clubId", // 일반 회원 동아리 가입 신청
      element: <ClubApplyPage />,
    },
  ];

  const linkPage = () => {
    return links.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={route.element} />
      );
    });
  };

  return (
    <BrowserRouter>
      <Routes>{linkPage()}</Routes>
    </BrowserRouter>
  );
}

export default App;
