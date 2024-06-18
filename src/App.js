import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Main/MainPage";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";
import LoginHandler from "./Login/components/LoginHandler";
import AdminPage from "./Admin/AdminPage";
import AdminClubMgmtPage from "./Admin/AdminClubMgmtPage";
import ClubApplicationPage from "./Club/ClubApplicationPage";

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
