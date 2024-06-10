import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Main/MainPage";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";

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
